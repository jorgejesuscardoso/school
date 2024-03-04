import styled from 'styled-components';

export const FormContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: var(--main-form-background-color);

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-width: 450px;
    padding: 2rem;
    border-radius: 10px;
    background-color: var(--form-background-color);
    box-shadow: 0 0 10px 0 var(--form-box-shadow-color);
  }
  p {
    font-size: 1rem;
    text-align: center;
  }

  p.error {
    position: absolute;
    top: 35.7vw;
    font-size: 0.9rem;
    color: var(--error-color);
  }

  p.success {
    position: absolute;
    top: 34.9vw;
    color: var(--success-color);
  }

  p.loading {
    position: absolute;
    top: 36.6vw;
    color: var(--loading-color);
  }

  span {
    margin-top: 2.5rem;
    font-size: 0.94rem;
  }

  a {
    color: var(--link-color);
  }

  input {
    padding: 0.5rem;
    width: 100%;
    border-radius: 7px;
    margin-top: 0.2rem;
    background-color: var(--form-input-background-color);
  }

  select {
    padding: 0.5rem;
    width: 100%;
    border-radius: 7px;
    margin-top: 0.2rem;
    cursor: pointer !important;
    background-color: var(--form-input-background-color);
    gap: 0.5rem;

    option {
      font-size: 0.85rem;
      background-color: var(--form-input-background-color);
    }
    
  }

`;

export const FormBtnDiv = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  button {
    width: 45%;
    padding: 0.5rem;
    border-radius: 7px;
    font-size: 1.2rem;
    font-weight: bold;
    color: var(--text-color);

    &:hover {
      color: #ccc;
    }
  }

  button.submit {
    padding: 0.5rem;
    border-radius: 7px;
    background-color: var(--form-btn-submit-background-color);
    font-size: 1.2rem;

    &:hover {
      background-color: var(--form-btn-submit-background-hover-color);
    }
  }

  button.cancel {
    padding: 0.5rem;
    border-radius: 7px;
    background-color: var(--form-btn-cancel-background-color);
    font-size: 1.2rem;

    &:hover {
      background-color: var(--form-btn-cancel-hover-background-color);
    }
  }
`;

export const LoginContainer = styled.main`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: var(--main-form-background-color);
  
  form {
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    right: 0;
    gap: 1rem;
    width: 35%;
    height: 100%;
    padding: 2rem;
    background-color: var(--form-background-color);
    box-shadow: 0 0 10px 0 var(--form-box-shadow-color);

    h1 {
      font-size: 1.5rem;
      text-align: center;
      margin-bottom: 3.5rem;
    }

    img {
      margin: 0 auto;
      width: 400px;
     } 
  }
  p {
    font-size: 1rem;
    text-align: center;
  }

  p.error {
    position: absolute;
    top: 45.7vw;
    font-size: 0.9rem;
    color: var(--error-color);
  }
  p.error-login {
    color: var(--error-color);
  }

  p.success {
    position: absolute;
    top: 45vw;
    color: var(--success-color);
  }

  p.success-login {
    color: var(--success-color);
  }

  p.loading {
    position: absolute;
    top: 46.5vw;
    color: var(--loading-color);
  }

  p.loading-login {
    color: var(--loading-color);
  }

  span {
    font-size: 0.94rem;
  }

  a {
    color: var(--link-color);
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 70%;
  }
  input {
    padding: 0.5rem;
    width: 100%;
    border-radius: 7px;
    margin-top: 0.2rem;
    background-color: var(--form-input-background-color);
  }

  button {
    padding: 0.5rem;
    width: 100%;
    border-radius: 7px;
    background-color: var(--form-btn-submit-background-color);
    font-size: 1.2rem;
    font-weight: bold;
    color: var(--text-color);

    &:hover {
      background-color: var(--form-btn-submit-background-hover-color);
    }
  }
`;

export const News = styled.main`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 65%;
  height: 100vh;
`;