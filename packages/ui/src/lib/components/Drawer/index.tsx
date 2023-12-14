import { Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/react'

import styles from './Drawer.module.css'

type DrawerProps = {
  children: React.ReactNode
  hideCloseButton?: boolean
  onClose?: (event?: React.KeyboardEvent | React.MouseEvent) => void
  open?: boolean
}

export const Drawer = ({
  children,
  hideCloseButton = false,
  open = false,
  onClose,
}: DrawerProps) => {
  return (
    <Modal
      // eslint-disable-next-line @typescript-eslint/dot-notation
      className={styles['drawer']}
      isOpen={open}
      onClose={onClose}
      hideCloseButton={hideCloseButton}
      motionProps={{
        variants: {
          enter: {
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.3,
              ease: 'easeOut',
            },
          },
          exit: {
            x: '100%',
            opacity: 0,
            transition: {
              duration: 0.2,
              ease: 'easeIn',
            },
          },
        },
      }}
    >
      <ModalContent>{() => children}</ModalContent>
    </Modal>
  )
}

export const DrawerBody = ModalBody
export const DrawerHeader = ModalHeader
