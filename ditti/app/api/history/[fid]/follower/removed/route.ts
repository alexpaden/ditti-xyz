import { NextRequest, NextResponse } from 'next/server';
import { getRemovedFollowersByFid } from './unfollowerService';

export async function GET(request: NextRequest, { params }) {
  const { fid } = params;
  const unfollowers = await getRemovedFollowersByFid(fid);
  console.log(unfollowers);
  if (fid) {
    return NextResponse.json(unfollowers);
  } else {
    return NextResponse.json({
      status: 404,
      error: 'Not Found',
      message: 'The requested resource could not be found on this server.',
    });
  }
}
