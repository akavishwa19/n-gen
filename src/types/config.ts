export interface Config {
  language: 'typescript' | 'javascript';
  type: 'commonjs' | 'esm';
  database: 'mongodb' | 'mysql';
  docker: 'yes' | 'no';
  structure: 'basic' | 'advanced';
  logger: 'yes' | 'no';
  apis: string[];
  schemas: Record<string, Fields[]>;
}

export interface Fields {
  name: string;
  type: 'string' | 'number' | 'boolean' | 'date';
}
