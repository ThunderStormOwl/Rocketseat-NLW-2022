interface GameBannerProps {
  bannerURL: string;
  title: string;
  adsCount: number;
}

export function GameBanner(props: GameBannerProps) {
  return (
    <a
      className={'relative rounded-lg overflow-hidden'}
      href=''
    >
      <img
        src={props.bannerURL}
        alt=''
      />
      <div className={'w-full pt-16 pb-4 px-4 bg-infogradient absolute bottom-0 left-0 right-0'}>
        <strong className={'font-bold text-white block'}>{props.title}</strong>
        <span className={'text-zinc-300 text-sm block'}>{props.adsCount} ad(s)</span>
      </div>
    </a>
  );
}
