import { Container, Wrapper } from "./styles";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
};
