import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import Link from '../src/components/Link';

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
        <QuizLogo />
        <Widget
          as={motion.section}
          transition={{ duration: 0.5, delay: 0 }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '100%' },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <form onSubmit={(e) => {
              e.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <Input
                onChange={(e) => { setName(e.target.value); }}
                id="nome"
                name="name"
                value={name}
                placeholder="Escreva seu nome para começar!"
              />
              <Button type="submit" disabled={name.length === 0}>
                BORA COMEÇAR
                {name.length > 0 ? `, ${name}!` : ''}
              </Button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget
          as={motion.section}
          transition={{ duration: 0.5, delay: 0.5 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Header>
            <h2>Quizzes da Galera</h2>
          </Widget.Header>
          <Widget.Content>
            <ul>
              {db.external.map((link) => {
                const [project, author] = link
                  .replace('https://', '')
                  .split('.');

                return (
                  <li>
                    <Widget.Topic as={Link} href={`/quiz/${project}_${author}`}>
                      <strong>
                        {project}
                      </strong>
                      <small>
                        {' '}
                        por
                        {' '}
                        {author}
                      </small>
                    </Widget.Topic>
                  </li>
                );
              })}
            </ul>
          </Widget.Content>
        </Widget>
        <Footer
          as={motion.footer}
          transition={{ duration: 0.5, delay: 1 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
         />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/joaofnr" />
    </QuizBackground>
  );
}
