import React, { useState, useEffect } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Input,
  FormLabel,
  Box,
} from "@chakra-ui/react";
const UpdateProfile = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Update Profile</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box mb={4}>
            <FormLabel>Email</FormLabel>
            <Input placeholder="Enter new email" />
          </Box>
          <Box mb={4}>
            <FormLabel>Username</FormLabel>
            <Input placeholder="Enter new username" />
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Save
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};      
  

export default UpdateProfile
