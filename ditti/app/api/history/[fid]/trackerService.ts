import { cmsClient, warpClient } from '@/app/database';

export async function getRecentFollowerEntries(fid: string) {
  const { data, error } = await cmsClient
    .from('follower_trackers')
    .select('id, added, removed')
    .eq('fid', parseInt(fid, 10))
    .order('id', { ascending: false });

  if (error)
    throw new Error(
      `Error fetching following tracker entries: ${error.message}`
    );

  return data;
}

export async function newTrackerRequest(fid: string) {
  const changes = await getFollowerChanges(fid);
  if (changes.added.length > 0 || changes.removed.length > 0) {
    await postNewFollowerTracker(fid, changes);
    await updateAudienceTrackerFollowLists(fid);
  }
  await createProfileTrackerEntry(fid);
}

async function getFollowerChanges(fid: string) {
  const { data, error } = await cmsClient
    .from('audience_trackers')
    .select('followers, following')
    .eq('fid', parseInt(fid, 10))
    .order('id', { ascending: false });

  if (error) throw new Error(`Error fetching profiles: ${error.message}`);

  const followerFetch = warpClient.fetchUserFollowers({ fid });
  const followerFids = [];
  for await (const follower of followerFetch) {
    followerFids.push(follower.fid);
  }

  return compareArrays(followerFids, data[0].followers);
}

function compareArrays(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  const added = [...set1].filter((x) => !set2.has(x));
  const removed = [...set2].filter((x) => !set1.has(x));

  return { added, removed };
}

async function postNewFollowerTracker(fid, changes) {
  const { data, error } = await cmsClient
    .from('follower_trackers')
    .insert([{ fid, added: changes.added, removed: changes.removed }]);

  if (error)
    throw new Error(`Could not insert new follower tracker: ${error.message}`);

  return true;
}

async function updateAudienceTrackerFollowLists(fid: string) {
  const followerFetch = warpClient.fetchUserFollowers({ fid });
  const followerFids = [];
  for await (const follower of followerFetch) {
    followerFids.push(follower.fid);
  }

  const followingFetch = warpClient.fetchUserFollowing({ fid });
  const followingFids = [];
  for await (const following of followingFetch) {
    followingFids.push(following.fid);
  }

  const { data, error } = await cmsClient
    .from('audience_trackers')
    .update([{ fid, followers: followerFids, following: followingFids }])
    .eq('fid', fid);

  if (error)
    throw new Error(
      `Error updating audience tracker follow lists: ${error.message}`
    );
}

async function createProfileTrackerEntry(fid: string) {
  const currentProfile = await warpClient.lookupUserByFid(parseInt(fid, 10));

  const lastProfile = await cmsClient
    .from('profile_trackers')
    .select(
      'username, display_name, bio, pfp_url, follower_count, following_count'
    )
    .eq('fid', fid)
    .order('id', { ascending: false })
    .limit(1);

  if (hasProfileChanged(currentProfile, lastProfile.data![0])) {
    const { data, error } = await cmsClient.from('profile_trackers').insert([
      {
        fid,
        username: currentProfile.username,
        display_name: currentProfile.displayName,
        bio: currentProfile.profile.bio.text,
        pfp_url: currentProfile.pfp.url,
        follower_count: currentProfile.followerCount,
        following_count: currentProfile.followingCount,
      },
    ]);

    if (error)
      throw new Error(`Error creating profile tracker entry: ${error.message}`);
  }
}

function hasProfileChanged(currentProfile, lastProfile) {
  return (
    lastProfile &&
    (currentProfile.username !== lastProfile.username ||
      currentProfile.displayName !== lastProfile.display_name ||
      currentProfile.profile.bio.text !== lastProfile.bio ||
      currentProfile.pfp.url !== lastProfile.pfp_url)
  );
}
