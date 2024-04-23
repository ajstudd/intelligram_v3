import React, { useState, useEffect, useRef } from "react";
import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";

interface Props {
  isDisabled?: boolean;
  isEditPost?: boolean;
}

export const ProfileCard: React.FC<Props> = (props) => {
  const [dropdown, setDropdown] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null); // Specify the element type for the ref
  const iconRef = useRef<HTMLDivElement | null>(null); // Specify the element type for the ref

  // Toggle dropdown state
  const toggleDropdown = () => setDropdown(!dropdown);

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        iconRef.current &&
        !iconRef.current.contains(event.target as Node)
      ) {
        setDropdown(false); // Close the dropdown if click is outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef, iconRef]);

  return (
    <div className="flex flex-row gap-2 justify-between">
      <HStack>
        <Image alt="profile" height={"50"} width={"50"} src="/IGMSVG.svg" />
        <VStack justifyContent={"flex-start"} alignItems={"flex-start"}>
          <Text>Hello</Text>
          <Text fontSize={"12px"} color={"gray"}>
            Hello
          </Text>
        </VStack>
      </HStack>
      
      <div ref={iconRef} className="relative">
        <BsThreeDots onClick={toggleDropdown} className="cursor-pointer" />
        {dropdown && (
          <Box
            ref={dropdownRef}
            className="absolute bg-white shadow-lg rounded-lg p-2 min-w-[100px] z-10 right-[6px]"
          >
            <Text>Option 1</Text>
            <Text>Option 2</Text>
          </Box>
        )}
      </div>
    </div>
  );
};