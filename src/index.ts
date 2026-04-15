#!/usr/bin/env node

import generateApi from './command/generateApi';
import defineConfig from './prompt/cli';
import logger from './utils/logger';

async function bootstrap() {
  await defineConfig();
  await generateApi();
}

bootstrap()
  .then(() => {
    logger.info('Bootstrap completed successfully.');
  })
  .catch((error) => {
    logger.error('Error during bootstrap:', error);
    throw new Error(error);
  });
