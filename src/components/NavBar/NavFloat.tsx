import { useEffect, useState } from "react";
import { DivIsMatric, DivIsNews, NavFloats } from "./Style"

export const NavFloat = () => {
  const [isNews, setIsNews] = useState(false);
  const [isMatric, setIsMatric] = useState(false);

  const handleNews = () => {
    setIsNews(!isNews);
    setIsMatric(false);
  }

  const handleMatric = () => {
    setIsMatric(!isMatric);
    setIsNews(false);
  }
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setIsNews(false);
      setIsMatric(false);
    });
  }, []);
  useEffect(() => {
    let top = 0;
    const floats = document.getElementById('navFloats');
    window.addEventListener('scroll', () => {
      if (window.scrollY > top) {
        floats?.classList.add('floatFixed');
        top = window.scrollY;
      } else {
        floats?.classList.remove('floatFixed');
        top = window.scrollY;
      }
    });
  },[]);
  return (
    <NavFloats id="navFloats">
      <button
        onMouseOver={ () => {
          setIsNews(false);
          setIsMatric(false);        
        }}
      >
        Home
      </button>
      <button
        onMouseOver={ () => {
          setIsNews(false);
          setIsMatric(false);        
        }}
      >
        Área do aluno
      </button>
      <button
        onMouseOver={ handleNews }
        onClick={ handleNews }
      >
        Notícias {'>'}
      </button>
      <button
        onMouseOver={ handleMatric }
        onClick={ handleMatric }
      >
        Matrículas {'>'}
      </button>
      <button
        onMouseOver={ () => {
          setIsNews(false);
          setIsMatric(false);        
        }}
      >
        Contato
      </button>
      <button
        onMouseOver={ () => {
          setIsNews(false);
          setIsMatric(false);        
        }}
      >
        Calendário
      </button>
      <button
        onMouseOver={ () => {
          setIsNews(false);
          setIsMatric(false);        
        }}
      >
        Quem somos
      </button>

      {isNews && (
        <DivIsNews>
          <button>Notícias</button>
          <button>Eventos</button>
        </DivIsNews>
      )}

      {isMatric && (
        <DivIsMatric>
          <button>Fazer Matrícula</button>
          <button>Confirmar Matrícula</button>
          <button>Documentos</button>
        </DivIsMatric>
      )}
    </NavFloats>
  )
}