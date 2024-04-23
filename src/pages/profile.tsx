import { Box } from "@chakra-ui/react";
import { RootState, setToast, useAppDispatch } from "@store";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Page() {

    return (
     <Box display={'flex'}>
      This is a profile page
     </Box>
    );
  }