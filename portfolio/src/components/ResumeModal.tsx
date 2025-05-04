import {
    Box,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    useColorModeValue,
    Tooltip,
  } from "@chakra-ui/react";
  import { FaFilePdf } from "react-icons/fa";
  
  const ResumeModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const bg = useColorModeValue("white", "gray.800");
  
    return (
      <>
        <Tooltip label="Click to view resume" hasArrow placement="top">
          <Button
            onClick={onOpen}
            leftIcon={<FaFilePdf />}
            colorScheme="teal"
            variant="solid"
          >
            View My Resume
          </Button>
        </Tooltip>
  
        <Modal isOpen={isOpen} onClose={onClose} size="5xl" isCentered>
          <ModalOverlay />
          <ModalContent bg={bg}>
            <ModalHeader>Resume Preview</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box
                as="iframe"
                src="/Brandon_Johnson_Resume.pdf"
                width="100%"
                height="600px"
                border="none"
                title="Resume Preview"
              />
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    );
  };
  
  export default ResumeModal;
  