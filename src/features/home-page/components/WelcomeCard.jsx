import {
  Button,
  Card,
  CardBody,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  SlideFade,
  Text,
  useDisclosure,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
} from "@chakra-ui/react";
import welcomeUrl from "@/assets/images/welcome.svg";
import { useEffect } from "react";

export default function WelcomeCard() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const fontSize = "15px";

  function handleCopyEmail() {
    if (!isOpen) {
      onOpen();
      try {
        navigator.clipboard.writeText("dev.nicoll.douglas@gmail.com");
      } catch (err) {
        console.log(err);
      }
    }
  }

  useEffect(() => {
    if (!isOpen) return;
    const timeout = setTimeout(onClose, 2000);
    return () => clearTimeout(timeout);
  }, [isOpen]);

  return (
    <Popover isOpen={isOpen} closeOnBlur>
      <Card
        size={"sm"}
        variant={"outline"}
        as={"section"}
        aria-labelledby="welcome-heading"
      >
        <CardBody>
          <SlideFade
            in={true}
            offsetY={10}
            transition={{ enter: { delay: 0.05 } }}
          >
            <Center>
              <Flex
                gap={4}
                alignItems={"center"}
                minW={"fit-content"}
                flexDir={{ base: "column", lg: "row" }}
              >
                <Image
                  height={275}
                  width={275}
                  src={welcomeUrl}
                  alt="Welcome"
                />
                <Flex flexDir={"column"}>
                  <Heading mb={1} id="welcome-heading">
                    Welcome to Lorem!
                  </Heading>
                  <Text mb={2} fontSize={fontSize}>
                    Lorem is a small-scale messaging board where you can post
                    threads to variant different boards, reply to users,
                    customise your profile and more. This proof-of-concept
                    application was worked on for 3-4 months and was built
                    React, MongoDB, NodeJS and ExpressJS.
                  </Text>
                  <Text fontSize={fontSize} mb={2} lineHeight={0.9}>
                    Check out my{" "}
                    <Button
                      fontSize={fontSize}
                      as={Link}
                      variant={"link"}
                      target="_blank"
                      href="https://github.com/nicoll-douglas"
                    >
                      GitHub
                    </Button>{" "}
                    for more cool projects or shoot me an email at{" "}
                    <PopoverTrigger>
                      <Button
                        fontSize={fontSize}
                        variant={"link"}
                        onClick={handleCopyEmail}
                      >
                        dev.nicoll.douglas@gmail.com
                      </Button>
                    </PopoverTrigger>
                    .
                  </Text>
                  <Text fontSize={fontSize}>- Nicoll</Text>
                </Flex>
              </Flex>
              <PopoverContent maxW={"fit-content"}>
                <PopoverArrow />
                <PopoverBody>Copied to clipboard!</PopoverBody>
              </PopoverContent>
            </Center>
          </SlideFade>
        </CardBody>
      </Card>
    </Popover>
  );
}
