import { Container, Header, ScrollArea, Group } from "./styles";
import { UserSection } from "./user";
import { LeaderSection } from "./leader";
import { RaceSection } from "./race";
import { RuleSection } from "./rule";
import { HightlightSection } from "./highlight";
import { IconButton } from "../../components";
import { User, Users, Gamepad2, Scale, HeartHandshake } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { COLORS, PATH } from "../../consts";

export const DashboardPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Header>
        <IconButton onClick={() => navigate(PATH.HOME)}>ROOTOPIA</IconButton>
        <Group>
          <IconButton onClick={() => navigate(PATH.DASHBORD)}>
            <User color={COLORS.CHINESE_BLACK + "A0"} />
          </IconButton>
          <IconButton onClick={() => navigate(PATH.DASHBORD)}>
            <Users color={COLORS.CHINESE_BLACK + "A0"} />
          </IconButton>
          <IconButton onClick={() => navigate(PATH.DASHBORD)}>
            <Gamepad2 color={COLORS.CHINESE_BLACK + "A0"} />
          </IconButton>
          <IconButton onClick={() => navigate(PATH.DASHBORD)}>
            <Scale color={COLORS.CHINESE_BLACK + "A0"} />
          </IconButton>
          <IconButton onClick={() => navigate(PATH.DASHBORD)}>
            <HeartHandshake color={COLORS.CHINESE_BLACK + "A0"} />
          </IconButton>
        </Group>
      </Header>
      <ScrollArea>
        <UserSection />
        <LeaderSection />
        <RaceSection />
        <RuleSection />
        <HightlightSection />
      </ScrollArea>
    </Container>
  );
};
