import React, { useState } from 'react'
import PropTypes from 'prop-types'
import * as S from './styles'

function Login() {
  const [isRecoverPassword, setIsRecoverPassword] = useState(false)

  return (
    <>
      {isRecoverPassword ? (
        <S.Wrapper>
          <S.Title>Recuperar senha</S.Title>
          <S.Description>Insira seu e-mail:</S.Description>

          <S.InputWrapper>
            <S.Input required type="email" placeholder="" />
            <S.Placeholder>E-mail</S.Placeholder>
          </S.InputWrapper>

          <S.Button type="submit" value="Recuperar" />
          <S.Link>
            Lembrou sua senha?{' '}
            <a onClick={() => setIsRecoverPassword(!isRecoverPassword)}>
              Voltar para o login
            </a>
          </S.Link>
        </S.Wrapper>
      ) : (
        <S.Wrapper>
          <S.Title>Entrar em minha conta</S.Title>
          <S.Description>Insira seu e-mail e senha:</S.Description>

          <S.InputWrapper>
            <S.Input required type="email" placeholder="" />
            <S.Placeholder>E-mail</S.Placeholder>
          </S.InputWrapper>

          <S.InputWrapper>
            <S.Input required type="password" placeholder="" />
            <S.Placeholder>Senha</S.Placeholder>
          </S.InputWrapper>

          <S.Button type="submit" value="Entrar" />
          <S.Link>
            Novo cliente? <a>Criar sua conta</a>
          </S.Link>
          <S.Link>
            Esqueceu sua senha?{' '}
            <a onClick={() => setIsRecoverPassword(!isRecoverPassword)}>
              Recuperar senha
            </a>
          </S.Link>
        </S.Wrapper>
      )}
    </>
  )
}

function Register() {
  return (
    <S.Wrapper>
      <S.Title>Criar nova conta</S.Title>
      <S.Description>Insira seu nome, e-mail e senha:</S.Description>

      <S.InputWrapper>
        <S.Input required type="text" placeholder="" />
        <S.Placeholder>Nome completo</S.Placeholder>
      </S.InputWrapper>

      <S.InputWrapper>
        <S.Input required type="email" placeholder="" />
        <S.Placeholder>E-mail</S.Placeholder>
      </S.InputWrapper>

      <S.InputWrapper>
        <S.Input required type="password" placeholder="" />
        <S.Placeholder>Senha</S.Placeholder>
      </S.InputWrapper>

      <S.InputWrapper>
        <S.Input required type="password" placeholder="" />
        <S.Placeholder>Confirme sua senha</S.Placeholder>
      </S.InputWrapper>

      <S.Button type="submit" value="Criar minha conta" />
      <S.Link>
        Já tem uma conta? <a>Entre aqui</a>
      </S.Link>
    </S.Wrapper>
  )
}

export default function LoginSelector({ isLogin, isRegister }) {
  return (
    <>
      {isLogin && <Login />}
      {isRegister && <Register />}
    </>
  )
}

LoginSelector.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  isRegister: PropTypes.bool.isRequired
}
