"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowBigUp } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import NeedsAuthButton from "../buttons/needs-auth-button";
import { Separator } from "../ui/separator";
import ContributorAvatar from "./contributor-avatar";
import ProjectCategory from "./project-category";
import ProjectTag from "./project-tag";
import { ProjectCardProps } from "./types";

export default function ProjectCard({
  project,
}: {
  project: ProjectCardProps;
}) {
  const [isLiked, setIsLiked] = useState(false);
  const [numberOfLikes, setNumberOfLikes] = useState(project._count.Likes);

  return (
    <Card className="w-full gap-2 overflow-hidden py-0 shadow-md transition-shadow hover:shadow-lg">
      <CardHeader className="gap-0 p-0">
        <Image
          className="!relative aspect-video"
          objectFit="cover"
          src={project.thumbnailUrl}
          alt="Project thumbnail"
          fill={true}
        />
      </CardHeader>
      <CardContent className="mt-6 px-0">
        <div className="mb-4 space-y-3 px-4">
          <h2 className="text-lg font-semibold">{project.name}</h2>
          <p className="text-muted-foreground text-sm">{project.description}</p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <ProjectTag key={t.id} name={t.name} />
            ))}
          </div>
        </div>

        <Separator />

        <div className="bg-background flex items-center gap-2 p-4">
          {project.contributors.map((c) => (
            <ContributorAvatar
              key={c.id}
              avatarUrl={c.avatarUrl}
              name={c.name}
              id={c.id}
            />
          ))}
        </div>
        <Separator />
        <div className="bg-background flex justify-between gap-4 p-4">
          <div className="flex items-center gap-6">
            {project.categories.map((c) => (
              <ProjectCategory key={c.id} name={c.name} id={c.id} />
            ))}
          </div>

          <NeedsAuthButton
            variant={isLiked ? "default" : "outline"}
            className={cn(
              "flex !h-8 w-18 cursor-pointer items-center gap-1 rounded-full !px-2 !py-0",
            )}
            onClick={() => {
              setIsLiked(!isLiked);
              setNumberOfLikes(isLiked ? numberOfLikes - 1 : numberOfLikes + 1);
            }}
          >
            <ArrowBigUp
              strokeWidth={1}
              className={cn(
                "text-muted-foreground !h-6 !w-6 flex-none shrink-0",
                {
                  "fill-accent stroke-accent": isLiked,
                },
              )}
            />
            <span className="text-sm font-normal">
              {/* <span>{isLiked ? "Liked" : "Like"}</span>{" "} */}
              {numberOfLikes}
            </span>
          </NeedsAuthButton>
        </div>
      </CardContent>
    </Card>
  );
}

// before:w-1.5 before:h-1.5 before:bg-primary before:block before:rounded-full
