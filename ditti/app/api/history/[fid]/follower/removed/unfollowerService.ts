// app/api/v1/history/profile/service.ts
import { cmsClient, indexerClient } from "@/app/database";
import { SupabaseClient, createClient } from "@supabase/supabase-js";

export async function getRemovedFollowersByFid(fid: string) {
  const { data, error } = await cmsClient
    .from("follower_trackers")
    .select("id, fid, created_at, removed")
    .eq("fid", parseInt(fid, 10))
    .neq("removed", "[]")
    .order("id", { ascending: true });

  if (error) {
    console.error("Error fetching profiles:", error);
    throw error;
  }

  // create a set of all unique FIDs from each item.removed in data
  const uniqueFids = new Set(data.flatMap((item) => item.removed));
  const fids: number[] = [...uniqueFids];

  const profiles = await getFarcasterProfilesByFids(fids);
  const replacedRemovedFollowers = replaceFidsWithProfiles(data, profiles);

  return replacedRemovedFollowers;
}

async function getFarcasterProfilesByFids(fids: number[]) {
  console.log("uniqueFids is here ", fids);
  const indexerClient2 = createClient(
    process.env.INDEXER_DB_URL!,
    process.env.INDEXER_DB_API_KEY!
  );

  const { data, error } = await indexerClient2
    .from("profile")
    .select("*")
    .in("id", fids);

  if (error) {
    console.error("Error fetching profiles:", error);
    throw error;
  }

  return data;
}

function replaceFidsWithProfiles(removedFollowers: any[], profiles: any[]) {
  return removedFollowers.map((follower) => {
    const replacedRemoved = follower.removed.map((fid: number) => {
      const foundProfile = profiles.find((profile: any) => profile.id === fid);
      return foundProfile || fid;
    });

    return {
      ...follower,
      removed: replacedRemoved,
    };
  });
}
