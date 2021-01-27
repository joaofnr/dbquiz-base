import styled from 'styled-components'
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';

// react
// function Title(params) {
//   return <h1>{params.children}</h1>
// }

// styled component
const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export const QuizContainer = styled.div`
width: 100%;
max-width: 350px;
padding-top: 45px;
margin: auto 10%;
@media screen and (max-width: 500px) {
  margin: auto;
  padding: 15px;  
  margin-top: 140px;
}
`;

const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex:1;
  background-size: cover;
  background-position: center;
  border-radius: 4px;
  overflow: hidden;
  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
            <Widget.Header>
              <h1>{db.title}</h1>
            </Widget.Header>
            <Widget.Content>
              <p>{db.description}</p>
            </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Header>
          <h2>Aqui vai outros quizzes</h2>
          </Widget.Header>
          <Widget.Content>
            <p>Aguarde e confie</p>
          </Widget.Content>
        </Widget>
        <Footer></Footer>
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/joaofnr" />
    </QuizBackground>
  )
}
