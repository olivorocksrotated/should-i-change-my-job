import { OpenAIStream, StreamingTextResponse } from 'ai';

import { getStreamedAiResponse } from '@/lib/ai/get';

export const runtime = 'edge';

export async function POST(req: Request) {
    // Extract the `messages` from the body of the request
    const { messages } = await req.json();

    // Request the OpenAI API for the response based on the prompt
    const response = await getStreamedAiResponse(messages);

    // Convert the response into a friendly text-stream
    const stream = OpenAIStream(response);

    // Respond with the stream
    return new StreamingTextResponse(stream);
}
