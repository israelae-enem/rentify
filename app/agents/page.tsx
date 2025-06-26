import React from 'react'
import Image from 'next/image'
import AgentsForm from '@/components/AgentsForm'
import Link from 'next/link'

const page = () => {
  return (
    <div className=" overflow-hidden flex flex-1 items-center bg-blue-400 max-w-screen max-h-screen justify-between text-black">
      <section className="overflow-hidden my-auto  flex bg-blue-400 ml-5">
        
       <div>
        
          <AgentsForm/>

          <div className="mt-12 flex flex-1 justify-between">
            <p className="justify-items-end text-gray-900 xl:text-left ml-5 ">
               © RentSmart 2025 All rights reserved.
            </p>
          
           

           <Link href="/?tenant=true" className="text-blue-600 font-bold underline justify-items-end ml-60">
           Tenant
           </Link>

           
          
          </div>
        </div>
        
      
      </section>

           <Image
            src="/assets/images/agent.jpg"
            alt="agent"
            height={1000}
            width={1000}
            className="side-img max-w-[50%]"
            />
           

      

    </div>
  )
}

export default page