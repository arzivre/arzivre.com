import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import Layout from 'components/Layout'

export default function ContactUs() {
  const [data, setData] = useState({
    user_email: '',
    user_name: '',
    message: '',
  })

  const form = useRef()

  const textareaStyle = ''

  const left = (
    <section>
      <h1 className=''>Let&apos;s Build Something Together</h1>
      <p className=''>sonyfauzi@outlook.co.id</p>
      <p className=''>0813 3205 6357</p>
      <p className=''>akan menjawab dalam 24 jam.</p>
      <p>Kediri, Jawa Timur.</p>
    </section>
  )

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_4t7ll1q',
        'template_jgzo41g',
        form.current as any,
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
        <form ref={form as any} onSubmit={sendEmail}>
          <input
            placeholder='your@email.com'
            name='user_email'
            required
            value={data.user_email}
            onChange={(e) => setData({ ...data, user_email: e.target.value })}
          />
          <input
            placeholder='John Doe'
            name='user_name'
            value={data.user_name}
            onChange={(e) => setData({ ...data, user_name: e.target.value })}
          />
          <textarea
            required
            placeholder='I want to say hi!'
            name='message'
            rows={4}
            value={data.message}
            onChange={(e) => setData({ ...data, message: e.target.value })}
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
