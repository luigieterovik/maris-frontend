import React, { useState } from 'react'

import * as S from './styles'

export default function Login() {
  const [isFocusedEmail, setIsFocusedEmail] = useState(false)
  const [isFocusedPassword, setIsFocusedPassword] = useState(false)

  return (
    <>
      <S.Wrapper>
        <S.Title>Entrar em minha conta</S.Title>
        <S.Description>Insira seu e-mail e senha:</S.Description>

        <S.InputWrapper>
          <S.Placeholder isFocusedEmail={isFocusedEmail} id="email">
            E-mail
          </S.Placeholder>
          <S.Input
            type="email"
            required
            onFocus={() => setIsFocusedEmail(true)}
            onBlur={() => setIsFocusedEmail(false)}
          />
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Placeholder isFocusedPassword={isFocusedPassword} id="password">
            Senha
          </S.Placeholder>
          <S.Input
            type="password"
            required
            onFocus={() => setIsFocusedPassword(true)}
            onBlur={() => setIsFocusedPassword(false)}
          />
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
