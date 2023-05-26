import styled, { css } from "styled-components";

interface IMyButton {
  typeButton: string;
}

export const Button = styled.button`
  width: 100%;
  font-size: 16px;
  border: none;
  padding: 12px 30px;
  border-radius: 5px;
  color: var(--Grey-0);
  font-weight: bold;
  cursor: pointer;

  ${({ typeButton }: IMyButton) => {
    if (typeButton === "negativo") {
      return css`
        background-color: var(--Color-primary-Negative);
      `;
    }
    if (typeButton === "primario") {
      return css`
        background-color: var(--Color-primary);
        margin-top: 10px;
        &:hover {
          background-color: var(--Color-primary-Focus);
        }
      `;
    }
    if (typeButton === "desabilitado") {
      return css`
        background-color: var(--Grey-1);
        &:hover {
          background-color: var(--Grey-2);
        }
      `;
    }
    if (typeButton === "navegacao") {
      return css`
        width: 100px;
        background-color: var(--Grey-3);
        &:hover {
          background-color: var(--Grey-2);
        }
      `;
    }

    if (typeButton === "add") {
      return css`
        width: 32px;
        height: 32px;
        font-size: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        border: none;
        color: var(--Grey-0);
        background-color: var(--Grey-2);
        cursor: pointer;
      `;
    }

    if (typeButton === "delete") {
      return css`
        width: 10px;
        height: 10px;
        font-size: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        color: var(--Grey-0);
        background-color: var(--Negative);
        cursor: pointer;
      `;
    }

    if (typeButton === "att") {
      return css`
        width: 10px;
        height: 10px;
        font-size: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        color: var(--Grey-0);
        background-color: var(--Information);
        cursor: pointer;
      `;
    }
  }}
`;
