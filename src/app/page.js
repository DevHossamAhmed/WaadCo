import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Slider from '@/components/Slider'
import Whatsapp from '@/components/Whatsapp'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='relative'>
     <Navbar />
     <Slider />
     <Banner />
     <Whatsapp />
     <Footer />
    </main>
  )
}
