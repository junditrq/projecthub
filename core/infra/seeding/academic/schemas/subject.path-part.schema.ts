import { z } from 'zod';
import { subjectSlugs } from '../../data/subjects';

export const SubjectPathPartSchema = z.enum(subjectSlugs, {
  error: 'Invalid subject.',
});

export type SubjectPathPart = z.infer<typeof SubjectPathPartSchema>;
