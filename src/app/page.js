import Image from 'next/image'
import Events from '../components/events/Events'
import Hero from '../components/Hero'
import Player from '@/components/Player'
import Albums from '@/components/albums/Albums'

export default function Home() {
  return (
    <main className="">
      <Hero/>
      <Player/>
      <Events/>
      <Albums/>
      <div className='h-[4000px]'></div>
    </main>
  )
}
