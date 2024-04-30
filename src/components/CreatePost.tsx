import React, { useState, useEffect, useRef } from "react";
import { Box, Button, HStack, Text } from "@chakra-ui/react";
import { FiImage, FiLock } from "react-icons/fi";
import { GlobalModal } from "./GlobalModal";
import { useSelector } from "react-redux";
import { RootState } from "@store";
import { useDispatch } from "react-redux";
import { setCreatePostData } from "store/postsSlice";

interface Props {
  isDisabled: boolean;
  isEditPost: boolean;
  openLockModal: () => void;
}

const MAX_FILESIZE = 5240000;

function returnFileSize(size: number) {
  if (size < 1024) {
    return `${size} bytes`;
  } else if (size >= 1024 && size < 1048576) {
    return `${(size / 1024).toFixed(1)} KB`;
  } else if (size >= 1048576) {
    return `${(size / 1048576).toFixed(1)} MB`;
  }
}

export const PostWizard: React.FC<Props> = (props) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const dispatch = useDispatch();
  const createPostData = useSelector((state: RootState) => state.postsSlice.createPostData);
  console.log('createPostData', createPostData);
  const [fileUrl, setFileUrl] = React.useState<string>('');
  const [selectedFileUrl, setSelectedFileUrl] = React.useState<string>('');
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
  const imagePickerRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string>("");
  const fileFormats='.jpg, .jpeg, .png';
  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    const fileExtension = `.${e.target.files[0].type.split('/')[1]}`;
    if (fileFormats) {
      if (!fileFormats.includes(fileExtension)) {
        console.log("File format not supported.");
        setError(
          `File format not supported. Input file format: ${fileExtension}`
        );
        return;
      }
    }
    const selectedFile = e.target.files ? e.target.files[0] : '';
    const objectURL = selectedFile ? URL.createObjectURL(selectedFile) : '';

    if (selectedFile) {
      if (MAX_FILESIZE && selectedFile.size > MAX_FILESIZE) {
        console.log("File size exceeding limit.");
        setError(
          `File size exceeding limit. Input file size: ${returnFileSize(
            selectedFile.size
          )}`
        );
      } else {
        setFileUrl(objectURL);
        setSelectedFileUrl(objectURL);
        setSelectedFile(selectedFile);
        setError('');
        // props.onChange?.(e);
      }
    }
  };
  const [showModal, setShowModal] = useState(false)
  const [text, setText] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setCreatePostData({
      content : event.target.value
    }))
  };

  const lockPostForm = () => {
    return (
      <div className="flex flex-col w-[100%] gap-2">
        <Text>Lock The Post With Password</Text>
        <input
          className="w-full bg-gray-100 rounded-sm p-2 overflow-hidden focus:outline-none"
          placeholder="Enter Password"
          name="password"
          onChange={(e)=>{
            console.log("lock password");
          }}
        />
        <div className="flex flex-row justify-between">
        <Button
          background={"#C800FF"}
          padding={"4px"}
          rounded={"4px"}

          _hover={{
            background: "#A300CC",
          }}
          color={"white"}
        >
          <Text fontWeight={"500"}>Lock</Text>
        </Button>
        <Button
          background={"#F67280"}
          padding={"4px"}
          rounded={"4px"}
          onClick={()=>setShowModal(false)}
          _hover={{
            background: "#F5606F",
          }}
          color={"white"}
        >
          <Text fontWeight={"500"}>Cancel</Text>
        </Button>
        </div>
      </div>
    );
  }

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
        value={createPostData.content}
        onChange={handleChange}
      ></textarea>
      <HStack gap={"10px"}>
        <Box
          padding={"5px"}
          background={"#DEDEDE"}
          _hover={{
            background: "#C4C4C4",
          }}
          onClick={() => imagePickerRef.current?.click()}
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
          onClick={()=>setShowModal(!showModal)}
          cursor={"pointer"}
          rounded={"10%"}
        >
          {" "}
          <FiLock />
        </Box>
      </HStack>
      <input
            className={'hidden'}
            type='file'
            ref={imagePickerRef}
            size={MAX_FILESIZE}
            accept={fileFormats ?? ''}
            onChange={onSelectFile}
          />
      {fileUrl && (
        <div className="flex flex-col gap-2">
          <img
            src={fileUrl}
            alt="Selected File"
            className="w-40 h-40 object-cover"
          />
          <Button
            background={"#C80"}
            padding={"4px"}
            className="w-40"
            rounded={"4px"}
            _hover={{
              background: "#C70",
            }}
            onClick={
              () => {
                setFileUrl('');
                setSelectedFileUrl('');
                setSelectedFile(null);
                imagePickerRef.current!.value = '';
              }
            }
            color={"white"}
          >
            <Text fontWeight={"500"}>Remove</Text>
          </Button>
        </div>
      )}
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
      <GlobalModal isOpen={showModal} onClose={()=>{
          setShowModal(false)
        }}
        content={lockPostForm()}
        key={'test'}
        />
    </div>
  );
};
