// app/api/v1/history/profile/[fid].ts

import { NextRequest, NextResponse } from "next/server";
import { getProfilesByFid } from "./service";

export async function GET(request: NextRequest, { params }) {
  //console.log(request);
  const { fid } = params; // Updated line
  const profiles = await getProfilesByFid(fid);
  if (profiles) {
    return NextResponse.json({ profiles });
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
