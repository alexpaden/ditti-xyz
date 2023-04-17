// app/prisma/prismaClient.ts
import { PrismaClient as PrismaClient1 } from "./generated/client1";
import { PrismaClient as PrismaClient2 } from "./generated/client2";

const indexerClient = new PrismaClient1();
const cmsClient = new PrismaClient2();

export { indexerClient, cmsClient };
