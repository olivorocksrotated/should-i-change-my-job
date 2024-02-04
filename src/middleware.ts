import { Ratelimit } from '@upstash/ratelimit';
import { kv } from '@vercel/kv';
import { NextRequest, NextResponse } from 'next/server';

// More on this https://vercel.com/guides/rate-limiting-edge-middleware-vercel-kv
const ratelimit = new Ratelimit({
    redis: kv,
    // 5 requests from the same IP in 10 seconds
    limiter: Ratelimit.slidingWindow(5, '10 s')
});

// Define which routes you want to rate limit
export const config = {
    matcher: [
        // Match all api request paths
        {
            source: '/api/:path*',
            missing: [
                { type: 'header', key: 'next-router-prefetch' },
                { type: 'header', key: 'purpose', value: 'prefetch' }
            ]
        }
    ]
};

export default async function middleware(request: NextRequest) {
    // You could alternatively limit based on user ID or similar
    const ip = request.ip ?? '127.0.0.1';
    const { success } = await ratelimit.limit(ip);

    return success ?
        NextResponse.next() :
        NextResponse.redirect(new URL('/blocked', request.url));
}
