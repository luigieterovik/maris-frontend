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

  ${props =>
    props.isProducts &&
    css`
      width: 80%;
      margin-left: 20px;
    `}
`

export const Title = styled.h2`
  margin-left: 30px;
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
  margin-left: 15px;
`
