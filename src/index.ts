import * as dotenv from 'dotenv';
import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';

import HandleNodeModule from './handle.node';

dotenv.config({ path: '../.env' });

/**
 * Runs HandleNode module
 * Initialize fastify applications and starts waiting web socket connections with
 * result requests and queue task sending
 *
 * @async
 */
async function runHandleNode () {
  const app = await NestFactory.create<NestFastifyApplication>(
    HandleNodeModule,
    new FastifyAdapter()
  );
  app.enableShutdownHooks();
  app.enableCors();

  await app.listen(parseInt(process.env.HANDLE_NODE_PORT, 10), '0.0.0.0');

  Logger.log(
    `Node is listening ${process.env.HANDLE_NODE_PORT} port on ${await app.getUrl()}`,
    'HandleNode'
  );
}

runHandleNode()
  .then(() => {})
  .catch((err) => Logger.error(err, 'HandleNode'));
