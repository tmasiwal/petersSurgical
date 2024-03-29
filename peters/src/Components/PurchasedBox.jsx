import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const PurchasedBox = () => {
    
  return (
    <Flex>
      <Flex
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"flex-end"}
        borderRadius={"12px"}
        border={"1px solid #EBEBEB"}
        w={"22.25%"}
        h={"134px"}
        boxShadow={
          "0px 0.599px 5.32px 0px rgba(0, 0, 0, 0.01), 0px 2.01px 17.869px 0px rgba(0, 0, 0, 0.01), 0px 9px 80px 0px rgba(0, 0, 0, 0.02)"
        }
        backdropBlur={"#FFF"}
      >
        <Flex flexDirection={"column"}>
          <Flex>
            <Text
              color={"#FFF"}
              fontFamily={"HelveticaNeue"}
              fontSize={"12px"}
              fontStyle={"normal"}
              fontWeight={"400"}
              lineHeight={"normal"}
            >
              Purchased good and services to revenue ratio
            </Text>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <g clip-path="url(#clip0_1_76)">
                <path
                  d="M7.83333 1C11.0551 1 13.6667 3.61158 13.6667 6.83333C13.6667 10.0551 11.0551 12.6667 7.83333 12.6667C4.61158 12.6667 2 10.0551 2 6.83333C2 3.61158 4.61158 1 7.83333 1ZM7.83333 2.16667C6.59566 2.16667 5.40867 2.65833 4.5335 3.5335C3.65833 4.40867 3.16667 5.59566 3.16667 6.83333C3.16667 8.07101 3.65833 9.258 4.5335 10.1332C5.40867 11.0083 6.59566 11.5 7.83333 11.5C9.07101 11.5 10.258 11.0083 11.1332 10.1332C12.0083 9.258 12.5 8.07101 12.5 6.83333C12.5 5.59566 12.0083 4.40867 11.1332 3.5335C10.258 2.65833 9.07101 2.16667 7.83333 2.16667ZM7.8275 5.66667C8.153 5.66667 8.41667 5.93033 8.41667 6.25583V9.24483C8.52787 9.30904 8.61477 9.40815 8.66391 9.52678C8.71305 9.64542 8.72167 9.77695 8.68843 9.90098C8.6552 10.025 8.58197 10.1346 8.48009 10.2128C8.37822 10.291 8.25341 10.3333 8.125 10.3333H7.83917C7.7618 10.3333 7.68518 10.3181 7.6137 10.2885C7.54222 10.2589 7.47727 10.2155 7.42256 10.1608C7.36785 10.1061 7.32446 10.0411 7.29485 9.96963C7.26524 9.89815 7.25 9.82154 7.25 9.74417V6.83333C7.09529 6.83333 6.94692 6.77188 6.83752 6.66248C6.72813 6.55308 6.66667 6.40471 6.66667 6.25C6.66667 6.09529 6.72813 5.94692 6.83752 5.83752C6.94692 5.72813 7.09529 5.66667 7.25 5.66667H7.8275ZM7.83333 3.91667C7.98804 3.91667 8.13642 3.97813 8.24581 4.08752C8.35521 4.19692 8.41667 4.34529 8.41667 4.5C8.41667 4.65471 8.35521 4.80308 8.24581 4.91248C8.13642 5.02188 7.98804 5.08333 7.83333 5.08333C7.67862 5.08333 7.53025 5.02188 7.42086 4.91248C7.31146 4.80308 7.25 4.65471 7.25 4.5C7.25 4.34529 7.31146 4.19692 7.42086 4.08752C7.53025 3.97813 7.67862 3.91667 7.83333 3.91667Z"
                  fill="black"
                  fill-opacity="0.8"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_76">
                  <rect width="14" height="14" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Flex>
          <Text
            color={"rgba(0, 0, 0, 0.67"}
            fontFamily={"Poppins"}
            fontSize={"8px"}
            fontStyle={"italic"}
            fontWeight={"275"}
            lineHeight={"normal"}
            textAlign={"center"}
          >
            contribution to Scope3
          </Text>
        </Flex>
        <Flex
          justifyContent={"flex-end"}
          alignItems={"center"}
          alignSelf={"stretch"}
          border={"1px solid #FFF"}
          background={
            " linear-gradient(0deg, rgba(224, 48, 33, 0.04) 0%, rgba(224, 48, 33, 0.04) 100%), #FFF"
          }
          borderRadius={"8px"}
        >
          <Text
            color={"#FFF"}
            fontFamily={"HelveticaNeue"}
            fontSize={"15px"}
            fontStyle={"normal"}
            fontWeight={"400"}
            lineHeight={"normal"}
          >
            441510.9 CO2e
          </Text>
          <Flex
            w={"77px"}
            h={"28px"}
            flexDirection={"column"}
            justifyContent={"center"}
            flexShrink={"0"}
          >
            {" "}
            <Text
              color={"rgba(171, 2, 2, 0.67)"}
              fontFamily={"HelveticaNeue"}
              fontSize={"11px"}
              fontStyle={"normal"}
              fontWeight={"400"}
              lineHeight={"normal"}
              textAlign={"center"}
            >
              25%YOY↑
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"flex-end"}
        borderRadius={"12px"}
        border={"1px solid #EBEBEB"}
        w={"22.25%"}
        h={"134px"}
        boxShadow={
          "0px 0.599px 5.32px 0px rgba(0, 0, 0, 0.01), 0px 2.01px 17.869px 0px rgba(0, 0, 0, 0.01), 0px 9px 80px 0px rgba(0, 0, 0, 0.02)"
        }
        backdropBlur={"#FFF"}
      >
        <Flex flexDirection={"column"}>
          <Flex>
            <Text
              color={"#FFF"}
              fontFamily={"HelveticaNeue"}
              fontSize={"12px"}
              fontStyle={"normal"}
              fontWeight={"400"}
              lineHeight={"normal"}
            >
              Purchased good and services to revenue ratio
            </Text>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <g clip-path="url(#clip0_1_76)">
                <path
                  d="M7.83333 1C11.0551 1 13.6667 3.61158 13.6667 6.83333C13.6667 10.0551 11.0551 12.6667 7.83333 12.6667C4.61158 12.6667 2 10.0551 2 6.83333C2 3.61158 4.61158 1 7.83333 1ZM7.83333 2.16667C6.59566 2.16667 5.40867 2.65833 4.5335 3.5335C3.65833 4.40867 3.16667 5.59566 3.16667 6.83333C3.16667 8.07101 3.65833 9.258 4.5335 10.1332C5.40867 11.0083 6.59566 11.5 7.83333 11.5C9.07101 11.5 10.258 11.0083 11.1332 10.1332C12.0083 9.258 12.5 8.07101 12.5 6.83333C12.5 5.59566 12.0083 4.40867 11.1332 3.5335C10.258 2.65833 9.07101 2.16667 7.83333 2.16667ZM7.8275 5.66667C8.153 5.66667 8.41667 5.93033 8.41667 6.25583V9.24483C8.52787 9.30904 8.61477 9.40815 8.66391 9.52678C8.71305 9.64542 8.72167 9.77695 8.68843 9.90098C8.6552 10.025 8.58197 10.1346 8.48009 10.2128C8.37822 10.291 8.25341 10.3333 8.125 10.3333H7.83917C7.7618 10.3333 7.68518 10.3181 7.6137 10.2885C7.54222 10.2589 7.47727 10.2155 7.42256 10.1608C7.36785 10.1061 7.32446 10.0411 7.29485 9.96963C7.26524 9.89815 7.25 9.82154 7.25 9.74417V6.83333C7.09529 6.83333 6.94692 6.77188 6.83752 6.66248C6.72813 6.55308 6.66667 6.40471 6.66667 6.25C6.66667 6.09529 6.72813 5.94692 6.83752 5.83752C6.94692 5.72813 7.09529 5.66667 7.25 5.66667H7.8275ZM7.83333 3.91667C7.98804 3.91667 8.13642 3.97813 8.24581 4.08752C8.35521 4.19692 8.41667 4.34529 8.41667 4.5C8.41667 4.65471 8.35521 4.80308 8.24581 4.91248C8.13642 5.02188 7.98804 5.08333 7.83333 5.08333C7.67862 5.08333 7.53025 5.02188 7.42086 4.91248C7.31146 4.80308 7.25 4.65471 7.25 4.5C7.25 4.34529 7.31146 4.19692 7.42086 4.08752C7.53025 3.97813 7.67862 3.91667 7.83333 3.91667Z"
                  fill="black"
                  fill-opacity="0.8"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_76">
                  <rect width="14" height="14" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Flex>
          <Text
            color={"rgba(0, 0, 0, 0.67"}
            fontFamily={"Poppins"}
            fontSize={"8px"}
            fontStyle={"italic"}
            fontWeight={"275"}
            lineHeight={"normal"}
            textAlign={"center"}
          >
            contribution to Scope3
          </Text>
        </Flex>
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          alignSelf={"stretch"}
          border={"1px solid #FFF"}
          background={ " linear-gradient(0deg, rgba(255, 196, 0, 0.04) 0%, rgba(255, 196, 0, 0.04) 100%), #FFF" }
          borderRadius={"8px"}
        >
          <Text
            color={"#FFF"}
            fontFamily={"HelveticaNeue"}
            fontSize={"15px"}
            fontStyle={"normal"}
            fontWeight={"400"}
            lineHeight={"normal"}
          >
            441510.9 CO2e
          </Text>
          <Flex
            w={"77px"}
            h={"28px"}
            flexDirection={"column"}
            justifyContent={"center"}
            flexShrink={"0"}
          >
            {" "}
            <Text
              color={"rgba(171, 2, 2, 0.67)"}
              fontFamily={"HelveticaNeue"}
              fontSize={"11px"}
              fontStyle={"normal"}
              fontWeight={"400"}
              lineHeight={"normal"}
              textAlign={"center"}
            >
              25%YOY↑
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"flex-end"}
        borderRadius={"12px"}
        border={"1px solid #EBEBEB"}
        w={"22.25%"}
        h={"134px"}
        boxShadow={
          "0px 0.599px 5.32px 0px rgba(0, 0, 0, 0.01), 0px 2.01px 17.869px 0px rgba(0, 0, 0, 0.01), 0px 9px 80px 0px rgba(0, 0, 0, 0.02)"
        }
        backdropBlur={"#FFF"}
      >
        <Flex flexDirection={"column"}>
          <Flex>
            <Text
              color={"#FFF"}
              fontFamily={"HelveticaNeue"}
              fontSize={"12px"}
              fontStyle={"normal"}
              fontWeight={"400"}
              lineHeight={"normal"}
            >
              Purchased good and services to revenue ratio
            </Text>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <g clip-path="url(#clip0_1_76)">
                <path
                  d="M7.83333 1C11.0551 1 13.6667 3.61158 13.6667 6.83333C13.6667 10.0551 11.0551 12.6667 7.83333 12.6667C4.61158 12.6667 2 10.0551 2 6.83333C2 3.61158 4.61158 1 7.83333 1ZM7.83333 2.16667C6.59566 2.16667 5.40867 2.65833 4.5335 3.5335C3.65833 4.40867 3.16667 5.59566 3.16667 6.83333C3.16667 8.07101 3.65833 9.258 4.5335 10.1332C5.40867 11.0083 6.59566 11.5 7.83333 11.5C9.07101 11.5 10.258 11.0083 11.1332 10.1332C12.0083 9.258 12.5 8.07101 12.5 6.83333C12.5 5.59566 12.0083 4.40867 11.1332 3.5335C10.258 2.65833 9.07101 2.16667 7.83333 2.16667ZM7.8275 5.66667C8.153 5.66667 8.41667 5.93033 8.41667 6.25583V9.24483C8.52787 9.30904 8.61477 9.40815 8.66391 9.52678C8.71305 9.64542 8.72167 9.77695 8.68843 9.90098C8.6552 10.025 8.58197 10.1346 8.48009 10.2128C8.37822 10.291 8.25341 10.3333 8.125 10.3333H7.83917C7.7618 10.3333 7.68518 10.3181 7.6137 10.2885C7.54222 10.2589 7.47727 10.2155 7.42256 10.1608C7.36785 10.1061 7.32446 10.0411 7.29485 9.96963C7.26524 9.89815 7.25 9.82154 7.25 9.74417V6.83333C7.09529 6.83333 6.94692 6.77188 6.83752 6.66248C6.72813 6.55308 6.66667 6.40471 6.66667 6.25C6.66667 6.09529 6.72813 5.94692 6.83752 5.83752C6.94692 5.72813 7.09529 5.66667 7.25 5.66667H7.8275ZM7.83333 3.91667C7.98804 3.91667 8.13642 3.97813 8.24581 4.08752C8.35521 4.19692 8.41667 4.34529 8.41667 4.5C8.41667 4.65471 8.35521 4.80308 8.24581 4.91248C8.13642 5.02188 7.98804 5.08333 7.83333 5.08333C7.67862 5.08333 7.53025 5.02188 7.42086 4.91248C7.31146 4.80308 7.25 4.65471 7.25 4.5C7.25 4.34529 7.31146 4.19692 7.42086 4.08752C7.53025 3.97813 7.67862 3.91667 7.83333 3.91667Z"
                  fill="black"
                  fill-opacity="0.8"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_76">
                  <rect width="14" height="14" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Flex>
          <Text
            color={"rgba(0, 0, 0, 0.67"}
            fontFamily={"Poppins"}
            fontSize={"8px"}
            fontStyle={"italic"}
            fontWeight={"275"}
            lineHeight={"normal"}
            textAlign={"center"}
          >
            contribution to Scope3
          </Text>
        </Flex>
        <Flex
          justifyContent={"flex-end"}
          alignItems={"center"}
          alignSelf={"stretch"}
          border={"1px solid #FFF"}
          background={
            " linear-gradient(0deg, rgba(224, 48, 33, 0.04) 0%, rgba(224, 48, 33, 0.04) 100%), #FFF"
          }
          borderRadius={"8px"}
        >
          <Text
            color={"#FFF"}
            fontFamily={"HelveticaNeue"}
            fontSize={"15px"}
            fontStyle={"normal"}
            fontWeight={"400"}
            lineHeight={"normal"}
          >
            441510.9 CO2e
          </Text>
          <Flex
            w={"77px"}
            h={"28px"}
            flexDirection={"column"}
            justifyContent={"center"}
            flexShrink={"0"}
          >
            {" "}
            <Text
              color={"rgba(171, 2, 2, 0.67)"}
              fontFamily={"HelveticaNeue"}
              fontSize={"11px"}
              fontStyle={"normal"}
              fontWeight={"400"}
              lineHeight={"normal"}
              textAlign={"center"}
            >
              25%YOY↑
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PurchasedBox;
