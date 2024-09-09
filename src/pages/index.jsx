import Container from "@/components/common/Container";
import Logo from "@/components/common/Logo";
import Header from "@/components/common/Header";
import LoginBtn from "@/features/auth/components/LoginBtn";
import RegisterBtn from "@/features/auth/components/RegisterBtn";
import { Center, useDisclosure } from "@chakra-ui/react";
import Hero from "@/components/common/Hero";
import Authorship from "@/components/common/Authorship";
import ToggleableForm from "@/features/ui/formToggle/components/ToggleableForm";
import { useState } from "react";
import usePrivilege from "@/lib/hooks/usePrivilege";
import { Navigate } from "react-router-dom";
import Loader from "@/components/common/Loader";

export default function Index() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoginForm, setIsLoginForm] = useState(null);
  const { elevated, isLoading } = usePrivilege();

  if (isLoading) return <Loader />;
  if (elevated) return <Navigate to={"/boards/main"} />;

  function openLoginForm() {
    setIsLoginForm(true);
    onOpen();
  }

  function openRegisterForm() {
    setIsLoginForm(false);
    onOpen();
  }

  return (
    <Container>
      <Header>
        <Logo to="/" />
        <LoginBtn ml="auto" onClick={openLoginForm} />
        <RegisterBtn
          ml={6}
          data-testid="register-btn"
          onClick={openRegisterForm}
        />
        <ToggleableForm
          isOpen={isOpen}
          isLoginForm={isLoginForm}
          onClose={onClose}
          onToggle={() => setIsLoginForm(!isLoginForm)}
        />
      </Header>
      <Center flex={1} mt={12}>
        <Hero onJoin={openRegisterForm} />
      </Center>
      <Center mb={16}>
        <Authorship />
      </Center>
    </Container>
  );
}
