import { getJobs } from '@/api/apijobs'
import useFetch from '@/hooks/use-fetch'
import { useSession } from '@clerk/clerk-react'
import React, { useEffect } from 'react'

const JobListing = () => {

const {fn:fnJobs,data:dataJobs,loadingJobs} = useFetch(getJobs,{});

useEffect(()=>{
  fnJobs()
},[])

  return (
    <div>JobListing</div>
  )
}

export default JobListing