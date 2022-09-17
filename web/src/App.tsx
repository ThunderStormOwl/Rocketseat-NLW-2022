import React from 'react';
import { GameBanner } from './components/GameBanner';
import logo from './assets/logo.svg';
import './styles/main.css';
import { CreateAdModal } from './components/CreateAdModal';
import axios from 'axios';
export interface Game {
  id: string;
  title: string;
  bannerURL: string;
  _count: {
    ads: number;
  };
}

//Keen Slider good lib to do more games
//React hook form good for validation, combines well with zod

function App() {
  const [games, setGames] = React.useState<Game[]>([]);
  React.useEffect(() => {
    axios('http://localhost:3333/games').then((response) => {
      setGames(response.data);
    });
  }, []);

  return (
    <div className={'max-w-[1344px] mx-auto flex flex-col items-center my-20'}>
      <img src={logo} />
      <h1 className={'text-6xl text-white font-black mt-20'}>
        Find your <span className={'bg-txtgradient bg-clip-text text-transparent'}>team!</span>
      </h1>
      <div className={'grid grid-cols-6 gap-6 mt-16'}>
        {games.map((game) => {
          // console.log(game.bannerURL);
          return (
            <GameBanner
              key={game.id}
              title={game.title}
              bannerURL={game.bannerURL}
              adsCount={game._count.ads}
            />
          );
        })}
      </div>
      <CreateAdModal games={games} />
    </div>
  );
}

export default App;
