import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/pages/Blog.tsx
import { Box, Heading, Text, VStack, Link, useColorModeValue, } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
const posts = [
    {
        title: "Building a Cyber Range for Red Team Education",
        description: "How I created a simulated lab with T-Pot, Kali, and ELK to teach attack detection and defense.",
        url: "https://example.com/red-team-lab",
    },
    {
        title: "Teaching Cybersecurity with Real-World Labs",
        description: "My approach to combining offensive tools and defensive dashboards in the classroom.",
        url: "https://example.com/teaching-cyber",
    },
];
const Blog = () => {
    const textColor = useColorModeValue("gray.700", "gray.200");
    return (_jsxs(Box, { children: [_jsx(Heading, { size: "xl", mb: 6, color: textColor, children: "Writing & Blog" }), _jsx(VStack, { align: "start", spacing: 6, children: posts.map((post, i) => (_jsxs(Box, { children: [_jsx(Heading, { size: "md", color: "teal.400", children: _jsxs(Link, { href: post.url, isExternal: true, children: [post.title, " ", _jsx(ExternalLinkIcon, { mx: "2px" })] }) }), _jsx(Text, { color: textColor, children: post.description })] }, i))) })] }));
};
export default Blog;
