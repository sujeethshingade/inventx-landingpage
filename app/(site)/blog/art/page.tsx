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
                      src={"/images/blog/blog-03.png"}
                      alt="Filmmaking, an Art of Storytelling"
                      fill
                      className="rounded-md object-cover object-center"
                    />
                  </div>
                </div>

                <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                  Filmmaking, an Art of Storytelling
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
                    Filmmaking Art
                  </li>
                </ul>

                <div className="blog-details">
                  <p>
                    Do you ever wonder how directors, cinematographers, and the like are able to create content with such precision? How wonderfully are they able to capture the essence of the story and communicate it to the audience? How watching a film sometimes seems like we are watching reality?
                  </p>

                  <p>
                    Well, filmmaking is truly an art! A gripping story line and cinematography will ensure that your audience invest their mind and heart completely into your film.
                  </p>

                  <h3>The Role of Film in Today's Society</h3>

                  <div className="flex flex-wrap gap-5">

                    <Image
                      src={"/images/blog/art/art-01.png"}
                      width={850}
                      height={300}
                      alt="image"
                    />
                  </div>
                  <div className="p-6 md:p-6 lg:p-6"></div>
                  <p>
                    Film, unlike any other medium, is able to tell the story of our world in a new and exciting way. It has the ability to reach people from all walks of life and offer them something different. Film can be used as a form of entertainment, social commentary, or education. In today's society, film is more important than ever before- it is imperative that filmmakers understand the power behind their craft and make sure they're using it as wisely as possible.
                  </p>

                  <h3>Importance of storytelling for a filmmaker?</h3>

                  <div className="flex flex-wrap gap-5">

                    <Image
                      src={"/images/blog/art/art-02.png"}
                      width={850}
                      height={300}
                      alt="image"
                    />
                  </div>
                  <div className="p-6 md:p-6 lg:p-6"></div>

                  <p>
                    Storytelling is an integral part of a film as it creates elements that are full of wonder, sentiment, humor and intrigue. The real art of storytelling lies in writing and creating characters who can resonate and engage with the audience.Though there are other crucial aspects like location, lighting, visual effects, casting, camera angles, etc…the heart of a film lies in the story. If your story is not able to enthral or hold your audience’s attention, then irrespective of how good the locale or the visual effects are, you will still be conveying only the wonderful technical aspects of the movie but not the emotional element that is imperative to the film’s success
                  </p>

                  <h3>
                    How to improve your creativity while making a film or telling a story?
                  </h3>

                  <p>
                    One of the most difficult obstacles in your filmmaking journey is having a lack of creativity. Sometimes, even when we are at our best, inspiration can be hard to come by and we can't seem to make progress towards our goals. The need behind being creative is that it makes your story a lot more interesting and exciting and it will also strike a chord with your audience.
                  </p>
                  <p>
                    Seeing the world from different perspectives is an essential skill for a filmmaker. Therefore, being able to work on these ideas, understanding the importance of storytelling and combining them with technical film-making expertise will bring a great amount of value to your films.
                  </p>

                  <h3>
                    Best creative practices that top filmmakers follow
                  </h3>

                  <p>
                    Spend some alone time and brainstorm: Though very cliche, this point by far is the most important aspect when you are trying to create a story plot. You should first be able to convince yourself before you go on and convince others. Therefore, to brainstorm on your existing ideas to create elements of intrigue and surprise and also find ways to make your audience laugh is key to telling your story. So, sit alone, let your thoughts wander and find those connecting elements that will lead you to an irresistible plot.
                  </p>
                  <p>
                    Watch the works of your favourite film-makers: What better way to get inspired by someone you respect and admire. Every film-maker has his unique style of storytelling, and one day you will want yours too, but there is no harm in finding inspiration from the master story-tellers and gaining some insights to make your story better.
                  </p>
                  <p>
                    Watch the works of your favourite film-makers: What better way to get inspired by someone you respect and admire. Every film-maker has his unique style of storytelling, and one day you will want yours too, but there is no harm in finding inspiration from the master story-tellers and gaining some insights to make your story better.

                  </p>

                  <h3>
                    Conclusion
                  </h3>

                  <p>
                    You are the master who is responsible for the quality of your work. Therefore, you should showcase your ideas with confidence and believe in your work. After all, a true film maker might get inspired by his ideas, but his role is actually to inspire millions of spectators and show them something new. The art of filmmaking can be an exceedingly rewarding experience to the creator of the film!
                  </p>
                  <p>
                    There is also the aspect of the Science of Filmmaking, that is equally important to bring your story to life. Using the right visual and audio elements to achieve the right kind of engagement is also quite crucial while making a film.
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
