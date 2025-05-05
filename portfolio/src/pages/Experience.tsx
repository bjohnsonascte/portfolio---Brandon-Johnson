// src/pages/Experience.tsx
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Divider,
  useColorModeValue,
  Icon,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import { FaCircle } from "react-icons/fa";
import { useEffect, useState } from "react";

const experienceData = [
  {
    title: "IT Administrator – Systems Products & Solutions, Inc.",
    date: "Jun 2022 – Jan 2023",
    details: [
      "Deployed Office 365 to 150+ users and implemented secure data backups.",
      "Interfaced with Army Futures and AMC to ensure synchronization.",
    ],
  },
  {
    title: "Network Support Technician LvL II – Huntsville Hospital",
    date: "Jun 2023 – Present",
    details: [
      "Diagnosed and resolved IT support issues for 100+ thin clients via VMware.",
      "Automated tasks with batch files and implemented BitLocker encryption.",
      "Managed secure systems in the hospital data center.",
    ],
  },
  {
    title: "Junior Cyber Associate – H2L Solutions, Inc.",
    date: "Mar 2024 – Jun 2024",
    details: [
      "Studied CMMC, ICS/FRCS security, and RMF Authorization to Operate.",
      "Supported critical cybersecurity framework processes.",
    ],
  },
  {
    title: "Cybersecurity Instructor – ASCTE",
    date: "2024 – Present",
    details: [
      "Built hands-on red/blue team labs with Kali and Purple Team tooling.",
      "Developed simulation-based content with ELK and SIEM tools.",
    ],
  },
];

const Experience = () => {
  const cardBg = useColorModeValue("white", "gray.700");
  const textColor = useColorModeValue("gray.700", "gray.200");
  const borderColor = useColorModeValue("gray.300", "gray.600");

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box>
      <Heading size="xl" mb={6} color={textColor}>
        Professional Experience
      </Heading>

      <VStack
        align="start"
        spacing={10}
        divider={<Divider borderColor={borderColor} />}
      >
        {isLoading
          ? Array.from({ length: 4 }).map((_, index) => (
              <HStack key={index} align="start" spacing={4}>
                <Icon as={FaCircle} boxSize={3} color="teal.400" mt={1} />
                <Box
                  bg={cardBg}
                  p={5}
                  borderRadius="md"
                  boxShadow="md"
                  w="full"
                >
                  <Skeleton height="20px" width="70%" mb={2} />
                  <Skeleton height="14px" width="40%" mb={4} />
                  <SkeletonText noOfLines={3} spacing={3} />
                </Box>
              </HStack>
            ))
          : experienceData.map((item, index) => (
              <HStack key={index} align="start" spacing={4}>
                <Icon as={FaCircle} boxSize={3} color="teal.400" mt={1} />
                <Box
                  bg={cardBg}
                  p={5}
                  borderRadius="md"
                  boxShadow="md"
                  _hover={{ boxShadow: "lg" }}
                >
                  <Heading size="md" mb={1}>
                    {item.title}
                  </Heading>
                  <Text fontSize="sm" color="gray.500">
                    {item.date}
                  </Text>
                  <VStack align="start" mt={2} spacing={2}>
                    {item.details.map((point, i) => (
                      <Text key={i} color={textColor}>
                        • {point}
                      </Text>
                    ))}
                  </VStack>
                </Box>
              </HStack>
            ))}
      </VStack>
    </Box>
  );
};

export default Experience;
