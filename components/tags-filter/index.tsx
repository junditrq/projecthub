"use client";
import { Prisma } from "@/app/generated/prisma";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useMemo, useRef } from "react";
import Select from "react-select";

type TagsFilterProps = {
  tags: Prisma.TagGetPayload<{
    select: {
      id: true;
      name: true;
      slug: true;
    };
  }>[];
};

const TagsFilter = ({ tags }: TagsFilterProps) => {
  const portalRef = useRef(null);
  const { theme } = useTheme();

  const options = useMemo(
    () =>
      tags.map((tag) => {
        return {
          label: tag.slug,
          value: tag.id,
        };
      }),
    [tags],
  );

  return (
    <div>
      <div ref={portalRef} className="relative z-9999"></div>
      <Select
        menuPortalTarget={portalRef.current}
        menuPosition="fixed"
        styles={{
          menuPortal: (base) => ({ ...base, zIndex: 9999 }),
        }}
        options={options}
        onChange={(value) => console.log(value)}
        classNamePrefix="react-select"
        autoFocus={false}
        menuShouldScrollIntoView={true}
        isMulti
        placeholder="Select tag..."
        classNames={{
          control: ({ isFocused, hasValue }) =>
            cn(
              theme === "dark" ? "!bg-input/30" : "!bg-transparent",
              "!min-h-9 !border-input !rounded-md !cursor-pointer",
              isFocused &&
                "!border-ring !ring-ring/50 !ring-[3px] outline-none",
              hasValue && "!py-2",
            ),
          placeholder: () => "text-muted-foreground text-sm ",
          indicatorSeparator: () => "bg-input h-5 !self-center !hidden",
          dropdownIndicator: () => "!hidden",
          menuList: () =>
            "bg-popover text-popover-foreground !border-none !outline-none !shadow-none !py-2",
          option: ({ isFocused }) =>
            cn(isFocused && "!bg-accent !text-accent-foreground", "!text-md"),
          multiValue: () => "!rounded-lg !bg-secondary !text-primary",
          multiValueLabel: () => "!text-primary",
          valueContainer: () => "gap-1",
        }}
        // 		"absolute top-2.5 right-2 w-4 h-4 [&>svg]:w-4 [&>svg]:h-4",
        // 	clearIndicator: () =>
        // 		"absolute top-2.5 right-8 w-4 h-4 [&>svg]:w-4 [&>svg]:h-4",
        // }}
      />
    </div>
  );
};
export default TagsFilter;
