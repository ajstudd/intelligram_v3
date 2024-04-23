import { VStack } from "@chakra-ui/react";
import { RootState, setToast, useAppDispatch } from "@store";
import { PostWizard } from "components/CreatePost";
import { PostCard } from "components/Post";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Page() {
  const toastData = useSelector((state: RootState) => state.ui.toast);
  const dispatch = useAppDispatch();

    return (
      <VStack w={'full'} paddingLeft={'5px'} paddingRight={'5px'}>
        <PostWizard isDisabled={false} isEditPost={false}/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
      </VStack>
    );
  }