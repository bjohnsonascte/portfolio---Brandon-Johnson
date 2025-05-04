// src/pages/About.tsx
import {
    Box,
    Heading,
    Text,
    Button,
    Icon,
    useColorModeValue,
  } from "@chakra-ui/react";
  import { FaDownload } from "react-icons/fa";
  import GitHubCalendar from "react-github-calendar";
  import ResumeModal from "../components/ResumeModal";
  
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
  
        {/* Download Resume Button */}
        <Heading size="md" mb={2} color={textColor}>
          Resume
        </Heading>
        <Button
          as="a"
          href="/Brandon_Johnson_Resume.pdf"
          download
          leftIcon={<Icon as={FaDownload} />}
          colorScheme="teal"
          variant="solid"
          mb={8}
        >
          View My Resume
        </Button>
  
        {/* GitHub Contributions */}
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
  