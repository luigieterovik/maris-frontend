import React, { useState, useEffect, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import getValidationSchema from './validation'
import * as S from './styles'
import { api } from '../../services/api'
import { UserContext } from '../../contexts/User'

const Account = ({ accountComponent, isPopup }) => {
  const [renderComponent, setRenderComponent] = useState(accountComponent)
  const validationSchema = getValidationSchema(renderComponent)
  const [currentError, setCurrentError] = useState('')
  const [recoverEmailSent, setRecoverEmailSent] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  })

  const { userData, setUserData } = useContext(UserContext)

  const onSubmit = async userData => {
    setCurrentError('')

    if (renderComponent === 'register') {
      try {
        const { data } = await api.post('users', {
          name: userData.name,
          email: userData.email,
          password: userData.password
        })
        setUserData(data)

        navigate('/')
      } catch (err) {
        console.log(err.response.data.error)
        setCurrentError(err.response.data.error)
      }
    }

    if (renderComponent === 'login') {
      try {
        const { data } = await api.post('sessions', {
          email: userData.email,
          password: userData.password
        })
        setUserData(data)

        navigate('/')
      } catch (err) {
        console.log(err.response.data.error)
        setCurrentError(err.response.data.error)
      }
    }

    if (renderComponent === 'recover') {
      setRecoverEmailSent(true)
    }
  }

  useEffect(() => {
    setCurrentError('')
  }, [renderComponent])

  useEffect(() => {
    if (errors) {
      const firstError = Object.values(errors)[0]
      if (firstError) {
        setCurrentError(firstError.message)
      }
    }
  }, [errors])

  const navigate = useNavigate()
  const navigateToRegister = () => {
    setRenderComponent('register')
    if (!isPopup) navigate('/account/register')
  }
  const navigateToLogin = () => {
    setRenderComponent('login')
    if (!isPopup) navigate('/account/login')
  }
  const navigateToRecover = () => {
    setRenderComponent('recover')
    if (!isPopup) navigate('/account/recover')
  }

  return (
    <S.Wrapper
      isPopup={isPopup}
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      renderComponent={renderComponent}
      recoverEmailSent={recoverEmailSent}
    >
      {' '}
      <S.DivError hasError={currentError === ''} isPopup={isPopup}>
        {currentError}
      </S.DivError>
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
      {renderComponent === 'register' && (
        <S.InputWrapper>
          <S.Input type="text" placeholder="" {...register('name')} />
          <S.Placeholder>Nome completo</S.Placeholder>
        </S.InputWrapper>
      )}
      <S.EmailSentMessage>Nós te enviamos um email com instruções para redefinição de senha</S.EmailSentMessage>
      <S.InputWrapper>
        <S.Input type="email" placeholder="" {...register('email')} />
        <S.Placeholder>E-mail</S.Placeholder>
      </S.InputWrapper>
      {renderComponent !== 'recover' && (
        <S.InputWrapper>
          <S.Input type="password" placeholder="" {...register('password')} />
          <S.Placeholder>Senha</S.Placeholder>
        </S.InputWrapper>
      )}
      {renderComponent === 'register' && (
        <S.InputWrapper>
          <S.Input
            type="password"
            placeholder=""
            {...register('confirmPassword')}
          />
          <S.Placeholder>Confirme sua senha</S.Placeholder>
        </S.InputWrapper>
      )}
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
      {renderComponent === 'login' && (
        <>
          <S.Link>
            Novo cliente?{' '}
            <a onClick={() => navigateToRegister()}>Criar sua conta</a>
          </S.Link>
          <S.Link>
            Esqueceu sua senha?{' '}
            <a onClick={() => navigateToRecover()}>Recuperar senha</a>
          </S.Link>
        </>
      )}
      {renderComponent === 'register' && (
        <S.Link>
          Já tem uma conta? <a onClick={() => navigateToLogin()}>Entre aqui</a>
        </S.Link>
      )}
      {renderComponent === 'recover' && (
        <S.Link>
          Lembrou sua senha?{' '}
          <a onClick={() => navigateToLogin()}>Voltar para o login</a>
        </S.Link>
      )}
    </S.Wrapper>
  )
}

export default Account
