// app/api/v1/history/profile/[fid].ts
import { cmsClient, warpClient } from "@/app/database";

import { NextRequest, NextResponse } from "next/server";
import { getRecentFollowerEntries, newTrackerRequest } from "./trackerService";

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

  const res = await newTrackerRequest(fid);

  return NextResponse.json({ message: `Profile with id ${fid} updated` });
}
