"use client"

export default function Contact() {
  return <>
    <div className="w-11/12 md:w-4/5 bg-white border shadow-sm p-10 text-black flex justify-around">
      <div>
        <div className="text-sm md:text-lg">
          How can we help you?
        </div>
        <div className="text-3xl md:text-6xl my-2 md:my-5 font-semibold">
          Contact us
        </div>
        <div className="mt-10 text-sm md:text-lg">
          We're here to help you answer any questions you
        </div>
        <div className="text-sm md:text-lg mt-1">
          might have. We look forward to hearing from you!
        </div>
        <div className="mt-7 flex">
          <div className="h-6 w-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
          </div>
          <div className="ml-3 text-sm md:text-lg">
            Mysore Rd, RV Vidyaniketan, Post, Bengaluru, Karnataka 560059
          </div>
        </div>
        <div className="mt-3 flex">
          <div className="h-6 w-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
          </div>
          <div className="ml-3 text-sm md:text-lg">
            inventx@gmail.com
          </div>
        </div>
        <div className="mt-3 flex">
          <div className="h-6 w-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
            </svg>
          </div>
          <div className="ml-3 text-sm md:text-lg">
            +91 1234567890
          </div>
        </div>
      </div>
      <div>
          <img src="/images/about/contact.png" alt="" className="md:w-72 md:h-96 hidden md:flex"/>
      </div>
    </div>
  </>
}
