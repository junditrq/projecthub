import { describe, it, expect } from 'vitest';
import { normalizeArabicName } from '../normalize-arabic-name.util';

describe('normalizeArabicName', () => {
  it('should normalize Alef variants to a bare Alef', () => {
    expect(normalizeArabicName('أحمد')).toBe('احمد');
    expect(normalizeArabicName('إبراهيم')).toBe('ابراهيم');
    expect(normalizeArabicName('آدم')).toBe('ادم');
  });

  it('should normalize Taa Marbuta to Haa', () => {
    expect(normalizeArabicName('فاطمة')).toBe('فاطمه');
  });

  it('should normalize Alif Maqsura to Yaa', () => {
    expect(normalizeArabicName('يحيى')).toBe('يحيي');
  });

  it('should strip tashkeel (diacritics)', () => {
    expect(normalizeArabicName('مُحَمَّد')).toBe('محمد');
  });

  it('should normalize Tatweel (kashida) to nothing', () => {
    expect(normalizeArabicName('مُحَمَّدــ')).toBe('محمد');
  });

  it('should trim and collapse multiple spaces', () => {
    expect(normalizeArabicName('  طارق   الجندي  ')).toBe('طارق الجندي');
  });

  it('should perfectly match messy and clean variations', () => {
    const clean = normalizeArabicName('احمد بلال');
    const messy = normalizeArabicName(' أَحْمَد  بِلَال ');
    expect(messy).toBe(clean);
  });
});
