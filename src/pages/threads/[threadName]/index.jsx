import { Container, Header, Logo } from "@/components/common";
import ToggleThemeBtn from "@/features/ui/dark-mode";
import { Spacer, Flex, Card, Divider } from "@chakra-ui/react";
import { ProfileLink, ProfileProvider } from "@/features/user-profile";
import { BoardsListProvider, BoardsList } from "@/features/boards";
import {
  ThreadProvider,
  Thread as ThreadData,
  BoardInfo,
} from "@/features/threads";
import { useParams } from "react-router-dom";

export default function Thread() {
  const { threadId } = useParams();

  return (
    <BoardsListProvider>
      <Container>
        <Header>
          <Logo to="/home" />
          <Spacer />
          <ProfileProvider user={{ isMe: true }} preventEarlyRender={false}>
            <ProfileLink mr={3} />
          </ProfileProvider>
          <ToggleThemeBtn />
        </Header>
        <Flex
          flex={1}
          pb={4}
          px={4}
          gap={4}
          flexDir={{ base: "column", md: "row" }}
          w={"full"}
        >
          <BoardsList />
          <ThreadProvider threadId={threadId}>
            <Flex
              flexDir={"column"}
              gap={4}
              flex={1}
              as={Card}
              variant={"unstyled"}
            >
              <BoardInfo variant="base" />
              <Divider display={{ base: "flex", md: "none" }} />
              <ThreadData />
            </Flex>
            <BoardInfo variant="xl" />
          </ThreadProvider>
        </Flex>
      </Container>
    </BoardsListProvider>
  );
}
