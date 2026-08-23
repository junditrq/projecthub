import { Tag } from '@/core/domain/entities/tag.entity';

export interface ITagRepo {
  findAll(): Promise<Tag[]>;
}
