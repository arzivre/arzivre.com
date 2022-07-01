//@ts-nocheck
import { useRef, useState } from 'react'
import { createStyles, TextInput, Textarea, Button, Group } from '@mantine/core'
import emailjs from '@emailjs/browser'
import Layout from 'components/Layout'

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 400,
    boxSizing: 'border-box',
    backgroundImage: `linear-gradient(-60deg, ${theme.colors.gray[7]} 0%, ${theme.colors.gray[9]} 100%)`,
    borderRadius: theme.radius.md,
    padding: theme.spacing.xl * 2.5,
    margin: '100px',
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      padding: theme.spacing.xl * 1.5,
      margin: 'auto',
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    color: theme.white,
    lineHeight: 1,
  },

  description: {
    color: theme.colors[theme.primaryColor][0],
    maxWidth: 300,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: '100%',
    },
  },

  form: {
    backgroundColor: theme.white,
    padding: theme.spacing.xl,
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.lg,
  },

  social: {
    color: theme.white,

    '&:hover': {
      color: theme.colors[theme.primaryColor][1],
    },
  },

  input: {
    backgroundColor: theme.white,
    borderColor: theme.colors.gray[4],
    color: theme.black,

    '&::placeholder': {
      color: theme.colors.gray[5],
    },
  },

  inputLabel: {
    color: theme.black,
  },

  control: {
    backgroundColor: theme.colors.gray[9],
  },
}))

export default function ContactUs() {
  const [data, setData] = useState({
    user_email: '',
    user_name: '',
    message: '',
  })

  const { classes } = useStyles()

  const form = useRef()

  const textareaStyle = { input: classes.input, label: classes.inputLabel }

  const left = (
    <section>
      <h1 className=''>Let&apos;s Build Something Together</h1>
      <p className='' mt='sm' mb={30}>
        sonyfauzi@outlook.co.id
      </p>
      <p className='' mt='sm' mb={30}>
        0813 3205 6357
      </p>
      <p className='' mt='sm' mb={30}>
        akan menjawab dalam 24 jam.
      </p>
      <p>Kediri, Jawa Timur.</p>
    </section>
  )

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_4t7ll1q',
        'template_jgzo41g',
        form.current,
        'XO3SeKnaksOzfRKEA'
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.status, result.text)
        },
        (error) => {
          console.log('FAILED...', error.text)
        }
      )
  }

  return (
    <Layout>
      <main className='container mx-auto px-4 grid grid-cols-2 my-20'>
        {left}
        <form className={classes.form} ref={form} onSubmit={sendEmail}>
          <TextInput
            label='Email'
            placeholder='your@email.com'
            name='user_email'
            required
            value={data.user_email}
            onChange={(e) => setData({ ...data, user_email: e.target.value })}
            classNames={textareaStyle}
          />
          <TextInput
            label='Name'
            placeholder='John Doe'
            name='user_name'
            mt='md'
            value={data.user_name}
            onChange={(e) => setData({ ...data, user_name: e.target.value })}
            classNames={textareaStyle}
          />
          <Textarea
            required
            label='Your message'
            placeholder='I want to say hi!'
            name='message'
            minRows={4}
            mt='md'
            value={data.message}
            onChange={(e) => setData({ ...data, message: e.target.value })}
            classNames={textareaStyle}
          />

          <button
            className='px-4 py-2 m-4 bg-blue-400 '
            type='submit'
            value='Send'
          >
            Kirim Pesan
          </button>
        </form>
      </main>
    </Layout>
  )
}
