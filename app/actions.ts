"use server";

import { auth } from "@/auth";
import { MarkUserAsPromptedUseCase } from "@/core/application/usecases/user/mark-user-as-prompted.usecase";
import { PrismaUserRepo } from "@/core/infra/repos/prisma/user.repo";

export async function markUserAsPromptedAction() {
  try {
    // Get authenticated session
    const session = await auth();
    console.log("Session in action:", session);

    if (!session?.user.id) {
      return {
        success: false,
        error: "Unauthorized",
      };
    }

    // Dependency injection: create repository and use case
    const userRepo = new PrismaUserRepo();
    const markUserAsPromptedUseCase = new MarkUserAsPromptedUseCase(userRepo);

    // Execute use case
    const user = await markUserAsPromptedUseCase.execute(session.user.id);

    return {
      success: true,
      data: user,
    };
  } catch (error) {
    console.error("Failed to mark user as prompted:", error);
    return {
      success: false,
      error: "Failed to update user",
    };
  }
}
