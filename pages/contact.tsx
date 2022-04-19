//@ts-nocheck
import { useRef } from 'react'
import {
  createStyles,
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  ActionIcon,
} from '@mantine/core'
import emailjs from '@emailjs/browser'
import { BrandTwitter, BrandYoutube, BrandInstagram } from 'tabler-icons-react'

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 400,
    boxSizing: 'border-box',
    backgroundImage: `linear-gradient(-60deg, ${theme.colors.gray[7]} 0%, ${theme.colors.gray[9]} 100%)`,
    borderRadius: theme.radius.md,
    padding: theme.spacing.xl * 2.5,
    margin: '100px ',
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      padding: theme.spacing.xl * 1.5,
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

const social = [BrandTwitter, BrandYoutube, BrandInstagram]
export default function ContactUs() {
  const { classes } = useStyles()

  const form = useRef()

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

  const icons = social.map((Icon, index) => (
    <ActionIcon
      key={index}
      size={28}
      className={classes.social}
      variant='transparent'
    >
      <Icon size={22} />
    </ActionIcon>
  ))

  return (
    <div className={classes.wrapper}>
      <SimpleGrid
        cols={2}
        spacing={50}
        breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
      >
        <div>
          <Title className={classes.title}>Contact Me</Title>
          <Text className={classes.description} mt='sm' mb={30}>
            arzivreart@gmail.com sonyfauzi@outlook.co.id
          </Text>
          <Text className={classes.description} mt='sm' mb={30}>
            0813 3205 6357
          </Text>
          <Text className={classes.description} mt='sm' mb={30}>
            akan menjawab dalam 24 jam.
            <br />
            Kediri, Jawa Timur.
          </Text>
          <Group mt='xl'>{icons}</Group>
        </div>
        <form className={classes.form} ref={form} onSubmit={sendEmail}>
          <TextInput
            label='Email'
            placeholder='your@email.com'
            name='user_email'
            required
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <TextInput
            label='Name'
            placeholder='John Doe'
            name='user_name'
            mt='md'
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <Textarea
            required
            label='Your message'
            placeholder='I want to say hi!'
            name='message'
            minRows={4}
            mt='md'
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />

          <Group position='right' mt='md'>
            <Button className={classes.control} type='submit' value='Send'>
              Send message
            </Button>
          </Group>
        </form>
      </SimpleGrid>
    </div>
  )
}
