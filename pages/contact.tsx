import Layout from 'components/Layout'
import ContactForm from 'components/ContactForm'

const LeftSection = () => {
  return (
    <section className='py-10 text-slate-900 md:px-10'>
      <h1 className='font-serif font-bold text-[calc(1em+4vh)] mb-8'>
        Memiliki Ide ? Kirim pesan mari bangun bersama
      </h1>
      <p className='font-semibold text-xl'>Sonyfauzi@outlook.co.id</p>
      <p className='font-semibold text-xl'>0813 3205 6357</p>
      <p className='font-semibold text-xl mb-8'>Kediri, Jawa Timur.</p>
      <p className='font-semibold text-xl'>Akan menjawab dalam 24 jam.</p>
    </section>
  )
}

const ContactPage = () => {
  return (
    <Layout>
      <div className='px-4'>
        <main
          className='container mx-auto my-10 p-8 grid grid-cols-1 md:grid-cols-2 space-y-8 rounded-md
          bg-gradient-to-r from-yellow-400 to-pink-600'
        >
          <LeftSection />
          <ContactForm />
        </main>
      </div>
    </Layout>
  )
}
export default ContactPage
