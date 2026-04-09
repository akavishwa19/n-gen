import path from 'path';
import fs from 'fs/promises';
import { Config } from '../types/config';
import { CONFIG_FILE_NAME } from '../consts';

async function saveConfig(data: Config): Promise<void> {
  if (!data) {
    throw new Error('invalid data to write file');
  }

  const root = process.cwd();
  const savePath = path.join(root, CONFIG_FILE_NAME);
  await fs.writeFile(savePath, JSON.stringify(data, null, 2), 'utf-8');
}

export default saveConfig;
