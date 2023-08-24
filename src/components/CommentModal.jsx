import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { commentBlog } from '../redux/Blogs/action';
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

const CommentModal = ({ blogId, onClose }) => {
  const [comment, setComment] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(commentBlog(blogId, comment));
    onClose();
  };

  return (
    <Modal isOpen={true} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Post a Comment</ModalHeader>
        <ModalBody>
          <Textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Enter your comment"
          />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
            Post Comment
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CommentModal;
