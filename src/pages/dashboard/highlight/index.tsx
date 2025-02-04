import { CloudLightning, Flame, Flag, MicVocal } from "lucide-react";
import { Container, Group, Heading, Link, Slug } from "./styles";
import React from "react";

export const HightlightSection = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <Container ref={ref}>
      <Heading>Motivational Highlights</Heading>
      <Group>
        <Slug>
          <Flame /> It’s YOUR Race. It’s YOUR Game. It’s YOUR Rules!
        </Slug>
      </Group>
      <Group>
        <Slug>
          <CloudLightning /> Every referral brings you closer to the Million
          Pool!
        </Slug>
        <Link>... start referring now</Link>
      </Group>
      <Group>
        <Slug>
          <Flag /> Are you ready to race?
        </Slug>
        <Link>... join the race</Link>
      </Group>
      <Group>
        <Slug>
          <MicVocal />
          Leaderboard updates daily – Keep climbing to the top!
        </Slug>
      </Group>
    </Container>
  );
});
