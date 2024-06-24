import { Box, Flex, Link, Spacer, Heading, Input } from "@chakra-ui/react";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <Box bg="teal.500" p={4}>
      <Flex>
        <Heading as="h1" size="lg" color="white">Electronics Store</Heading>
        <Spacer />
        <Flex>
          <Link as={RouterLink} to="/" color="white" mx={2}>Home</Link>
          <Link as={RouterLink} to="/products" color="white" mx={2}>Products</Link>
          <Input
            placeholder="Search products"
            value={searchTerm}
            onChange={handleSearchChange}
            color="white"
            bg="teal.600"
            border="none"
            _placeholder={{ color: "whiteAlpha.800" }}
            mx={2}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;