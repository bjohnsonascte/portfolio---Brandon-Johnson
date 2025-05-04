// src/pages/About.tsx
import {
    Box,
    Heading,
    Text,
    useColorModeValue,
    VStack,
  } from "@chakra-ui/react";
  import GitHubCalendar from "react-github-calendar";
  
  const About = () => {
    const textColor = useColorModeValue("gray.700", "gray.200");
    const cardBg = useColorModeValue("white", "gray.700");
  
    return (
      <Box>
        <Heading mb={4} color={textColor}>
          About Me
        </Heading>
        <Text mb={6} color={textColor}>
          I build red/blue team simulations, use AWS, Docker, and create
          cybersecurity learning paths.
        </Text>
  
        <Heading size="md" mb={4} color={textColor}>
          GitHub Contributions
        </Heading>
        <Box
          bg={cardBg}
          borderRadius="md"
          p={4}
          boxShadow="md"
          overflowX="auto"
          maxW="fit-content"
        >
          <GitHubCalendar
            username="bjohnsonascte"
            blockSize={12}
            blockMargin={4}
            fontSize={14}
            colorScheme="light"
          />
        </Box>
      </Box>
    );
  };
  
  export default About;
  