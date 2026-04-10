import renderTemplate from '../utils/renderTemplate';
import { readConfig } from '../utils/config';

async function generateApi() {
  const config = await readConfig();

  if (!config.apis) {
    throw new Error('API entity is required to generate template');
  }

  for (const api of config.apis) {
    await renderTemplate('route.ejs', {
      api: api,
      type: config.type,
      language: config.language
    });
  }
}

export default generateApi;
