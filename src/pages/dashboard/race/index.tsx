import { ChartLine, Gem, Pin, Rocket } from "lucide-react";
import { Container, Group, Heading, Label, Text, Link, Slug } from "./styles";
import React from "react";

export const RaceSection = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <Container ref={ref}>
      <Heading>The Million Pool Race</Heading>
      <Group>
        <Label>
          <Gem /> Current Prize Pool
        </Label>
        <Text>23454 Tokens</Text>
        <Link>... view live pool stats</Link>
      </Group>
      <Group>
        <Label>
          <ChartLine /> Live Updates
        </Label>
        <Text>Pool Growth Tracker</Text>
        <Link>... track my earnings</Link>
      </Group>
      <Group>
        <Label>
          <Pin />
          Your Share of the Pool
        </Label>
        <Text>23.3%</Text>
      </Group>
      <Group>
        <Slug>
          <Rocket /> The more you refer, the bigger your rewards!
        </Slug>
      </Group>
    </Container>
  );
});
