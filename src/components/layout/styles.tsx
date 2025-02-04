import styled from "styled-components";
import { COLORS } from "../../consts";

export const Container = styled.div`
  background-color: ${COLORS.CHINESE_BLACK};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`;

export const Wrapper = styled.div`
  width: 390px;
  height: 844px;
  border-radius: 40px;
  overflow: hidden;
  border: solid 5px #242835;
  box-shadow: 0px 0px 10px 0 white;
`;
