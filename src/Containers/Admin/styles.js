import styled from 'styled-components'

export const Container = styled.div`
  background-color: #f7f7f7;
  width: 100%;
  padding: 50px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const MenuContainer = styled.div`
  width: 500px;
  background: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  margin-top: 30px;

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
  margin: 3px 3px;
  background: white;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.2s;
  font-weight: 400;
  text-align: center;

  &:hover {
    background: #e9ecef;
  }
`
