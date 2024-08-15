import { useParams } from "react-router-dom";
import useEmailVerification from "@/features/auth/emailVerification/hooks/useEmailVerification";
import Container from "@/components/common/Container";
import Header from "@/components/common/Header";
import Logo from "@/components/common/Logo";
import { Flex, Heading, Text, Spinner } from "@chakra-ui/react";

export default function VerificationPage() {
  const { token } = useParams();
  const { isLoading, UIFeedback } = useEmailVerification(token);

  return (
    <Container>
      <Header>
        <Logo to="/" />
      </Header>
      <Flex
        flex={1}
        flexDir={"column"}
        alignItems={"center"}
        py={16}
        textAlign={"center"}
      >
        {UIFeedback && (
          <>
            <Heading as={"h1"} size={"3xl"} mb={6}>
              {UIFeedback.heading}
            </Heading>
            <Text fontSize={"xl"}>{UIFeedback.text}</Text>
          </>
        )}
        {isLoading && <Spinner size={"xl"} />}
      </Flex>
    </Container>
  );
}
