import { useEffect } from 'react';
import { Title } from '../components/Title';

export const Inicio = () => {

  useEffect ( () => {
    fetch('https://jsonplaceholder.typicode.com/posts/2')
    .then((response) => response.json())
    .then((json) => console.log(json));
  }, []);

  return (
    <>
      <Title titulo="Bienvenido!" />
    </>
  );
};
