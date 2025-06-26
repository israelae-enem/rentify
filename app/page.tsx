import React from 'react'
import AboutUs from '@/components/AboutUs'
import Image from 'next/image'

const page = () => {
  return (
    <main className=" flex flex-1 bg-blue-300  text-gray-800 max-w-screen gap-4 justify-between  w-full max-lg:flex-col-reverse max-lg:items-center
">
      <h1 className="text-2xl text-blue-500 justify-items-center">
        Welcome To RentSmart 
        <p> The Smart Way To Manage Your Rental Properties</p>
      </h1>

      <section className="Home section flex bg-blue-400">
       <AboutUs/>
       <Image
       src="/assets/images/hero-pic.jpg"
       alt="hero"
       height={1000}
       width={1000}
       className="side-img max-w-[50%]"
       />
      </section>

      <section className="flex flex-1 bg-blue-200 mt-5">

         <Image
         src="/assets/images/maintenance-request.jpg"
         alt="maintenance"
         height={1000}
         width={1000}
         className="side-img max-w-[50%] ml-5"
         />
        <div className="ml-5 mt-5">
          Handle Maintenance Without Lifting the Phone

          <p>Tenants can now send maintenance requests directly through the app complete with photos, notes, and preferred scheduling times.</p>

        <h1 className="text-blue-600 font-bold mt-5 mb-5 text-xl"> Here's how it works in just a few steps:</h1>
         <p> 1.	Tenant submits a request (e.g., broken A/C).</p>
         <p> 2.	You get notified instantly.</p>
	       <p> 3.	Approve and schedule the repair with a few taps.</p>
	       <p className="mb-5"> 4.	The tenant is updated automatically no follow-up calls needed.</p>

        <strong className=" text-blue-600">Say goodbye to a thousand daily calls about minor issues.</strong>
        <strong className="text-blue-600"> Say hello to time-saving, professional management.</strong>

       <p className="text-bold mt-5 mb-5 text-blue-600"> Save Time. Cut Costs. Scale With Ease.</p>

          <h1 className="text-blue-600 text-xl"> RentSmart automates your most time-consuming tasks, so you can:</h1>
	        <p> •	Spend less time chasing tenants</p>
	        <p> •	Avoid hiring extra admin staff</p>
	        <p> •	Focus on growing your property business</p>
	        <p> •	Stay organized, even with dozens of units</p>

        </div>
      </section>

      <section className='bg-blue-300'>
        <div>
        <p className=" mt-5"> With everything centralized in one platform, you'll wonder how you ever managed without it.</p>

       <p className="text-bold text-blue-600 mt-5 mb-5"> Happier Tenants, Longer Leases</p>

 
       <h1 className="text-xl text-blues-600 mt-5 mb-5"> Tenants love RentSmart too! Why? Because it gives them:</h1>
	     <p> •	Clear communication</p>
	     <p> •	Easy digital payments</p>
	     <p> •	Fast maintenance resolution</p>
	     <p> •	24/7 access to their rental documents</p>

       <p className="font-bold text-blue-600 mt-5 mb-5"> When tenants are happy, they stay longer and that means fewer vacancies and more stable income for you.</p>

        </div>
      </section>

      <section className="flex flex-1 mb-5">
         <Image
         src="/assets/images/dash.jpg"
         alt="dash"
         height={1000}
         width={1000}
         className="side-img max-w-[50%]"
         />

         <Image
         src="/assets/images/customer-service.jpg"
         alt="customer"
         height={1000}
         width={1000}
         className="side-img max-w-[50%]"
         />
      </section>

      <section className='bg-blue-200 ml-5'>
        <div className="font-bold">
          <p className="font-bold text-blue-600 mb-5">Safe. Secure. Transparent.</p>

        <p className="mb-5"> From rent payments to contract records, Rentify ensures everything is secure, trackable, and transparent for both you and your tenants.</p>

        <p className="mb-5 text-blue-600"> Ready to Take the Stress Out of Rentals?</p>

        <p> Join hundreds of forward-thinking agents and landlords already using RentSmart to simplify their rental operations.</p>

        <p className="text-xl text-bold text-blue mb-5 mt-5 text-blue-600"> Sign up today and experience the future of property management.</p>

         <p className="text-uppercase font-bold">Less hassle. More control. Real results.</p>

        </div>
      </section>

      <section>
        <Image
        src="/assets/images/happy-tenants.jpg"
        alt="happy"
        height={1000}
        width={1000}

        />
      </section>

      <section>
        <div>
          <p className="mt-5 mb-5">At RentSmart, we know that managing rentals isnt't just about property its about people. That's why we're committed to providing world classs customer support to both landlords, agents and tenants using our platform Our dedicated team is here to assist you at all times.</p>

         <p> Whether you're resolving a technical issue managing a payment or just need help using a feature we're always here to help.</p>
         </div>
       </section>

       <section className="flex flex-1 mt-10">
         <Image
         src="/assets/images/team.jpg"
         alt="customer"
         height={1000}
         width={1000}
         className="side-img max-w-[25%]"
         />
         
         <Image
         src="/assets/images/team-meeting.jpg"
         alt="customer"
         height={1000}
         width={1000}
         className="side-img max-w-[25%]"
         />

         <Image
         src="/assets/images/agent-tenant.jpg"
         alt="customer"
         height={1000}
         width={1000}
         className="side-img max-w-[25%]"
         />
         
         <Image
         src="/assets/images/key-handover.jpg"
         alt="customer"
         height={1000}
         width={1000}
         className="side-img max-w-[25%]"
         />


       </section>

        <section>
          <div>
          <h1 className="text-blue-600 font-bold mt-10 mb-5">We Listen We Support We Improve</h1>

         <p className="mb-10"> Your feedback drives us. Every feature we build and every update we roll out is shaped by what you tell us. Our customer support team is your voice inside RentSmart ensuring you're <strong>Heard. Supported, and Valued.</strong></p>
        </div>
      </section>



    </main>
  )
}

export default page