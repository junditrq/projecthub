import { YEAR_SPECIALIZATION_MAP } from '../constants/year-specialization.constant';
import { Specialization } from '../entities/specialization.enum';
import { YearLevel } from '../entities/subject.entity';

export class CurriculumService {
  public static isSpecializationInYearLevel(
    specialization: Specialization,
    yearLevel: YearLevel
  ): boolean {
    return YEAR_SPECIALIZATION_MAP[yearLevel].includes(specialization);
  }
}
