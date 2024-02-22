import { openAiClient } from './client';

export async function getStreamedAiResponse(messages: { role: 'user' | 'assistant', content: string }[]) {
    return openAiClient.createChatCompletion({
        model: 'gpt-4',
        messages,
        stream: true,
        temperature: 1
    });
}
