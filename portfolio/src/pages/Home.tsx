// src/pages/Home.tsx
import {
    Box,
    Heading,
    Text,
    VStack,
    SimpleGrid,
    HStack,
    Tag,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  const skills = [
    'React',
    'Docker',
    'AWS',
    'Kali Linux',
    'T-Pot',
    'Wazuh',
    'Node.js',
    'Chakra UI',
    'Python',
  ];
  
  const projects = [
    {
      title: 'Red Team Lab',
      description: 'Kali, T-Pot honeypots, and detection VMs.',
    },
    {
      title: 'Cyber Range Dashboard',
      description: 'Real-time Wazuh + ELK dashboard with maps.',
    },
    {
      title: 'Framework Quiz App',
      description: 'Quiz that maps to NICE Framework + DynamoDB.',
    },
    {
      title: 'Rogue Access Point Lab',
      description: 'Fake AP MITM with sniffing/spoofing demos.',
    },
  ];
  
  const Home = () => {
    const cardBg = useColorModeValue('white', 'gray.700');
    const textColor = useColorModeValue('gray.800', 'gray.100');
    const sectionBg = useColorModeValue('gray.50', 'gray.900');
  
    return (
      <Box bg={sectionBg} p={4} borderRadius="md">
        <Heading size="2xl" mb={2} color={textColor}>
          Brandon Johnson
        </Heading>
        <Text fontSize="lg" mb={6} color={textColor}>
          Cybersecurity Educator • Red Team Builder • AI Explorer
        </Text>
  
        {/* Skills */}
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
  
        {/* Project Cards */}
        <Heading size="lg" mb={4} color={textColor}>
          Featured Projects
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mb={10}>
          {projects.map((project, i) => (
            <Box
              key={i}
              p={6}
              bg={cardBg}
              borderRadius="lg"
              shadow="md"
              _hover={{
                transform: 'scale(1.03)',
                boxShadow: 'lg',
                transition: '0.2s ease-in-out',
              }}
            >
              <VStack align="start" spacing={2}>
                <Heading size="md">{project.title}</Heading>
                <Text color={textColor}>{project.description}</Text>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
  
        {/* Accordion Summary */}
        <Heading size="lg" mb={4} color={textColor}>
          Quick Summary
        </Heading>
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">Projects</Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Red Team Lab, Cyber Range Dashboard, NICE Quiz App, Rogue AP Lab
            </AccordionPanel>
          </AccordionItem>
  
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">Experience</Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              ASCTE Cybersecurity Instructor, AI Lab Coach, Freelance Builder
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    );
  };
  
  export default Home;
  