import { Container, Group, Heading, Link } from "./styles";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../consts";

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Group>
        <Heading>
          COMPETE IN THE WORLD'S BIGGEST REFERRAL RACE & WIN FROM THE MILLION
          POOL!
        </Heading>
      </Group>
      <Group>
        <Link onClick={() => navigate(PATH.DASHBORD)}>GO TO DASHBOARD</Link>
      </Group>
    </Container>
  );
};
