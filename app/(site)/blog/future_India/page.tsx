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
                      src={"/images/blog/blog-04.png"}
                      alt="Rewriting The Future of Young India with a Liberal Art Education"
                      fill
                      className="rounded-md object-cover object-center"
                    />
                  </div>
                </div>

                <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                  Rewriting The Future of Young India with a Liberal Art Education
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
                    Liberal Arts Courses
                  </li>
                </ul>

                <div className="blog-details">

                  <h3>What is Liberal Arts Education?</h3>

                  <p>
                    The term "liberal arts" was coined by the German philosopher and mathematician Gottfried Wilhelm Leibniz in 1678. It now refers to a broad range of academic disciplines, including the humanities, natural sciences, social sciences, mathematics, history, and languages. In liberal arts colleges and universities, students study a diverse array of subjects from different fields to better prepare themselves for the working world after graduation.
                  </p>

                  <h3>Reforms in the Education System</h3>

                  <p>
                    Traditionally, this system was criticized for not equipping students with the skills needed to succeed in today's economy. The logic behind this argument was that all you need to know to master a good job is taught in math and science classes. However, these criticisms are now being used as reason for further reforms of liberal arts education.
                  </p>
                  <p>
                    One of the most significant changes in liberal arts education has been the liberal arts core curriculum. These new curricula include a set of courses that help students think critically and learn how to be productive citizens in a diverse world. Rather than having one curriculum, many colleges are now giving students the opportunity to choose their own courses, which is important because it gives them the chance to constructively reflect on their education.
                  </p>

                  <h3>History of Liberal Arts</h3>

                  <div className="flex flex-wrap gap-5">
                    <Image
                      src={"/images/blog/future_India/future_India-01.png"}
                      width={850}
                      height={300}
                      alt="image"
                    />
                  </div>
                  <div className="p-6 md:p-6 lg:p-6"></div>

                  <p>
                    The study of Liberal Arts can be traced back to Ancient Greeks, who considered this subject to be an ultimate mark for identifying an educated person. In the classical antiquity era, liberal arts education involved subjects like rhetoric, grammar and logic in order to make people eligible to participate in public debates, serve in court and military services. Later on, in the medieval times, other subjects like geometry, arithmetic, astronomy and music were included as a part of liberal education.
                  </p>
                  <p>
                    At present times, a liberal arts education provides students the opportunity to study a wider range of subjects, with the core aim being the same - development of well-rounded individuals having adequate knowledge and skills in multiple fields.
                  </p>

                  <h3>Benefits of Liberal Arts Education</h3>

                  <p>
                    When you acquire varied knowledge along with strong critical thinking and analytical skills, you can easily be flexible and adapt yourself in the ever changing global market. Apart from that, here are some key benefits of having a liberal arts degree -
                  </p>
                  <p>
                    Job opportunities in multiple sectors: Having a strong foundation in a wide range of subjects can prepare you for a career in various fields, as opposed to having a degree with just one subject for specialization. Being trained in multiple arenas will help you have a plethora of career options, and your broad skill set will be seen as an asset.
                  </p>
                  <p>
                    Explore human experience: Students get to study how the educational approach has evolved over centuries in different academic disciplines - science to literature to design - and develop a great insight through multiple perspectives into the human experience.
                  </p>
                  <p>
                    Hone critical thinking skills: Be it to explore your personal interests, solve complex issues, satisfying your curiosity or unleashing creativity, liberal education provides an open-ended educational experience that helps increase your critical thinking abilities. This is because the focus here is not to build something technical for a specific purpose, but to understand how something affects an individual and the society and derive a solution that benefits all.
                  </p>
                  <p>
                    Multidisciplinary perspective: By exploring different cultures, human experiences and philosophies, you gain a multidisciplinary perspective and a broader worldview, which is what most global companies are looking for at present times.
                  </p>

                  <h3>Career Options with a Liberal Arts Degree</h3>

                  <div className="flex flex-wrap gap-5">
                    <Image
                      src={"/images/blog/future_India/future_India-02.png"}
                      width={850}
                      height={300}
                      alt="image"
                    />
                  </div>
                  <div className="p-6 md:p-6 lg:p-6"></div>

                  <p>
                    Employers are always looking for creative team members who can contribute to help solve complex issues, which is why a liberal arts education opens up opportunities in various industries. Some of the career options include
                    Teacher/Professor,
                    Engineering,
                    IT Industry,
                    Healthcare & Pharma Industry,
                    Data Scientist,
                    Environmentalist,
                    Entrepreneurship,
                    Writing,
                    Civil Services,
                    Journalism & Social Media Management,
                    Writer / Author,
                    Graphic Designer / Artist,
                    Social Work & Public Policy,
                    Human Resources Specialist,
                    Communications & Public Relations Specialist.
                  </p>

                  <h3>
                    Conclusion
                  </h3>

                  <p>
                    Liberal arts majors teach students how to think critically and solve problems, which is an incredibly valuable skill in any career. Universities now offer more flexible degree programs so students can customize their education based on what they want to do after graduation.
                  </p>
                </div>

                {/* <SharePost /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlogPage;
