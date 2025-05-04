import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/pages/Experience.tsx
import { Box, Heading, Text, VStack, HStack, Divider, useColorModeValue, Icon, } from "@chakra-ui/react";
import { FaCircle } from "react-icons/fa";
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
    return (_jsxs(Box, { children: [_jsx(Heading, { size: "xl", mb: 6, color: textColor, children: "Professional Experience" }), _jsx(VStack, { align: "start", spacing: 10, divider: _jsx(Divider, { borderColor: borderColor }), children: experienceData.map((item, index) => (_jsxs(HStack, { align: "start", spacing: 4, children: [_jsx(Icon, { as: FaCircle, boxSize: 3, color: "teal.400", mt: 1 }), _jsxs(Box, { bg: cardBg, p: 5, borderRadius: "md", boxShadow: "md", _hover: { boxShadow: "lg" }, children: [_jsx(Heading, { size: "md", mb: 1, children: item.title }), _jsx(Text, { fontSize: "sm", color: "gray.500", children: item.date }), _jsx(VStack, { align: "start", mt: 2, spacing: 2, children: item.details.map((point, i) => (_jsxs(Text, { color: textColor, children: ["\u2022 ", point] }, i))) })] })] }, index))) })] }));
};
export default Experience;
