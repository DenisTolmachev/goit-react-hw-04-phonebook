import PropTypes from 'prop-types';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
  ContactFormForm,
  ContactFormLabel,
  ContactFormInput,
  ErrorText,
} from './Form.styled';
import { Button } from 'components/common/Button.styled';

const mySchema = yup.object().shape({
  name: yup.string().min(2).required('Name is required'),
  number: yup.string().length(7).required('Number is required'),
});

export const ContactForm = ({onSubmit}) => {
  const normalizedNumber = str => {
    const normalizedNumber =
      str[0] + str[1] + str[2] + '-' + str[3] + str[4] + '-' + str[5] + str[6];
    return normalizedNumber;
  };

  const handleSubmit = (values, { resetForm }) => {
    const newName = {
      name: values.name,
      number: normalizedNumber(values.number),
    };
    onSubmit(newName);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={mySchema}
      onSubmit={handleSubmit}
    >
      {props => (
        <ContactFormForm>
          <ContactFormLabel>
            Name
            <ContactFormInput
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              placeholder="Rosie Simpson"
              value={props.values.name}
              onChange={props.handleChange}
            />
            <ErrorMessage
              name="name"
              render={msg => <ErrorText>{msg}</ErrorText>}
            />
          </ContactFormLabel>
          <ContactFormLabel>
            Number
            <ContactFormInput
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              placeholder="Enter 7 digits"
              value={props.values.number}
              onChange={props.handleChange}
            />
            <ErrorMessage
              name="number"
              render={msg => <ErrorText>{msg}</ErrorText>}
            />
          </ContactFormLabel>
          <Button type="submit">Add contact</Button>
        </ContactFormForm>
      )}
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
