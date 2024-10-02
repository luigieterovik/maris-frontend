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
  width: 100%;
  max-width: 800px;
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
      cursor: pointer;
      opacity: 0.8;
      span {
        color: #9c19e8;
      }
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
  &:nth-child(4) {
    width: 20%;
    text-align: center;
  }
`

export const TableHeaderColumn = styled.th`
  padding: 20px;
  font-size: 16px;
  text-align: center;
  font-weight: bold;
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
