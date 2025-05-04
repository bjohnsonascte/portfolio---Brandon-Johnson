// src/pages/Experience.tsx
import { Box, Heading, Text, VStack, useColorModeValue } from "@chakra-ui/react";

const experiences = [
  {
    title: "Network Support Technician LvL II — Huntsville Hospital",
    date: "Jun 2023 – Present",
    details: [
      "Provided technical support, software installs, and BitLocker encryption.",
      "Automated tasks with batch files; managed 100+ VMware thin clients.",
    ],
  },
  {
    title: "Junior Cyber Associate — H2L Solutions",
    date: "Mar 2024 – Jun 2024",
    details: [
      "Focused on CMMC, ICS/FRCS cybersecurity, and RMF Authorization.",
    ],
  },
  {
    title: "IT Analyst — Redstone Government Consulting",
    date: "Jan 2023 – Feb 2023",
    details: [
      "Performed computer wipes, reinstalled OS with Intune, managed tickets.",
    ],
  },
  {
    title: "IT Administrator — Systems Products and Solutions",
    date: "Jun 2022 – Jan 2023",
    details: [
      "Managed Office 365, deployed backups, supported Army Futures Command.",
    ],
  },
];

const Experience = () => {
  const textColor = useColorModeValue("gray.700", "gray.200");

  return (
    <Box>
      <Heading size="xl" mb={6} color={textColor}>Professional Experience</Heading>
      <VStack align="start" spacing={6}>
        {experiences.map((exp, i) => (
          <Box key={i}>
            <Heading size="md">{exp.title}</Heading>
            <Text fontSize="sm" color="gray.500">{exp.date}</Text>
            {exp.details.map((line, j) => (
              <Text key={j} color={textColor}>• {line}</Text>
            ))}
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Experience;
