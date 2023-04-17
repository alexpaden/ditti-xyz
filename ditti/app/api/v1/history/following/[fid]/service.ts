// app/api/v1/history/following/service.ts
import { indexerClient, cmsClient } from "@/app/database";

async function* profileBatchGenerator(fids: number[], batchSize: number = 100) {
  for (let i = 0; i < fids.length; i += batchSize) {
    const batchFids = fids.slice(i, i + batchSize);
    const profiles = await getFarcasterProfilesByFids(batchFids);
    yield profiles;
  }
}

export async function getRecentChangesByFid(
  fid: string,
  recentDays: number = 7
) {
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - recentDays);
  const trackerEntries = await getFollowingTrackerEntriesByFid(fid, startDate);

  const fids: number[] = [
    ...new Set(
      trackerEntries.reduce(
        (acc, entry) => [...acc, ...entry.added, ...entry.removed],
        []
      )
    ),
  ];

  const profileLookup = {};
  const batchSize = 100;
  const profileGen = profileBatchGenerator(fids, batchSize);

  for await (const profileBatch of profileGen) {
    profileBatch.forEach((profile) => {
      profileLookup[profile.id] = profile;
    });
  }

  const packagedResults = trackerEntries.map((entry) => ({
    date: entry.created_at,
    added: entry.added.map((fid) => profileLookup[fid]),
    removed: entry.removed.map((fid) => profileLookup[fid]),
  }));

  return packagedResults;
}

export async function getFollowingTrackerEntriesByFid(fid: string) {
  const { data, error } = await cmsClient
    .from("following_trackers")
    .select("id, created_at, added, removed")
    .eq("fid", parseInt(fid, 10))
    .order("id", { ascending: true });

  if (error) {
    console.error("Error fetching following tracker entries:", error);
    throw error;
  }

  return data;
}

export async function getFarcasterProfilesByFids(fids: number[]) {
  const { data, error } = await indexerClient
    .from("profile")
    .select("id, username, avatar_url")
    .in("id", fids);

  if (error) {
    console.error("Error fetching profiles:", error);
    throw error;
  }

  return data;
}
