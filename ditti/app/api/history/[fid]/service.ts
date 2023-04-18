import { indexerClient, cmsClient } from "@/app/database";

export async function getRecentFollowerEntries(fid: string) {
  const { data, error } = await cmsClient
    .from("follower_trackers")
    .select("id, added, removed")
    .eq("fid", parseInt(fid, 10))
    .order("id", { ascending: false });

  if (error) {
    console.error("Error fetching following tracker entries:", error);
    throw error;
  }

  console.log("the data is ", data);
  console.log("ffff ", data[0].added);

  // loop data data[0] and add together data[0].added and data[0].removed total length until it is 250 or greater, then stop looping and return data until that point

  return data;
}
