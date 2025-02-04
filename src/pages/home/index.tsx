import { Container, Group, Heading, Link } from "./styles";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../consts";

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Group>
        <Heading>
          Compete in the world's biggest referral race & win from the Million
          Pool!
        </Heading>
      </Group>
      <Group>
        <Link onClick={() => navigate(PATH.DASHBORD)}>GO TO DASHBOARD</Link>
      </Group>
    </Container>
  );
};
