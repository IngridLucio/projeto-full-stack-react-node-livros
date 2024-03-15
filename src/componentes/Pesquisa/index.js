/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from "react";
import Input from "../Input";
import styled from "styled-components";
import { getLivros } from "../../services/livros";
import { postFavorito } from "../../services/favoritos";

const PesquisaContainer = styled.section`
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
  color: #fff;
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;
`;
const Titulo = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;

const Subtitulo = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;

const Resultado = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  p {
    width: 200px;
  }
  img {
    width: 100px;
  }
  &:hover {
    border: 1px solid white;
  }
`;

function Pesquisa() {
  const [livrosPesaquisados, setLivrosPesaquisados] = useState([]);

  const [livros, setLivros] = useState([]);

  useEffect(() => {
    fetchLivros();
  }, []);

  async function fetchLivros() {
    const livrosDaAPI = await getLivros();
    setLivros(livrosDaAPI);
  }

  async function insertFavorito(id) {
    await postFavorito(id);
    alert("Favorito inserido");
  }

  return (
    <PesquisaContainer>
      <Titulo>Já sabe por onde começar?</Titulo>
      <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
      <Input
        placeholder="Encontre sua próxima leitura"
        onBlur={(event) => {
          const textoDigitado = event.target.value;
          if (textoDigitado === "") {
            setLivrosPesaquisados([]);
          } else {
            const resultadoPesquisa = livros.filter((livro) =>
              livro.nome.includes(textoDigitado)
            );
            setLivrosPesaquisados(resultadoPesquisa);
          }
        }}
      />
      {livrosPesaquisados.map((livro) => (
        <Resultado onClick={() => insertFavorito(livro.id)}>
          <p>{livro.nome}</p>
          <img src={livro.src} />
        </Resultado>
      ))}
    </PesquisaContainer>
  );
}

export default Pesquisa;
