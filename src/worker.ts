// worker/worker.ts
import { Worker } from 'bullmq';
import IORedis from 'ioredis';
import { processChatJob } from './processors/chat.processor';

// import IORedis from 'ioredis';
import dotenv from 'dotenv';
dotenv.config();


const connection = new IORedis({
  host: process.env.REDIS_HOST || '127.0.0.1',
  port: Number(process.env.REDIS_PORT) || 6379,
  maxRetriesPerRequest: null,   
});


const chatWorker = new Worker(
  'chat-queue',
  async (job) => {
    if (job.name === 'process-chat') {
      console.log("job data inside worker", job.data);
      return processChatJob(job);
    }
  },
  {
    connection,
    concurrency: 5,
  }
);

chatWorker.on('completed', (job) => {
  console.log(`✅ Job ${job.id} completed`);
});

chatWorker.on('failed', (job, err) => {
  console.error(`❌ Job ${job?.id} failed`, err);
});
