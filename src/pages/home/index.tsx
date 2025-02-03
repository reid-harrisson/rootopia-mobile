import { Container, Image, Group } from "./styles";
import LogoImage from "../../assets/logo.jpg";
import { IconButton } from "../../components";
import { User, Users, Gamepad2, Scale, HeartHandshake } from "lucide-react";
import { COLORS } from "../../consts";

export const HomePage = () => {
  return (
    <Container>
      <Image src={LogoImage} />
      <Group>
        <IconButton>
          <User color={COLORS.RAJAH} />
        </IconButton>
        <IconButton>
          <Users color={COLORS.BRIGHT_TURQUOISE} />
        </IconButton>
        <IconButton>
          <Gamepad2 color={COLORS.KELLY_GREEN} />
        </IconButton>
        <IconButton>
          <Scale color={COLORS.CHINESE_WHITE} />
        </IconButton>
        <IconButton>
          <HeartHandshake color={COLORS.BRIGHT_TURQUOISE} />
        </IconButton>
      </Group>
    </Container>
  );
};
