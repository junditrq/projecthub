import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const DATA_PATH = path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'data');
