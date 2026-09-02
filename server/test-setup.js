import { MongoMemoryServer } from 'mongodb-memory-server';

let mongoServer;

export const startTestDB = async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  console.log("Memory DB Started at: ", uri);
  return uri;
};

export const stopTestDB = async () => {
  if (mongoServer) {
    await mongoServer.stop();
  }
};
