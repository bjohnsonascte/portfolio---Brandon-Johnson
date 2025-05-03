// src/App.tsx
import {
  Box,
  Text,
  HStack,
  IconButton,
  Avatar,
  useColorMode,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.50", "gray.800");
  const textColor = useColorModeValue("gray.700", "gray.200");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const location = useLocation();

  return (
    <Box minH="100vh" bg={bg}>
      <Box maxW="1000px" mx="auto" px={6}>

        {/* Sticky Navbar with Avatar & Toggle */}
        <Box
          position="sticky"
          top="0"
          zIndex="1000"
          bg={bg}
          py={4}
          borderBottom="1px solid"
          borderColor={borderColor}
          mb={6}
        >
          <HStack justify="space-between">
            {/* Navigation Links */}
            <HStack spacing={4}>
              <Link
                to="/"
                style={{
                  fontWeight: location.pathname === "/" ? "bold" : "normal",
                  color: textColor,
                }}
              >
                Home
              </Link>
              <Link
                to="/about"
                style={{
                  fontWeight: location.pathname === "/about" ? "bold" : "normal",
                  color: textColor,
                }}
              >
                About
              </Link>
            </HStack>

            {/* Avatar & Toggle */}
            <HStack spacing={3}>
              <IconButton
                aria-label="Toggle dark mode"
                icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
                onClick={toggleColorMode}
                variant="ghost"
              />
              <Avatar
                name="Brandon Johnson"
                size="sm"
                src="/avatar.png" // replace with your real image path or use a link
              />
            </HStack>
          </HStack>
        </Box>

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>

        {/* Footer */}
        <Divider mt={10} />
        <Text fontSize="sm" textAlign="center" color="gray.500" mt={6}>
          © {new Date().getFullYear()} Brandon Johnson • Built with React + Chakra UI
        </Text>
      </Box>
    </Box>
  );
};

export default App;
