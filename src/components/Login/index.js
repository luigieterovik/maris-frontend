import React, { useState } from 'react'
import PropTypes from 'prop-types'
import * as S from './styles'

export default function Account({ ...props }) {
  const [renderComponent, setRenderComponent] = useState(props.accountComponent)

  return (
    <>
      {renderComponent === 'login' && (
        <S.Wrapper isPopup={props.isPopup}>
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

          <S.Button type="submit" value="Entrar" className="button" />
          <S.Link>
            Novo cliente?{' '}
            <a onClick={() => setRenderComponent('register')}>
              Criar sua conta
            </a>
          </S.Link>
          <S.Link>
            Esqueceu sua senha?{' '}
            <a onClick={() => setRenderComponent('recover')}>Recuperar senha</a>
          </S.Link>
        </S.Wrapper>
      )}

      {renderComponent === 'recover' && (
        <S.Wrapper isPopup={props.isPopup}>
          <S.Title>Recuperar senha</S.Title>
          <S.Description>Insira seu e-mail:</S.Description>

          <S.InputWrapper>
            <S.Input required type="email" placeholder="" />
            <S.Placeholder>E-mail</S.Placeholder>
          </S.InputWrapper>

          <S.Button type="submit" value="Recuperar" className="button" />
          <S.Link>
            Lembrou sua senha?{' '}
            <a onClick={() => setRenderComponent('login')}>
              Voltar para o login
            </a>
          </S.Link>
        </S.Wrapper>
      )}

      {renderComponent === 'register' && (
        <S.Wrapper isPopup={props.isPopup}>
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

          <S.Button
            type="submit"
            value="Criar minha conta"
            className="button"
          />
          <S.Link>
            Já tem uma conta?{' '}
            <a onClick={() => setRenderComponent('login')}>Entre aqui</a>
          </S.Link>
        </S.Wrapper>
      )}
    </>
  )
}

Account.propTypes = {
  isPopup: PropTypes.bool,
  accountComponent: PropTypes.bool
}
