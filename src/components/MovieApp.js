import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import axios from "axios";

const Page = styled.div`
  background: #ffffff;
`;

const Search = styled.input`
  position: static;
  width: 1306px;
  font-size: 24px;

  margin-left: 77px;
  margin-right: 57px;
  margin-bottom: 97px;
  height: 54px;
`;
const SearchTitle = styled.p`
  font-size: 24px;
  margin-top: 35px;
  margin-left: 77px;
  font-family: Oswald, sans-serif;
`;
const Card = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px;
  position: static;
  height: 300px;
  width: 300px;
  border-radius: 12px;
  background: #000000;
  margin: 0px 13px;
`;

export default function MoviesApp() {
  const [movies, setMovies] = useState("");
  const [title, setTitle] = useState(["a", "b", "c"]);

  const searchRef = useRef();

  const getData = async () => {
    const url = "https://www.omdbapi.com/?s={movies}&apikey=cd13d23b";
    try {
      axios.get(url).then((response) => {
        setTitle(response.data.Title);
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const changeHandler = (e) => {
    e.preventDefault();
    setMovies(searchRef.current.value);
  };

  return (
    <Page>
      <div>
        <SearchTitle>Search</SearchTitle>
        <Search inputRef={searchRef} onChange={changeHandler} />
      </div>
    </Page>
  );
}
