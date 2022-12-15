import { ProjectWithShots } from "@/pages/studio/[id]";
import {
  Avatar,
  AvatarGroup,
  Badge,
  Box,
  Button,
  Center,
  Flex,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Project } from "@prisma/client";
import axios from "axios";
import { formatRelative } from "date-fns";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import { IoIosFlash } from "react-icons/io";
import { useMutation } from "react-query";
import FormPayment from "./FormPayment";
import ProjectDeleteButton from "./ProjectDeleteButton";

const ProjectCard = ({
  project,
  handleRefreshProjects,
}: {
  project: ProjectWithShots;
  handleRefreshProjects: () => void;
}) => {
  const {
    mutate: trainModel,
    isLoading: isModelLoading,
    isSuccess,
  } = useMutation(
    `train-model-${project.id}`,
    (project: Project) =>
      axios.post(`/api/projects/${project.id}/train`, {
        prompt,
      }),
    {
      onSuccess: () => {
        handleRefreshProjects();
      },
    }
  );

  const isWaitingPayment = !project.stripePaymentId;
  const isWaitingTraining =
    project.stripePaymentId && !project.replicateModelId;

  const isReady = project.modelStatus === "succeeded";
  const isTraining =
    project.modelStatus === "processing" || project.modelStatus === "pushing";

  return (
    <Box
      position="relative"
      backgroundColor="white"
      width="100%"
      pt={4}
      pb={10}
      px={5}
      borderRadius="xl"
      shadow="lg"
    >
      <VStack spacing={4} alignItems="flex-start">
        <Flex width="100%">
          <Box flex="1">
            <Text fontSize="2xl" fontWeight="semibold">
              صور <b>{project.instanceName}</b>{" "}
              {isReady && (
                <Badge colorScheme="teal">{project.credits} صور متبقية</Badge>
              )}
            </Text>
            <Text textTransform="capitalize" fontSize="sm">
              {formatRelative(new Date(project.createdAt), new Date())}
            </Text>
          </Box>
          <ProjectDeleteButton
            handleRemove={() => {
              handleRefreshProjects();
            }}
            projectId={project.id}
          />
        </Flex>

        {isWaitingPayment && (
          <FormPayment
            handlePaymentSuccess={() => {
              handleRefreshProjects();
            }}
            project={project}
          />
        )}

        {isWaitingTraining && (
          <>
            <VStack overflow="hidden" width="100%" spacing={4}>
              <Box fontWeight="bold" fontSize="xl">
                شخصيتك جاهزة للبدأ بصنع نموذج الذكاء الاصنطاعي عليها !
              </Box>
              <AvatarGroup size="lg" max={10}>
                {project.imageUrls.map((url) => (
                  <Avatar key={url} src={url} />
                ))}
              </AvatarGroup>
              <Button
                variant="brand"
                rightIcon={<IoIosFlash />}
                isLoading={isModelLoading || isSuccess}
                onClick={() => {
                  trainModel(project);
                }}
              >
                أبدأ بصنع النموذج للشخصية
              </Button>
            </VStack>
          </>
        )}

        {isReady && (
          <Center overflow="hidden" width="100%" marginX="auto">
            <VStack spacing={7}>
              {!project.shots ? (
                <Box fontSize="lg">
                  {`لم تكتب أي نص `}.{" "}
                  <b>إذهب إلى شخصيتك وأكتب النص الآن !</b>
                </Box>
              ) : (
                <AvatarGroup size="xl" max={10}>
                  {project.shots
                    .filter((shot) => Boolean(shot.outputUrl))
                    .map((shot) => (
                      <Avatar key={shot.outputUrl} src={shot.outputUrl!} />
                    ))}
                </AvatarGroup>
              )}
              <Button
                rightIcon={<HiArrowRight />}
                variant="brand"
                href={`/studio/${project.id}`}
                as={Link}
              >
                أعرض الشخصية
              </Button>
            </VStack>
          </Center>
        )}
      </VStack>

      {isTraining && (
        <Center marginX="auto">
          <VStack spacing={7}>
            <Spinner size="xl" speed="2s" />
            <Text textAlign="center" maxW="20rem">
              يتم العمل على نموذج{" "}
              <b>الشخصية بناء على الصور التي أرفقتها</b>. هذه العملية تستغرق الكثير من الوقت قرابة ٢٠ دقيقة 
            </Text>
          </VStack>
        </Center>
      )}

      {project.modelStatus === "failed" && (
        <Center marginX="auto">
          <Text my={10} color="red.600" textAlign="center">
نأسف، هناك خطأ في صنع النموذج للشخصية، تستطيع التجربة مرة أخرى ونرجوا منك التواصل معنا على الإيميل لإرجاع المبلغ لك أو إصلاحها
          </Text>
        </Center>
      )}
    </Box>
  );
};

export default ProjectCard;
