import { SelectedService } from '@/Components/Shared/Types';

type Props = {
  SelectService: SelectedService;
  setSelectService: (value: SelectedService) => void;
  service: {
    img: string;
    title: string;
    id: SelectedService;
  };
};

const Service = ({ SelectService, setSelectService, service }: Props) => {
  const id = service.id;
  const selected = SelectService === id;

  const onSelect = () => setSelectService(id);

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelect();
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={onKeyDown}
      title={service.title}
      className={`${
        selected
          ? 'bg-secondary/60 border-primary/40 ring-2 ring-primary/25'
          : 'bg-white/80 hover:bg-secondary/20 border-white/60'
      } cursor-pointer transition-all rounded-2xl border shadow-md w-full h-full aspect-square flex flex-col items-center justify-center gap-3 p-3 xs:p-4 lg:p-6 text-center`}
    >
      <img
        className="max-w-[30px] xs:max-w-[50px] md:max-w-[75px] lg:max-w-[60px]"
        src={service.img}
        alt={service.title}
      />
      <p className="text-[10px] font-bold sm:text-sm lg:text-lg leading-tight px-1">
        {service.title}
      </p>
    </div>
  );
};

export default Service;
