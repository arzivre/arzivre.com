import Layout from 'components/Layout'
import ContactForm from 'components/ContactForm'

const ContactList = () => {
  return (
    <div className='col-[1/5] mb-4 font-serif text-xl text-gray-100 md:px-10 lg:col-[3/5] lg:mb-0'>
      <section className='grid md:grid-cols-[auto_auto] gap-x-8 gap-y-2'>
        <p>E-mail</p>
        <p className='text-slate-900'>sonyfauzi@outlook.co.id</p>
        <p>Phone</p>
        <p className='text-slate-900'>0813-3205-6357</p>
        <p>Alamat</p>
        <p className='text-slate-900'>Kediri, Jawa Timur.</p>
      </section>
    </div>
  )
}

const ContactPage = () => {
  return (
    <Layout>
      <div className='md:px-4'>
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
