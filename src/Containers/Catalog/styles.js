import styled, { css } from "styled-components"

export const Container = styled.div`
    width: 100%;
    background-color: #F7F7F7;
    padding: 60px;
`

export const Wrapper = styled.div`
    width: 25%;
    display: inline-block;
    padding: 20px 0;
    background-color: white;
    border-radius: 25px;    
    box-shadow: rgba(90, 90, 90, 0.1) 0px 0px 10px 0px;

    ${props => props.isProducts && css`
        width: 70%;
        float: right;
    `}
`

export const Title = styled.h2`    
    margin-left: 30px;
    font-size: 21px;

    ${props => props.isMenu && css`
        text-align: center;
        font-size: 19px;
        margin: 0;
    `}
`
