import Headers from "./components/Header";
import LowerNav from "./components/LowerNav";
import MovieApp from "./components/MovieApp";
import styled from "styled-components";

const AppStyles = styled.div`
  width: 1440px;
`;

export default function App() {
  return (
    <AppStyles>
      <Headers />
      <LowerNav />
      <MovieApp />
    </AppStyles>
  );
}
