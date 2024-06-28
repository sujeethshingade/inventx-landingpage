"use client";

const qoute = "Everyone has a story to tell, and no story is the same. We help companies tell their unique stories faster and easier than ever before, using content to create powerful connections with their audiences. By empowering everyone to craft radically personalized content at speed, everyone can express their creative vision in a genuine, relatable, and impactful way."

const About = () => {
  return (
    <>
      <div className="text-black flex justify-center bg-white border shadow-sm p-2 md:p-20 lg:w-5/3">
        <div>
          <div className="flex justify-center items-center text-xl font-medium text-primary">
            ABOUT US
          </div>
          <div className="flex justify-center items-center text-2xl md:text-4xl lg:text-5xl mt-8">
            Empowering everyone to
          </div>
          <div className="flex justify-center items-center text-2xl md:text-4xl lg:text-5xl mt-2">
            express their unique imagination
          </div>
          <div className="flex justify-center items-center">
            <img src="/images/logo/logo-light.svg" alt="" height={1000} width={500}/>
          </div>
          <div>
            <p className="text-md md:text-xl">{qoute}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
