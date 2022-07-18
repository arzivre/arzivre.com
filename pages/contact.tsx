import Layout from 'components/Layout'
import ContactForm from 'components/ContactForm'

const ContactList = () => {
  return (
    <section className='col-[1/5] lg:col-[3/5] text-gray-100 md:px-10'>
      <p className='text-2xl'>Sonyfauzi@outlook.co.id</p>
      <p className='text-2xl'>0813-3205-6357</p>
      <p className='mb-8 text-2xl'>Kediri, Jawa Timur.</p>
      <p className='text-2xl'>Akan menjawab dalam 24 jam.</p>
    </section>
  )
}

const ContactPage = () => {
  return (
    <Layout>
      <div className='px-4'>
        <main
          className='container mx-auto my-10 grid grid-cols-[2fr,auto,1fr] rounded-md 
          bg-gradient-to-r from-cyan-400 to-blue-600 p-4 md:p-8'
        >
          <h1 className='col-[1/4] mb-8 font-serif text-[calc(1em+3.5vw)] font-extrabold'>
            Punya Ide Menarik? ayo bangun bersama
          </h1>
          <ContactList />
          <ContactForm />
        </main>
      </div>
    </Layout>
  )
}
export default ContactPage
