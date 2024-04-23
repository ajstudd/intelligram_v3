import React, { useState, useEffect, useRef } from "react";
import { Box, Button, HStack, Text } from "@chakra-ui/react";
import { FiImage, FiLock } from "react-icons/fi";

interface Props {
  isDisabled: boolean;
  isEditPost: boolean;
}

export const PostWizard: React.FC<Props> = (props) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [text, setText] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  useEffect(() => {
    if (textareaRef.current?.style) {
      textareaRef.current.style.height = "inherit";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [text]);

  return (
    <div className="flex flex-col border-gray-400 rounded-sm border-solid border-[1px] p-2 gap-2 h-max w-full">
      <Text>Create Post</Text>
      <textarea
        ref={textareaRef}
        className="w-full resize-none bg-gray-100 rounded-sm p-2 overflow-hidden focus:outline-none"
        placeholder="Write your post here"
        value={text}
        onChange={handleChange}
      ></textarea>
      <HStack gap={"10px"}>
        <Box
          padding={"5px"}
          background={"#DEDEDE"}
          _hover={{
            background: "#C4C4C4",
          }}
          cursor={"pointer"}
          rounded={"10%"}
        >
          <FiImage />
        </Box>
        <Box
          padding={"5px"}
          background={"#DEDEDE"}
          _hover={{
            background: "#C4C4C4",
          }}
          cursor={"pointer"}
          rounded={"10%"}
        >
          {" "}
          <FiLock />
        </Box>
      </HStack>
      <Button
        background={"#C800FF"}
        padding={"4px"}
        rounded={"4px"}
        _hover={{
          background: "#A300CC",
        }}
        disabled={props.isDisabled}
        color={"white"}
      >
        <Text fontWeight={"500"}>Post</Text>
      </Button>
    </div>
  );
};
