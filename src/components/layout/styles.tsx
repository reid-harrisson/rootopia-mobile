import styled from "styled-components";
import { COLORS } from "../../consts";

export const Container = styled.div`
  background-color: ${COLORS.CHINESE_BLACK};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  gap: 40px;
`;

export const Wrapper = styled.div<{ width: string; height: string }>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border-radius: 40px;
  overflow: hidden;
  border: solid 5px #242835;
  box-shadow: 0px 0px 10px 0 white;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Link = styled.button`
  border: none;
  padding: none;
  background: transparent;
  color: ${COLORS.RAJAH};
  text-shadow: 0px 3px 3px ${COLORS.CHINESE_BLACK}A0;
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`;
