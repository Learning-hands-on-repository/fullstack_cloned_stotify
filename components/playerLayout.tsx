import { Box } from "@chakra-ui/layout";
import Sidebar from "./sidebar";

const PlayerLayout = ({ children }) => {
  return (
    // 100vw, 100vh preventing the scrolling of the whole page, we only need the scrolling of individual element
    <Box width="100vw" height="100vh">
      <Box
        position="absolute"
        top="0"
        width="250px"
        left="0"
        backgroundColor="red.200"
      >
        <Sidebar />
      </Box>
      <Box marginLeft="250px" backgroundColor="red.300">
        {children}
      </Box>
      <Box position="absolute" bottom="0" left="0" backgroundColor="red.500">
        Player
      </Box>
    </Box>
  );
};

export default PlayerLayout;
