import styled from 'styled-components'

const Widget = styled.div `
margin-top: 24px;
margin-bottom: 24px;
border: 1px solid ${({ theme }) => theme.colors.primary};
border-radius: 5px;
background-color: ${({ theme }) => {
  return theme.colors.mainBg;
}};
`;


Widget.Header = styled.header`
display: flex;
justify-content: flex-start;
align-items: center;
padding: 18px 32px;
color: ${({ theme }) => theme.colors.white};
background-color: ${({ theme }) => theme.colors.primary};

* {
  margin: 0;
}
`;

Widget.Content = styled.div`
padding: 24px 32px 32px 32px;
& > *:first-child {
  margin-top: 0;
}
& > *:last-child {
  margin-bottom: 0;
}
ul {
  list-style: none;
  padding: 0;
}
`;

export default Widget;