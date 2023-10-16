import styled from "styled-components";

export const ButtonStyle = styled.button`
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  font-size: 1em;
  border: none;
  font-weight: 550;
  background-color: #4169E1;
  color: #fff;
  letter-spacing: 1.5px;
  cursor: pointer;
  transition: transform 0.2s; /* Transição na escala (tamanho) de 0.2 segundos */

  /* Adicione o efeito hover */
  &:hover {
    transform: scale(1.1); /* Aumentar a escala (tamanho) quando passar o mouse por cima */
  }
`;