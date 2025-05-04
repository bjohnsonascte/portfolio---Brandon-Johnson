// src/pages/Home.tsx
import {
    Box,
    Heading,
    Text,
    VStack,
    SimpleGrid,
    HStack,
    Tag,
    useColorModeValue,
  } from "@chakra-ui/react";
  
  const skills = [
    "React",
    "Docker",
    "AWS",
    "Kali Linux",
    "Splunk",
    "T-Pot",
    "Wazuh",
    "Python",
    "VMware",
    "Office 365",
    "Networking",
    "Linux",
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
  
    return (
      <Box>
        <Heading size="2xl" mb={2} color={textColor}>
          Brandon Johnson
        </Heading>
        <Text fontSize="lg" mb={6} color={textColor}>
          Cybersecurity Educator • Red Team Builder • AI Explorer
        </Text>
  
        <Heading size="lg" mb={2} color={textColor}>
          About Me
        </Heading>
        <Text mb={6} color={textColor}>
          I build and teach cybersecurity labs with real-world tools and threats. My work combines hands-on red team tactics, dashboards, and automation to train the next generation of defenders.
        </Text>
  
        <Heading size="lg" mb={2} color={textColor}>
          Skills & Tools
        </Heading>
        <HStack wrap="wrap" spacing={2} mb={6}>
          {skills.map((skill) => (
            <Tag key={skill} colorScheme="teal">
              {skill}
            </Tag>
          ))}
        </HStack>
  
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
              _hover={{
                transform: "scale(1.03)",
                boxShadow: "lg",
                transition: "0.2s ease-in-out",
              }}
            >
              <VStack align="start" spacing={2}>
                <Heading size="md">{project.title}</Heading>
                <Text color={textColor}>{project.description}</Text>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>

      </Box>
    );
  };
  
  export default Home;
  