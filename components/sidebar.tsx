import NextImage from "next/image";
import NextLink from "next/link";
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

const navMenu = [
  { name: "Home", icon: MdHome, route: "/" },
  { name: "Search", icon: MdSearch, route: "/search" },
  { name: "Library", icon: MdLibraryMusic, route: "/library" },
];

const Sidebar = () => {
  return (
    //   -100px for player's height
    <Box width="100%" height="calc(100vh - 100px)" bg="black" paddingX="5px">
      <Box paddingY="20px">
        <Box width="120px" marginBottom="20px" paddingX="20px">
          <NextImage src="/logo.png" height={60} width={100}></NextImage>
        </Box>
      </Box>
      <Box>
        <List spacing={2}>
          {navMenu.map((menu) => (
            <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
              <LinkBox>
                {/* NextLink use for clientSide rendering  */}
                <NextLink href={menu.route} passHref>
                  <LinkOverlay>
                    <ListIcon
                      as={menu.icon}
                      color="white"
                      marginRight="20px"
                    ></ListIcon>
                    {menu.name}
                  </LinkOverlay>
                </NextLink>
              </LinkBox>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
