import FeaturedWorks from '@/components/FeaturedWorkBox'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import RecentPosts from '@/components/RecentPost'
import React from 'react'



const homepage = () => {
  return (
    <div className=' w-full'>
    <Navbar/>
    <HeroSection />
    <RecentPosts />
    <FeaturedWorks />
    <Footer />



    </div>
    
  )
}

export default homepage
