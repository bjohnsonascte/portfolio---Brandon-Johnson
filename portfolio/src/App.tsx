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
import Experience from "./pages/Experience";

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
              <Link
                to="/experience"
                style={{
                  fontWeight: location.pathname === "/experience" ? "bold" : "normal",
                  color: textColor,
                }}
              >
                Experience
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
                src="/avatar.png"
              />
            </HStack>
          </HStack>
        </Box>

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>

        {/* Footer */}
        <Divider mt={10} mb={4} />
        <Box textAlign="center" py={4}>
          <Text fontSize="sm" color="gray.500" mb={2}>
            © {new Date().getFullYear()} Brandon Johnson • Built with React + Chakra UI
          </Text>
          <HStack spacing={4} justify="center">
            <a
              href="https://github.com/branjohnson2305"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton
                icon={<i className="fab fa-github" />}
                aria-label="GitHub"
                variant="ghost"
                size="sm"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/branjohnson2305"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton
                icon={<i className="fab fa-linkedin" />}
                aria-label="LinkedIn"
                variant="ghost"
                size="sm"
              />
            </a>
            <a href="mailto:branjohnson2305@gmail.com">
              <IconButton
                icon={<i className="fas fa-envelope" />}
                aria-label="Email"
                variant="ghost"
                size="sm"
              />
            </a>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};

export default App;
