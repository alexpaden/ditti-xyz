import { NextRequest, NextResponse } from "next/server";
import { getRemovedFollowersByFid } from "./unfollowerService";

export async function GET(request: NextRequest, { params }) {
  //console.log(request);
  const { fid } = params; // Updated line
  const fids = await getRemovedFollowersByFid(fid);
  console.log(fids);
  if (fid) {
    return NextResponse.json({ fids });
  } else {
    return NextResponse.json({
      status: 404,
      error: "Not Found",
      message: "The requested resource could not be found on this server.",
    });
  }
}
