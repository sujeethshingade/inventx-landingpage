"use client";

const qoute = "At InventX, we believe in the power of youthful creativity and bold ideas. We're not just a platform; we're a movement fuelled by the ambition of RV institution students who are reimagining industries, solving global challenges, and shaping the future. Join us as we redefine innovation and investment in the digital age."
const About = () => {
  return (
    <>
  
      <div className="text-black flex justify-center bg-white border shadow-sm p-2 md:p-20 lg:w-5/3">
        <div>
          <div className="flex justify-center items-center">
            <img src="/images/about/aboutus.jpg" alt="" height={1000} width={500}/>
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
