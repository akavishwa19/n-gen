//main app entrypoint
import defineConfig from './prompt/cli';
import logger from './utils/logger';

async function bootstrap() {
  await defineConfig();
}

bootstrap()
  .then(() => {
    logger.info('Bootstrap completed successfully.');
  })
  .catch((error) => {
    logger.error('Error during bootstrap:', error);
    throw new Error(error);
  });
