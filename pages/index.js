import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';

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

export const Input = styled.input`
  width: 100%;
  padding: .3rem;
  border-radius: 5px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: .3rem;
  margin-top: .5rem;
  cursor:pointer;
  background-color: ${db.theme.colors.contrastText};
  color:${db.theme.colors.white};
  border:0;
  border-right:2px solid ${db.theme.colors.primary};
  border-bottom:2px solid ${db.theme.colors.primary};

  :active{
    border:0;
    border-left:2px solid ${db.theme.colors.primary};
    border-top:2px solid ${db.theme.colors.primary};
  }
  
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <form onSubmit={function (e) {
              e.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <Input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                id="nome"
                name="name"
                placeholder="Escreva seu nome para começar!"
              />
              <SubmitButton type="submit" disabled={name.length === 0}>
                BORA COMEÇAR
                {name.length > 0 ? `, ${name}` : ''}
              </SubmitButton>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Header>
            <h2>Aqui virão outros quizzes</h2>
          </Widget.Header>
          <Widget.Content>
            <p>Aguarde e confie</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/joaofnr" />
    </QuizBackground>
  );
}
