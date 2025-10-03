"use client";
import NavBar from "@/components/navbar";
import ProjectCard from "@/components/project-card";
import { ProjectCardProps } from "@/components/project-card/types";
import TagsFilter from "@/components/tags-filter";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ArrowRight, Filter, Search } from "lucide-react";
import Link from "next/link";

const TAGS = [
  {
    name: "Spring Boot",
    id: "1",
    slug: "spring-boot",
  },
  {
    name: "React.js",
    id: "2",
    slug: "react-js",
  },
  {
    name: "Flutter Mobile",
    id: "4",
    slug: "flutter-mobile",
  },
  {
    name: "Node.js",
    id: "5",
    slug: "node-js",
  },
  {
    name: "PHP",
    id: "7",
    slug: "php",
  },
  {
    name: "JavaScript",
    id: "8",
    slug: "javascript",
  },
  {
    name: "Next.js",
    id: "9",
    slug: "next-js",
  },
  {
    name: "NestJS",
    id: "10",
    slug: "nestjs",
  },
  {
    name: "Express",
    id: "11",
    slug: "express",
  },
  {
    name: "React Native",
    id: "11",
    slug: "react-native",
  },
  {
    name: "Unity",
    id: "12",
    slug: "unity",
  },
  {
    name: "OpenCV",
    id: "13",
    slug: "opencv",
  },
  {
    name: "Tauri",
    id: "14",
    slug: "tauri",
  },
  {
    name: "Tailwind CSS",
    id: "15",
    slug: "tailwind-css",
  },
  {
    name: "Blade",
    id: "16",
    slug: "blade",
  },
  {
    name: "Laravel",
    id: "17",
    slug: "laravel",
  },
  {
    name: "Django",
    id: "18",
    slug: "django",
  },
];

const project: ProjectCardProps = {
  id: "0fa7c5e8-a832-6c35-9251-6bcf3a3dcaf6",
  name: "Smart Greenhouse Automation",
  description:
    "An IoT-based greenhouse system that monitors and adjusts environmental conditions automatically.",
  thumbnailUrl: "/punish-pad-thumbnail.png",
  categories: [
    { name: "Web", id: "1" },
    { name: "Mobile", id: "2" },
  ],
  tags: [
    { name: "sensors", id: "1" },
    { name: "automation", id: "2" },
    { name: "raspberry-pi", id: "3" },
  ],
  contributors: [
    {
      name: "Aisha Patel",
      avatarUrl: "https://randomuser.me/api/portraits/women/68.jpg",
      id: "1",
    },
    {
      name: "David Lin",
      avatarUrl: "https://randomuser.me/api/portraits/men/35.jpg",
      id: "2",
    },
    {
      name: "Fatima Khan",
      avatarUrl: "https://randomuser.me/api/portraits/women/22.jpg",
      id: "3",
    },
    {
      name: "Leo Costa",
      avatarUrl: "https://randomuser.me/api/portraits/men/68.jpg",
      id: "4",
    },
    {
      name: "Emily Zhang",
      avatarUrl: "https://randomuser.me/api/portraits/women/15.jpg",
      id: "5",
    },
  ],
  _count: {
    Likes: 37,
  },
};

const Page = () => {
  return (
    <>
      <NavBar />

      <main>
        <div className="mb-4 border-b">
          <div className="mx-auto flex max-w-[90rem] justify-start px-4">
            <h1 className="border-r border-l p-4 text-lg font-bold tracking-wider uppercase">
              Projects
            </h1>
          </div>
        </div>

        <div className="container mx-auto md:px-10 lg:px-24">
          <div className="mb-4 flex flex-col justify-between gap-4 px-4 py-4 md:px-8 lg:flex-row">
            <div className="relative w-full lg:max-w-[22rem]">
              <Input className="border pr-8" placeholder="Search projects..." />
              <Search
                className="absolute top-1/2 right-2 -translate-y-1/2"
                size={16}
              />
            </div>
            <div className="grid grid-cols-[1fr_2fr] gap-2">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant={"outline"}
                    className="flex cursor-pointer gap-2"
                  >
                    <Filter />
                    <span>Filter</span>
                  </Button>
                </SheetTrigger>
                <SheetContent
                  className="gap-0 pt-4"
                  id="filters-sheet"
                  onOpenAutoFocus={(e) => e.preventDefault()}
                >
                  <SheetHeader>
                    <SheetTitle className="text-2xl">Filters</SheetTitle>
                  </SheetHeader>

                  {/* 6 rem is the height of the SheetHeader */}
                  <Separator />
                  <ScrollArea className="max-h-[calc(100vh-6rem)]">
                    <section className="p-4">
                      <h3 className="mb-6 text-lg font-semibold">Categories</h3>
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-3">
                          <Checkbox id="web" className="h-5 w-5 border-2" />
                          <Label
                            htmlFor="web"
                            className="text-md w-full cursor-pointer font-normal"
                          >
                            Web
                          </Label>
                        </div>
                        <div className="flex items-center gap-3">
                          <Checkbox id="mobile" className="h-5 w-5 border-2" />
                          <Label
                            htmlFor="mobile"
                            className="text-md w-full cursor-pointer font-normal"
                          >
                            Mobile
                          </Label>
                        </div>
                      </div>
                    </section>

                    <Separator />

                    <section className="p-4">
                      <h3 className="mb-6 text-lg font-semibold">Tags</h3>

                      <TagsFilter tags={TAGS} />
                    </section>

                    {/* last separator */}
                    <Separator className="mb-24" />
                  </ScrollArea>
                </SheetContent>
              </Sheet>

              <Button
                variant={"default"}
                className="flex cursor-pointer gap-2 border-2"
                asChild
              >
                <Link href={"/create-project"}>
                  Upload your <span className="hidden sm:inline">own</span>{" "}
                  Project
                  <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,_minmax(min(380px,100%),1fr))] place-content-center justify-center gap-4 px-4 pb-4">
            <ProjectCard project={project} />
            <ProjectCard project={project} />
            <ProjectCard project={project} />
          </div>
        </div>

        {/* <Link
					className="aspect-square w-42 bg-red-500 m-10 relative group block"
					href={""}
				>
					<div className=" group-hover:ring-4 group-hover:ring-inset  w-full h-full absolute inset-0 z-10 transition-all"></div>
					<img
						src="https://randomuser.me/api/portraits/women/68.jpg"
						alt="random user"
						className="w-full h-full object-fill absolute inset-0 z-0"
					/>
				</Link> */}
      </main>
    </>
  );
};

// it's 2 pm we can fucking do it as fast as possible asap,
// mother fucker you're handsome you're smart just grab your balls
// be a man, fucking do something, this shit ain't hard, you can do it
// but you have to be consistent today we're going to make the project card component
// and maybe the main nav bar
export default Page;
