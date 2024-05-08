import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    height: 85vh;
`

export const CartImage = styled.img`
    height: 80px;
`

export const CartButton = styled.button`
    height: 50px;
    width: 250px;
    border: none;
    background-color: #9C19E8;
    color: white;
    border-radius: 100px;
    font-weight: 500;
    font-size: 14px;
    cursor: pointer;
    transition: 200ms;
    
    &:hover {
        opacity: 0.8;
    }
`