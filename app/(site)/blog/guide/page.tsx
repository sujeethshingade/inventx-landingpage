import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "",
  description: "",
  // other metadata
};

const SingleBlogPage = async () => {
  return (
    <>
      <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
            <div className="md:w-1/2 lg:w-[32%]">
              {/* 
              <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-3.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
                <form
                  action="https://formbold.com/s/unique_form_id"
                  method="POST"
                >
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search Here..."
                      className="w-full rounded-lg border border-stroke px-6 py-4 shadow-solid-12 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                    />

                    <button
                      className="absolute right-0 top-0 p-5"
                      aria-label="search-icon"
                    >
                      <svg
                        className="fill-black transition-all duration-300 hover:fill-primary dark:fill-white dark:hover:fill-primary"
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16.031 14.617L20.314 18.899L18.899 20.314L14.617 16.031C13.0237 17.3082 11.042 18.0029 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0C13.968 0 18 4.032 18 9C18.0029 11.042 17.3082 13.0237 16.031 14.617ZM14.025 13.875C15.2941 12.5699 16.0029 10.8204 16 9C16 5.132 12.867 2 9 2C5.132 2 2 5.132 2 9C2 12.867 5.132 16 9 16C10.8204 16.0029 12.5699 15.2941 13.875 14.025L14.025 13.875Z" />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>

              <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
                <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
                  Categories
                </h4>

                <ul>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="#">Blog</a>
                  </li>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="#">Events</a>
                  </li>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="#">Grids</a>
                  </li>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="#">News</a>
                  </li>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="#">Rounded</a>
                  </li>
                </ul>
              </div>
*/ }
              <RelatedPost />
            </div>

            <div className="lg:w-2/3">
              <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
                <div className="mb-10 w-full overflow-hidden ">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <Image
                      src={"/images/blog/blog-02.png"}
                      alt="A Guide to Career Tracks for a UI/ UX Designer"
                      fill
                      className="rounded-md object-cover object-center"
                    />
                  </div>
                </div>

                <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                  A Guide to Career Tracks for a UI/ UX Designer
                </h2>

                <ul className="mb-9 flex flex-wrap gap-5 2xl:gap-7.5">
                  <li>
                    <span className="text-black dark:text-white">Author: </span>{" "}
                    RV University
                  </li>
                  <li>
                    <span className="text-black dark:text-white">
                      Published On: March 3, 2022
                    </span>{" "}
                  </li>
                  <li>
                    <span className="text-black dark:text-white">
                      Category:
                    </span>{" "}
                    UI-UX Career Path
                  </li>
                </ul>

                <div className="blog-details">
                  <h3>Introduction</h3>
                  <p>
                    As technology has evolved, so has the UI / UX design industry. Designers are hired by software companies, startups, digital marketing firms, video game companies - any organization which needs to create intuitive interfaces for computers, tablets or phones.
                  </p>
                  <p>
                    With 500 million internet users, India is one of the largest markets for UI / UX designers.
                  </p>
                  <p>
                    If that sounds like a job you would enjoy, the information in this guide will help you decide what kind of track to take in order to succeed in this competitive field! First, let’s take a closer look at the job description of a UI / UX designer.
                  </p>

                  <h3>Roles and Responsibilities of a UI / UX Designer</h3>

                  <div className="flex flex-wrap gap-5">
                    <Image
                      src={"/images/blog/guide/guide-01.png"}
                      width={850}
                      height={300}
                      alt="image"
                    />
                    <div className="p-6 md:p-6 lg:p-6"></div>
                  </div>

                  <p>
                    UI / UX designers are responsible for creating user interfaces that are both functional and visually appealing.
                  </p>
                  <p>
                    They work with stakeholders to determine what tasks the user will need to complete as well as how they will be able to complete those tasks.
                  </p>
                  <p>
                    UI / UX designers also work on the functionality of the design to ensure it moves smoothly with the user's needs. The aim is to help improve the conversation flow, information architecture, and interactivity of a website or app.
                  </p>

                  <h3>Career Paths for UI / UX Designers</h3>
                  <p>
                    A career in UX design can be rewarding and challenging. Knowing the different types of jobs in the field will help you choose which position is right for you. For example, some positions are dedicated to designing websites while others specialize in mobile apps or wearables (electronic devices like smart watches and fitbits used to track information on a real-time basis) Entry-level positions in UX design may include working as a graphic designer or UI designer before making a transition to UX.
                  </p>
                  <p>
                    FreeLance UI / UX Consultant/Designer: As a freelancer, you get to set your own schedule, be your own boss, work from wherever you want to, and pick projects that you are passionate about. There are platforms like Upwork and Fiverr that will give you a headstart to set up your port-folio and find prospective clients to offer your freelance services.
                  </p>
                  <p>
                    UI / UX Designer: You can work as an inhouse UI / UX designer in digital marketing firms and other consulting agencies that cater to various industries, where you can gain more exposure. You will also have team-building opportunities where you can exchange ideas and learn new skill-sets from your colleagues.This will lead you to roles like senior UX designer, lead UX designer, and more.
                  </p>
                  <p>
                    UX Management: Being a UX designer offers many career tracks, and it is possible to continue to progress in your career and obtain managerial positions like UX manager, Creative director, and further down the road, executive positions like Chief Experience Officer, or Vice President of Design and Innovation, etc. This again depends on your management skills and your career aspirations.
                  </p>

                  <h3>Full Time vs. Freelance Consultant</h3>

                  <p>
                    UI / UX designers typically start off as freelancers. If you do not have the resources to start your own business, freelancing is a great way to make money and build a portfolio. However, working full time might be better for some UI / UX designers because there are stable paychecks and more opportunities to grow and elevate one’s role into managerial positions. Additionally, full time work has more opportunities for promotion and advancement.
                  </p>

                  <h3>Salary structures for UI / UX designers</h3>

                  <p>
                    Designers in the UI / UX field come from a variety of different backgrounds. Some work as graphic designers, some as software developers, and others may have only done portfolio work.
                  </p>
                  <p>
                    Data from a new survey has revealed that the median salary for designers at top companies has tripled in the last three years.
                  </p>
                  <p>
                    The average salary of a UI / UX design professional in India ranges between a base pay of 6 Lakhs to 7 Lakhs Per annum while the US market is known to pay anywhere between US $69,000 to $115,000.
                  </p>
                  <p>
                    Senior designers and design heads who work in top consumer tech companies and who are at the top of their game and in high demand, are known to earn six-figure salaries.
                  </p>

                  <h3>Education Requirements</h3>

                  <p>
                    There are many paths to becoming a UI / UX Designer, but the one commonality among all is that you'll need an actual design degree. What you should ideally look at is to pursue a degree from a design school that teaches you all aspects of design and the right kind of practical foundation needed to further hone subject specific skills.
                  </p>
                  <p>
                    RV university also offers an interdisciplinary course curriculum that gives you the flexibility to choose minors from the other two streams in the School of Economics and Finance and School of Liberal Arts and Sciences. You can major in a UX Design Undergraduate program and pick your favourite subject as a minor from any of the 3 schools.
                  </p>
                  <p>
                    By the time you graduate, you'll have gained hands-on experience and you will be ready to launch your career as a UX design professional.
                  </p>

                  <h3>Other skill-sets of a UI / UX designer include</h3>

                  <p>
                    Knowledge of Computer Sciences in general, especially in UX/UI design apps as they are interdependent and will help you bridge the gap between design and development.
                  </p>
                  <p>
                    Creativity in your field of expertise so that you can come up with innovative and fresh wireframes and designs.
                  </p>
                  <p>
                    Research skills to help you be more prepared with the understanding of the project and its industry best practices. For example, a project for the food industry will have its own specifications and guidelines as compared to another SaaS product that might follow a different set of guidelines. A game app will obviously be different from an e-commerce app. So it's important to research and gather more information and be better prepared before the start of a project.
                  </p>
                  <h3>
                    Conclusion
                  </h3>

                  <p>
                    The role of a UI / UX designer may slightly vary from one workplace to another. You can kick off your design career by mastering the fundamentals of the subject and by gaining a substantial degree that teaches you not just the theories but also practical knowledge through project based learning initiatives.
                  </p>
                </div>

                {/* <SharePost /> */}
              </div>
            </div>
          </div>
        </div>
      </section >
    </>
  );
};

export default SingleBlogPage;
