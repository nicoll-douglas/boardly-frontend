import {
  Card,
  CardBody,
  Flex,
  VStack,
  Avatar,
  Divider,
  CardHeader,
} from "@chakra-ui/react";
import { Tag, ButtonLink, DeletedLabel } from "@/components/common";
import { Link } from "react-router-dom";
import { ReplyBtn } from "@/features/replies";
import useThread from "../hooks/useThread";

export default function AvatarCard({
  tagValues,
  user,
  children,
  replyBtn,
  reply,
  ...props
}) {
  const { data } = useThread();

  return (
    <Card variant={"filled"} size={"sm"} w={"full"} {...props}>
      <CardHeader>
        <Flex gap={2}>
          {tagValues?.map((value, index) => (
            <Tag key={index}>{value}</Tag>
          ))}
          {replyBtn && !data.thread.board.deleted && (
            <ReplyBtn ml="auto" reply={reply} />
          )}
        </Flex>
      </CardHeader>
      <Divider />
      <CardBody>
        <Flex gap={{ base: 2, sm: 3 }} flexDir={{ base: "column", sm: "row" }}>
          <Flex
            flexDir={{ base: "row-reverse", sm: "column" }}
            alignItems={{ base: "center", sm: "start" }}
            pr={{ base: 0, sm: 3 }}
            borderRightWidth={{ base: 0, sm: 1 }}
            gap={{ base: 2, sm: 1 }}
            justifyContent={"start"}
          >
            {user.deleted ? (
              <DeletedLabel>deleted user</DeletedLabel>
            ) : (
              <ButtonLink
                to={`/users/${user.username}`}
                py={0}
                h="fit-content"
                pb={{ base: 1, sm: 0 }}
              >
                {user.username}
              </ButtonLink>
            )}
            {user.deleted ? (
              <Avatar
                borderLeftRadius={{ base: "full", sm: 0 }}
                borderRightRadius={{ base: "full", sm: 0 }}
                borderRadius={{ base: "full", sm: 0 }}
                size={{ base: "sm", sm: "lg", lg: "xl" }}
              />
            ) : (
              <Link to={`/users/${user.username}`}>
                <Avatar
                  name={user.username}
                  src={
                    user.hasAvatar
                      ? user.hasAvatar.startsWith("http")
                        ? user.hasAvatar // Use direct URL if it's already a full URL
                        : `${import.meta.env.VITE_API_URL}/public/avatars/${
                            user.hasAvatar
                          }`
                      : undefined
                  }
                  borderLeftRadius={{ base: "full", sm: 0 }}
                  borderRightRadius={{ base: "full", sm: 0 }}
                  borderRadius={{ base: "full", sm: 0 }}
                  size={{ base: "sm", sm: "lg", lg: "xl" }}
                />
              </Link>
            )}
          </Flex>
          <Divider display={{ base: "flex", sm: "none" }} />
          <VStack alignItems={"start"} w={"full"} gap={0}>
            {children}
          </VStack>
        </Flex>
      </CardBody>
    </Card>
  );
}
