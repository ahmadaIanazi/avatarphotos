import React from "react";
import {
  Box,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Tag,
  Text,
} from "@chakra-ui/react";
import { HiBadgeCheck } from "react-icons/hi";
import { formatStudioPrice } from "@/core/utils/prices";

export const CheckedListItem = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <ListItem>
    <ListIcon fontSize="xl" as={HiBadgeCheck} /> {children}
  </ListItem>
);

const Pricing = () => {
  return (
    <SimpleGrid width="100%" spacing={6} columns={{ base: 1, md: 2 }}>
      <Box
        backgroundColor="white"
        border="4px solid black"
        borderRadius={10}
        padding={8}
        transition="all 250ms"
      >
        <Text mt={2} fontWeight="black" fontSize="4xl">
          لماذا غير مجاني؟
        </Text>
        <Text mt={2} mb={4}>
          تدريب كمبيوتر الذكاء الإصنطاعي على صور معينه يكلفنا الكثير من الطاقة السحابية وأيضاً في كل مره تطلب فيها صورة جديدة خيالية تكّلفنا الكثير من المبالغ المالية لتجهيز السيرفرات السحابية لتحمل الطاقة لصنع هذه الحسابات الصورية المعقدة
        </Text>
      </Box>
      <Box
        backgroundColor="white"
        border="4px solid black"
        borderRadius={10}
        padding={8}
        transition="all 250ms"
      >
        <Tag
          py={1}
          px={3}
          shadow="semibold"
          border="2px solid black"
          color="black"
          backgroundColor="brand.500"
        >
          شخصية + {process.env.NEXT_PUBLIC_STUDIO_SHOT_AMOUNT} صورة
        </Tag>

        <Box mt={2} fontWeight="black" fontSize="3.5rem">
          {formatStudioPrice()}
          <Box
            ml={1}
            as="span"
            fontWeight="500"
            color="coolGray.400"
            fontSize="1.2rem"
          >
            / شخصية
          </Box>
        </Box>

        <List mt={2} mb={4} spacing={1}>
          <CheckedListItem>
            <b>1</b> شخصية <b> جاهزة لصنع صور </b>
          </CheckedListItem>
          <CheckedListItem>
            <b>{process.env.NEXT_PUBLIC_STUDIO_SHOT_AMOUNT}</b> صور خاصة
          </CheckedListItem>
          <CheckedListItem>تستطيع كتابة ماترغب به بنفسك</CheckedListItem>
          <CheckedListItem>صنع بالسعودية 🖤</CheckedListItem>
        </List>
      </Box>
    </SimpleGrid>
  );
};

export default Pricing;
