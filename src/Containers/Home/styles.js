import styled from 'styled-components'

export const Container = styled.section`
    width: 100vw;
    height: 100vh;
`

/* _____Header______ */
export const Header = styled.header`
    height: 20vh;
    width: 100vw;

    display: flex;
    flex-direction: column;

    margin-bottom: 30px;
`

export const MainHeader = styled.div`
    height: 80%;
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const Logo = styled.img`
    height: 30px;
    margin: 0 30px;
`

export const Icons = styled.img`
    height: 20px;

    margin: 0 10px;
`

export const DownArrow = styled.img`
    width: 15px;
`

export const DivInput = styled.div`
    height: 40px;
    width: 400px;

    border-radius: 50px;
    
    padding: 0 5px 0 18px;

    background-color: #F1F1F1;

    display: flex;
    align-items: center;
`

export const Input = styled.input`
    height: 100%;
    width: 87%;


    border: none;

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
`

export const Magnifying = styled.img`
    height: 50%;

    rotate: -90deg;
`

export const A = styled.a`
    width: 120px;
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

    width: 100vw;
`

export const MainImage = styled.img`
    width: 70%;

    border-radius: 2%;

    margin: 0 auto;
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
