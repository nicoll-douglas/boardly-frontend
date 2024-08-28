import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
  SkeletonText,
  Skeleton,
} from "@chakra-ui/react";
import noWrap from "@/lib/constants/noWrap";
import EditProfileBtn from "./EditProfileBtn";
import useProfileContext from "../../hooks/useProfileContext";
import DataBar from "@/components/common/DataBar";
import AvatarWithEditing from "./AvatarWithEditing";
import DOMPurify from "dompurify";
import formatISOString from "@/lib/utils/formatISOString";

export default function ProfileCard() {
  const { isLoading, profile = {} } = useProfileContext();
  const isLoaded = !isLoading;
  const { username, bio, avatar } = profile;

  return (
    <Card w={"full"} h={"full"} as={"section"} aria-label="Profile">
      <CardHeader p={4} gap={3} display={"flex"} alignItems={"center"}>
        <AvatarWithEditing name={username} isLoaded={isLoaded} src={avatar} />
        <Skeleton isLoaded={isLoaded} maxW={"calc(100% - 120px)"}>
          <Heading
            fontSize={"2xl"}
            as={"h1"}
            lineHeight={"normal"}
            minW={28}
            {...noWrap}
          >
            {username}
          </Heading>
        </Skeleton>
        <EditProfileBtn ml="auto" />
      </CardHeader>
      <CardBody pt={0} p={4}>
        <SkeletonText noOfLines={4} isLoaded={isLoaded} mb={2}>
          <Heading size={"sm"} color={"gray.300"}>
            Bio
          </Heading>
          <Text>{bio && DOMPurify.sanitize(bio)}</Text>
        </SkeletonText>
        <SkeletonText noOfLines={4} isLoaded={isLoaded}>
          <DataBar
            name="Joined on"
            value={formatISOString(profile.createdAt)}
            dividerTop
          />
          <DataBar name="Threads" value={profile.threadCount} dividerTop />
          {profile.age && <DataBar name="Age" value={profile.age} dividerTop />}
          {profile.pronouns && (
            <DataBar name="Pronouns" value={profile.pronouns} dividerTop />
          )}
        </SkeletonText>
      </CardBody>
    </Card>
  );
}
