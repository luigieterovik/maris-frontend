import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import getValidationSchema from './validation'
import * as S from './styles'

const Account = ({ accountComponent, isPopup }) => {
  const [renderComponent, setRenderComponent] = useState(accountComponent)
  const validationSchema = getValidationSchema(renderComponent)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  })

  const onSubmit = data => console.log(data)

  console.log(errors)

  return (
    <S.Wrapper isPopup={isPopup}>
      <S.Title>
        {renderComponent === 'login' && 'Entrar em minha conta'}
        {renderComponent === 'recover' && 'Recuperar senha'}
        {renderComponent === 'register' && 'Criar nova conta'}
      </S.Title>
      <S.Description>
        {renderComponent === 'login' && 'Insira seu e-mail e senha:'}
        {renderComponent === 'recover' && 'Insira seu e-mail:'}
        {renderComponent === 'register' && 'Insira seu nome, e-mail e senha:'}
      </S.Description>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <S.InputWrapper isHidden={renderComponent !== 'register'}>
          <S.Input type="text" placeholder="" {...register('name')} />
          <S.Placeholder>Nome completo</S.Placeholder>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Input type="email" placeholder="" {...register('email')} />
          <S.Placeholder>E-mail</S.Placeholder>
        </S.InputWrapper>
        <S.InputWrapper isHidden={renderComponent === 'recover'}>
          <S.Input type="password" placeholder="" {...register('password')} />
          <S.Placeholder>Senha</S.Placeholder>
        </S.InputWrapper>
        <S.InputWrapper isHidden={renderComponent !== 'register'}>
          <S.Input
            type="password"
            placeholder=""
            {...register('confirmPassword')}
          />
          <S.Placeholder>Confirme sua senha</S.Placeholder>
        </S.InputWrapper>
        <S.Button
          type="submit"
          value={
            renderComponent === 'login'
              ? 'Entrar'
              : renderComponent === 'recover'
                ? 'Recuperar'
                : 'Criar minha conta'
          }
          className="button"
        />
      </form>
      {renderComponent == 'login' && (
        <>
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
        </>
      )}
      {renderComponent == 'register' && (
        <S.Link>
          Já tem uma conta?{' '}
          <a onClick={() => setRenderComponent('login')}>Entre aqui</a>
        </S.Link>
      )}
      {renderComponent == 'recover' && (
        <S.Link>
          Lembrou sua senha?{' '}
          <a onClick={() => setRenderComponent('login')}>Voltar para o login</a>
        </S.Link>
      )}
    </S.Wrapper>
  )
}

export default Account
