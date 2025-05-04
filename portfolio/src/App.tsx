// src/App.tsx
import {
  Box,
  Text,
  HStack,
  IconButton,
  useColorMode,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";


const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.50", "gray.800");
  const textColor = useColorModeValue("gray.700", "gray.200");
  const location = useLocation();

  return (
    <Box minH="100vh" bg={bg} p={6}>
      <Box maxW="1000px" mx="auto" position="relative">
        {/* Toggle */}
        <Box position="absolute" top={4} right={4}>
          <IconButton
            aria-label="Toggle dark mode"
            icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
            onClick={toggleColorMode}
            variant="ghost"
          />
        </Box>

        {/* Navigation */}
        <Box
          position="sticky"
          top="0"
          zIndex="1000"
          bg={bg}
          py={4}
          px={6}
          borderBottom="1px solid"
          borderColor={useColorModeValue("gray.200", "gray.700")}
          mb={6}
        >
          <HStack justify="space-between">
            <HStack spacing={4}>
              <Link
                to="/"
                style={{
                  fontWeight: location.pathname === "/" ? "bold" : "normal",
                }}
              >
                Home
              </Link>
              <Link
                to="/about"
                style={{
                  fontWeight: location.pathname === "/about" ? "bold" : "normal",
                }}
              >
                About
              </Link>
              <Link
                to="/experience"
                style={{
                  fontWeight: location.pathname === "/experience" ? "bold" : "normal",
                }}
              >
                Experience
              </Link>
            </HStack>
            <IconButton
              aria-label="Toggle dark mode"
              icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
              onClick={toggleColorMode}
              variant="ghost"
            />
          </HStack>
        </Box>

        {/* Routes */}
        <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/experience" element={<Experience />} />
</Routes>
        <Divider mt={10} />
        <Text fontSize="sm" textAlign="center" color="gray.500" mt={6}>
          © {new Date().getFullYear()} Brandon Johnson • Built with React + Chakra UI
        </Text>
      </Box>
    </Box>
  );
};

export default App;
