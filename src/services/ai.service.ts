// import OpenAI from 'openai';

// const client = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

//  export const generateAIReply = async (prompt: string): Promise<string> => {
//   const response = await client.chat.completions.create({
//     model: 'gpt-4o-mini',
//     messages: [{ role: 'user', content: prompt }],
//   });

//   const choice = response.choices[0];

//   if (!choice || !choice.message || !choice.message.content) {
//     throw new Error('AI response is empty');
//   }

//   return choice.message.content;
// };


// Mock AI service for portfolio/demo (no API key needed)
 

// backend/services/ai.service.ts
// Mock AI responses, real OpenAI call remove kora hoise

const MOCK_RESPONSES = [
  "Hello! How can I help you today?",
  "That's interesting! Tell me more.",
  "I see. Can you explain further?",
  "I'm not sure about that, but I can try to help!",
  "Thanks for sharing! What do you want to do next?"
];

export const generateAIReply = async (prompt: string): Promise<string> => {
  // Randomly pick a mock response with non-null assertion
  const reply = MOCK_RESPONSES[Math.floor(Math.random() * MOCK_RESPONSES.length)]!;

  // Simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 500));

  return reply;
};
