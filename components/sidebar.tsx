import NextImage from "next/image";
import {
  Box,
  List,
  ListItem,
  Divider,
  ListIcon,
  Center,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/layout";
import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
} from "react-icons/md";
const Sidebar = () => {
  return (
    //   -100px for player's height
    <Box width="100%" height="calc(100vh - 100px)" bg="black" paddingX="5px">
      <Box paddingY="20px">
        <Box width="120px" marginBottom="20px" paddingX="20px">
          <NextImage src="/logo.png" height={60} width={100}></NextImage>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
