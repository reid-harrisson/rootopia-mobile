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
  gap: 20px;
  position: relative;
`;

export const Heading = styled.h1`
  text-align: center;
  font-size: 24px;
  padding: 20px;
  margin: 60px 0px;
  color: ${COLORS.JET_STREAM};
  text-shadow: 0px 3px 3px ${COLORS.CHINESE_BLACK};
`;

export const Image = styled.img`
  width: 100%;
`;

export const Group = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  gap: 10px;
  background: ${COLORS.CHINESE_BLACK}A0;
  padding: 40px 40px 20px 40px;
  border-radius: 50% 50% 0 0;
`;
