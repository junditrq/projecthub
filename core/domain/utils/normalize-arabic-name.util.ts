export const normalizeArabicName = (name: string): string => {
  return (
    name
      // Strip Arabic diacritics (tashkeel)
      .replace(/[\u0617-\u061A\u064B-\u0652]/g, '')
      // Normalize Alef variants (أ, إ, آ) to bare Alef (ا)
      .replace(/[أإآ]/g, 'ا')
      // Normalize Taa Marbuta (ة) to Haa (ه)
      .replace(/ة/g, 'ه')
      // Normalize Alif Maqsura (ى) to Yaa (ي)
      .replace(/ى/g, 'ي')
      // Collapse multiple spaces into one and trim the edges
      .replace(/\s+/g, ' ')
      // Remove Tatweel (ـ) characters
      .replace(/\u0640/g, '')
      .trim()
  );
};
