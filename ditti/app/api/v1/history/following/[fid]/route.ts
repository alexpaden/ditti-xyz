// app/api/v1/history/profile/[fid].ts

import { NextRequest, NextResponse } from "next/server";
import { getFarcasterProfilesByFids, getRecentChangesByFid } from "./service";

export async function GET(request: NextRequest, { params }) {
  //console.log(request);
  const { fid } = params; // Updated line
  const trackingEntries = await getRecentChangesByFid(fid);
  console.log("entries are ", trackingEntries[0]);
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

export async function PUT(request: NextRequest, { params }) {
  const { fid } = params; // Updated line
  // TODO: update profile for fid
  return NextResponse.json({ message: `Profile with id ${fid} updated` });
}
