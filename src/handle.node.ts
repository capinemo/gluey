import { Module } from '@nestjs/common';

/**
 * QuestNode main module
 * 1. Listens new data receiving events
 * 2. Loads inspection data from queue, selects free medic and sends task
 * 3. Handling incoming inspection result response
 */
@Module({})
export default class HandleNodeModule {}
