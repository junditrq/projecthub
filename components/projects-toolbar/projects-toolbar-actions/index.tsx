import UploadYourProjectButton from '@/components/buttons/upload-your-project-button';
import { ErrorBoundary } from '@/components/error-boundary';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import { Suspense } from 'react';
import FiltersSheet from './filters-sheet';
import { CategoriesSection } from './filters-sheet/categories-section';
import { TagsSection } from './filters-sheet/tags-section';

type FiltersActionsProps = {
  className?: HTMLDivElement['className'];
};

const ProjectsToolbarActions = ({ className }: FiltersActionsProps) => {
  return (
    <div className={cn('grid grid-cols-[1fr_2fr] gap-2', className)}>
      <FiltersSheet>
        <ErrorBoundary
          fallback={
            <section className="p-4">
              <h3 className="mb-6 text-lg font-semibold">Categories</h3>
              <p className="text-destructive text-sm">
                Failed to load categories. Please try again later.
              </p>
            </section>
          }
        >
          <Suspense fallback={<Skeleton className="mx-auto my-4 h-32 w-[calc(100%-2rem)]" />}>
            <CategoriesSection />
          </Suspense>
        </ErrorBoundary>

        <Separator />

        <ErrorBoundary
          fallback={
            <section className="p-4">
              <h3 className="mb-6 text-lg font-semibold">Tags</h3>
              <p className="text-destructive text-sm">
                Failed to load tags. Please try again later.
              </p>
            </section>
          }
        >
          <Suspense fallback={<Skeleton className="mx-auto my-4 h-28 w-[calc(100%-2rem)]" />}>
            <TagsSection />
          </Suspense>
        </ErrorBoundary>

        <Separator className="mb-24" />
      </FiltersSheet>

      <UploadYourProjectButton />
    </div>
  );
};

export default ProjectsToolbarActions;
