import styled from 'styled-components'

export const Container = styled.div`
  background-color: #f7f7f7;
  width: 100%;
  padding: 50px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Table = styled.table`
  width: 90%;
  border-collapse: collapse;
  margin-top: 35px;
  background-color: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`

export const TableHeader = styled.thead`
  background-color: #9c19e8;
  color: white;
`

export const TableBody = styled.tbody`
  .productRow {
    &:hover {
      opacity: 0.8;
      background-color: #e3e3e3;
    }
  }
`

export const TableRow = styled.tr``

export const TableColumn = styled.td`
  padding: 15px;
  text-align: left;
  font-size: 14px;
  font-weight: 500;

  &:nth-child(1) {
    width: 40%;
  }

  &:nth-child(2),
  &:nth-child(3),
  &:nth-child(4),
  &:nth-child(5) {
    width: 20%;
    text-align: center;
  }
`

export const TableHeaderColumn = styled.th`
  padding: 20px;
  font-size: 14px;
  text-align: center;
  font-weight: 600;
  border-bottom: 2px solid #ddd;

  &:first-child {
    text-align: left;
  }
`

export const ProductColumn = styled.div`
  display: flex;
  align-items: center;
`

export const ProductImage = styled.img`
  max-height: 50px;
  margin-right: 15px;
`

export const ProductName = styled.span`
  font-size: 14px;
  font-weight: 500;
`

export const ButtonAdd = styled.button`
  background-color: #28a745;
  color: white;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #218838;
  }
`

export const ButtonEdit = styled.button`
  background-color: transparent;
  margin-right: 15px;
  border: none;
  img {
    height: 15px;
  }
  &:hover {
    img {
      filter: brightness(0) saturate(100%) invert(12%) sepia(74%)
        saturate(5399%) hue-rotate(277deg) brightness(90%) contrast(128%);
      transform: scale(1.1);
      cursor: pointer;
    }
  }
`

export const ButtonDelete = styled.button`
  background-color: transparent;
  border: none;
  img {
    height: 15px;
  }
  &:hover {
    img {
      filter: brightness(0) saturate(100%) invert(12%) sepia(74%)
        saturate(5399%) hue-rotate(277deg) brightness(90%) contrast(128%);
      transform: scale(1.1);
      cursor: pointer;
    }
  }
`

// Modal

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

export const ModalContent = styled.div`
  background-color: #fff;
  width: 400px;
  max-height: 90vh; /* Limitar a altura para rolagem */
  border-radius: 12px; /* Arredondar os cantos */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);

  /* Estilos para a barra de rolagem */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 12px; /* Arredondar a trilha */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #bbb; /* Cor do polegar */
    border-radius: 12px; /* Arredondar o polegar */
    border: 2px solid #fff; /* Dar um espaçamento para o polegar */
  }
  /* Para navegadores como Firefox */
  scrollbar-color: #bbb #ffffff;
  scrollbar-width: thin;
`

export const Form = styled.div`
  display: flex;
  padding: 30px;
  padding-top: 20px;
  flex-direction: column;
  gap: 20px; /* Aumentar o espaço entre os elementos */
`

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 500; /* Deixar a fonte um pouco mais grossa */
  font-size: 14px; /* Aumentar o tamanho da fonte */
  color: #333; /* Cor mais suave */
`

export const Input = styled.input`
  padding: 8px;
  margin-top: 3px;
  width: 100%;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 12px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff; /* Efeito de foco */
    outline: none;
  }

  /* Remove as setas de incremento/decremento no Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Remove as setas no Firefox */
  & {
    -moz-appearance: textfield;
  }
`

export const DivInput = styled.div`
  display: flex;
  margin-top: 3px;
  border-radius: 6px;
  border: 1px solid #ccc;

  div {
    border-right: 1px solid #ccc;
    background-color: #efefef;
    border-radius: 5px 0 0 5px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
  }

  input {
    margin: 0;
    border: none;
  }
`

export const TextArea = styled.textarea`
  padding: 8px;
  margin-top: 3px;
  border-radius: 6px;
  border: 1px solid #ccc;
  resize: none;
  font-size: 12px;
  transition: border-color 0.3s ease;
  height: auto;
  min-height: fit-content;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`

export const Select = styled.select`
  padding: 8px;
  border-radius: 6px;
  margin-top: 3px;
  border: 1px solid #ccc;
  font-size: 12px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`

export const Button = styled.button`
  background-color: #28a745;
  color: white;
  padding: 12px 25px;
  font-size: 14px;
  font-weight: 600;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #218838;
  }
`

export const ButtonCancel = styled(Button)`
  background-color: #dc3545;

  &:hover {
    background-color: #c82333;
  }
`

export const Faixa = styled.div`
  background-color: #9c19e8;
  color: white;
  text-align: center;
  padding: 12px 0;
  border-radius: 6px 6px 0 0;
`

export const DeleteDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 0 10px 10px;
`

export const MenuContainer = styled.div`
  width: 500px;
  background: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;

  ${TableHeader} {
    border-radius: 8px 8px 0 0;
    padding: 15px;
    text-align: center;
    font-weight: 600;
    font-size: 17px;
  }
`

export const Option = styled.div`
  padding: 12px;
  margin: 5px 0;
  background: white;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;
  font-weight: 400;
  text-align: center;

  &:hover {
    background: #e9ecef;
  }
`
