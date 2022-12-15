import { Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

interface ItemProps {
  iconName: string;
  title: string;
  children: React.ReactNode;
}

const Item = ({ iconName, title, children }: ItemProps) => (
  <Flex alignItems="center" direction="column" p={4}>
    <Image alt="logo" width="8rem" src={iconName} />
    <Text textAlign="center" fontWeight="900" fontSize="2xl" mt={3}>
      {title}
    </Text>
    <Text
      maxWidth={{ base: "20rem", lg: "13rem" }}
      mt={2}
      textAlign="center"
      fontSize="lg"
    >
      {children}
    </Text>
  </Flex>
);

const Features = () => {
  return (
    <Flex width="100%" backgroundColor="whiteAlpha.900" py={10} flex="1">
      <Flex
        px={{ base: 4, lg: 0 }}
        py={4}
        width="100%"
        flexDirection="column"
        margin="auto"
        maxWidth="container.lg"
      >
        <SimpleGrid mb={10} columns={{ base: 1, md: 3 }}>
          <Item iconName="publish.svg" title="١. ارفع">
            إرفع <b>صور لك</b> (أو لأي شخص آخر) بزوايل مختلفة لصنع الشخصية
          </Item>
          <Item iconName="square.svg" title="٢. أنتظر">
             أشرب قهوة وروّق ويقوم التطبيق بصنع  <b>الشخصية الخاصة بك</b> والتدرب عليها
          </Item>
          <Item iconName="preview.svg" title="٣. حمّل">
              استخدم خيالك واكتب أي شي ترغب تكوينه على شخصيتك  <b>ويقوم التطبيق بوضعك في الصورة!</b>
          </Item> 
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};

export default Features;
