// src/pages/Home.tsx
import {
  Avatar,
  Box,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  useColorModeValue,
  Icon,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  SkeletonText,
  SkeletonCircle,
  Skeleton,
  Flex,
} from "@chakra-ui/react";
import {
  FaReact,
  FaDocker,
  FaAws,
  FaLinux,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiSplunk,
  SiVite,
  SiChakraui,
  SiVmware,
} from "react-icons/si";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const techIcons = [
  { label: "React", icon: FaReact },
  { label: "Docker", icon: FaDocker },
  { label: "AWS", icon: FaAws },
  { label: "Splunk", icon: SiSplunk },
  { label: "Python", icon: FaPython },
  { label: "Vite", icon: SiVite },
  { label: "Chakra UI", icon: SiChakraui },
  { label: "Linux", icon: FaLinux },
  { label: "VMware", icon: SiVmware },
  { label: "Git", icon: FaGitAlt },
];

const projects = [
  {
    title: "Cyber Range Dashboard",
    description:
      "Real-time Wazuh + ELK visual dashboard to track student attack data and SOC logs.",
  },
  {
    title: "Red Team Lab Setup",
    description:
      "Hands-on labs using Kali Linux, T-Pot honeypots, and simulated victims to teach attacks & detection.",
  },
  {
    title: "Bootcamp Capstone — Secure Web App",
    description:
      "Built and secured a blog platform, implemented access controls and tested vulnerabilities.",
  },
  {
    title: "Rekall Corporation Pentest",
    description:
      "Simulated penetration test against Windows & Linux infrastructure with full report writing.",
  },
];

const Home = () => {
  const cardBg = useColorModeValue("white", "gray.700");
  const textColor = useColorModeValue("gray.700", "gray.200");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleCardClick = (project: typeof projects[0]) => {
    setSelectedProject(project);
    onOpen();
  };

  return (
    <Box px={{ base: 4, md: 12 }} py={8}>
      <Helmet>
        <title>Brandon Johnson | Cyber Range Developer</title>
        <meta
          name="description"
          content="Cybersecurity educator creating red/blue team labs and training simulations."
        />
      </Helmet>

      <Flex
        align="center"
        justify={{ base: "center", md: "space-between" }}
        direction={{ base: "column", md: "row" }}
        mb={6}
      >
        <Box textAlign={{ base: "center", md: "left" }}>
          <Heading size="2xl" mb={2} color={textColor}>
            Brandon Johnson
          </Heading>
          <Text fontSize="lg" color={textColor}>
            Cyber Range Developer • Red Team Builder
          </Text>
        </Box>

        <Avatar
          name="Brandon Johnson"
          size="xl"
          src="/profile.jpg"
          mt={{ base: 4, md: 0 }}
          ml={{ base: 0, md: 6 }}
          border="2px solid"
          borderColor={useColorModeValue("gray.300", "gray.600")}
        />
      </Flex>

      <Heading size="lg" mb={2} color={textColor}>
        About Me
      </Heading>
      <Text mb={6} color={textColor}>
        I build and teach cybersecurity labs with real-world tools and threats.
        My work combines hands-on red team tactics, dashboards, and automation
        to train the next generation of defenders.
      </Text>

      <Heading size="lg" mb={4} color={textColor}>
        Skills & Tools
      </Heading>
      <SimpleGrid columns={{ base: 2, sm: 3, md: 4 }} spacing={6} mb={10}>
        {isLoading
          ? Array.from({ length: 10 }).map((_, i) => (
              <VStack key={i}>
                <SkeletonCircle size="8" />
                <Skeleton height="16px" width="60%" />
              </VStack>
            ))
          : techIcons.map((tech, i) => (
              <VStack key={i}>
                <Icon as={tech.icon} boxSize={8} color="teal.400" />
                <Text fontSize="sm" color={textColor}>
                  {tech.label}
                </Text>
              </VStack>
            ))}
      </SimpleGrid>

      <Heading size="lg" mb={4} color={textColor}>
        Featured Projects
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mb={10}>
        {isLoading
          ? Array.from({ length: 4 }).map((_, i) => (
              <Box
                key={i}
                p={6}
                borderWidth="1px"
                borderRadius="lg"
                shadow="md"
                bg={cardBg}
              >
                <Skeleton height="24px" width="60%" mb={3} />
                <SkeletonText mt="2" noOfLines={3} spacing="3" />
              </Box>
            ))
          : projects.map((project, i) => (
              <Box
                key={i}
                p={6}
                borderWidth="1px"
                borderRadius="lg"
                shadow="md"
                bg={cardBg}
                cursor="pointer"
                _hover={{
                  transform: "scale(1.03)",
                  boxShadow: "lg",
                  transition: "0.2s ease-in-out",
                }}
                onClick={() => handleCardClick(project)}
              >
                <VStack align="start" spacing={2}>
                  <Heading size="md">{project.title}</Heading>
                  <Text color={textColor} noOfLines={2}>
                    {project.description}
                  </Text>
                </VStack>
              </Box>
            ))}
      </SimpleGrid>

      {/* Modal for Project Details */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
        <ModalOverlay />
        <ModalContent bg={cardBg}>
          <ModalHeader>{selectedProject.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Text color={textColor}>{selectedProject.description}</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Home;
