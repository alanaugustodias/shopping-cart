import style from 'styled-components';

const Container = style.section`
  padding: 60px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-gap: 1rem;
`;

export default {
    Container
};
