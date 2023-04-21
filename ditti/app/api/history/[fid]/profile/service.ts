import { cmsClient } from '@/app/database';

export async function getProfilesByFid(fid: string) {
  const { data, error } = await cmsClient
    .from('profile_trackers')
    .select(
      'id, username, display_name, bio, following_count, follower_count, pfp_url'
    )
    .eq('fid', parseInt(fid, 10))
    .order('id', { ascending: true });

  if (error) {
    console.error('Error fetching profiles:', error);
    throw error;
  }

  return data;
}
