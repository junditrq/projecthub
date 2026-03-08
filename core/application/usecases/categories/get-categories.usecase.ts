import { ICategoryRepo } from "@/core/domain/repos/category.repo";
import { CategoryDTO } from "../../dtos/category.dto";
import { CategoryDTOMapper } from "../../mappers/category.mapper";

export class GetCategoriesUseCase {
  private categoryRepo: ICategoryRepo;

  constructor(categoryRepo: ICategoryRepo) {
    this.categoryRepo = categoryRepo;
  }

  public async execute(): Promise<CategoryDTO[]> {
    const categories = await this.categoryRepo.findAll();
    return categories.map(CategoryDTOMapper.toDTO);
  }
}
