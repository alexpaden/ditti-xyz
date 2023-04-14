// app/api/v1/history/profile/service.ts
import prisma from "../../../../../../prisma/prismaClient";

export async function getProfileByFid(fid: string) {
  const profile = await prisma.profile_trackers.findMany({
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
  });
  return profile;
}
