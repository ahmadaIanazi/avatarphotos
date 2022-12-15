import AuthForm from "@/components/layout/AuthForm";
import { Box, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { MdCheckCircleOutline } from "react-icons/md";

const Login = () => {
  const router = useRouter();

  return (
    <Flex flex="1" align="center" justify="center">
      {router.query.verifyRequest ? (
        <Box textAlign="center">
          <Heading>
            إفحص إيميلك <Icon mb="-4px" as={MdCheckCircleOutline} />
          </Heading>
          <Text mt={3} fontSize="2xl">
            تم إرسال رابط دخول على أيميلك
          </Text>
        </Box>
      ) : (
        <AuthForm />
      )}
    </Flex>
  );
};

export default Login;
