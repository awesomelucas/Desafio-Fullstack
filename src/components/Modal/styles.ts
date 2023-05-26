import styled from "styled-components";

export const Container = styled.div`
  top: 0;
  width: 100vw;
  height: 100vh;
  position: fixed;

  display: flex;
  justify-content: center;
  align-items: center;

  form{
    width: 90%;
    height: 240px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 10px auto;
    gap: 15px;
  }


  label {
    font-size: 14px;
  }
  input {
    width: 100%;
    outline: 0;
    border-radius: 5px;
    background-color: var(--Grey-2);
    color: var(--Grey-0);
    margin: 0;
    padding: 13px 0;
    border: 1px solid var(--Grey-0);
  }

  select {
    width: 100%;
    outline: 0;
    border-radius: 5px;
    background-color: var(--Grey-2);
    color: var(--Grey-0);
    margin: 0;
    padding: 13px 13px;
    border: 1px solid var(--Grey-0);
  }

  button {
    width: 100%;
    height: 50px;
  }

  > div {
    width: 90%;
    height: 340px;
    display: flex;
    flex-direction: column;
    align-items: center;
  
    color: var(--Grey-0);
    background-color: var(--Grey-3);
    max-width: 400px;
  }
`