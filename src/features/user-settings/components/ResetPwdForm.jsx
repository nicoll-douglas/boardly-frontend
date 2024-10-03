import * as Ch from "@chakra-ui/react";
import { passwordValidation } from "@/features/auth";
import { helperText } from "@/lib/constants";
import { PasswordInput } from "@/components/form";
import useResetPwd from "../hooks/useResetPwd";

export default function ResetPwdForm() {
  const { form, onSubmit } = useResetPwd();

  return (
    <Ch.Box maxW={96}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Ch.FormControl
          isRequired
          isInvalid={form.formState.errors.currentPassword}
          mb={6}
        >
          <Ch.FormLabel>Current Password</Ch.FormLabel>
          <PasswordInput
            placeholder="Enter current password"
            {...form.register("currentPassword", {
              required: "Please enter your current password",
            })}
          />
          <Ch.FormErrorMessage>
            {form.formState.errors.currentPassword?.message}
          </Ch.FormErrorMessage>
        </Ch.FormControl>
        <Ch.FormControl
          isRequired
          isInvalid={form.formState.errors.newPassword}
          mb={6}
        >
          <Ch.FormLabel>New Password</Ch.FormLabel>
          <Ch.Input
            placeholder={"Enter new password"}
            type="password"
            {...form.register("newPassword", passwordValidation)}
          />
          <Ch.FormErrorMessage>
            {form.formState.errors.newPassword?.message}
          </Ch.FormErrorMessage>
          <Ch.FormHelperText>
            <Ch.UnorderedList>
              {helperText.newPwd.map((text, index) => (
                <Ch.ListItem key={index}>{text}</Ch.ListItem>
              ))}
            </Ch.UnorderedList>
          </Ch.FormHelperText>
        </Ch.FormControl>
        <Ch.FormControl
          mb={6}
          isRequired
          isInvalid={form.formState.errors.confirmNewPassword}
        >
          <Ch.FormLabel>Confirm New Password</Ch.FormLabel>
          <Ch.Input
            placeholder="Re-enter password"
            type="password"
            {...form.register("confirmNewPassword", {
              required: "Please confirm your new password",
              validate: (v) =>
                form.getValues("newPassword") === v || "Passwords do not match",
            })}
          />
          <Ch.FormErrorMessage>
            {form.formState.errors.confirmNewPassword?.message}
          </Ch.FormErrorMessage>
        </Ch.FormControl>
        <Ch.Button type="submit" w={"full"}>
          Submit
        </Ch.Button>
      </form>
    </Ch.Box>
  );
}
