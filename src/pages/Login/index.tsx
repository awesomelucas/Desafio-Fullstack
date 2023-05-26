import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { LoginData, schema } from "./validator"
import { useAuth } from "../../hooks/useAuth"
import { Container, ContainerNoventa } from "../../components/Container/style"
import { ContainerLogin } from "./style"
import { Headline, Title2 } from "../../styles/Fonts/fonts"
import { Button } from "../../components/Button/buttons"
import { Link } from "react-router-dom"

export const Login = () => {
  const {signIn} = useAuth();
  const { register, handleSubmit } = useForm<LoginData>({
    resolver: zodResolver(schema)
  })

  return (
    <Container>
      <ContainerLogin>

      <Title2>Login</Title2>

      <form onSubmit={handleSubmit(signIn)}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register('email')} />

        <label htmlFor="password">Senha</label>
        <input type="password" id="password" {...register('password')} />

        <Button typeButton="primario">Entrar</Button>

        <ContainerNoventa>
          <Headline>Ainda não possui uma conta?</Headline>
          <Link to="/register">
            <Button typeButton="desabilitado">Cadastre-se</Button>
          </Link>
        </ContainerNoventa>
      </form>

      </ContainerLogin>
    </Container>
  )
}