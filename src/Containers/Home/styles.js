import styled from 'styled-components'

export const Container = styled.body`
    width: auto;
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
    margin: 50px auto;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto auto;
    justify-items: center;
    grid-template-areas: 
        "offerImage feminineImage masculineImage ambientImage"
        "offerDescription feminineDescription masculineDescription ambientDescription";
`

export const CategoryImage = styled.img`
    height: 100px;

    &.offerImage {
        grid-area: offerImage;
    }
    &.feminineImage {
        grid-area: feminineImage;
    }
    &.masculineImage {
        grid-area: masculineImage;
    }
    &.ambientImage {
        grid-area: ambientImage;
    }
`

export const CategoryDescription = styled.p`
    margin-top: 10px;

    font-weight: 400;
    font-size: 16px;

    &.offerDescription {
        grid-area: offerDescription;
    }
    &.feminineDescription {
        grid-area: feminineDescription;
    }
    &.masculineDescription {
        grid-area: masculineDescription;
    }
    &.ambientDescription {
        grid-area: ambientDescription;
    }
`

/* _____Carousels_____ */
export const CarouselWrapper = styled.div`
    width: 90%;

    margin: 0 50px;

    .rec-dot {
        display: none;
    }
    .rec-arrow {
        display: none;
    }
    .Carousel:hover .rec-arrow {
        
    }

`

export const CarouselTitle = styled.h3`
    margin-left: 15px;
`

export const CarouselSeeAll = styled.span`
    margin-top: 10px;
    position: absolute;
    right: 8%;

    font-weight: 600;
    font-size: 15px;

    color: blue;
`

export const CarouselBar = styled.div`
    width: 185px;
    height: 6px;

    background-color: #9c19e8;

    border-radius: 50px;

    margin: 5px 0 15px 15px;
`

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
`

export const ItemImage = styled.img`
    max-height: 50%;
    max-width: 90%;

    align-self: center;
`

export const ItemName = styled.p`
    margin: 10px 0 20px;

    font-size: 15px;
`

export const ItemPrice = styled.p`
    font-weight: 600;
    font-size: 19px;
`

export const ItemInstallment = styled.label`
    font-size: 15px;
`

/* _____About_____ */
export const AboutWrapper = styled.div``

export const AboutTitle = styled.h2``

export const AboutDescription = styled.p``

/* _____Footer_____ */
export const FooterBar = styled.img`
    width: 100%;
`