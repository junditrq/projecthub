import { normalizeArabicName } from './normalize-arabic-name.util';

export const getCanonicalFullName = (name: string, fatherName: string): string => {
  const fullName = `${name} ${fatherName}`;
  const canonicalFullName = normalizeArabicName(fullName).split(' ').sort().join(' ');
  return canonicalFullName;
};
