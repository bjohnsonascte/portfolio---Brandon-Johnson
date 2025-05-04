// src/pages/Blog.tsx
import {
    Box,
    Heading,
    Text,
    VStack,
    Link,
    useColorModeValue,
  } from "@chakra-ui/react";
  import { ExternalLinkIcon } from "@chakra-ui/icons";
  
  const posts = [
    {
      title: "Building a Cyber Range for Red Team Education",
      description:
        "How I created a simulated lab with T-Pot, Kali, and ELK to teach attack detection and defense.",
      url: "https://example.com/red-team-lab",
    },
    {
      title: "Teaching Cybersecurity with Real-World Labs",
      description:
        "My approach to combining offensive tools and defensive dashboards in the classroom.",
      url: "https://example.com/teaching-cyber",
    },
  ];
  
  const Blog = () => {
    const textColor = useColorModeValue("gray.700", "gray.200");
  
    return (
      <Box>
        <Heading size="xl" mb={6} color={textColor}>
          Writing & Blog
        </Heading>
        <VStack align="start" spacing={6}>
          {posts.map((post, i) => (
            <Box key={i}>
              <Heading size="md" color="teal.400">
                <Link href={post.url} isExternal>
                  {post.title} <ExternalLinkIcon mx="2px" />
                </Link>
              </Heading>
              <Text color={textColor}>{post.description}</Text>
            </Box>
          ))}
        </VStack>
      </Box>
    );
  };
  
  export default Blog;
  