import { Box, Flex, Image } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Pause, WindupChildren } from "windups";
import AvatarsPlaceholder from "./AvatarsPlaceholder";

const examples = [
  {
    label: "تشكيل لصورتي على ستايل شارلز برنت",
    imageUrl: "/shots/crumb.png",
  },
  { label: "صورتي على شكل إدوارد منش", imageUrl: "/shots/munch.png" },
  { label: "صورتي على شكل شخصية ديزني", imageUrl: "/shots/pixar.png" },
  { label: "صورتي على شكل سبايدرمان", imageUrl: "/shots/spiderman.jpg" },
  { label: "صورتي على شكل رسمه فان كوخ", imageUrl: "/shots/vangogh.png" },
  { label: "صورتي ەلى شكل محارب", imageUrl: "/shots/warrior.png" },
  { label: "صورتي على شكل رسمة آندي وارهول", imageUrl: "/shots/wharol.png" },
  { label: "صورتي على شكل شخصية سانتا كلوز", imageUrl: "/shots/santa.jpg" },
  {
    label: "صورتي على شكل شخصية قوستاف كليمت",
    imageUrl: "/shots/klimt.png",
  },
];

const prompts = examples.sort((a, b) => 0.5 - Math.random());

const MotionImage = motion(Image);
const MotionBox = motion(Box);

const Demo = () => {
  const [step, setStep] = useState(0);

  return (
    <Box ml={{ base: 0, lg: 10 }} width="100%">
      <Box
        width="100%"
        marginX="auto"
        fontSize="md"
        shadow="0 14px 40px 10px #f7d0dc, 0 5px 10px -7px black"
        borderRadius="md"
        py={2}
        px={3}
        backgroundColor="white"
        borderWidth={1}
        borderColor="gray.200"
      >
        <WindupChildren
          onFinished={() => {
            setStep(step === prompts.length - 1 ? 0 : step + 1);
          }}
        >
          {prompts[step].label}
          <Pause ms={4000} />
        </WindupChildren>
        <MotionBox
          borderRight="1px"
          borderColor="gray.400"
          as="span"
          bg="white"
          ml={1}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 1 }}
          transition={{ repeat: Infinity, duration: 1.4 }}
        />
      </Box>
      <Flex justifyContent="space-between" mt={6} pr={6}>
        <Box width="100%" position="relative" ml={10}>
          <AvatarsPlaceholder />
        </Box>
        <AnimatePresence mode="wait">
          <MotionImage
            key={prompts[step].label}
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 30, opacity: 0 }}
            transition={{ delay: 0.2 }}
            shadow="2xl"
            borderRadius="3xl"
            width="10rem"
            zIndex={10}
            alt={prompts[step].label}
            src={prompts[step].imageUrl}
          />
        </AnimatePresence>
      </Flex>
    </Box>
  );
};

export default Demo;
