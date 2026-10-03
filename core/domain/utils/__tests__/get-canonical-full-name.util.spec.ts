import { describe, it, expect, test } from 'vitest';
import { getCanonicalFullName } from '../get-canonical-full-name.util';

describe('getCanonicalFullName', () => {
  it('should combine name and fatherName, normalize, and sort alphabetically', () => {
    expect(getCanonicalFullName('أحمد', 'بلال')).toBe('احمد بلال');
  });

  it('should sort names alphabetically (Arabic sort order)', () => {
    expect(getCanonicalFullName('بلال', 'أحمد')).toBe('احمد بلال');
  });

  it('should strip tashkeel (diacritics) from both names', () => {
    expect(getCanonicalFullName('مُحَمَّد', 'بِلَال')).toBe('بلال محمد');
  });

  it('should normalize Alef variants (أ، إ، آ) to bare Alef (ا)', () => {
    expect(getCanonicalFullName('أحمد', 'إبراهيم')).toBe('ابراهيم احمد');
    expect(getCanonicalFullName('آدم', 'أحمد')).toBe('احمد ادم');
  });

  it('should normalize Taa Marbuta (ة) to Haa (ه)', () => {
    expect(getCanonicalFullName('فاطمة', 'محمد')).toBe('فاطمه محمد');
    expect(getCanonicalFullName('محمد', 'فاطمة')).toBe('فاطمه محمد');
  });

  it('should normalize Alif Maqsura (ى) to Yaa (ي)', () => {
    expect(getCanonicalFullName('يحيى', 'علي')).toBe('علي يحيي');
  });

  it('should collapse multiple spaces and trim', () => {
    expect(getCanonicalFullName('  أحمد   ', '  بلال  ')).toBe('احمد بلال');
  });

  it('should remove Tatweel (kashida) characters', () => {
    expect(getCanonicalFullName('مُحَمَّدــ', 'بِلَال')).toBe('بلال محمد');
  });

  it('should handle names with multiple parts', () => {
    expect(getCanonicalFullName('عبد الرحمن', 'أحمد')).toBe('احمد الرحمن عبد');
  });

  it('should sort multi-part names correctly', () => {
    expect(getCanonicalFullName('محمد', 'عبد الله')).toBe('الله عبد محمد');
  });

  it('should handle mixed diacritics and normalization', () => {
    expect(getCanonicalFullName('مُحَمَّد', 'فَاطِمَة')).toBe('فاطمه محمد');
  });

  it('should handle empty fatherName', () => {
    expect(getCanonicalFullName('أحمد', '')).toBe('احمد');
  });

  it('should handle empty name', () => {
    expect(getCanonicalFullName('', 'بلال')).toBe('بلال');
  });

  it('should handle both empty', () => {
    expect(getCanonicalFullName('', '')).toBe('');
  });

  it('should handle fatherName with only spaces', () => {
    expect(getCanonicalFullName('أحمد', '   ')).toBe('احمد');
  });

  it('should handle unicode normalization edge cases', () => {
    expect(getCanonicalFullName('أحمد', 'أحمد')).toBe('احمد احمد');
  });

  test(() => {
    const result = getCanonicalFullName('طارق الجندي', 'محمد زياد');
    expect(result).toBe('الجندي زياد محمد طارق');
  });

  it('should produce deterministic output for same input', () => {
    const result1 = getCanonicalFullName('أحمد بلال', 'محمد علي');
    const result2 = getCanonicalFullName('أحمد بلال', 'محمد علي');
    expect(result1).toBe(result2);
  });
});
