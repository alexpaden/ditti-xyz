// app/api/v1/history/profile/service.ts
import { cmsClient } from "../../../../../../prisma/prismaClient";

export async function getProfilesByFid(fid: string) {
  const profiles = await cmsClient.profile_trackers.findMany({
    where: { fid: parseInt(fid, 10) },
    select: {
      id: true,
      username: true,
      display_name: true,
      bio: true,
      following_count: true,
      follower_count: true,
      pfp_url: true,
    },
    orderBy: {
      id: "asc", // or 'desc' for descending order
    },
  });
  return profiles;
}
