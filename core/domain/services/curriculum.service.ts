import { Specialization } from '../enums/specialization.enum';
import { YearLevel } from '../enums/year-level.enum';

export class CurriculumService {
  private static readonly YEAR_SPECIALIZATION_MAP: Record<YearLevel, Specialization[]> = {
    [YearLevel.THIRD]: [Specialization.GENERAL],
    [YearLevel.FOURTH]: [Specialization.AI, Specialization.NET, Specialization.SWE],
    [YearLevel.FIFTH]: [Specialization.AI, Specialization.NET, Specialization.SWE],
  };

  public static isSpecializationInYearLevel(
    specialization: Specialization,
    yearLevel: YearLevel
  ): boolean {
    return CurriculumService.YEAR_SPECIALIZATION_MAP[yearLevel].includes(specialization);
  }
}
