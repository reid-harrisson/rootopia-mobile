import styled from "styled-components";
import { COLORS } from "../../consts";
import LogoImage from "../../assets/logo.jpg";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${LogoImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: ${COLORS.ONYX};
  box-shadow: 3px 5px 20px 0 rgba(0, 0, 0, 0.2);
  gap: 20px;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
`;

export const Group = styled.div`
  display: flex;
  gap: 10px;
  background: ${COLORS.CHINESE_BLACK}A0;
  padding: 10px 20px;
  border-radius: 50px;
  margin-top: calc(100% + 50px);
`;
