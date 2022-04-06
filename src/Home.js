import styled from "styled-components";
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Text = styled.span`
  color: red;
`;

export default function Home() {
  return (
    <Container>
      <Text>Hi</Text>
      <Text>Bye</Text>
    </Container>
  );
}
