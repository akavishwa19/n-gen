import { input, select } from '@inquirer/prompts';
import ora from 'ora';
import logger from '../utils/logger';
import saveConfig from '../utils/saveConfig';
import { Config } from '../types/config';

async function defineConfig(): Promise<Config> {
  try {
    const spinner = ora();

    const config = {} as Config;

    config.language = await select({
      message: 'Select the language',
      choices: [
        { name: 'Javascript', value: 'javascript' },
        { name: 'Typescript', value: 'typescript' }
      ]
    });

    if (config.language === 'typescript') {
      config.type = 'esm';
      spinner.info('Using ESM as default for typescript');
    } else {
      config.type = await select({
        message: 'Select the module type',
        choices: [
          { name: 'Commonjs', value: 'commonjs' },
          { name: 'ESM', value: 'esm' }
        ]
      });
    }

    config.database = await select({
      message: 'Select the database',
      choices: [
        { name: 'Mysql', value: 'mysql' },
        { name: 'MongoDb', value: 'mongodb' }
      ]
    });

    config.docker = await select({
      message: 'Do you want to containerise your app',
      choices: [
        { name: 'Yes', value: 'yes' },
        { name: 'No', value: 'no' }
      ]
    });

    config.structure = await select({
      message: 'Select a setup for your folder',
      choices: [
        { name: 'BASIC: src-> routes-> controllers', value: 'basic' },
        {
          name: 'ADVANCED: src-> routes-> controllers-> services',
          value: 'advanced'
        },
        {
          name: 'ULTRA: src-> routes-> controllers-> services-> models',
          value: 'ultra'
        }
      ]
    });

    const apis = await input({
      message: 'Enter the entities for your CRUD app [comma seperated]',
      validate: (value: string) => {
        if (!value) {
          return 'Please anter at least one entity name to create your endpoints';
        }
        return true;
      }
    });

    config.apis = apis
      .split(',')
      .map((item: string) => item.trim())
      .filter(Boolean);

    spinner.start('Initializing configurations');
    await saveConfig(config);
    spinner.succeed('Finished setting up app based on selected configuration');
    return config;
  } catch (error) {
    logger.error(error, 'Config initialization failed');
    throw error;
  }
}

export default defineConfig;
