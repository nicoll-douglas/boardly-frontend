import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Heading,
  Stack,
  StackDivider,
  SlideFade,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { formatISOString } from "@/lib/utils";
import StackData from "./StackData";
import { Spinner } from "@/components/common";

export default function BoardInfo({ variant = "xl", data, isLoading }) {
  const variantStyles = {
    xl: {
      display: { base: "none", xl: "flex" },
      position: "sticky",
      h: { md: "calc(100vh - 88px)" },
      w: { md: 64, lg: 80 },
      minW: { md: 64, lg: 80 },
      top: "72px",
      variant: "outline",
    },
    base: {
      display: { base: "flex", xl: "none" },
      position: "static",
      variant: "outline",
      h: "fit",
      w: "full",
    },
  };

  return (
    <Card size={"sm"} overflowY={"auto"} {...variantStyles[variant]}>
      {isLoading ? (
        <Spinner />
      ) : (
        <SlideFade in={!!data} offsetY={10}>
          <CardHeader>
            <Heading
              size={"md"}
              as={Link}
              to={`/boards/${data.board.name}`}
            >{`/${data.board.name}`}</Heading>
          </CardHeader>
          <Divider />
          <CardBody>
            <Stack divider={<StackDivider />}>
              <StackData
                name="Admin"
                value={data.board.admin.username}
                link={`/users/${data.board.admin.username}`}
              />
              <StackData name="Threads" value={data.board.threads.length} />
              <StackData
                name="Created On"
                value={formatISOString(data.board.createdAt)}
              />
            </Stack>
          </CardBody>
        </SlideFade>
      )}
    </Card>
  );
}
