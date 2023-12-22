'use client';

import AlbumSlider from './AlbumSlider';

import {motion} from 'framer-motion';
import { fadeIn } from '../../../variants';

import SectionHeader from '../SectionHeader';

const Albums = () => {
  return (
    <section id='discography'>
        <div className="conntainer mx-auto">
            <SectionHeader pretitle='Discography' title='Popular Albums'/>
            {/* album slider */}
            <div>
                <AlbumSlider/>
            </div>
        </div>
    </section>
  )
}

export default Albums
