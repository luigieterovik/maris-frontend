import styled from 'styled-components'

export const Button = styled.button`
    border-radius: 100px;
    border: none;

    height: 45px;
    width: 220px;

    font-size: 15px;
    font-weight: 600;

    background-color: #9C19E8;
    color: white;

    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }

    ${props => props.isSpecialButton && `
        background-color: white;
        color: #8500DD;

        &:hover {
            background-color: #9C19E8;
            border: 2px solid white;
            color: white;
            opacity: 1;
        }
    `}
`