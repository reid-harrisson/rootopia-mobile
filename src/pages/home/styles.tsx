import styled from "styled-components";
import { COLORS } from "../../consts";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.ONYX};
  border-radius: 20px;
  box-shadow: 3px 5px 20px 0 rgba(0, 0, 0, 0.2);
  gap: 20px;
`;

export const Image = styled.img`
  width: 100%;
`;

export const Group = styled.div`
  display: flex;
  gap: 10px;
`;
