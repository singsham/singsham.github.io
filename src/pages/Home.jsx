import devIcon from "../assets/developer.png";

function Home() {
  return (
    <div className="flex justify-between items-center text-white p-8">
      <div className="flex-7/12 flex flex-col gap-y-8">
        <h2 className="">--- Hello</h2>
        <h1 className="text-4xl">
          I'm <span className="text-6xl font-bold font-roboto">Shambu Singh</span>
        </h1>
        <p>A full stack developer based in Gurugram, India</p>
      </div>
      <div className="flex-5/12 h-screen flex justify-center items-center">
        <img src={devIcon} alt="Profile" className="w-[100%] shadow" />
      </div>
    </div>
  );
}
export default Home;
