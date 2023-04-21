import { NextRequest, NextResponse } from 'next/server';
import { warpClient } from '@/app/database';

export async function GET(request: NextRequest, { params }) {
  //console.log(request);
  const { username } = params; // Updated line
  const user = await warpClient.lookupUserByUsername(username);
  if (user) {
    const fid = user.fid;
    return NextResponse.json(fid);
  } else {
    return NextResponse.json({
      status: 404,
      error: 'Not Found',
      message: 'The requested resource could not be found on this server.',
    });
  }
}
