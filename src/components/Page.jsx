import styled, { ThemeProvider } from "styled-components";

const theme = {
  breakpoints: {
    mobile: "@media (max-width: 768px)",
    tablet: "@media (min-width: 768px) and (max-width: 1024px)",
    desktop: "@media (min-width: 1024px)",
  },
  colors: {
    primary: "red",
    secondary: "blue",
  },
};

const Wrapper = styled.div`
  ${({ theme }) => theme.breakpoints.mobile} {
    padding: 16px;
    font-size: 14px;
  }
  ${({ theme }) => theme.breakpoints.tablet} {
    padding: 32px;
    font-size: 16px;
  }
  ${({ theme }) => theme.breakpoints.desktop} {
    padding: 64px;
    font-size: 18px;
  }
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 32px;
  margin-bottom: 18px;
  ${({ theme }) => theme.breakpoints.tablet} {
    font-size: 64px;
  }
  ${({ theme }) => theme.breakpoints.desktop} {
    font-size: 120px;
  }
`;

const Content = styled.p`
  margin-bottom¡: 16px;
  ${({ theme }) => theme.breakpoints.desktop} {
    font-size: 20px;
  }
`;

export function Page() {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Title>Bienvenido!</Title>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          ante sed sapien eleifend, vel luctus sapien tristique. Mauris
          vulputate velit enim, vel malesuada nulla malesuada vel. Suspendisse
          potenti. Duis eget ligula ut turpis dignissim auctor vel ac tellus.
          Duis in magna sit amet quam dictum facilisis. Fusce placerat, nibh at
          malesuada sagittis, elit elit hendrerit arcu, vel scelerisque enim
          ipsum eu lectus.
        </Content>
      </Wrapper>
    </ThemeProvider>
  );
}
