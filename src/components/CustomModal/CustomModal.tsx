import { StringMap, TOptions } from 'i18next'
import { AlertDialog, Button } from 'native-base'
import React, { useRef } from 'react'

interface Props {
  isOpen: boolean
  onClose: () => void
  title: string | TOptions<StringMap> | undefined | JSX.Element
  description: string | TOptions<StringMap> | undefined | JSX.Element
  actionBtn: JSX.Element
}

const CustomModal: React.FC<Props> = (props) => {
  const { isOpen, onClose, title, description, actionBtn } = props
  const cancelRef = useRef(null)

  return (
    <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
      <AlertDialog.Content>
        <AlertDialog.CloseButton />
        <AlertDialog.Header>{title}</AlertDialog.Header>
        <AlertDialog.Body>{description}</AlertDialog.Body>
        <AlertDialog.Footer>
          <Button.Group space={2}>
            <Button variant="unstyled" colorScheme="coolGray" onPress={onClose} ref={cancelRef}>
              Cancel
            </Button>
            {actionBtn}
          </Button.Group>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  )
}

export default CustomModal
