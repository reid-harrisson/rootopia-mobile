import {
  Container,
  Group,
  Pair,
  Heading,
  Label,
  Text,
  Name,
  Link,
} from "./styles";
import { SmallAvatar } from "../../../components";
import AvatarImage from "../../../assets/avatar.jpg";
import React from "react";

export const LeaderSection = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <Container ref={ref}>
      <Heading>Leaderboards</Heading>
      <Group>
        <Label>Top 10 Global Leaders</Label>
        {[...Array(10)].map((_, index) => (
          <Pair key={index}>
            <Text>{index + 1}.</Text>
            <SmallAvatar src={AvatarImage} />
            <Name>Victor Hazzard</Name>
          </Pair>
        ))}
        <Link>... show all</Link>
      </Group>
      <Group>
        <Label>Daily Challenge Leaderboard</Label>
        <Text>Win a mystery box worth $1,000 - $5,000!</Text>
        <Link>... join daily challenge</Link>
      </Group>
      <Group>
        <Label>Weekly Challenge</Label>
        <Text>Top 3 win exclusive NFTs!</Text>
        <Link>... join weekly challenge</Link>
      </Group>
    </Container>
  );
});
