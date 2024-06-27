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
                      src={"/images/blog/blog-06.png"}
                      alt="The Relevance of Decision Science"
                      fill
                      className="rounded-md object-cover object-center"
                    />
                  </div>
                </div>

                <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                  The Relevance of Decision Science
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
                    Decision Science
                  </li>
                </ul>

                <div className="blog-details">
                  <h3>What is Decision Science?</h3>
                  <p>
                    Decision science is an interdisciplinary field that interprets, predicts, and influences decisions made by humans. It incorporates different economic frameworks and other social elements and derives possible outcomes and rational conclusions to help consider the risks and rewards in order to drive businesses and other institutions to take effective decisions.
                  </p>

                  <p>
                    Our understanding of decision science has come leaps and bounds in recent years with advanced artificial intelligence, data analytics, machine learning, and other computational sciences. The quantitative techniques that are used in decision making include risk analysis, cost effective analysis, behaviour decision theory, psychology, statistical inference, micro economics, operation research etc…
                  </p>

                  <p>
                    In short, Decision science is a practice that utilizes data and analytical tools to make strategic decisions about anything for which probabilities can be calculated. It aims to balance the trade-offs between competing objectives in a way that maximizes the value.
                  </p>

                  <h3>How is Decision Science beneficial?</h3>
                  <p>
                    The science of decision-making can be used to solve complex issues with data and predictive modeling. It provides a framework for understanding how people make decisions, why they make them, and what they might do differently to arrive at better outcomes. It is often used in corporate strategy and in economics to provide business intelligence on decisions.
                  </p>
                  <p>
                    As more businesses integrate decision science into their workflows, the benefits will be seen in the form of greater efficiency, better outcomes for customers, and improved decision-making processes.
                  </p>

                  <h3>What is the relevance of decision science?</h3>
                  <p>
                    Since Decision Science is a branch of applied mathematics, statistics, and psychology that focuses on the process of making decisions based on reasoning from past examples, it has been used to make predictions about stock market trends, consumer buying habits, and even the likelihood of a person committing a crime.
                  </p>
                  <p>
                    Decision makers across all industries are constantly faced with trade-offs and balancing different priorities - which ones align best with their company's mission? What can decision makers learn from each other? These questions, and many others, are the reason why Decision Science is relevant now more than ever. This will allow decision-makers to choose the best alternative for any given situation, or at least optimize their process by minimizing cost or maximizing benefit.
                  </p>

                  <h3>The advantages of studying Decision Science</h3>
                  <div className="flex flex-wrap gap-5">
                    <Image
                      src={"/images/blog/decision_science/decision_science-01.png"}
                      width={850}
                      height={300}
                      alt="image"
                    />
                  </div>
                  <div className="p-6 md:p-6 lg:p-6"></div>

                  <p>
                    Decision making is never an easy process. We are constantly surrounded by complex decisions that force us to choose between many options, each with different consequences. A decision scientist studies these sorts of decisions and helps us understand the best way to manage them. One of the main benefits of studying this subject is that it can teach us how to strengthen our analytical skills - important for anyone who wants to be successful in business and management, law and education, environmental regulation, military science, public health and public policy.
                  </p>

                  <h3>What kinds of tools and methods do Decision scientists use?</h3>
                  <p>
                    One of the most common tools used by decision scientists is Data mining and Big data to source relevant data that influence the decision making process. These methods are capable of crunching vast amounts of data within seconds, giving decision scientists valuable insights into the likelihood that different strategies will work. There are also other tools like game theory, which can be used to break down real-world scenarios into simpler game-like situations, and probability theory, which can be used to calculate an expected value for each scenario.
                  </p>
                  <p>
                    Another popular process is the Analytic Hierarchy Process (AHP). It's a tool for analyzing decisions and their consequences. It can also be used for ranking because it helps you find out which decision to make based on what happens after each one. Then, there are the Decision Trees. These trees help people better understand risk because they break down different possible outcomes at each stage.
                  </p>
                  <p>
                    There are other methods like sales forecasting, predictive analysis, sensitivity analysis, network analysis, etc…that are used to derive qualitative judgments while decision making through Science.
                  </p>

                  <h3>Current industry trends in Decision Science</h3>
                  <p>
                    There is a lot of change and innovation happening in the industry right now. The big focus is on improving decision quality and developing the right data management practices. There has been a corresponding shift in what we call “decision science”- from traditional statistics to systems theory... The emphasis is no longer on making better measurements, but rather on understanding how best to manage decisions.
                  </p>
                  <p>
                    The field of decision science has become increasingly important in recent years, with the majority of Fortune 500 companies now hiring data scientists who specialize in decision science and analytics. The rise of decision sciences can be attributed to several factors: increased use of real-time decisions, the need for predictive accuracy and uncertainty management, and demand for more transparency and accountability.
                  </p>

                  <h3>Career scope for students who pursue a Decision Science degree</h3>
                  <p>
                    Decision science degree holders have been recruited by many companies, including Microsoft, Uber, and Google, for their expertise in predicting outcomes and modeling complexity. There are many career opportunities in decision science ranging from data scientists to business analysts.
                  </p>
                  <p>
                    Demand for decision scientists is increasing and job opportunities are expected to grow. This isn't surprising: the more we rely on data and technology to make decisions, the more we need professionals who can find valid and reliable insights in that data.
                  </p>

                  <h3>
                    Conclusion
                  </h3>

                  <p>
                    Decision science aims to create powerful systems for making decisions. It's becoming more and more prevalent as we try to find better ways to manage the complexity of our lives, whether it's personal or professional.
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
