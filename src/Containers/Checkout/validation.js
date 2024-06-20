import * as Yup from 'yup'

import { cpf as cpfValidator } from 'cpf-cnpj-validator'

export const identificationSchema = Yup.object().shape({
  fullName: Yup.string()
    .required('Nome completo é obrigatório')
    .matches(
      /^([a-zA-ZÀ-ÿ]+\s[a-zA-ZÀ-ÿ]+(\s[a-zA-ZÀ-ÿ]+)*)\s?$/,
      'Digite seu nome completo'
    ),

  email: Yup.string().required('Email é obrigatório').email('Email inválido'),

  cpf: Yup.string()
    .required('CPF é obrigatório')
    .test('is-valid-cpf', 'CPF inválido', value => cpfValidator.isValid(value)),

  phoneNumber: Yup.string()
    .required('Celular é obrigatório')
    .matches(/^\(\d{2}\) \d{5}-\d{4}$/, 'Celular inválido')
})

export const deliverySchema = Yup.object().shape({
  cep: Yup.string()
    .required('O CEP é obrigatório')
    .matches(/^\d{5}-\d{3}$/, 'CEP inválido'),
  address: Yup.string()
    .required('O endereço é obrigatório')
    .matches(/^([a-zA-ZÀ-ÿ0-9]+(\s[a-zA-ZÀ-ÿ]+)*)/, 'Endereço inválido'),
  houseNumber: Yup.string('Número inválido').required('Campo obrigatório'),
  neighborhood: Yup.string()
    .required('O bairro é obrigatório')
    .matches(/^([a-zA-ZÀ-ÿ0-9]+(\s[a-zA-ZÀ-ÿ]+)*)/, 'Bairro inválido'),
  complement: Yup.string(),
  recipient: Yup.string()
    .required('O destinatário é obrigatório')
    .matches(/^([a-zA-ZÀ-ÿ]+(\s[a-zA-ZÀ-ÿ]+)*)$/, 'Destinatário inválido')
})
