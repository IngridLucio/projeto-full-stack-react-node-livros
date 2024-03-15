import { Titulo } from "../Titulo";
import { livros } from "./dadosUltimosLancamentos";
import imagemLivro from "../../imagens/livro2.png";
import CardRecomenda from "../CardRecomenda";
import styled from "styled-components";

const UltimosLancamentosContainer = styled.section`
  background-color: #ebecee;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const NovosLivrosContainer = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: pointer;
`;

function UltimosLancamentos() {
  return (
    <UltimosLancamentosContainer>
      <Titulo cor="#eb9b00" tamanhoFonte="36px">
        Ultimos Lançamentos
      </Titulo>
      ;
      <NovosLivrosContainer>
        {livros.map((livros) => (
          <img src={livros.src} alt="livros" />
        ))}
      </NovosLivrosContainer>
      <CardRecomenda
        titulo="Talvez você se interesse por..."
        subtitulo="Angular 11"
        descricao="Construindo uma aplicação com a plataforma Google"
        imagem={imagemLivro}
      />
    </UltimosLancamentosContainer>
  );
}

export default UltimosLancamentos;
