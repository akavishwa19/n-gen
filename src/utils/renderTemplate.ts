import ejs from 'ejs';
import path from 'node:path';
import fs from 'fs/promises';

async function renderTemplate(
  fileName: string,
  data: Record<string, string>
): Promise<string> {
  const root = process.cwd();
  const templatePath = path.join(root, 'src/templates/routes', fileName);
  const template = await fs.readFile(templatePath, 'utf-8');
  const renderedTemplate = ejs.render(template, data);
  return renderedTemplate;
}

export default renderTemplate;
