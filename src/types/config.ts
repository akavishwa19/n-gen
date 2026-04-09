export interface Config {
  language: 'typescript' | 'javascript';
  type: 'commonjs' | 'esm';
  database: 'mongodb' | 'mysql';
  docker: 'yes' | 'no';
  structure: 'basic' | 'advanced' | 'ultra';
  apis?: string[];
}
