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
                      src={"/images/blog/blog-05.png"}
                      alt="Life-changing career paths in Liberal Arts and Sciences"
                      fill
                      className="rounded-md object-cover object-center"
                    />
                  </div>
                </div>

                <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                  Life-changing career paths in Liberal Arts and Sciences
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
                    Liberal Arts & Sciences Careers
                  </li>
                </ul>

                <div className="blog-details">

                  <h3>Why choose Liberal Arts as a discipline?</h3>
                  <p>
                    Liberal arts degrees are perfect for students who want a well-rounded education that provides a variety of skills and knowledge to pursue a variety of careers. Liberal arts graduates have high rates of employment, which suggests that liberal arts degrees equip students with the practical skills needed on the job.
                  </p>

                  <p>
                    A Liberal Arts education covers a wide range of subjects that are necessary for an individual to develop logical and critical thinking skills, to comprehend issues that are important to modern and future human societies and the world, and to use their minds to solve a variety of social, economic, political, and environmental issues and problems.
                  </p>

                  <h3>How can a Degree in Liberal Arts and Sciences prepare you for a Life-Changing Career Path?</h3>

                  <div className="flex flex-wrap gap-5">
                    <Image
                      src={"/images/blog/career/career-01.png"}
                      width={850}
                      height={300}
                      alt="image"
                    />
                  </div>
                  <div className="p-6 md:p-6 lg:p-6"></div>

                  <p>
                    With the essential skills and information you gain during your Liberal Arts degree programme, you will be one step closer to choosing a career that you love, for example a career in environmental science. It clears up a lot of questions when you study an eclectic combination of your favourite subjects during your course.
                  </p>

                  <p>
                    A liberal arts education can lead to a variety of jobs, and you can change your mind at any time. As a college student, you have the ability to change your mind later on if you like. A liberal arts education has withstood the test of time because abilities like critical thinking and problem solving never go out of style.
                  </p>
                  <p>
                    Because of the nature of Liberal Arts courses, you can improve your writing, public speaking, presenting abilities, cooperative work, and creativity.
                  </p>
                  <p>
                    A typical element of liberal arts education is the development of critical thinking and analysis.
                  </p>
                  <p>
                    Sociology, cultural anthropology, philosophy, international studies, and other interdisciplinary subjects can help you get a deeper understanding of culture.
                  </p>
                  <p>
                    Journalism, public relations, literature, law, politics, linguistics, publishing, social work, psychology, management, public policy, civil service, marketing, and a variety of other jobs are all possible with a degree in Liberal Arts and Sciences.
                  </p>
                  <p>
                    A Liberal Arts degree can help you lead teams in the corporate world by creating, collaborating, motivating, and innovating.
                  </p>
                  <p>
                    A liberal arts degree broadens your thinking and analytical abilities, allowing you to gain a greater knowledge through hands-on learning and research. All of these are necessary for higher education, therefore Liberal Arts provides a solid basis for your future studies.
                  </p>

                  <h3>Prospects for Career Options in Liberal Arts Education</h3>
                  <p>
                    Students who have completed their liberal arts education have taken on a variety of roles such as equity research, analytics, client servicing, marketing, relationship management, banking, consulting, human resources, e-commerce, and so on.
                  </p>
                  <p>
                    Journalism, advertising, writing, research, NGOs, financial analysis, banking, and public relations are just a few of the careers/fields that you can pursue immediately after graduation. The world is your oyster if you major in Liberal Arts.
                  </p>

                  <h3>Scope of Liberal Arts and Sciences</h3>
                  <p>
                    The scope of liberal arts education much exceeds the diversity and exposure that specialized education may not always provide. The term "liberal arts" refers to a broad and multi-disciplinary category that includes a variety of academic disciplines:
                  </p>
                  <p>

                    Humanities include art, literature, philosophy, linguistics, religion, ethics, modern foreign languages, music, theatre, speech, and classical languages.<br></br>
                    History, psychology, law, sociology, political science, gender studies, anthropology, economics, geography, and business informatics are examples of social sciences.<br></br>
                    Natural sciences include physics, chemistry, biology, geography, earth sciences, astronomy, archaeology, and zoology, among other things.<br></br>

                  </p>
                  <p>
                  A degree in this field opens up a wide range of career options in Liberal Arts because it prepares you to be a well-rounded, effective communicator with strong problem-solving abilities. These are the personality traits that employers look for in ideal candidates, and they will increase your chances of landing your dream job. 
                  </p>
                  <p>
                  Each discipline teaches you a specific framework for creativity, problem-solving, communication, and other abilities that you may use in a variety of career disciplines and employment. A list of possible occupations for liberal arts graduates is provided below. The collection is made up of examples found on college websites and employment boards, and it gives you a taste of what's out there 
                  </p>

                  <div className="flex flex-wrap gap-5">
                    <Image
                      src={"/images/blog/career/career-02.png"}
                      width={850}
                      height={300}
                      alt="image"
                    />
                  </div>
                  <div className="p-6 md:p-6 lg:p-6"></div>

                  <h3>
                    Conclusion
                  </h3>

                  <p>
                    India's economy is varied, and students must learn how to communicate with people of all genders, castes, races, religions, and social classes. I'm confident that pupils with such talents and skills will evolve into valuable employees, citizens, and eventually 'adaptively adaptable' human beings.
                  </p>
                  <p>
                    This is precisely what the Liberal Arts stream aspires to produce: critical thinkers with the confidence and flexibility to study new skills and material on a continuous basis. Nowadays, the Liberal Arts Program is gaining a lot of traction among students. Recruiters across the job market prefer candidates who are more self-assured, more skilled, and better prepared to deal with life's problems.
                  </p>
                  <p>
                    By now, you should have a good understanding of the meaning and scope of a Liberal Arts degree, as well as how a degree in this discipline can practically help you start a career in any field. Even if you are unsure whether you want to pursue Liberal Arts as a graduating major, you may always seek advice from someone with experience in such fields.
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
