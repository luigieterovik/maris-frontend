import * as Yup from 'yup'

const getValidationSchema = renderComponent => {
  switch (renderComponent) {
    case 'login':
      return Yup.object().shape({
        email: Yup.string()
          .email('Email inválido')
          .required('Email é obrigatório'),
        password: Yup.string()
          .min(6, 'A senha deve ter pelo menos 6 caracteres')
          .required('Senha é obrigatória')
      })
    case 'recover':
      return Yup.object().shape({
        email: Yup.string()
          .email('Email inválido')
          .required('Email é obrigatório')
      })
    case 'reset':
      return Yup.object().shape({
        password: Yup.string()
          .min(6, 'A senha deve ter pelo menos 6 caracteres')
          .required('Senha é obrigatória'),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], 'As senhas não correspondem')
          .required('Confirmação de senha é obrigatória')
      })
    case 'register':
      return Yup.object().shape({
        name: Yup.string().required('Nome é obrigatório'),
        email: Yup.string()
          .email('Email inválido')
          .required('Email é obrigatório'),
        password: Yup.string()
          .min(6, 'A senha deve ter pelo menos 6 caracteres')
          .required('Senha é obrigatória'),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], 'As senhas não correspondem')
          .required('Confirmação de senha é obrigatória')
      })
    default:
      return Yup.object().shape({})
  }
}

export default getValidationSchema
