// worker/processors/chat.processor.ts
import { Job } from 'bullmq';
import { generateAIReply } from '../services/ai.service';
import { sendToBackend } from '../services/backend.service';


export const processChatJob = async (job: Job) => {
  const { userId, message, chatId } = job.data;
  console.log("job data", job.data);

  // Use mock AI reply
  const aiReply = await generateAIReply(message);

  // Send back to backend
  await sendToBackend(userId, aiReply, chatId);

  return true;
};
