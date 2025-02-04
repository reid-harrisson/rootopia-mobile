import {
  Container,
  Group,
  TeamName,
  Name,
  Pair,
  Heading,
  Label,
  Text,
  Frame,
} from "./styles";
import { Avatar, IconButton, Team } from "../../../components";
import AvatarImage from "../../../assets/avatar.jpg";
import TeamImage from "../../../assets/team.jpg";
import { Link } from "lucide-react";
import { COLORS } from "../../../consts";
import React from "react";

export const UserSection = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <Container ref={ref}>
      <Heading>Personal Dashboard</Heading>
      <Group>
        <Avatar src={AvatarImage} />
        <Pair>
          <Pair>
            <Name>Victor</Name>
            <TeamName>Victor's Team</TeamName>
          </Pair>
        </Pair>
        <Team src={TeamImage} />
      </Group>
      <IconButton>View My eam</IconButton>
      <Group>
        <Pair>
          <Label>Total Referral Earnings</Label>
          <Text>84723 Tokens</Text>
        </Pair>
      </Group>
      <Group>
        <Pair>
          <Frame>
            <Label>Active Referrals</Label>
            <IconButton>
              <Link color={COLORS.JET_STREAM} size={20} />
            </IconButton>
          </Frame>
          <Frame>
            <Text>253 Users</Text>
            <IconButton>... show all</IconButton>
          </Frame>
        </Pair>
      </Group>
      <Group>
        <Pair>
          <Label>Pending Referrals</Label>
          <Text>187 Users</Text>
        </Pair>
      </Group>
      <Group>
        <Pair>
          <Label>Current Rank</Label>
          <Text>757</Text>
        </Pair>
      </Group>
    </Container>
  );
});
