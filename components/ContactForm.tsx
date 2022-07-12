import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

interface formData {
  user_email: string
  user_name: string
  message: string
}

const ContactForm = () => {
  const [submit, setSubmit] = useState<boolean>(false)
  const [data, setData] = useState<formData>({
    user_email: '',
    user_name: '',
    message: '',
  })

  const formRef = useRef<formData>()

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault()

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE as string,
        process.env.NEXT_PUBLIC_TEMPLATE as string,
        formRef.current as any,
        process.env.NEXT_PUBLIC_KEY as string
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.status, result.text)
        },
        (error) => {
          console.log('FAILED...', error.text)
        }
      )
    setSubmit(true)
  }
  
  return (
    <form
      ref={formRef as any}
      onSubmit={sendEmail}
      className='p-10 bg-purple-600/70 rounded-md
          border-2 border-yellow-400'
    >
      {!submit ? (
        <>
          <input
            placeholder='your@email.com'
            name='user_email'
            required
            value={data.user_email}
            onChange={(e) => setData({ ...data, user_email: e.target.value })}
            className='w-full mb-4 form-input px-4 py-3 rounded-md'
          />

          <input
            placeholder='John Doe'
            name='user_name'
            value={data.user_name}
            onChange={(e) => setData({ ...data, user_name: e.target.value })}
            className='w-full mb-4 form-input px-4 py-3 rounded-md'
          />
          <textarea
            required
            placeholder='I want to say hi!'
            name='message'
            rows={4}
            value={data.message}
            onChange={(e) => setData({ ...data, message: e.target.value })}
            className='w-full mb-4 form-textarea px-4 py-3 rounded-md'
          />

          <button
            className='px-4 py-2 my-4 bg-blue-600 text-blue-50 rounded-md 
                hover:text-blue-900 hover:bg-blue-300'
            type='submit'
            value='Send'
            disabled={submit}
          >
            Kirim Pesan
          </button>
        </>
      ) : (
        <h1 className='my-auto text-[calc(1em+5vh)] text-center '>
          Pesan Terkirim
        </h1>
      )}
    </form>
  )
}

export default ContactForm
