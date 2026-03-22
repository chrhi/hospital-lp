import { SparklesIcon } from '@heroicons/react/20/solid';

type Props = {
  text: string;
  /** Light text and bullets for use on dark image overlays */
  variant?: 'default' | 'onImage';
};

const ListItem = ({ text, variant = 'default' }: Props) => {
  const onImage = variant === 'onImage';
  return (
    <li
      className={`flex lg:items-center gap-3 text-xs xs:text-sm ${onImage ? 'text-white/95' : ''}`}
    >
      <SparklesIcon
        className={`h-3 w-3 shrink-0 ${onImage ? 'text-white' : 'text-primary'}`}
      />
      <p className={onImage ? 'leading-relaxed drop-shadow-sm' : ''}>{text}</p>
    </li>
  );
};

export default ListItem;
