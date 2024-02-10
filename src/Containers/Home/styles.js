import styled from 'styled-components'

export const Container = styled.body`
    width: auto;
    max-width: 1366px;
    height: 100vh;
    margin: 0 auto;
`

/* _____Header______ */
export const Header = styled.header`
    height: 125px;
    width: 100%;

    display: flex;
    flex-direction: column;
`

export const MainHeader = styled.div`
    height: 90%;
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

    position: relative;
    right: 20px;
`

export const Icons = styled.img`
    height: 25px;

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
    
    margin: 0 auto;
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

    &::placeholder {
        color: black;
    }
`

export const SearchInputButton = styled.button`
    border-radius: 50px;
    border: none;

    height: 80%;
    width: 13%;

    background-color: #9c19e8;

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
        color: #05004D;
        opacity: 0.9;
    }
`

export const AIcons = styled.a`
    font-weight: 600;
    font-size: 14px;

    &:hover {
        cursor: pointer;
    }
`

export const LabelLogin = styled.label`
    font-weight: 400;
    font-size: 13px;
    color: blue;
`

export const HeaderSections = styled.div`   
    height: 3vh;
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 15px 0 20px;

    .ACategoriasHeader:hover {
        color: blue;
        opacity: 0.8;

        ${DownArrow} {
            filter: brightness(0) saturate(100%) invert(7%) sepia(100%) saturate(7214%) hue-rotate(245deg) brightness(112%) contrast(138%);
        }
    }
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

/* _____Carousels_____ */
export const CarouselItem = styled.div`
    width: 230px;
    height: 400px;

    display: flex;
    flex-direction: column;

    background-color: white;
    border-radius: 15px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);

    padding: 20px;
    margin: 10px 0;

    &:hover {
        transition: transform 0.3s ease-in-out;
        transform: translateY(-10px);
        cursor: pointer;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
    }
    &:not(:hover) {
        transition: transform 0.3s ease-in-out;
    }
`

export const ItemPrice = styled.p`
    font-weight: 600;
    font-size: 19px;
    color: green;
`

export const ItemImage = styled.img`
    max-height: 50%;
    max-width: 90%;

    border-radius: 15px;

    align-self: center;
`

export const ItemName = styled.p`
    margin: 10px 0 20px;

    font-size: 15px;
`

export const OldPrice = styled.span`
    color: gray; 
    font-size: 13px; 
    text-decoration: line-through;
    font-weight: 500;
`

export const ItemInstallment = styled.label`
    font-size: 15px;
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

/* _____Footer_____ */
export const FooterBar = styled.div`
    width: 100%;
    height: 6px;

    background-image: linear-gradient(90deg, #7000BA, #F300ED, #7000BA);
`

export const PaymentIcon = styled.img`
    height: 30px;
    width: 50px;
    border-radius: 5px;
    margin: 5px 10px 0 0;
`

export const Footer = styled.footer`
    height: 250px;
    background-color: black;
    padding: 60px 60px;

    .payment {
        font-size: 14px;
    }

    .comunication:hover {
        cursor: pointer;
        opacity: 0.6;
    }
`

export const FooterItem = styled.p`
    color: white;
    width: fit-content;

    .emailIcon {
        height: 20px;
        width: auto;
        margin: 0;
        transform: translateY(6px);
    }

    .phoneIcon {
        height: 24px;
        width: auto;
        margin: 0;
        transform: translateY(5px);
    }
`
