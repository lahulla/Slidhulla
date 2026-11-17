

import { readdir } from 'node:fs/promises';
import { join } from 'node:path';

const ROOT_DIR = '../slides';

export async function subdirs(dir: string = ROOT_DIR): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true });
  const directories = entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => join(dir, entry.name));

  const nested = await Promise.all(directories.map((sub) => subdirs(sub)));
  return [...directories, ...nested.flat()];
}


export async function slides(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile() && entry.name.endsWith('.md'))
    .map((entry) => join(dir, entry.name))
    .sort();
}

