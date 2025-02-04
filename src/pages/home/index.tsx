import { Container, Group, Heading } from "./styles";
import { IconButton } from "../../components";
import { User, Users, Gamepad2, Scale, HeartHandshake } from "lucide-react";
import { COLORS, PATH } from "../../consts";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const naviate = useNavigate();

  return (
    <Container>
      <Heading>
        Compete in the world's biggest referral race & win from the Million
        Pool!
      </Heading>
      <Group>
        <IconButton onClick={() => naviate(PATH.DASHBORD)}>
          <User color={COLORS.RAJAH} />
        </IconButton>
        <IconButton onClick={() => naviate(PATH.DASHBORD)}>
          <Users color={COLORS.BRIGHT_TURQUOISE} />
        </IconButton>
        <IconButton onClick={() => naviate(PATH.DASHBORD)}>
          <Gamepad2 color={COLORS.KELLY_GREEN} />
        </IconButton>
        <IconButton onClick={() => naviate(PATH.DASHBORD)}>
          <Scale color={COLORS.JET_STREAM} />
        </IconButton>
        <IconButton onClick={() => naviate(PATH.DASHBORD)}>
          <HeartHandshake color={COLORS.BRIGHT_TURQUOISE} />
        </IconButton>
      </Group>
    </Container>
  );
};
