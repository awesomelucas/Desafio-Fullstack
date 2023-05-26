import styled from "styled-components";

export const ContainerRegister = styled.div`
  background-color: var(--Grey-3);
  width: 90%;
  max-width: 400px;
  padding: 20px 0;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 30px;

  form {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  input {
    width: 100%;
    height: 38px;

    background-color: var(--Grey-2);
    border-radius: 5px;
    outline: none;
    color: var(--Grey-0);
  }

  label {
    font-size: 14px;
    color: var(--Grey-1);
  }

  select {
  width: 100%;
  height: 38px;
  outline: 0;
  border-radius: 5px;
  background-color: var(--Grey-2);
  color: var(--Grey-0);
  margin: 0;
  
  border: 1px solid var(--Grey-0);
}
`;