import * as Ch from "@chakra-ui/react";
import CurrentPasswordField from "./CurrentPasswordField";
import useDeleteAccount from "../hooks/useDeleteAccount";
import { useRef } from "react";
import { DeleteIcon } from "@chakra-ui/icons";

export default function DeleteAccountForm() {
  const { form, onSubmit } = useDeleteAccount();
  const { isOpen, onOpen, onClose } = Ch.useDisclosure();
  const cancelRef = useRef();

  return (
    <Ch.Box maxW={96}>
      <form>
        <CurrentPasswordField form={form} />
      </form>
      <Ch.Button
        w={"full"}
        onClick={form.handleSubmit(onOpen)}
        isLoading={form.formState.isSubmitting}
      >
        Submit
      </Ch.Button>
      <Ch.AlertDialog isOpen={isOpen} onClose={onClose} size={"sm"}>
        <Ch.AlertDialogOverlay />
        <Ch.AlertDialogContent mx={4}>
          <Ch.AlertDialogHeader>{"Delete Account?"}</Ch.AlertDialogHeader>
          <Ch.AlertDialogCloseButton />
          <Ch.AlertDialogBody>
            Are you sure you want to delete your account? This action cannot be
            undone.
          </Ch.AlertDialogBody>
          <Ch.AlertDialogFooter>
            <Ch.HStack gap={3}>
              <Ch.Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Ch.Button>
              <Ch.Button
                colorScheme="red"
                onClick={() => {
                  onClose();
                  onSubmit();
                }}
                rightIcon={<DeleteIcon />}
              >
                Confirm
              </Ch.Button>
            </Ch.HStack>
          </Ch.AlertDialogFooter>
        </Ch.AlertDialogContent>
      </Ch.AlertDialog>
    </Ch.Box>
  );
}
