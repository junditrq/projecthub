import { CreateVerificationRequestDTO } from "../../dtos/verification-request.dto";

export class CreateVerficationRequestUseCase {
  constructor() {}

  async execute({
    arabicName,
    userId,
    collegeIdFileKey,
  }: CreateVerificationRequestDTO) {
    console.log(arabicName, userId, collegeIdFileKey);

  }
}
