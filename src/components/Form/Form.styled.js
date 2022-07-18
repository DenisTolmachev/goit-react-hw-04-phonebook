import styled from 'styled-components';
import { Form, Field } from 'formik';

export const ContactFormForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 200px;
`;

export const ContactFormLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.secondary};
`;

export const ContactFormInput = styled(Field)`
  outline: none;
  margin-top: 5px;
  padding: 5px;
  width: 200px;
  font-size: ${props => props.theme.fontSizes.m};
  border: none;
  border-radius: 3px;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px,
    rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
`;

export const ErrorText = styled.p`
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: 14px;
  color: red;
`;
