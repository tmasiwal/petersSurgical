import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";


const EmissionBySupplier = () => {
 
  return (
    <Flex
    //   w={"459px"}
    //   h={"521px"}
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
          Emission by Supplier
        </Text>
      </Flex>
      <Box>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="166"
          height="169"
          viewBox="0 0 166 169"
          fill="none"
        >
          <path
            d="M48.3555 9.08454C60.8555 3.16169 74.6253 0.543178 88.3872 1.47199L82.9605 84.4922L48.3555 9.08454Z"
            fill="#E994B1"
            stroke="white"
            stroke-width="0.816327"
          />
          <path
            d="M26.0802 24.6409C36.0015 14.9054 48.1822 7.87427 61.4919 4.19978L82.9605 84.4922L26.0802 24.6409Z"
            fill="#B54F69"
            stroke="white"
            stroke-width="0.816327"
          />
          <path
            d="M5.08574 58.781C9.34776 45.4523 16.8541 33.4334 26.9082 23.8397L82.9605 84.4922L5.08574 58.781Z"
            fill="#3BB85E"
            stroke="white"
            stroke-width="0.816327"
          />
          <path
            d="M34.8312 151.805C20.8418 141.477 10.4292 126.914 5.08573 110.203C-0.257744 93.4926 -0.257745 75.4918 5.08573 58.781L82.9605 84.4922L34.8312 151.805Z"
            fill="#FFC400"
            stroke="white"
            stroke-width="0.816327"
          />
          <path
            d="M131.09 151.805C117.1 162.133 100.252 167.695 82.9603 167.695C65.6684 167.695 48.8204 162.133 34.831 151.805L82.9605 84.4922L131.09 151.805Z"
            fill="#544B8D"
            stroke="white"
            stroke-width="0.816327"
          />
          <path
            d="M82.9605 1.28906C100.252 1.28906 117.1 6.8516 131.09 17.1794C145.079 27.5073 155.492 42.0702 160.835 58.781C166.179 75.4918 166.179 93.4926 160.835 110.203C155.492 126.914 145.079 141.477 131.09 151.805L82.9605 84.4922V1.28906Z"
            fill="#7C95EA"
            stroke="white"
            stroke-width="0.816327"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M82.9605 125.262C104.667 125.262 122.264 107.381 122.264 85.3242C122.264 63.2673 104.667 45.3867 82.9605 45.3867C61.2537 45.3867 43.657 63.2673 43.657 85.3242C43.657 107.381 61.2537 125.262 82.9605 125.262Z"
            fill="white"
          />
        </svg>
      </Box>
    </Flex>
  );
};

export default EmissionBySupplier;
