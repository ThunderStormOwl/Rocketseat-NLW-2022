import * as Dialog from '@radix-ui/react-dialog';
import * as Checkbox from '@radix-ui/react-checkbox';
import * as Select from '@radix-ui/react-select';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { Input } from '../components/form/Input';
import { CaretDown, Check, GameController } from 'phosphor-react';
import { AdBanner } from '../components/AdBanner';
import { Game } from '../App';
import { useState, FormEvent } from 'react';
import axios from 'axios';

interface CreateAdModalProps {
  games: Game[];
}

export function CreateAdModal(props: CreateAdModalProps) {
  const [weekDays, setWeekDays] = useState<string[]>([]);
  const [usesVoiceChat, setUsesVoiceChat] = useState(false);

  async function handleCreateAd(e: FormEvent) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    console.log(data.voiceChat);
    if (!data.name) return;

    try {
      await axios.post(`http://localhost:3333/games/${data.game}/ads`, {
        name: data.name,
        yearsPlaying: Number(data.yearsPlaying),
        discord: data.discord,
        weekDays: weekDays.map(Number),
        hoursStart: data.hoursStart,
        hourEnd: data.hourEnd,
        usesVoiceChannel: usesVoiceChat,
      });
      alert('Ad successfully created!');
    } catch (err) {
      console.log(err);
      alert('I am error...');
    }
  }

  return (
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

            <form
              onSubmit={handleCreateAd}
              className={'mt-8 flex flex-col gap-4'}
            >
              <div className={'flex flex-col gap-2 '}>
                <label
                  className={'font-semibold'}
                  htmlFor={'game'}
                >
                  Game:
                </label>
                <Select.Root name='game'>
                  <Select.Trigger
                    className={
                      'flex flex-row justify-between items-center bg-zinc-900 py-2 px-4 rounded text-sm placeholder:text-zinc-500'
                    }
                  >
                    <Select.Value placeholder={'Select the game you wish to play'} />
                    <Select.Icon>
                      <CaretDown size={20} />
                    </Select.Icon>
                  </Select.Trigger>
                  <Select.Portal>
                    <Select.Content
                      className={
                        'w-[100%] h-40 bg-zinc-900 text-white text-sm pl-4 rounded py-2 cursor-pointer border-zinc-100 border-2'
                      }
                    >
                      <Select.Viewport>
                        {props.games.map((game) => (
                          <Select.Item
                            value={game.id}
                            key={game.id}
                            className={'hover:bg-zinc-700 mr-4 mb-1'}
                          >
                            <Select.ItemText>{game.title}</Select.ItemText>
                            <Select.ItemIndicator color='white' />
                          </Select.Item>
                        ))}
                      </Select.Viewport>
                    </Select.Content>
                  </Select.Portal>
                </Select.Root>
              </div>
              <div className={'flex flex-col gap-2'}>
                <label htmlFor={'name'}>Your handle in the game selected:</label>
                <Input
                  id={'name'}
                  name={'name'}
                  placeholder={'What is your nickname?'}
                />
              </div>
              <div className={'grid grid-cols-2 gap-6'}>
                <div className={'flex flex-col gap-2'}>
                  <label htmlFor={'yearsPlaying'}>How long have you played this game?</label>
                  <Input
                    id={'yearsPlaying'}
                    name={'yearsPlaying'}
                    type={'number'}
                    placeholder={'In years please'}
                  />
                </div>
                <div className={'flex flex-col gap-2'}>
                  <label htmlFor={'discord'}>What is you discord name?</label>
                  <Input
                    id={'discord'}
                    name={'discord'}
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

                  <ToggleGroup.Root
                    className={'grid grid-cols-4 gap-2'}
                    type={'multiple'}
                    value={weekDays}
                    onValueChange={setWeekDays}
                  >
                    <ToggleGroup.Item
                      value={'0'}
                      className={`w-8 h-8 rounded bg-zinc-900 ${weekDays.includes('0') ? 'bg-violet-400' : ''}`}
                      title={'Sunday'}
                    >
                      S
                    </ToggleGroup.Item>
                    <ToggleGroup.Item
                      value={'1'}
                      className={`w-8 h-8 rounded bg-zinc-900 ${weekDays.includes('1') ? 'bg-violet-400' : ''}`}
                      title={'Monday'}
                    >
                      M
                    </ToggleGroup.Item>
                    <ToggleGroup.Item
                      value={'2'}
                      className={`w-8 h-8 rounded bg-zinc-900 ${weekDays.includes('2') ? 'bg-violet-400' : ''}`}
                      title={'Tuesday'}
                    >
                      T
                    </ToggleGroup.Item>
                    <ToggleGroup.Item
                      value={'3'}
                      className={`w-8 h-8 rounded bg-zinc-900 ${weekDays.includes('3') ? 'bg-violet-400' : ''}`}
                      title={'Wednesday'}
                    >
                      W
                    </ToggleGroup.Item>
                    <ToggleGroup.Item
                      value={'4'}
                      className={`w-8 h-8 rounded bg-zinc-900 ${weekDays.includes('4') ? 'bg-violet-400' : ''}`}
                      title={'Thursday'}
                    >
                      T
                    </ToggleGroup.Item>
                    <ToggleGroup.Item
                      value={'5'}
                      className={`w-8 h-8 rounded bg-zinc-900 ${weekDays.includes('5') ? 'bg-violet-400' : ''}`}
                      title={'Friday'}
                    >
                      F
                    </ToggleGroup.Item>
                    <ToggleGroup.Item
                      value={'6'}
                      className={`w-8 h-8 rounded bg-zinc-900 ${weekDays.includes('6') ? 'bg-violet-400' : ''}`}
                      title={'Saturday'}
                    >
                      S
                    </ToggleGroup.Item>
                  </ToggleGroup.Root>
                </div>

                <div className={'flex flex-col gap-2 flex-1'}>
                  <label htmlFor={'hoursStart'}>What is your play time window?</label>
                  <div className={'grid grid-cols-2 gap-2'}>
                    <Input
                      id={'hoursStart'}
                      name={'hoursStart'}
                      type={'time'}
                      placeholder={'From:'}
                    />
                    <Input
                      id={'hourEnd'}
                      name={'hourEnd'}
                      type={'time'}
                      placeholder={'To:'}
                    />
                  </div>
                </div>
              </div>
              <label className={'mt-2 flex gap-2 text-sm items-center'}>
                <Checkbox.Root
                  checked={usesVoiceChat}
                  onCheckedChange={(checked) => {
                    if (checked === true) setUsesVoiceChat(true);
                    else setUsesVoiceChat(false);
                  }}
                  name={'voiceChat'}
                  className={'w-6 h-6 p-1 rounded bg-zinc-900'}
                >
                  <Checkbox.Indicator>
                    <Check className={'w-4 h-4 text-emerald-400 '} />
                  </Checkbox.Indicator>
                </Checkbox.Root>
                I use voice chat
              </label>
              <footer className={'mt-4 flex justify-end gap-4'}>
                <Dialog.Close
                  type={'button'}
                  className={'bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600'}
                >
                  Cancel
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
  );
}
