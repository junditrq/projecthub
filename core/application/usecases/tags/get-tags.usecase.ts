import { ITagRepo } from "@/core/domain/repos/tag.repo";
import { TagDTO } from "../../dtos/tag.dto";
import { TagDTOMapper } from "../../mappers/tag.mapper";
import { UseCaseResult } from "../../types/usecase-result.type";

export class GetTagsUseCase {
  private tagRepo: ITagRepo;

  constructor(tagRepo: ITagRepo) {
    this.tagRepo = tagRepo;
  }

  public async execute(): Promise<UseCaseResult<TagDTO[]>> {
    const tags = await this.tagRepo.findAll();

    return {
      data: tags.map(TagDTOMapper.toDTO),
    };
  }
}
