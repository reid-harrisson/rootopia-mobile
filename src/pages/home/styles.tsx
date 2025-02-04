import styled from "styled-components";
import { COLORS } from "../../consts";
import LogoImage from "../../assets/logo.jpg";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url(${LogoImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: ${COLORS.ONYX};
  position: relative;
`;

export const Heading = styled.h1`
  text-align: center;
  font-size: 22px;
  color: ${COLORS.WHITE};
  text-shadow: 0px 3px 3px ${COLORS.CHINESE_BLACK}A0;
`;

export const Group = styled.div`
  width: 100%;
  height: 30%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Link = styled.button`
  border: none;
  padding: none;
  background: transparent;
  color: ${COLORS.WHITE};
  text-shadow: 0px 3px 3px ${COLORS.CHINESE_BLACK}A0;
  cursor: pointer;
  font-size: 24px;
  font-weight: 700;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`;
