// // import { Job } from 'bullmq';
// // import { sendToBackend } from '../services/backend.service';

// // export const processChatJob = async (job: Job) => {
// //   const { userId, message } = job.data;

// //   // pretend AI is thinking
// //   await new Promise((r) => setTimeout(r, 2000));

// //   const aiReply = `AI reply to: ${message}`;

// //   // send result to backend
// //   await sendToBackend(userId, aiReply);

// //   return true;
// // };


// import { Job } from 'bullmq';
// import axios from 'axios'; 
// import { generateAIReply } from '../services/ai.service';

// export const processChatJob = async (job: Job) => {
//   const { userId, message } = job.data;

//   // mock / real AI reply
//   const aiReply = await generateAIReply(message);

//   // send back to backend
//   await axios.post(
//     `${process.env.BACKEND_INTERNAL_URL}/internal/chat/response`,
//     {
//       userId,
//       message: aiReply,
//     },
//     {
//       headers: {
//         'x-internal-key': process.env.INTERNAL_API_KEY!,
//       },
//     }
//   );

//   return true;
// };


// worker/processors/chat.processor.ts
import { Job } from 'bullmq';
import { generateAIReply } from '../services/ai.service';
import { sendToBackend } from '../services/backend.service';


export const processChatJob = async (job: Job) => {
  const { userId, message } = job.data;
  console.log("job data", job.data);

  // Use mock AI reply
  const aiReply = await generateAIReply(message);

  // Send back to backend
  await sendToBackend(userId, aiReply);

  return true;
};
