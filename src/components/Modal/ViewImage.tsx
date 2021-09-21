import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        mx="auto"
        w="auto"
        h="auto"
        maxW={['300px, 500px, 900px']}
        maxH={['350px, 450px, 600px']}
      >
        <ModalBody p={0}>
          <Image src={imgUrl} objectFit="cover" />
        </ModalBody>
        <ModalFooter
          bg="pGray.800"
          justify="flex-start"
          paddingInline={2.5}
          paddingBlock={2}
        >
          <Link href={imgUrl} isExternal>
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
