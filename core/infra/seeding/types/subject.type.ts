import { subjects } from '../data/subjects';

export type Subject = (typeof subjects)[number];
export type SubjetName = Subject['name'];
