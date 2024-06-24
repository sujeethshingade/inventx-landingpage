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

              <RelatedPost />
            </div>

            <div className="lg:w-2/3">
              <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
                <div className="mb-10 w-full overflow-hidden ">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <Image
                      src={"/images/blog/blog-01.png"}
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
                    </span>
                    Design Making
                  </li>
                </ul>

                <div className="blog-details">
                  <p>
                    Decision science is an interdisciplinary field that interprets,
                    predicts, and influences decisions made by humans. It incorporates
                    different economic frameworks and other social elements and derives
                    possible outcomes and rational conclusions to help consider the
                    risks and rewards in order to drive businesses and other institutions
                    to take effective decisions.
                  </p>

                  <p>
                    Our understanding of decision science has come leaps and bounds in
                    recent years with advanced artificial intelligence,
                    data analytics, machine learning, and other computational
                    sciences. The quantitative techniques that are used in decision
                    making include risk analysis, cost effective analysis, behaviour
                    decision theory, psychology, statistical inference, micro economics,
                    operation research etc…
                  </p>

                  <p>
                    In short, Decision science is a practice that utilizes data and
                    analytical tools to make strategic decisions about anything for
                    which probabilities can be calculated. It aims to balance the
                    trade-offs between competing objectives in a way that maximizes the value.
                  </p>

                  <h3 className="pt-8">
                    The advantages of studying Decision Science
                  </h3>

                  <p>
                    Decision making is never an easy process. We are constantly surrounded
                    by complex decisions that force us to choose between many options,
                    each with different consequences. A decision scientist studies these
                    sorts of decisions and helps us understand the best way to manage them.
                    One of the main benefits of studying this subject is that it can teach
                    us how to strengthen our analytical skills - important for anyone who
                    wants to be successful in business and management, law and education,
                    environmental regulation, military science, public health and public policy.
                  </p>

                  <h3 className="pt-8">
                    Current industry trends in Decision Science
                  </h3>

                  <p>
                    There is a lot of change and innovation happening in the industry right now.
                    The big focus is on improving decision quality and developing the right
                    data management practices. There has been a corresponding shift in what
                    we call “decision science”- from traditional statistics to systems theory...
                    The emphasis is no longer on making better measurements, but rather on
                    understanding how best to manage decisions.
                  </p>
                  The field of decision science has become increasingly important in recent years, 
                  with the majority of Fortune 500 companies now hiring data scientists who 
                  specialize in decision science and analytics. The rise of decision sciences 
                  can be attributed to several factors: increased use of real-time decisions, 
                  the need for predictive accuracy and uncertainty management, and demand for 
                  more transparency and accountability.
                  <p>

                  </p>

                </div>

                <SharePost />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlogPage;
