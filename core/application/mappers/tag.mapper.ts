import { TagDTO } from "@/core/application/dtos/tag.dto";
import { Tag } from "@/core/domain/entities/tag.entity";

export class TagDTOMapper {
  static toDTO(tag: Tag): TagDTO {
    return {
      id: tag.id,
      name: tag.name,
      slug: tag.slug,
    };
  }
}
