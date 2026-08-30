import { Specialization } from './specialization.enum';

export enum YearLevel {
  THIRD = 'THIRD',
  FOURTH = 'FOURTH',
  FIFTH = 'FIFTH',
}

export interface Subject {
  id: string;
  name: string;
  slug: string;
  yearLevel: YearLevel;
  allowedSpecializations: Specialization[];
}
