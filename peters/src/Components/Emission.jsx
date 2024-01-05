import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar,} from "react-chartjs-2";

const Emission = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Emissions-2023 ",
        data: [
          420, 2205, 2251, 4522, 8522, 2511, 1212, 1124, 4524, 7858, 5258, 4524,
        ],
        borderColor: "red",
        backgroundColor: "rgb(84,112,198)",
        // stack: "combined",
        type: "bar",
      },
      {
        label: "Emissions-2022",
        data: [
          400, 2000, 2100, 4300, 8000, 2400, 1200, 1100, 4500, 7800, 5200, 4500,
        ],
        borderColor: "blue",
        backgroundColor: "rgb(145,204,117)",
        // stack: "combined",
        type: "bar",
      },
      {
        label: "E/R-2023",
        data: [
          420, 2205, 2251, 4522, 8522, 2511, 1212, 1124, 4524, 7858, 5258, 4524,
        ],
        borderColor: "#FAC858",
        backgroundColor: "#FAC858",
        stack: "combined",
        type: "line",
      },
      {
        label: "E/R-2022",
        data: [
          400, 2000, 2100, 4300, 8000, 2400, 1200, 1100, 4500, 7800, 5200, 4500,
        ],
        borderColor: "#EF7474",
        backgroundColor: "#EF7474",
        stack: "combined",
        type: "line",
      },
    ],
  };

  return (
    <Flex
      w={"100%"}
      h={"458px"}
      flexShrink={"0"}
      borderRadius={"12px"}
      border={"1px solid #EBEBEB"}
      backdropBlur={"FFF"}
      boxShadow={
        "0px 0.599px 5.32px 0px rgba(0, 0, 0, 0.01), 0px 2.01px 17.869px 0px rgba(0, 0, 0, 0.01), 0px 9px 80px 0px rgba(0, 0, 0, 0.02)"
      }
      flexDirection={"column"}
    >
      <Flex
        w={"56.11%"}
        h={"64px"}
        padding={"20px"}
        flexShrink={"0"}
        justifyContent={"space-between"}
      >
        <Text
          color={"#FFF"}
          fontFamily={"HelveticaNeue"}
          fontSize={"14px"}
          fontStyle={"normal"}
          fontWeight={"4000"}
          lineHeight={"normal"}
        >
          Emission/Revenue
        </Text>
      </Flex>
      <Box>
        <Bar data={data}  />
      </Box>
    </Flex>
  );
};

export default Emission;
