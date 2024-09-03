import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import companies from '../data/companies.json'
import Autoplay from 'embla-carousel-autoplay'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import faqs from '../data/faq.json'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'


const LandingPage = () => {
  return (
    <main className='flex flex-col gap-10 sm:gap-20 py-10 sm:py-20'> 
      <section className='text-center '>
        <h1 className='flex flex-col items-center justify-center gradient-title text-4xl font-extrabold sm:text-6xl lg:text-8xl tracking-tighter py-4'>
          Find Your Dream Job <span className='flex items-center gap-2 sm:gap-6 '>as Fresher on 
             <img src='/logo.jpg' className='h-12 sm:h-24 lg:h-28 '/></span></h1>

             <p className='text-gray-300 sm:mt-4 text-xs sm:text-xl'>Explore Thousands of job Listings or Find the perfect candidate</p>
      </section>

      <div className='flex justify-center gap-6'>
      
      <Link to='/Jobs'>

      <Button variant="blue" size="xl" >Find Jobs</Button>
      </Link>

      <Link to='/post-job'>

      <Button size="xl" variant="destructive">Post Jobs</Button>
      </Link>


      </div>


      <Carousel plugins={[Autoplay({ delay: 2000 })]} className="w-full py-10">
        <CarouselContent className="flex gap-5 sm:gap-20 items-center">
          {companies.map(({ name, id, path }) => {
            return (
              <CarouselItem key={id} className="basis-1/3 lg:basis-1/6">
                <img
                  src={path}
                  alt={name}
                  className="h-9 sm:h-14 object-contain"
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>


      {/* banner */}
      <img src='/banner.png' className='w-full '/>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">

       
        <Card>
          <CardHeader>
            <CardTitle>For Employers</CardTitle>
          </CardHeader>
          <CardContent>
            Post jobs, manage applications, and find the best candidates.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>For Job Seekers</CardTitle>
          </CardHeader>
          <CardContent>
            Search and apply for jobs, track applications, and more.
          </CardContent>
        </Card>


  <Accordion className='p-10 w-full' type="single" collapsible>
    {
      faqs.map((faq,index)=>{

        return (
        <AccordionItem  key={index} value={`item-${index + 1}`}>
        <AccordionTrigger>
          {faq.question}
          </AccordionTrigger>

        <AccordionContent>
          {faq.answer}
        </AccordionContent>

      </AccordionItem>

        )
      })
    }
  
</Accordion>


      </section>

      {/* accordian */}

    </main>
    
  )
}

export default LandingPage