import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background-color: #f7f7f7;
  padding: 60px;
  display: flex;
  flex-direction: row;
`

export const Wrapper = styled.div`
  width: 25%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  background-color: white;
  border-radius: 25px;
  padding: 20px;
  transition: all 200ms;
  position: relative;

  ${props =>
    props.isProducts &&
    css`
      width: 80%;
      margin-left: 20px;
      padding: 20px 0;
    `}
`

export const Title = styled.h2`
  margin-left: 30px;
  margin-bottom: 10px;
  font-size: 21px;

  ${props =>
    props.isMenu &&
    css`
      text-align: center;
      font-size: 19px;
      margin: 0;
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
    `}
`

export const DownArrow = styled.img`
  height: 15px;
  position: relative;
  left: 5px;
  top: 2px;
  transform: rotate(0);
  transition: all 200ms ease-out;
  cursor: pointer;
`

export const MenuLink = styled.a`
  margin-bottom: 10px;
  margin-left: 5px;
  cursor: pointer;

  &:hover {
    color: #000fcb;
  }

  ${props =>
    props.catalogueLink &&
    props.category == 'all' &&
    css`
      color: blue;
      font-weight: 600;

      &:hover {
        color: blue;
      }
    `}

  ${props =>
    props.category != 'all' &&
    props.allCategories &&
    css`
      color: blue;
      font-weight: 600;
    `}

  ${props =>
    props.isCategoriesActive &&
    css`
      img {
        transform: rotate(180deg);
      }
    `}
`

export const Categories = styled.div`
  padding-left: 20px;
  display: grid;
  gap: 7px;
  overflow: hidden;
  transition: all 200ms;
  font-size: 15px;

  width: 100%;
  height: 0;

  ${props =>
    props.isCategoriesActive &&
    css`
      height: auto;
    `}
`

export const Category = styled.p`
  cursor: pointer;

  &:hover {
    color: #000fcb;
  }

  ${props =>
    props.isCategoryActive &&
    css`
      color: blue;
      font-weight: 600;
    `}
`

export const WrapperProducts = styled.div`
  width: 100%;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: left;
  padding: 0 10px 0 30px;
`

export const DivLabelsOrderBy = styled.div`
  width: fit-content;
  position: absolute;
  top: 90px;
  left: 80px;
  padding: 15px;
  z-index: 0;
  background-color: white;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  visibility: hidden;

  ${props =>
    props.isOrderByActive &&
    css`
      visibility: visible;
      z-index: 1;
    `}
`

export const DivOrderBy = styled.div`
  width: fit-content;

  margin: 5px 0 10px 32px;
  & label {
    font-size: 14px;
    cursor: pointer;
  }

  label {
    &:hover {
      color: #000fcb;
    }
  }

  ${props =>
    props.isOrderByActive &&
    css`
      img {
        transform: rotate(180deg);
      }
    `}
`

export const LabelOrderBy = styled.label`
  font-size: 14px;
  color: #565656;
  cursor: pointer;
  margin-right: 10px;
  display: block;
  margin-bottom: 10px;
  &:hover {
    color: #000fcb;
  }

  ${props =>
    props.isSelected &&
    css`
      color: blue;
    `}
`

export const Division = styled.div`
  height: 1px;
  border-bottom: 2px solid #e7e7e7;
  width: 100%;
  margin: 15px 0;
`
