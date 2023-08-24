import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editBlog } from '../redux/Blogs/action';
import {
  Textarea,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
} from '@chakra-ui/react';

const EditBlogModal = ({ blog, onClose }) => {
  const [content, setContent] = useState(blog.content);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(editBlog(blog._id, { content }));
    onClose();
  };

  return (
    <Modal isOpen={true} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Blog</ModalHeader>
        <ModalBody>
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
            Save Changes
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditBlogModal;
