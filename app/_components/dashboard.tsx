"use client";

import { BarChart } from "@mantine/charts";
import {
  Badge,
  Box,
  Button,
  Group,
  Progress,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import {
  IconVolumeOff,
  IconSignal5g,
  IconAntennaBars5,
  IconBatteryVertical2,
  IconChevronLeft,
  IconShare,
  IconDotsVertical,
} from "@tabler/icons-react";
import React from "react";

//#3A3A3C color icons
// #010103 color text
export const Dashboard = () => {
  const data = [
    {
      days: "0",
      steps: 1200,
      hide: false,
    },
    {
      days: "3",
      steps: 1500,
      hide: true,
    },
    {
      days: "6",
      steps: 1900,
      hide: false,
    },
    {
      days: "9",
      steps: 1200,
      hide: true,
    },
    {
      days: "11.5",
      steps: 1000,
      hide: true,
    },
    {
      days: "12",
      steps: 2000,
      hide: false,
    },
    {
      days: "15",
      steps: 800,
      hide: true,
    },
    {
      days: "18",
      steps: 1000,
      hide: false,
    },
    {
      days: "(S)",
      steps: 800,
      hide: false,
    },
  ];
  return (
    <Box w="100vw" h="100vh" bg="white" pos="relative">
      <Box
        pos="absolute"
        left="50%"
        top="50%"
        className="-translate-x-1/2 -translate-y-1/2"
        w="390px"
        h="800px"
        bg="#F1F1F3"
      >
        <Stack gap="lg">
          <Group justify="space-between" px="lg" pt="xs">
            <Text size="xs" c="#3A3A3C">
              14:28
            </Text>
            <Group gap="0">
              <IconVolumeOff size={14} color="#3A3A3C" />
              <IconSignal5g size={16} color="#3A3A3C" />
              <IconAntennaBars5 size={16} color="#3A3A3C" />
              <Text size="xs" c="#3A3A3C">
                27%
              </Text>
              <IconBatteryVertical2 size={16} color="#3A3A3C" />
            </Group>
          </Group>
          <Group justify="space-between" px="lg" align="center">
            <Button
              variant="subtle"
              color="#010103"
              size="xl"
              fw="bold"
              pl="-lg"
              leftSection={<IconChevronLeft size={32} stroke={1} />}
            >
              Schritte
            </Button>
            <Group>
              <IconShare
                size={20}
                color="#010103"
                stroke={1.5}
                fill="#010103"
              />
              <Group gap="2" align="flex-end">
                <Box w="2px" h="7px" bg="#3A3A3C" className="rounded-md" />
                <Box w="2px" h="5px" bg="#3A3A3C" className="rounded-md" />
                <Box w="2px" h="11px" bg="#3A3A3C" className="rounded-md" />
                <Box w="2px" h="15px" bg="#3A3A3C" className="rounded-md" />
              </Group>
              <IconDotsVertical size={20} color="#010103" stroke={1.5} />
            </Group>
          </Group>
          <Group wrap="nowrap" gap="4">
            <BarChart
              h={100}
              gridAxis="none"
              maxBarWidth={10}
              data={[
                {
                  days: "20",
                  steps: 1200,
                },
                {
                  days: "21",
                  steps: 1900,
                },
                {
                  days: "22",
                  steps: 400,
                },
                {
                  days: "23",
                  steps: 1000,
                },
                {
                  days: "24",
                  steps: 800,
                },
                {
                  days: "25",
                  steps: 750,
                },
                {
                  days: "26/11",
                  steps: 750,
                },
              ]}
              dataKey="days"
              withYAxis={false}
              barProps={{ radius: 100, width: 20, height: 100 }}
              series={[{ name: "steps", color: "#10CF6F" }]}
            />
            <Text size="xs" c="#10CF6F" pr="sm">
              6000
            </Text>
          </Group>
        </Stack>
        <Stack px="md" gap="lg" mt="lg">
          <Box
            w="100%"
            h="270px"
            bg="white"
            className="rounded-3xl grid place-items-center"
            p="xl"
          >
            <Stack gap="xl" w="100%" align="center">
              <Group align="center">
                <Title size="2.3rem" className="font-light" c="#010103">
                  5.001
                </Title>
                <Text size="1.3rem" className="font-semibold" c="#010103">
                  Schritte
                </Text>
              </Group>
              <Stack w="100%" gap="xs">
                <Progress
                  w="100%"
                  value={75}
                  size="2.3rem"
                  radius="xl"
                  color="#10CF6F"
                />
                <Group justify="space-between">
                  <Text size="xs" c="gray">
                    0
                  </Text>
                  <Badge variant="light" color="gray" size="xs">
                    Ziel: 6.000
                  </Badge>
                </Group>
              </Stack>
              <Group justify="space-between" w="100%">
                <Title size="1.2rem" className="font-semibold" c="#010103">
                  3,83 km
                </Title>
                <Title size="1.2rem" className="font-semibold" c="#010103">
                  207 kcal
                </Title>
              </Group>
            </Stack>
          </Box>
          <Box w="100%" h="200px" bg="white" className="rounded-3xl">
            <Text size="lg" fw="bold" c="#010103" p="lg">
              Schritte nach Tageszeit
            </Text>
            <BarChart
              h={100}
              maxBarWidth={5}
              data={data}
              dataKey="days"
              withYAxis={false}
              gridAxis="none"
              barProps={{ radius: 100, width: 20, height: 100 }}
              series={[{ name: "steps", color: "#10CF6F" }]}
              xAxisProps={{
                tickFormatter: (value, index) => {
                  const item = data[index];
                  return item?.hide ? "" : value;
                },
              }}
            />
          </Box>
        </Stack>
        <Box pos="absolute" bottom="0" w="100%" h="50px" bg="#F1F1F3">
          <Group
            w="100%"
            justify="space-around"
            align="center"
            h="100%"
            px="xl"
          >
            <Group gap="4">
              <Box w="2px" h="15px" bg="#A2A1A4" className="rounded-md" />
              <Box w="2px" h="15px" bg="#A2A1A4" className="rounded-md" />
              <Box w="2px" h="15px" bg="#A2A1A4" className="rounded-md" />
            </Group>
            <Box
              w="15px"
              h="15px"
              className="rounded-md border-2 border-[#A2A1A4]"
            />
            <IconChevronLeft size={32} stroke={1} color="#A2A1A4" />
          </Group>
        </Box>
      </Box>
    </Box>
  );
};
