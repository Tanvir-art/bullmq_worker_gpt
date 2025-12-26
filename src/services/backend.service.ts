// import axios from 'axios';

// export const sendToBackend = async (
//   userId: string,
//   message: string
// ) => {
//   await axios.post(
//     `${process.env.BACKEND_URL}/internal/chat-response`,
//     {
//       userId,
//       message,
//     },
//     {
//       headers: {
//         'x-internal-key': process.env.INTERNAL_API_KEY!,
//       },
//     }
//   );
// };

// backend/services/backend.service.ts
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

export const sendToBackend = async (
  userId: string,
  message: string,
  chatId: string
) => {
  await axios.post(
    `${process.env.BACKEND_URL}/chat/internal/response`,
    {
      user: userId,
      message,
      chatId,
    },
    {
      headers: {
        'x-internal-key': process.env.INTERNAL_API_KEY!,
      },
    }
  );
};
