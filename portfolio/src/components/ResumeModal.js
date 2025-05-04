import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Box, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, useDisclosure, useColorModeValue, Tooltip, } from "@chakra-ui/react";
import { FaFilePdf } from "react-icons/fa";
const ResumeModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const bg = useColorModeValue("white", "gray.800");
    return (_jsxs(_Fragment, { children: [_jsx(Tooltip, { label: "Click to view resume", hasArrow: true, placement: "top", children: _jsx(Button, { onClick: onOpen, leftIcon: _jsx(FaFilePdf, {}), colorScheme: "teal", variant: "solid", children: "View My Resume" }) }), _jsxs(Modal, { isOpen: isOpen, onClose: onClose, size: "5xl", isCentered: true, children: [_jsx(ModalOverlay, {}), _jsxs(ModalContent, { bg: bg, children: [_jsx(ModalHeader, { children: "Resume Preview" }), _jsx(ModalCloseButton, {}), _jsx(ModalBody, { children: _jsx(Box, { as: "iframe", src: "/Brandon_Johnson_Resume.pdf", width: "100%", height: "600px", border: "none", title: "Resume Preview" }) })] })] })] }));
};
export default ResumeModal;
