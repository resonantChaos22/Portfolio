<div className="text-teal-400 font-bold text-9xl">Skills</div>;
{
  /* <div className="flex lg:flex-row lg:justify-around h-[65vh] mt-20">
          <div className="h-full w-[36vw] border-solid border text-center p-5 border-opacity-30 rounded-2xl border-gray-200 ml-20">
            Languages
          </div>
          <div className="h-full w-[36vw] border-solid border text-center p-5 border-opacity-30 rounded-2xl border-gray-200 mr-20">
            Web Development
          </div>
        </div> */
}
<div
  className="relative mt-20 text-2xl 2xl:text-5xl lg:text-4xl md:text-3xl font-tiltwarp px-20 text-center"
  onMouseEnter={() => setSkillNotation(true)}
>
  I have worked with a variety of technologies and frameworks. The ones that I
  have most experience are{" "}
  <Highlight toggle={skillNotation}>C++ and Javascript</Highlight>
  . I do most of my development in Javascript (currently trying to do it through
  Typescript). I usually use React for frontend development and Node.js for
  backend development. I have also worked with Express.js and Next.js. I have
  also worked with a variety of databases such as MongoDB, MySQL, and
  PostgreSQL. I have also worked with a variety of cloud platforms such as AWS
  and GCP. I have also worked with a variety of tools such as Docker and
  Jenkins.
  <br />I have learned C++ for competitive programming and to have a good
  understanding of data structures and Algorithms.
</div>;
