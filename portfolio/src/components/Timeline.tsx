// src/components/Timeline.tsx
import {
    Box,
    VStack,
    HStack,
    Text,
    Heading,
    useColorModeValue,
  } from "@chakra-ui/react";
  
  const experiences = [
    {
      role: "Cybersecurity Instructor",
      company: "ASCTE",
      date: "2023 – Present",
      description:
        "Built red/blue team labs, taught Kali Linux & Purple Team defense, and developed SOC simulation content.",
    },
    {
      role: "AI Lab Coach",
      company: "Freelance",
      date: "2022 – 2023",
      description:
        "Helped students run LLMs locally, used Docker for training setups, and ran AI experiments.",
    },
    {
      role: "IT Administrator",
      company: "SPS Inc.",
      date: "2022 – 2023",
      description:
        "Managed Office 365, VMs, backups, and worked with Army Futures Command.",
    },
  ];
  
  const Timeline = () => {
    const textColor = useColorModeValue("gray.700", "gray.200");
    const borderColor = useColorModeValue("gray.200", "gray.600");
  
    return (
      <VStack align="start" spacing={8} position="relative">
        {experiences.map((item, index) => (
          <Box key={index} pl={4} borderLeft="2px solid" borderColor={borderColor}>
            <HStack spacing={4} mb={1}>
              <Heading size="md" color={textColor}>{item.role}</Heading>
              <Text fontSize="sm" color="gray.500">• {item.company}</Text>
            </HStack>
            <Text fontSize="sm" color="gray.400">{item.date}</Text>
            <Text color={textColor}>{item.description}</Text>
          </Box>
        ))}
      </VStack>
    );
  };
  
  export default Timeline;
  