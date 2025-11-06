import { User } from "@/core/domain/entities/user.entity";

export interface IUserRepo {
  findById(userId: string): Promise<User | null>;
  update(user: User): Promise<User>;
}
