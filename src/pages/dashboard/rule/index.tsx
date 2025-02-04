import { Handshake, Map, Scale } from "lucide-react";
import { Container, Group, Heading, Label, Text, Link } from "./styles";
import React from "react";

export const RuleSection = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <Container ref={ref}>
      <Heading>Game Mechanics & Rules</Heading>
      <Group>
        <Label>
          <Map /> Game Roadmap
        </Label>
        <Text>Track upcoming events & competitions!</Text>
        <Link>... view roadmap</Link>
      </Group>
      <Group>
        <Label>
          <Scale /> Rules & Fair Play
        </Label>
        <Text>Ensure a fair & competitive race!</Text>
        <Link>... game rules</Link>
      </Group>
      <Group>
        <Label>
          <Handshake /> How to Build Your Team
        </Label>
        <Text>Boost your strategy & referral power!</Text>
        <Link>... team building guide</Link>
      </Group>
    </Container>
  );
});
