import {
  Box,
  Heading,
  Text,
  Button,
  Icon,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaDownload, FaFilePdf } from "react-icons/fa";
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

      {/* Resume Buttons */}
      <Heading size="md" mb={2} color={textColor}>
        Resume
      </Heading>
      <HStack spacing={4} mb={8}>
        <Button
          as="a"
          href="/portfolio---Brandon-Johnson/Brandon_Johnson_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          leftIcon={<Icon as={FaFilePdf} />}
          colorScheme="teal"
          variant="solid"
        >
          Preview Resume
        </Button>

        <Button
          as="a"
          href="/portfolio---Brandon-Johnson/Brandon_Johnson_Resume.pdf"
          download
          leftIcon={<Icon as={FaDownload} />}
          colorScheme="gray"
          variant="outline"
        >
          Download PDF
        </Button>
      </HStack>

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
