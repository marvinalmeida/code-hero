import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { Link } from "react-router-dom";
import { getAllCharacters } from "../../services/characters.services";
import "./Home.css";
import Pagination from "../../components/Pagination/Pagination";

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);

  const isMobile = window.innerWidth < 768;

  useEffect(() => {
    setLoading(true);
    getAllCharacters({ offset, limit: 10 })
      .then((response) => {
        setCharacters(response.data.data);
      })
      .catch((e) => console.error(e))
      .finally(() => {
        setLoading(false);
      });
  }, [offset]);

  return (
    <Layout>
      <div className="container">
        <div className="info-hero">
          <h5>Personagens</h5>
          <h5>Series</h5>
          <h5>Eventos</h5>
        </div>
        {loading ? (
          <span>Carregando informações...</span>
        ) : (
          characters.results?.length > 0 && (
            <>
              {characters.results.map((character) => {
                return (
                  <div key={character.id} className="container2">
                    <Link className="link" to={`/detail/${character.id}`}>
                      <img
                        className="img"
                        src={`${character.thumbnail.path}.${character.thumbnail.extension}?ts=1627497477112&apikey=b9f3e36e84da5bdbbb6abc6ee39f045a&hash=d300d8f84741330088d7ebca8a1b2cf2`}
                        alt="personagens"
                      />
                      <h5 className="name-hero">{character.name}</h5>
                    </Link>
                    {!isMobile && (
                      <div className="series-events">
                        <div className="info-text">
                          {character.series.items
                            .slice(0, 3)
                            .map((serie, i) => {
                              return <li key={i}>{serie.name}</li>;
                            })}
                        </div>

                        <div className="info-text">
                          {character.events.items
                            .slice(0, 3)
                            .map((event, i) => {
                              return <li key={i}>{event.name}</li>;
                            })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
              <Pagination
                limit={characters.limit}
                setOffset={setOffset}
                total={characters.total}
                offset={offset}
              />
            </>
          )
        )}
      </div>
    </Layout>
  );
};

export default Home;
