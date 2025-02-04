import styled from "styled-components";
import { COLORS } from "../../../consts";

export const IconButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0px;
  font-weight: 500;
  font-size: 16px;
  color: ${COLORS.JET_STREAM};

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`;
