import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { useLocation } from "react-router-dom";
import { getCharactersBySearch } from "../../services/characters.services";
import "./Search.css";

const Search = () => {
  const [searchCharacter, setSearchCharacter] = useState([]);

  const location = useLocation();

  const query = new URLSearchParams(location.search);

  useEffect(() => {
    getCharactersBySearch(query.get("name")).then((response) => {
      setSearchCharacter(response.data.data.results);
    });
  }, []);

  return (
    <Layout className="layout">
      <div>
        {searchCharacter.map((search) => {
          return (
            <div key={search.id} className="hero-detail">
              <h1>{search.name}</h1>
              <img
                src={`${search.thumbnail.path}.${search.thumbnail.extension}?ts=1627497477112&apikey=b9f3e36e84da5bdbbb6abc6ee39f045a&hash=d300d8f84741330088d7ebca8a1b2cf2`}
                alt="hero img"
              />
              <h2>Quadrinhos</h2>
              {search.comics.items.map((co) => {
                return <li>{co.name}</li>;
              })}
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Search;
