import React, { useState, useEffect, useRef } from "react";
import { Box, Button, HStack, Text } from "@chakra-ui/react";
import { FiImage, FiLock } from "react-icons/fi";
import { ProfileCard } from "./UserProfileCard";
import { PictureGrid } from "./PictureGrid";
import { PostText } from "./PostText";
import { PostFooter } from "./PostFooter";

interface Props {
  isDisabled?: boolean;
  isEditPost?: boolean;
}

export const PostCard: React.FC<Props> = (props) => {
  return (
    <div className="flex flex-col border-gray-400 rounded-sm border-solid border-[1px] p-2 gap-2 h-max w-full">
      <ProfileCard />
      <PostText content={"Hello"} />
      <PictureGrid images={[
        "/IGMSvg.svg",
        "/IGMSvg.svg",
        "/IGMSvg.svg",
        "/IGMSvg.svg"
      ]} />
      <PostFooter
        comments={1}
        isLiked={false}
        likes={3}
        showComments={true}
        isCommentDisabled={false}
        isDisabled={false}
        isEditPost={false}
        isLikeDisabled={false}
      />
    </div>
  );
};
