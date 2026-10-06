'use client';
import { Category, Tag } from '@/core/infra/orm/prisma/generated';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ArrowBigUp } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import ContributorAvatar from './contributor-avatar';
import ProjectCategory from './project-category';
import ProjectTag from './project-tag';
import { ProjectCardProps } from './types';
import NeedsAuthButton from '../buttons/auth/needs-auth-button';

export default function ProjectCard({ project }: { project: ProjectCardProps }) {
  const [isLiked, setIsLiked] = useState(false);
  const [numberOfLikes, setNumberOfLikes] = useState(project._count.Likes);

  return (
    <Card className="w-full gap-0 overflow-hidden border py-0 shadow-md transition-shadow hover:shadow-lg">
      <Image
        className="!relative aspect-[16/8] h-full w-full object-cover"
        fill
        src={project.thumbnailUrl}
        alt="Project thumbnail"
      />
      <CardContent className="mt-8 px-0">
        <div className="mb-4 space-y-3 px-4">
          <h2 className="text-lg font-semibold">{project.name}</h2>
          <p className="text-muted-foreground text-sm">{project.description}</p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((t: Tag) => (
              <ProjectTag key={t.id} name={t.name} />
            ))}
          </div>
        </div>

        <div className="bg-background flex items-center gap-2 border-t p-4">
          {project.contributors.map((c: ProjectCardProps) => (
            <ContributorAvatar key={c.id} avatarUrl={c.avatarUrl} name={c.name} />
          ))}
        </div>
      </CardContent>
      <CardFooter className="bg-background flex items-center justify-between gap-4 p-4">
        <div className="flex content-center gap-6">
          {project.categories.map((c: Category) => (
            <ProjectCategory key={c.id} name={c.name} id={c.id} />
          ))}
        </div>

        <NeedsAuthButton
          variant={isLiked ? 'default' : 'outline'}
          className={cn(
            'flex !h-8 w-18 cursor-pointer items-center gap-1 rounded-full !px-2 !py-0'
          )}
          onClick={() => {
            setIsLiked(!isLiked);
            setNumberOfLikes(isLiked ? numberOfLikes - 1 : numberOfLikes + 1);
          }}
        >
          <ArrowBigUp
            strokeWidth={1}
            className={cn('text-muted-foreground !h-6 !w-6 flex-none shrink-0', {
              'fill-accent stroke-accent': isLiked,
            })}
          />
          <span className="text-sm font-normal">
            {/* <span>{isLiked ? "Liked" : "Like"}</span>{" "} */}
            {numberOfLikes}
          </span>
        </NeedsAuthButton>
      </CardFooter>
    </Card>
  );
}

// before:w-1.5 before:h-1.5 before:bg-primary before:block before:rounded-full
