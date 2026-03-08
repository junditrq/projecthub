import { ITagRepo } from "@/core/domain/repos/tag.repo";
import { TagDTO } from "../../dtos/tag.dto";
import { TagDTOMapper } from "../../mappers/tag.mapper";

export class GetTagsUseCase {
  private tagRepo: ITagRepo;

  constructor(tagRepo: ITagRepo) {
    this.tagRepo = tagRepo;
  }

  public async execute(): Promise<TagDTO[]> {
    const tags = await this.tagRepo.findAll();
    return tags.map(TagDTOMapper.toDTO);
  }
}
