import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/components/ProjectModal.tsx
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Text, useColorModeValue, } from "@chakra-ui/react";
const ProjectModal = ({ isOpen, onClose, project }) => {
    const cardBg = useColorModeValue("white", "gray.700");
    const textColor = useColorModeValue("gray.700", "gray.200");
    return (_jsxs(Modal, { isOpen: isOpen, onClose: onClose, isCentered: true, size: "xl", children: [_jsx(ModalOverlay, {}), _jsxs(ModalContent, { bg: cardBg, children: [_jsx(ModalHeader, { children: project.title }), _jsx(ModalCloseButton, {}), _jsx(ModalBody, { pb: 6, children: _jsx(Text, { color: textColor, children: project.description }) })] })] }));
};
export default ProjectModal;
