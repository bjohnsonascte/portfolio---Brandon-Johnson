import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/pages/Home.tsx
import { Box, Heading, Text, VStack, SimpleGrid, useColorModeValue, Icon, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, } from "@chakra-ui/react";
import { FaReact, FaDocker, FaAws, FaLinux, FaPython, FaGitAlt, } from "react-icons/fa";
import { SiSplunk, SiVite, SiChakraui, SiVmware, } from "react-icons/si";
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
    const handleCardClick = (project) => {
        setSelectedProject(project);
        onOpen();
    };
    return (_jsxs(Box, { children: [_jsx(Heading, { size: "2xl", mb: 2, color: textColor, children: "Brandon Johnson" }), _jsx(Text, { fontSize: "lg", mb: 6, color: textColor, children: "Cyber Range Developer \u2022 Red Team Builder" }), _jsx(Heading, { size: "lg", mb: 2, color: textColor, children: "About Me" }), _jsx(Text, { mb: 6, color: textColor, children: "I build and teach cybersecurity labs with real-world tools and threats. My work combines hands-on red team tactics, dashboards, and automation to train the next generation of defenders." }), _jsx(Heading, { size: "lg", mb: 4, color: textColor, children: "Skills & Tools" }), _jsx(SimpleGrid, { columns: { base: 2, sm: 3, md: 4 }, spacing: 6, mb: 10, children: techIcons.map((tech, i) => (_jsxs(VStack, { children: [_jsx(Icon, { as: tech.icon, boxSize: 8, color: "teal.400" }), _jsx(Text, { fontSize: "sm", color: textColor, children: tech.label })] }, i))) }), _jsx(Heading, { size: "lg", mb: 4, color: textColor, children: "Featured Projects" }), _jsx(SimpleGrid, { columns: { base: 1, md: 2 }, spacing: 6, mb: 10, children: projects.map((project, i) => (_jsx(Box, { p: 6, borderWidth: "1px", borderRadius: "lg", shadow: "md", bg: cardBg, cursor: "pointer", _hover: {
                        transform: "scale(1.03)",
                        boxShadow: "lg",
                        transition: "0.2s ease-in-out",
                    }, onClick: () => handleCardClick(project), children: _jsxs(VStack, { align: "start", spacing: 2, children: [_jsx(Heading, { size: "md", children: project.title }), _jsx(Text, { color: textColor, noOfLines: 2, children: project.description })] }) }, i))) }), _jsxs(Modal, { isOpen: isOpen, onClose: onClose, isCentered: true, size: "xl", children: [_jsx(ModalOverlay, {}), _jsxs(ModalContent, { bg: cardBg, children: [_jsx(ModalHeader, { children: selectedProject.title }), _jsx(ModalCloseButton, {}), _jsx(ModalBody, { pb: 6, children: _jsx(Text, { color: textColor, children: selectedProject.description }) })] })] })] }));
};
export default Home;
