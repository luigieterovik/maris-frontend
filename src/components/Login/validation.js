import * as yup from 'yup'

const schemas = {
  login: yup.object().shape({
    email: yup
      .string()
      .email('Digite um e-mail válido')
      .required('O e-mail é obrigatório'),
    password: yup
      .string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve ter pelo menos 6 dígitos')
  }),

  recover: yup.object().shape({
    email: yup
      .string()
      .email('Digite um e-mail válido')
      .required('O e-mail é obrigatório')
  }),

  register: yup.object().shape({
    name: yup.string().required('O nome é obrigatório'),
    email: yup
      .string()
      .email('Digite um e-mail válido')
      .required('O e-mail é obrigatório'),
    password: yup
      .string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve ter pelo menos 6 dígitos'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'As senhas devem coincidir')
      .required('A confirmação da senha é obrigatória')
  })
}

export default function getValidationSchema(component) {
  return schemas[component] || yup.object().shape({})
}
