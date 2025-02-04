import { Container, Wrapper, Group, Link } from "./styles";
import { useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [width, setWidth] = useState("390");
  const [height, setHeight] = useState("844");

  return (
    <Container>
      <Group>
        <Link
          onClick={() => {
            setWidth("375");
            setHeight("667");
          }}
        >
          375 x 667
        </Link>
        <Link
          onClick={() => {
            setWidth("414");
            setHeight("896");
          }}
        >
          414 x 896
        </Link>
        <Link
          onClick={() => {
            setWidth("390");
            setHeight("844");
          }}
        >
          390 x 844
        </Link>
        <Link
          onClick={() => {
            setWidth("430");
            setHeight("932");
          }}
        >
          430 x 932
        </Link>
        <Link
          onClick={() => {
            setWidth("412");
            setHeight("915");
          }}
        >
          412 x 915
        </Link>
        <Link
          onClick={() => {
            setWidth("360");
            setHeight("740");
          }}
        >
          360 x 740
        </Link>
      </Group>
      <Wrapper width={width} height={height}>
        {children}
      </Wrapper>
    </Container>
  );
};
