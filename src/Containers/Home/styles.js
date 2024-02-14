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

  background: #f7f7f7;

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
