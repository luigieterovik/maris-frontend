import React from 'react'

import * as S from './styles'

export default function LoginComponent() {
  return (
    <>
      <S.Wrapper>
        <S.Title>Entrar em minha conta</S.Title>
        <S.Description>Insira seu e-mail e senha:</S.Description>
        <S.InputWrapper>
          <S.Placeholder>E-mail</S.Placeholder>
          <S.Input type="email" />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Placeholder>Senha</S.Placeholder>
          <S.Input type="password" />
        </S.InputWrapper>

        <S.Button type="submit">Entrar</S.Button>
        <S.Link>
          Novo cliente? <a>Criar sua conta</a>
        </S.Link>
        <S.Link>
          Esqueceu sua senha? <a>Recuperar senha</a>
        </S.Link>
      </S.Wrapper>
    </>
  )
}
