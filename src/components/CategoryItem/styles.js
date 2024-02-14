import styled from 'styled-components'

export const RightArrowCategory = styled.img`
  height: 18px;
  position: relative;
  top: 3px;
  left: 15px;
  opacity: 0;
`

export const CategoryDescription = styled.p`
  margin-top: 10px;
  font-weight: 400;
  font-size: 16px;
  transform: translateX(10px);
  transition: transform 0.3s ease-in-out;
`

export const CategoryItem = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    ${RightArrowCategory} {
      transition: opacity 0.3s linear;
      transform: translateX(-3px);
      opacity: 1;
    }
    p {
      transform: translateX(-3px);
      color: blue;
    }
  }

  &:not(:hover) {
    ${RightArrowCategory} {
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
      transform: translateX(-3px);
    }
  }
`

export const CategoryImage = styled.img`
  height: 100px;
`
