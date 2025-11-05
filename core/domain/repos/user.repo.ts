import { User } from "@/core/domain/entities/user.entity";

export interface IUserRepo {
  findById(userId: string): Promise<User | null>;
  markAsPrompted(userId: string): Promise<User>;
}
