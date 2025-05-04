// src/components/ProjectModal.tsx
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    Text,
    useColorModeValue,
  } from "@chakra-ui/react";
  
  // Define the type for a project
  interface Project {
    title: string;
    description: string;
  }
  
  // Define the props for the modal
  interface ProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: Project;
  }
  
  const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
    const cardBg = useColorModeValue("white", "gray.700");
    const textColor = useColorModeValue("gray.700", "gray.200");
  
    return (
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
        <ModalOverlay />
        <ModalContent bg={cardBg}>
          <ModalHeader>{project.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Text color={textColor}>{project.description}</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  };
  
  export default ProjectModal;
  