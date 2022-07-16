import Layout from 'components/Layout'
import ContactForm from 'components/ContactForm'

const LeftSection = () => {
  return (
    <section className='py-10 text-slate-900 md:px-10'>
      <h1 className='mb-8 font-serif text-[calc(1em+4vh)] font-bold'>
        Memiliki Ide ? Kirim pesan mari bangun bersama
      </h1>
      <p className='text-xl font-semibold'>Sonyfauzi@outlook.co.id</p>
      <p className='text-xl font-semibold'>0813 3205 6357</p>
      <p className='mb-8 text-xl font-semibold'>Kediri, Jawa Timur.</p>
      <p className='text-xl font-semibold'>Akan menjawab dalam 24 jam.</p>
    </section>
  )
}

const ContactPage = () => {
  return (
    <Layout>
      <div className='px-4'>
        <main
          className='container mx-auto my-10 grid grid-cols-1 space-y-8 rounded-md bg-gradient-to-r from-yellow-400
          to-pink-600 p-8 md:grid-cols-2'
        >
          <LeftSection />
          <ContactForm />
        </main>
      </div>
    </Layout>
  )
}
export default ContactPage
