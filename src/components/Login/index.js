import React, { useState, useEffect, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import getValidationSchema from './validation'
import * as S from './styles'
import api from '../../services/api'
import { UserContext } from '../../contexts/User'

const Account = ({ accountComponent, isPopup }) => {
  const [renderComponent, setRenderComponent] = useState(accountComponent)
  const validationSchema = getValidationSchema(renderComponent)
  const [currentError, setCurrentError] = useState('')
  const [recoverEmailSent, setRecoverEmailSent] = useState(false)
  const [token, setToken] = useState()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  })

  const { setUserData } = useContext(UserContext)

  const { token: tokenParam } = useParams()

  useEffect(() => {
    if (tokenParam) {
      setToken(tokenParam)
    }
  }, [tokenParam])

  const location = useLocation()
  const isContinue = location.pathname.split('/login/')[1]

  const onSubmit = async userData => {
    setCurrentError('')

    if (renderComponent === 'register') {
      try {
        const { data } = await api.post('users', {
          name: userData.name.trim(),
          email: userData.email.trim(),
          password: userData.password
        })

        setUserData(data)

        navigate('/')
      } catch (err) {
        setCurrentError(err.response.data.error)
      }
    }

    if (renderComponent === 'login') {
      try {
        const { data } = await api.post('sessions', {
          email: userData.email.trim(),
          password: userData.password
        })
        
        setUserData(data)

        navigate('/')
      } catch (err) {
        setCurrentError(err.response.data.error)
      }
    }

    if (renderComponent === 'recover') {
      setRecoverEmailSent(true)

      try {
        await api.post('recover', {
          email: userData.email.trim()
        })
      } catch (err) {
        console.log(err)
      }
    }

    if (renderComponent === 'reset') {
      try {
        await api.post('reset', {
          token: token,
          password: userData.password
        })

        navigate('/')
      } catch (err) {
        setCurrentError(err.response.data.error)
      }
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
      <S.DivError hasError={currentError === ''} isPopup={isPopup}>
        {currentError}
      </S.DivError>
      <S.Title>
        {renderComponent === 'login' &&
          (isContinue ? 'Entre para continuar' : 'Entrar em minha conta')}
        {renderComponent === 'recover' && 'Recuperar senha'}
        {renderComponent === 'register' && 'Criar nova conta'}
        {renderComponent === 'reset' && 'Redefinir senha'}
      </S.Title>
      <S.Description>
        {renderComponent === 'login' && 'Insira seu e-mail e senha:'}
        {renderComponent === 'recover' && 'Insira seu e-mail:'}
        {renderComponent === 'register' && 'Insira seu nome, e-mail e senha:'}
        {renderComponent === 'reset' && 'Insira uma nova senha:'}
      </S.Description>
      {renderComponent === 'register' && (
        <S.InputWrapper>
          <S.Input type="text" placeholder="" {...register('name')} />
          <S.Placeholder>Nome completo</S.Placeholder>
        </S.InputWrapper>
      )}
      <S.EmailSentMessage>
        Nós te enviamos um email com instruções para redefinição de senha
      </S.EmailSentMessage>
      {renderComponent !== 'reset' && (
        <S.InputWrapper>
          <S.Input type="email" placeholder="" {...register('email')} />
          <S.Placeholder>E-mail</S.Placeholder>
        </S.InputWrapper>
      )}
      {renderComponent !== 'recover' && (
        <S.InputWrapper>
          <S.Input type="password" placeholder="" {...register('password')} />
          <S.Placeholder>Senha</S.Placeholder>
        </S.InputWrapper>
      )}
      {(renderComponent === 'register' || renderComponent === 'reset') && (
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
              : renderComponent === 'register'
                ? 'Criar minha conta'
                : 'Redefinir senha'
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
      {(renderComponent === 'recover' || renderComponent === 'reset') && (
        <S.Link>
          Lembrou sua senha?{' '}
          <a onClick={() => navigateToLogin()}>Voltar para o login</a>
        </S.Link>
      )}
    </S.Wrapper>
  )
}

export default Account
