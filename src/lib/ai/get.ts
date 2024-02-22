import { ChatCompletionRequestMessage } from 'openai-edge';

import { openAiClient } from './client';

export async function getStreamedAiResponse(messages: ChatCompletionRequestMessage[]) {
    return openAiClient.createChatCompletion({
        model: 'gpt-4',
        messages,
        stream: true,
        temperature: 1
    });
}
