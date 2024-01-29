import styled from 'styled-components'

export const Container = styled.section`
    width: 100vw;
    height: 100vh;
`

/* _____Header______ */
export const Header = styled.header`
    height: 20vh;
    width: 100%;

    display: flex;
    flex-direction: column;
`

export const MainHeader = styled.div`
    height: 80%;
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
`

export const Logo = styled.img`
    height: 30px;
    margin: 0 30px;
`

export const DivHeaderIcons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    position: absolute;
    right: 20px;
`

export const Icons = styled.img`
    height: 20px;

    margin: 0 10px 0 30px;


`

export const DownArrow = styled.img`
    width: 15px;
    margin-left: 3px;
    position: relative;
    top: 3px;
`

export const DivInput = styled.div`
    height: 40px;
    width: 500px;

    border-radius: 50px;
    
    margin: 0 2%;
    padding: 0 5px 0 18px;

    background-color: #F1F1F1;

    display: flex;
    align-items: center;
`

export const Input = styled.input`
    height: 100%;
    width: 87%;

    border: none;
    outline: none;

    background-color: #F1F1F1;
`

export const SearchInputButton = styled.button`
    border-radius: 50px;
    border: none;

    height: 80%;
    width: 13%;

    background-color: #8800E4;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }

    &:active {
        cursor: pointer;
        opacity: 0.7;
    }

    
`

export const Magnifying = styled.img`
    height: 50%;
    rotate: -90deg;
`

export const ASections = styled.a`
    margin-left: 50px;
    font-size: 14px;
    font-weight: 500;

    &:hover {
        cursor: pointer;
    }
`

export const AIcons = styled.a`
    font-weight: 700;
    font-size: 14px;

    &:hover {
        cursor: pointer;
    }
`

export const LabelLogin = styled.label`
    font-weight: 400;
    font-size: 14px;
    color: blue;
`

export const HeaderSections = styled.div`
    display: flex;
    justify-content: center;
    margin: 15px 0 20px;
`

export const HeaderBar = styled.img`
    width: 100%;
    height: 6px;
`

/* _____Main______ */
export const Main = styled.main`
    display: flex;
    flex-direction: column;

    background: #F7F7F7;

    width: 100vw;
`

export const MainImage = styled.img`
    width: 70%;

    border-radius: 2%;

    margin: 30px auto 0;
`

/* _____Carousels_____ */
export const CarouselWrapper = styled.div``
export const CarouselTitle = styled.h2``
export const CarouselAllItems = styled.a``

/* _____About_____ */
export const AboutWrapper = styled.div``
export const AboutTitle = styled.h2``
export const AboutDescription = styled.p``

/* _____Footer_____ */
export const FooterBar = styled.img``
