import z from 'zod';
import { subjectNames, subjects, subjectSlugs } from '../../data/subjects';

export type SeedSubject = (typeof subjects)[number];
export type SeedSubjetName = SeedSubject['name'];

export const SeedSubjectNameSchema = z.enum(subjectNames);
export const SeedSubjectSlugSchema = z.enum(subjectSlugs);

export type SeedSubjectName = z.infer<typeof SeedSubjectNameSchema>;
export type SeedSubjectSlug = z.infer<typeof SeedSubjectSlugSchema>;
