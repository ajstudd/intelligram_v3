import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import { RootState, setToast, useAppDispatch } from "@store";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

export default function Login() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const handleLogin = () => {
    setIsLoading(true);
    // This is a dummy function to simulate a login request
    // In a real application, you would make an HTTP request to your server
    // to authenticate the user
    setTimeout(() => {
      dispatch(
        setToast({ message: "Login successful", type: "success", isOpen: true })
      );
      setIsLoading(false);
      router.push("/");
    }, 1000);
  };

  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <VStack
        gap={"15px"}
        minW={"40%"}
        border={"1px solid #DEDEDE"}
        borderRadius={"5px"}
        padding={"40px"}
      >
        <Text fontWeight={"700"} fontSize={"24px"}>
          Login
        </Text>
        <VStack gap={"15px"} justifyContent={"center"} w={"100%"}>
          <Input
            placeholder="Username"
            border={"1px solid #DEDEDE"}
            p={6}
            w={"100%"}
            borderRadius={"5px"}
          />
          <InputGroup>
            <Input
              placeholder="Password"
              w={"100%"}
              p={6}
              border={"1px solid #DEDEDE"}
              borderRadius={"5px"}
              type={isPasswordVisible ? "text" : "password"}
            />
            <InputRightElement
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              height={"100%"}
              pr={"10px"}
              cursor={"pointer"}
            >
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                height={"100%"}
              >
                {isPasswordVisible ? (
                  <IoEyeOutline onClick={togglePasswordVisibility} />
                ) : (
                  <IoEyeOffOutline onClick={togglePasswordVisibility} />
                )}
              </Box>
            </InputRightElement>
          </InputGroup>
        </VStack>
        <VStack gap={"15px"}>
          <Text fontSize={"12px"}>Forgot password?</Text>
          <Text fontSize={"12px"}>
            {`Don't have an account?`} <Link href={"/signup"}>Sign up</Link>
          </Text>{" "}
        </VStack>
        <div
          onClick={handleLogin}
          className="bg-blue-500 h-[40px] flex w-full justify-center hover:bg-blue-700 text-white py-2 px-4 rounded"
        >
          {isLoading ? (
            <Box
              display={"flex"}
              w={"100%"}
              h={"100%"}
              justifyContent={"center"}
              alignItems={"center"}
            >
             <Spinner size="xl" sx={{ width: '25px', height: '25px' }} />
            </Box>
          ) : (
            <Text fontWeight={'700'}>Login</Text>
          )}
        </div>
      </VStack>
    </div>
  );
}
