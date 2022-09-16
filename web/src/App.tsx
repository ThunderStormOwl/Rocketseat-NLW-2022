import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';

import { AdBanner } from './components/AdBanner';
import { GameBanner } from './components/GameBanner';
import { GameController } from 'phosphor-react';

import logo from './assets/logo.svg';
import './styles/main.css';
import { Input } from './components/form/Input';

interface Game {
  id: string;
  title: string;
  bannerURL: string;
  _count: {
    ads: number;
  };
}

function App() {
  const [games, setGames] = React.useState<Game[]>([]);
  React.useEffect(() => {
    fetch('http://localhost:3333/games').then((response) =>
      response.json().then((data) => {
        setGames(data);
      })
    );
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
      <Dialog.Root>
        <AdBanner />
        <Dialog.Portal>
          <Dialog.Overlay className={'bg-black/60 inset-0 fixed'}>
            <Dialog.Content
              className={
                'fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25'
              }
            >
              <Dialog.Title className={'text-3xl font-black'}>Post a team request</Dialog.Title>

              <form className={'mt-8 flex flex-col gap-4'}>
                <div className={'flex flex-col gap-2 '}>
                  <label
                    className={'font-semibold'}
                    htmlFor={'game'}
                  >
                    Game:
                  </label>
                  <Input
                    id={'game'}
                    placeholder={'Select the game you want a team for'}
                  />
                </div>
                <div className={'flex flex-col gap-2'}>
                  <label htmlFor={'name'}>Your handle in the game selected:</label>
                  <Input
                    id={'name'}
                    placeholder={'What is your nickname?'}
                  />
                </div>
                <div className={'grid grid-cols-2 gap-6'}>
                  <div className={'flex flex-col gap-2'}>
                    <label htmlFor={'yearsPlaying'}>How long have you played this game?</label>
                    <Input
                      id={'yearsPlaying'}
                      type={'number'}
                      placeholder={'In years please'}
                    />
                  </div>
                  <div className={'flex flex-col gap-2'}>
                    <label htmlFor={'discord'}>What is you discord name?</label>
                    <Input
                      id={'discord'}
                      type={'text'}
                      placeholder={"Don't forget the #id numbers"}
                    />
                  </div>
                </div>
                <div className={'flex gap-6'}>
                  <div className={'flex flex-col gap-2'}>
                    <label
                      htmlFor={'weekDays'}
                      className={'block'}
                    >
                      Which days of the week <br />
                      you are free to play?
                    </label>
                    <div className={'grid grid-cols-4 gap-2'}>
                      <button
                        className={'w-8 h-8 rounded bg-zinc-900'}
                        title={'Sunday'}
                      >
                        S
                      </button>
                      <button
                        className={'w-8 h-8 rounded bg-zinc-900'}
                        title={'Monday'}
                      >
                        M
                      </button>
                      <button
                        className={'w-8 h-8 rounded bg-zinc-900'}
                        title={'Tuesday'}
                      >
                        T
                      </button>
                      <button
                        className={'w-8 h-8 rounded bg-zinc-900'}
                        title={'Wednesday'}
                      >
                        W
                      </button>
                      <button
                        className={'w-8 h-8 rounded bg-zinc-900'}
                        title={'Thursday'}
                      >
                        T
                      </button>
                      <button
                        className={'w-8 h-8 rounded bg-zinc-900'}
                        title={'Friday'}
                      >
                        F
                      </button>
                      <button
                        className={'w-8 h-8 rounded bg-zinc-900'}
                        title={'Saturday'}
                      >
                        S
                      </button>
                    </div>
                  </div>
                  <div className={'flex flex-col gap-2 flex-1'}>
                    <label htmlFor={'hoursStart'}>What is your play time window?</label>
                    <div className={'grid grid-cols-2 gap-2'}>
                      <Input
                        id={'hoursStart'}
                        type={'time'}
                        placeholder={'From:'}
                      />
                      <Input
                        id={'hourEdn'}
                        type={'time'}
                        placeholder={'To:'}
                      />
                    </div>
                  </div>
                </div>
                <div className={'mt-2 flex gap-2 text-sm'}>
                  <Input
                    id={'usesVoiceChannel'}
                    type={'checkbox'}
                  />
                  I use voice chat
                </div>
                <footer className={'mt-4 flex justify-end gap-4'}>
                  <Dialog.Close>
                    <button
                      type={'button'}
                      className={'bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600'}
                    >
                      Cancel
                    </button>
                  </Dialog.Close>
                  <button
                    className={
                      'bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600'
                    }
                    type={'submit'}
                  >
                    <GameController size={24} />
                    Find team
                  </button>
                </footer>
              </form>
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

export default App;
