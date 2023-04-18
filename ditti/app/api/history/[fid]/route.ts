// app/api/v1/history/profile/[fid].ts
import { cmsClient, warpClient } from "@/app/database";

import { NextRequest, NextResponse } from "next/server";
import { getRecentFollowerEntries } from "./service";

export async function GET(request: NextRequest, { params }) {
  //console.log(request);
  const { fid } = params; // Updated line
  const res = getRecentFollowerEntries(fid);

  if (fid) {
    return NextResponse.json(fid);
  } else {
    return NextResponse.json({
      status: 404,
      error: "Not Found",
      message: "The requested resource could not be found on this server.",
    });
  }
}

export async function POST(request: NextRequest, { params }) {
  const { fid } = params;

  // get most recent profile tracker
  const { data, error } = await cmsClient
    .from("audience_trackers")
    .select("followers, following")
    .eq("fid", parseInt(fid, 10))
    .order("id", { ascending: false });

  if (error) {
    console.error("Error fetching profiles:", error);
    throw error;
  }

  const followerFetch = await warpClient.fetchUserFollowers({ fid });
  const followerFids = [];

  for await (const follower of followerFetch) {
    followerFids.push(follower.fid);
  }

  console.log("followerFetch", followerFids);
  console.log("data", data[0].followers);

  const followerChanges = compareArrays(followerFids, data[0].followers);
  console.log("differences ", followerChanges);

  // get current profile for fid
  // if different, post new profile tracker

  // get follower tracker from supabase
  // get followers and following from warpcast
  // get changes or pass
  // post changes

  return NextResponse.json({ message: `Profile with id ${fid} updated` });
}

function compareArrays(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  const added = [...set1].filter((x) => !set2.has(x));
  const removed = [...set2].filter((x) => !set1.has(x));

  return { added, removed };
}
