import { requiresStudent } from '@/lib/dal/utils/requires-student';

const page = async () => {
  await requiresStudent();
  return <div></div>;
};

export default page;
