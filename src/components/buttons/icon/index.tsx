import styled from "styled-components";
import { COLORS } from "../../../consts";

export const IconButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0px;
  font-weight: 600;
  font-size: 16px;
  color: ${COLORS.CHINESE_BLACK}A0;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`;
