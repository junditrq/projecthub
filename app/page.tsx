import { auth } from "@/auth";
import UploadYourProjectButton from "@/components/buttons/upload-your-project-button";
import FiltersSheet from "@/components/filters-sheet";
import NavBar from "@/components/navbar";
import PageHeading from "@/components/page-heading";
import ProjectCard from "@/components/project-card";
import SearchInput from "@/components/search-input";

const project = {
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

const Page = async () => {
  const session = await auth();
  console.log("User session:", session);

  return (
    <>
      <NavBar />
      <main>
        <PageHeading title="Projects" />

        <div className="container mx-auto md:px-10 lg:px-24">
          <div className="mb-4 flex flex-col justify-between gap-4 px-4 py-4 md:px-8 lg:flex-row">
            <SearchInput />
            <div className="grid grid-cols-[1fr_2fr] gap-2">
              <FiltersSheet />
              <UploadYourProjectButton />
            </div>
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,_minmax(min(380px,100%),1fr))] place-content-center justify-center gap-4 px-4 pb-4">
            <ProjectCard project={project} />
            <ProjectCard project={project} />
            <ProjectCard project={project} />
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;
