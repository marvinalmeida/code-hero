import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Layout from "../../components/Layout/Layout";
import { REACT_APP_API_KEY, HASH, TS } from "../../services/api";
import { getCharactersById } from "../../services/characters.services";
import "./Detail.css";

const Detail = () => {
  const [caractersDetail, setCaractersDetail] = useState([]);

  const params = useParams();

  const id = params.caracterId;

  useEffect(() => {
    getCharactersById(id)
      .then((response) => {
        setCaractersDetail(response.data.data.results);
      })
      .catch((e) => console.erro(e));
  }, [id]);

  return (
    <Layout disableHeader={true}>
      {caractersDetail.map(({ id, name, thumbnail, description }) => {
        return (
          <div className="detail" key={id}>
            <div className="detail__header">
              <Breadcrumb />
              <h1>{name}</h1>
            </div>
            <div className="detail__infos">
              <div className="detail__img">
                <img
                  src={`${thumbnail.path}.${thumbnail.extension}?ts=${TS}&apikey${REACT_APP_API_KEY}=&hash=${HASH}`}
                />
              </div>
              <span className="detail__description">{description}</span>
            </div>
          </div>
        );
      })}
    </Layout>
  );
};

export default Detail;
