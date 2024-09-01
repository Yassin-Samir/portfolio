function AboutSection() {
  return (
    <div
      id="about"
      className=" pr-[3.5rem] relative overflow-x-hidden min-h-[350px]"
    >
      <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
        WHO I AM?
      </p>
      <p className="text-gray-200 text-sm lg:text-lg ">
        My name is Yassin Samir. I am a professional and enthusiastic programmer
        in my daily life. I am a quick learner with a self-learning attitude. I
        love to learn and explore new technologies and am passionate about
        problem-solving. I love almost all the stacks of web application
        development and love to make the web more open to the world. My core
        skill is based on JavaScript and I love to do most of the things using
        JavaScript. I am available for any kind of job opportunity that suits my
        skills and interests.
      </p>
      <p className="absolute z-10 right-[-45px] top-[90px] bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
        ABOUT ME
      </p>

      <div
        className="bg-[#1a1443] z-[5] h-36 w-[2px] 
        absolute right-[26.5px] top-[150px]"
      ></div>
    </div>
  );
}

export default AboutSection;
