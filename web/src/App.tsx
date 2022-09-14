import "./styles/main.css";
import logo from "./assets/logo.svg";
import { MagnifyingGlassPlus } from "phosphor-react";

function App() {
  return (
    <div className={"max-w-[1344px] mx-auto flex flex-col items-center my-20"}>
      <img src={logo} />
      <h1 className={"text-6xl text-white font-black mt-20"}>
        Find your{" "}
        <span className={"bg-txtgradient bg-clip-text text-transparent"}>
          team!
        </span>
      </h1>
      <div className={"grid grid-cols-6 gap-6 mt-16"}>
        <a className={"relative rounded-lg overflow-hidden"} href="">
          <img src="/game 1.svg" alt="" />
          <div
            className={
              "w-full pt-16 pb-4 px-4 bg-infogradient absolute bottom-0 left-0 right-0"
            }
          >
            <strong className={"font-bold text-white block"}>
              League of Legends
            </strong>
            <span className={"text-zinc-300 text-sm block"}>5 anúncios</span>
          </div>
        </a>

        <a className={"relative rounded-lg overflow-hidden"} href="">
          <img src="/game 2.svg" alt="" />
          <div
            className={
              "w-full pt-16 pb-4 px-4 bg-infogradient absolute bottom-0 left-0 right-0"
            }
          >
            <strong className={"font-bold text-white block"}>
              Apex Lgends
            </strong>
            <span className={"text-zinc-300 text-sm block"}>5 anúncios</span>
          </div>
        </a>
        <a className={"relative rounded-lg overflow-hidden"} href="">
          <img src="/game 3.svg" alt="" />
          <div
            className={
              "w-full pt-16 pb-4 px-4 bg-infogradient absolute bottom-0 left-0 right-0"
            }
          >
            <strong className={"font-bold text-white block"}>CS GO</strong>
            <span className={"text-zinc-300 text-sm block"}>5 anúncios</span>
          </div>
        </a>
        <a className={"relative rounded-lg overflow-hidden"} href="">
          <img src="/game 4.svg" alt="" />
          <div
            className={
              "w-full pt-16 pb-4 px-4 bg-infogradient absolute bottom-0 left-0 right-0"
            }
          >
            <strong className={"font-bold text-white block"}>
              World of Warcraft
            </strong>
            <span className={"text-zinc-300 text-sm block"}>5 anúncios</span>
          </div>
        </a>
        <a className={"relative rounded-lg overflow-hidden"} href="">
          <img src="/game 5.svg" alt="" />
          <div
            className={
              "w-full pt-16 pb-4 px-4 bg-infogradient absolute bottom-0 left-0 right-0"
            }
          >
            <strong className={"font-bold text-white block"}>Dota 2</strong>
            <span className={"text-zinc-300 text-sm block"}>5 anúncios</span>
          </div>
        </a>
        <a className={"relative rounded-lg overflow-hidden"} href="">
          <img src="/game 6.svg" alt="" />
          <div
            className={
              "w-full pt-16 pb-4 px-4 bg-infogradient absolute bottom-0 left-0 right-0"
            }
          >
            <strong className={"font-bold text-white block"}>Fortnite</strong>
            <span className={"text-zinc-300 text-sm block"}>5 anúncios</span>
          </div>
        </a>
      </div>
      <div
        className={
          "pt-1 bg-txtgradient self-stretch rounded-lg mt-8 overflow-hidden"
        }
      >
        <div
          className={"bg-[#2A2634] px-8 py-6 flex justify-between items-center"}
        >
          <div>
            <strong className={"text-2xl text-white font-black block"}>
              Could not find a team?
            </strong>
            <span className={"text-zinc-400 block"}>
              Post a request to find new players
            </span>
          </div>

          <button
            className={
              "py-3 px-4 bg-violet-500 text-white rounded hover:bg-violet-600 flex items-center gap-3"
            }
          >
            <MagnifyingGlassPlus size={24} />
            Post request
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
