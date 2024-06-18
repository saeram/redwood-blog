import {
  FieldError,
  Form,
  Submit,
  SubmitHandler,
  TextAreaField,
  TextField,
  Label
} from '@redwoodjs/forms'
import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

interface FormValues {
  name: string
  email: string
  message: string
}

const ContactPage = () => {
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data)
  }
  return (
    <>
      <Metadata title="Contact" description="Contact page" />

      <Form onSubmit={onSubmit} config={{ mode: 'onBlur' }}>
        <Label name="name" errorClassName="error">Name</Label>
        <TextField name="name" validation={{ required: true }} />
        <FieldError name="name" className="error" />

        <Label name="email" errorClassName="error">Email</Label>
        <TextField name="email" validation={{ required: true,
          pattern: {
            value: /^[^@]+@[^.]+\..+$/,
            message: 'Please enter a valid email address',
          }
         }} />
        <FieldError name="email" className="error" />


        <Label name="message" errorClassName="error">Message</Label>
        <TextAreaField name="message" validation={{ required: true }} />
        <FieldError name="message" className="error" />


        <Submit>Save</Submit>
      </Form>
    </>
  )
}

export default ContactPage
