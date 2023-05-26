import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--Grey-4);
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
`;

export const ContainerNoventa = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:20px;

`;

export const ContainerNoventaHeader = styled.header`
  width: 90%;
  margin: 30px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap:20px;

 h1{
  margin: 0;
 }
  
`;