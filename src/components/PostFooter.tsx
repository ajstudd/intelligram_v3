import React, { useState, useEffect, useRef } from "react";
import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import { LuThumbsUp } from "react-icons/lu";
import { BiComment } from "react-icons/bi";

interface Props {
  isLiked: boolean;
  likes: number;
  comments: number;
  showComments: boolean;
  isDisabled?: boolean;
  isEditPost?: boolean;
  isCommentDisabled?: boolean;
  isLikeDisabled?: boolean;
}

export const PostFooter: React.FC<Props> = (props) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row gap-2 justify-between">
        <HStack gap={'10px'}>
          <HStack gap={'5px'} justifyContent={'center'} alignItems={'center'} justifyItems={'center'}>
            <Text>{props.likes}</Text>
            <LuThumbsUp style={{
              marginBottom: '2px'
            }}/>
          </HStack>
          <HStack gap={'5px'} justifyContent={'center'} alignItems={'center'} justifyItems={'center'}>
            <Text>{props.likes}</Text>
            <BiComment />
          </HStack>
        </HStack>
      </div>
      {props.showComments && (
        <div className="flex flex-row gap-2 justify-between">
          <Text>View Comments</Text>
        </div>
      )}
    </div>
  );
};
