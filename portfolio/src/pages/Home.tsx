// src/pages/Home.tsx
import {
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
  import { useState } from "react";
  
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
      description: "Real-time Wazuh + ELK visual dashboard to track student attack data and SOC logs.",
    },
    {
      title: "Red Team Lab Setup",
      description: "Hands-on labs using Kali Linux, T-Pot honeypots, and simulated victims to teach attacks & detection.",
    },
    {
      title: "Bootcamp Capstone — Secure Web App",
      description: "Built and secured a blog platform, implemented access controls and tested vulnerabilities.",
    },
    {
      title: "Rekall Corporation Pentest",
      description: "Simulated penetration test against Windows & Linux infrastructure with full report writing.",
    },
  ];
  
  const Home = () => {
    const cardBg = useColorModeValue("white", "gray.700");
    const textColor = useColorModeValue("gray.700", "gray.200");
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedProject, setSelectedProject] = useState(projects[0]);
  
    const handleCardClick = (project: typeof projects[0]) => {
      setSelectedProject(project);
      onOpen();
    };
  
    return (
      <Box>
        <Heading size="2xl" mb={2} color={textColor}>
          Brandon Johnson
        </Heading>
        <Text fontSize="lg" mb={6} color={textColor}>
          Cyber Range Developer • Red Team Builder
        </Text>
  
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
          {techIcons.map((tech, i) => (
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
          {projects.map((project, i) => (
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
  