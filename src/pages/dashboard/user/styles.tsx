import styled from "styled-components";
import { COLORS } from "../../../consts";
import LogoImage from "../../../assets/logo.png";

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
  background-color: ${COLORS.RAJAH};
  gap: 20px;
`;
