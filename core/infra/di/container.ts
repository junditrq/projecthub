import { createAppContainer } from "@/core/infra/di/registry";
import { createCategoryModule } from "./modules/category.module";
import { createStorageModule } from "./modules/storage.module";
import { createTagModule } from "./modules/tag.module";
import { createUserModule } from "./modules/user.module";
import { createVerificationRequestModule } from "./modules/verification-request.module";

const container = createAppContainer();

container.load("CategoryModule", createCategoryModule());
container.load("TagModule", createTagModule());
container.load("VerificationRequestModule", createVerificationRequestModule());
container.load("UserModule", createUserModule());
container.load("StorageModule", createStorageModule());

export default container;
