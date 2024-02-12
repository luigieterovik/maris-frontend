import styled from 'styled-components'

export const Container = styled.body`
    width: auto;
    max-width: 1366px;
    height: 100vh;
    margin: 0 auto;
`

/* _____Main______ */
export const Main = styled.main`
    display: flex;
    flex-direction: column;

    background: #F7F7F7;

    width: 100%;
`

export const MainImage = styled.img`
    width: 95%;

    border-radius: 20px;

    margin: 30px auto 0;
`

/* _____Categories_____ */
export const CategoriesWrapper = styled.div`
    width: 70%;
    margin: 40px auto;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
`

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

/* _____About_____ */
export const AboutWrapper = styled.div`
    height: 550px;

    margin: 70px 0;
    padding: 0 50px;

    display: flex;
    flex-direction: row;
`

export const AboutInformation = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 80px;

    .SecondAboutDescription {
        font-weight: 600;
        margin: 15px 0 25px;
    }
`

export const AboutImage = styled.img`
    height: 100%;
`

export const AboutTitle = styled.h2`
    font-size: 30px;
`

export const AboutDescription = styled.p`
    font-size: 17px;
    font-weight: 400;
    margin-top: 15px;
`
