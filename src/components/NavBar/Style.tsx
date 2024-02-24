import styled from "styled-components";

export const NavBa = styled.nav`
  background-color: var(--nav-color);
  position: absolute;
  top: 0;
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  height: 6vw;
  font-weight: bolder;
  font-size: 1.3em;
  color: var(--font-nav-color);
  margin-bottom: 10px;
`;
export const DivDrawn = styled.div`
  position: absolute;
  left: 0;
  display: flex;
  align-items: center;
  width: 40%;
  height: 6vw;
  overflow: hidden;
  a {
    position: absolute;
    width: 60%;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
export const DivSearch = styled.div`
  display: flex;
  align-items: center;
  width: 35%;
  height: 6vw;
  input {
    background-color: var( --nav-input-background-color);
    width: 70%;
    height: 40%;
    border-radius: 10px;
    padding: 10px;
    margin-right: 10px;
    &:focus {
      background-color: var(--nav-input-focus-color);
    }
    &::placeholder {
      color: var(--placeholder-color);
    }
  }
  button {
    width: 15%;
    height: 40%;
    border-radius: 10px;
    border: none;
    background-color: var(--nav-button-background-color);
    color: var(--nav-button-color);
    font-weight: bolder;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      background-color: var(--nav-button-hover-color);
      color: var(--body-color);
    }
  }
`;
export const DivLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 40%;
  height: 6vw;
  button {
    width: 15%;
    height: 40%;
    border-radius: 10px;
    border: none;
    background-color: var(--nav-button-background-color);
    color: var(--nav-button-color);
    font-weight: bolder;
    transition: 0.3s;
    margin-right: 20px;
    &:hover {
      background-color: var(--nav-button-hover-color);
      color: var(--body-color);
    }
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 90%;
    gap: 5px;

  input {
    background-color: var( --nav-input-background-color);
    width: 80%;
    height: 40%;
    border-radius: 10px;
    padding: 10px;
    &:focus {
     background-color: var(--nav-input-focus-color);
    }
    &::placeholder {
      color: var(--placeholder-color);
    }
  }
  }
`;
export const NavFloats = styled.nav`
  background-color: var(--nav-menu-floating-background-color);
  position: absolute;
  top: 6vw;
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  height: 2.5vw;

    button {
    width: 10%;
    height: 97%;
    border: none;
    color: var(--font-nav-color);
    font-weight: bolder;
    font-size: 0.9em;
    border-radius: 7px;
    &:hover {
      background-color: var(--nav-color-button-menu-hover);
      color: var(--font-nav-button-hover-color);
    }
  }
`;
export const DivIsNews = styled.div`
  background-color: var(--nav-menu-floating-background-color);
  position: absolute;
  top: 2.5vw;
  left: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 10%;
  border-radius: 0 0 5px 5px;
  button {
    text-align: center;
    width: 100%;
    height: 25px;
    border: none;
    color: var(--font-nav-color);
    font-weight: bolder;
    transition: 0.2s;
    &:hover {
      background-color: var(--nav-color-button-menu-hover);
      color: var(--font-nav-button-hover-color);
      border-radius: 0 ;
    }
  }
`;
export const DivIsMatric = styled.div`
  background-color: var(--nav-menu-floating-background-color);
  position: absolute;
  top: 2.5vw;
  right: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 10%;
  border-radius: 0 0 5px 5px;
  button {
    text-align: start;
    padding-left: 10px;
    width: 100%;
    height: 25px;
    border: none;
    color: var(--font-nav-color);
    font-weight: bolder;
    transition: 0.2s;
    &:hover {
      background-color: var(--nav-color-button-menu-hover);
      color: var(--font-nav-button-hover-color);
      border-radius: 0;
    }
  }
`;
export const BarraStart = styled.div`
  background-color: var(--nav-barra-color);
  position: absolute;
  top: 0;
  left: 0;
  width: 24%;
  height: 2vw;
`;