import Image from 'next/image'
import Events from '../components/events/Events'
import Hero from '../components/Hero'
import Player from '@/components/Player'
import Albums from '@/components/albums/Albums'
import Blog from '@/components/blog/Blog'
import NewsLetter from '@/components/NewsLetter'

export default function Home() {
  return (
    <main className="">
      <Hero/>
      <Player/>
      <Events/>
      <Albums/>
      <Blog/>
      <NewsLetter/>
      {/* <div className='h-[4000px]'></div> */}
    </main>
  )
}
