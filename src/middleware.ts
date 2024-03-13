import { NextRequest, NextResponse } from 'next/server';
import { getHostnameDataOrDefault } from '@/lib/db';

export const config = {
  matcher: ['/', '/_sites/:path'],
};

export default async function middleware(req: NextRequest) {
  const url = req.nextUrl;

  const hostname = req.headers.get('host');

  const currentHost =
    process.env.NODE_ENV === 'production' && process.env.VERCEL === '1'
      ? hostname?.replace(`.buildwithnext.com`, '')
      : hostname?.replace(`.localhost:3000`, '');

  const data = await getHostnameDataOrDefault(currentHost);

  if (url.pathname.startsWith('/_sites')) {
    url.pathname = '/404';
  } else {
    url.pathname = `/_sites/${data?.subdomain}${url.pathname}`;
  }

  return NextResponse.rewrite(url);
}
