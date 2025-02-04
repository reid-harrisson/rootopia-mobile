import styled from "styled-components";
import { COLORS } from "../../../consts";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 60px 20px 20px 20px;
`;

export const Group = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  align-items: center;
  background-color: ${COLORS.OLD_SILVER}60;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px ${COLORS.CHINESE_BLACK}40;
`;

export const Frame = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

export const Pair = styled.div`
  display: flex;
  width: 100%;
  gap: 5px;
  flex-direction: column;
`;

export const Name = styled.p`
  margin: 0px;
  font-size: 20px;
  font-weight: 500;
  color: ${COLORS.BRIGHT_TURQUOISE};
  text-shadow: 0px 2px 3px ${COLORS.CHINESE_BLACK}A0;
`;

export const TeamName = styled.p`
  margin: 0px;
  font-size: 16px;
  font-weight: 500;
  color: ${COLORS.JET_STREAM};
  text-shadow: 0px 2px 3px ${COLORS.CHINESE_BLACK}A0;
`;

export const Heading = styled.h2`
  margin: 0px;
  font-size: 24px;
  font-weight: 700;
  color: ${COLORS.RAJAH};
  text-shadow: 0px 2px 3px ${COLORS.CHINESE_BLACK}A0;
`;

export const Label = styled.p`
  margin: 0px;
  font-size: 16px;
  font-weight: 700;
  color: ${COLORS.BRIGHT_TURQUOISE};
  text-shadow: 0px 2px 3px ${COLORS.CHINESE_BLACK}A0;
`;

export const Text = styled.p`
  margin: 0px;
  font-size: 22px;
  font-weight: 500;
  color: ${COLORS.JET_STREAM};
  text-shadow: 0px 2px 3px ${COLORS.CHINESE_BLACK}A0;
`;
