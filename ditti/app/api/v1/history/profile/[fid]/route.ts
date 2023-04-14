// app/api/v1/history/profile/[fid].ts

import { NextRequest, NextResponse } from "next/server";
import { getProfileByFid } from "./service";

export async function GET(request: NextRequest, { params }) {
  //console.log(request);
  const { fid } = params; // Updated line
  const profile = await getProfileByFid(fid);
  if (profile) {
    return NextResponse.json({ profile });
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
