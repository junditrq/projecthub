import { Specialization } from '../entities/specialization.enum';
import { YearLevel } from '../entities/subject.entity';

export type YearSpecializationMap = Record<YearLevel, Specialization[]>;

export const YEAR_SPECIALIZATION_MAP = {
  [YearLevel.THIRD]: [Specialization.GENERAL],
  [YearLevel.FOURTH]: [Specialization.AI, Specialization.NET, Specialization.SWE],
  [YearLevel.FIFTH]: [Specialization.AI, Specialization.NET, Specialization.SWE],
};
