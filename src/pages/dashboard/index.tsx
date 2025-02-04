import { Container, Footer, ScrollArea, Header, Link } from "./styles";
import { UserSection } from "./user";
import { LeaderSection } from "./leader";
import { RaceSection } from "./race";
import { RuleSection } from "./rule";
import { HightlightSection } from "./highlight";
import { User, Users, Gamepad2, Scale, HeartHandshake } from "lucide-react";
import { COLORS, PATH } from "../../consts";
import { IconButton } from "../../components";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export const DashboardPage = () => {
  const userRef = useRef<HTMLDivElement | null>(null);
  const leaderRef = useRef<HTMLDivElement | null>(null);
  const raceRef = useRef<HTMLDivElement | null>(null);
  const ruleRef = useRef<HTMLDivElement | null>(null);
  const highlightRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  return (
    <Container>
      <Header>
        <Link onClick={() => navigate(PATH.HOME)}>ROOTOPIA</Link>
      </Header>
      <Footer>
        <IconButton
          onClick={() =>
            userRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }
        >
          <User color={COLORS.RAJAH} size={30} />
        </IconButton>
        <IconButton
          onClick={() =>
            leaderRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }
        >
          <Users color={COLORS.BRIGHT_TURQUOISE} size={30} />
        </IconButton>
        <IconButton
          onClick={() =>
            raceRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }
        >
          <Gamepad2 color={COLORS.KELLY_GREEN} size={30} />
        </IconButton>
        <IconButton
          onClick={() =>
            ruleRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }
        >
          <Scale color={COLORS.JET_STREAM} size={30} />
        </IconButton>
        <IconButton
          onClick={() =>
            highlightRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }
        >
          <HeartHandshake color={COLORS.BRIGHT_TURQUOISE} size={30} />
        </IconButton>
      </Footer>
      <ScrollArea>
        <UserSection ref={userRef} />
        <LeaderSection ref={leaderRef} />
        <RaceSection ref={raceRef} />
        <RuleSection ref={ruleRef} />
        <HightlightSection ref={highlightRef} />
      </ScrollArea>
    </Container>
  );
};
