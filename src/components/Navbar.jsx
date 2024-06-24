import { Box, Flex, Link, Spacer, Heading } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => (
  <Box bg="teal.500" p={4}>
    <Flex>
      <Heading as="h1" size="lg" color="white">Electronics Store</Heading>
      <Spacer />
      <Flex>
        <Link as={RouterLink} to="/" color="white" mx={2}>Home</Link>
        <Link as={RouterLink} to="/products" color="white" mx={2}>Products</Link>
      </Flex>
    </Flex>
  </Box>
);

export default Navbar;