import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/pages/About.tsx
import { Box, Heading, Text, Button, Icon, useColorModeValue, } from "@chakra-ui/react";
import { FaDownload } from "react-icons/fa";
import GitHubCalendar from "react-github-calendar";
const About = () => {
    const textColor = useColorModeValue("gray.700", "gray.200");
    const cardBg = useColorModeValue("white", "gray.700");
    return (_jsxs(Box, { children: [_jsx(Heading, { mb: 4, color: textColor, children: "About Me" }), _jsx(Text, { mb: 6, color: textColor, children: "I build red/blue team simulations, use AWS, Docker, and create cybersecurity learning paths." }), _jsx(Heading, { size: "md", mb: 2, color: textColor, children: "Resume" }), _jsx(Button, { as: "a", href: "/Brandon_Johnson_Resume.pdf", download: true, leftIcon: _jsx(Icon, { as: FaDownload }), colorScheme: "teal", variant: "solid", mb: 8, children: "View My Resume" }), _jsx(Heading, { size: "md", mb: 4, color: textColor, children: "GitHub Contributions" }), _jsx(Box, { bg: cardBg, borderRadius: "md", p: 4, boxShadow: "md", overflowX: "auto", maxW: "fit-content", children: _jsx(GitHubCalendar, { username: "bjohnsonascte", blockSize: 12, blockMargin: 4, fontSize: 14, colorScheme: "light" }) })] }));
};
export default About;
