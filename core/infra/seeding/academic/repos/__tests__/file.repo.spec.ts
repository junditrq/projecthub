import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { mkdtemp, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { FileRepo } from '../file.repo';

describe('FileRepo', () => {
  let dir: string;
  let repo: FileRepo;

  beforeEach(async () => {
    dir = await mkdtemp(path.join(tmpdir(), 'projecthub-seed-'));
    repo = new FileRepo(dir);
  });

  afterEach(async () => {
    await rm(dir, { recursive: true, force: true });
  });

  it('lists files present in the data directory', async () => {
    await writeFile(path.join(dir, 'a.json'), '{}');
    await writeFile(path.join(dir, 'b.json'), '{}');

    const result = await repo.getFiles();

    expect(result.success).toBe(true);
    if (result.success) {
      expect([...result.files].sort()).toEqual(['a.json', 'b.json']);
    }
  });

  it('reports a missing data directory instead of throwing', async () => {
    const missing = new FileRepo(path.join(dir, 'does-not-exist'));

    const result = await missing.getFiles();

    expect(result).toEqual({
      success: false,
      error: 'Failed to read files from the data directory.',
    });
  });

  it('reads file content as utf8 text', async () => {
    await writeFile(path.join(dir, 'ids.json'), '{"students":[]}');

    const result = await repo.readFileContent('ids.json');

    expect(result).toEqual({ success: true, data: '{"students":[]}' });
  });

  it('reports a missing file instead of throwing', async () => {
    const result = await repo.readFileContent('ghost.json');

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error).toContain('ghost.json');
    }
  });
});
