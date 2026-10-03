import { Specialization } from '@/core/domain/enums/specialization.enum';
import { YearLevel } from '@/core/domain/enums/year-level.enum';

export const subjects = [
  {
    name: 'Virtual Reality',
    slug: 'vr',
    yearLevel: YearLevel.FOURTH,
    allowedSpecializations: [Specialization.AI],
  },
  {
    name: 'Project 1',
    slug: 'project-1',
    yearLevel: YearLevel.THIRD,
    allowedSpecializations: [Specialization.GENERAL],
  },
  {
    name: 'Project 2',
    slug: 'project-2',
    yearLevel: YearLevel.FOURTH,
    allowedSpecializations: [Specialization.AI, Specialization.SWE, Specialization.NET],
  },
  {
    name: 'Parallel Programming',
    slug: 'parallel-programming',
    yearLevel: YearLevel.FOURTH,
    allowedSpecializations: [Specialization.AI, Specialization.SWE],
  },
  {
    name: 'Compiler',
    slug: 'compiler',
    yearLevel: YearLevel.FOURTH,
    allowedSpecializations: [Specialization.AI, Specialization.SWE],
  },
  {
    name: 'Programming Languages',
    slug: 'programming-languages',
    allowedSpecializations: [Specialization.GENERAL],
    yearLevel: YearLevel.THIRD,
  },
  {
    name: 'Graduation',
    slug: 'grad',
    allowedSpecializations: [Specialization.AI, Specialization.SWE, Specialization.NET],
    yearLevel: YearLevel.FIFTH,
  },
  {
    name: 'Knowledge Base Systems',
    slug: 'kbs',
    allowedSpecializations: [Specialization.AI],
    yearLevel: YearLevel.FOURTH,
  },
] as const;

export const subjectNames = subjects.map((s) => s.name);
export const subjectSlugs = subjects.map((s) => s.slug);
