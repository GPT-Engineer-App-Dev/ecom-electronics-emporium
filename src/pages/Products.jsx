import { useState, useEffect } from "react";
import { Box, SimpleGrid, Image, Text, Button, VStack, Select, Input } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Smartphone", price: 699, category: "Electronics", brand: "BrandA", image: "/images/smartphone.jpg" },
  { id: 2, name: "Laptop", price: 999, category: "Electronics", brand: "BrandB", image: "/images/laptop.jpg" },
  { id: 3, name: "Smartwatch", price: 199, category: "Wearables", brand: "BrandC", image: "/images/smartwatch.jpg" },
];

const Products = ({ searchTerm }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [brand, setBrand] = useState("");

  useEffect(() => {
    let filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (category) {
      filtered = filtered.filter(product => product.category === category);
    }

    if (priceRange) {
      const [min, max] = priceRange.split("-");
      filtered = filtered.filter(product => product.price >= parseInt(min) && product.price <= parseInt(max));
    }

    if (brand) {
      filtered = filtered.filter(product => product.brand === brand);
    }

    setFilteredProducts(filtered);
  }, [searchTerm, category, priceRange, brand]);

  return (
    <Box p={4}>
      <Box mb={4}>
        <Select placeholder="Select category" onChange={(e) => setCategory(e.target.value)} mb={2}>
          <option value="Electronics">Electronics</option>
          <option value="Wearables">Wearables</option>
        </Select>
        <Select placeholder="Select price range" onChange={(e) => setPriceRange(e.target.value)} mb={2}>
          <option value="0-200">0-200</option>
          <option value="200-500">200-500</option>
          <option value="500-1000">500-1000</option>
        </Select>
        <Input placeholder="Brand" onChange={(e) => setBrand(e.target.value)} mb={2} />
      </Box>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {filteredProducts.map(product => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={product.image} alt={product.name} />
            <Box p={6}>
              <VStack spacing={4}>
                <Text fontWeight="bold" fontSize="xl">{product.name}</Text>
                <Text>${product.price}</Text>
                <Button as={Link} to={`/products/${product.id}`} colorScheme="teal">View Details</Button>
              </VStack>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Products;