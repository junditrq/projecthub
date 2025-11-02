import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { Input } from "../ui/input";

type SearchInputProps = {
  className?: string;
  placeholder?: string;
};

const SearchInput = ({
  className,
  placeholder = "Search projects...",
}: SearchInputProps) => {
  return (
    <div className={cn("relative w-full lg:max-w-[22rem]", className)}>
      <Input className="border pr-8" placeholder={placeholder} />
      <Search className="absolute top-1/2 right-2 -translate-y-1/2" size={16} />
    </div>
  );
};

export default SearchInput;
