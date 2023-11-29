import AboutCard from "../extra/AboutCard";

function About() {
  return (
    <section id="about" className={`py-24 px-5 flex justify-center items-center border-t-2 shadow-sm shadow-gray-300`}>
      <div className={`flex flex-col items-center justify-center lg:w-1200 text-primary-2 gap-3`}>
        <h2 className={`text-lg`}>About Us</h2>
        <div className={`pt-10 lg:px-10 flex flex-col gap-4 w-full`}>
          <AboutCard title="What is this?" text="A Community to speak english for 10 minutes in a session. The sessions will be held 3 times a week. You can join all sessions free." stat={false} />
          <AboutCard
            title="How to join?"
            text="You need to register first to become a member via LinkedIn, then choose which bivouac you want to join. And congratulations, you can join the meeting which will be held according to schedule via Discord."
            stat={true}
          />
          <AboutCard title="Is this safe?" text="Yes, we only receive some information provided by LinkedIn including name and profile photo." stat={true} />
          <AboutCard
            title="What should I prepare for the meeting?"
            text="Just join the discord and talk when your session starts. If you are a beginner, it is recommended to create material first based on a theme, and you can freely do screen sharing during the session."
            stat={true}
          />
          <AboutCard title="Do I have to speak according to the theme?" text="No, you can speak freely whatever you want as long as it does not contain unlawful content." stat={true} />
          <AboutCard title="Can I attend the meeting even though I am not joined Bivouac?" text="Yes, you can still attend the meeting even if not joined at the bivouac but as a spectator." stat={true} />
        </div>
      </div>
    </section>
  );
}

export default About;
