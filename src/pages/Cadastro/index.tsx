
import { ContainerRegister } from "./style";

import { useForm } from "react-hook-form";

import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../services/api";
import { RegisterData, contactSchema } from "./validation";
import { Contact } from "../Dashboard";
import { Container, ContainerNoventaHeader } from "../../components/Container/style";
import { Button } from "../../components/Button/buttons";
import { Title2, Title3 } from "../../styles/Fonts/fonts";



const Cadastro = () => {
const navigate = useNavigate()
  const { register, handleSubmit } = useForm<RegisterData>({
    resolver: zodResolver(contactSchema)
  })

  // const createRegister = async (data: RegisterData) => {
  //   const response = await api.post<Contact>('/users', { ...data})

  //   setTimeout(() => {
  //     navigate("/");
  //   }, 1200);
  // }
  
  const createRegister = async (data: RegisterData) =>  {

    try {
      api.post<RegisterData>("/users", data);

      setTimeout(() => {
        navigate("/");
      }, 1200);
    } catch (error) {

      console.log(error)
    }
  }

  return (


    <Container>
      <ContainerNoventaHeader>
        <Link to="/">
          <Button typeButton="navegacao">
            Voltar
          </Button>
        </Link>
      </ContainerNoventaHeader>

      <ContainerRegister>
        <Title2>Crie sua conta</Title2>
        <Title3>Rapido e grátis, vamos nessa</Title3>
        <form onSubmit={handleSubmit(createRegister)}>
          <label htmlFor="name">Nome</label>
          <input
            id="name"
            type="text"
            placeholder="Digite seu nome"
            {...register("name")}
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            placeholder="Digite seu email"
            {...register("email")}
          />
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            type="password"
            placeholder="Digite sua senha"
            {...register("password")}
          />
    
          <label htmlFor="phone">Contato</label>
          <input
            id="phone"
            type="text"
            placeholder="Opção de contato"
            {...register("phone")}
          />

          <Button  typeButton="primario">Entrar</Button>
        </form>
      </ContainerRegister>
    </Container>

  );
};

export default Cadastro;
