import styles from './swiper-slide.module.css';
import Image from 'next/image';
import { Burger } from '../../../Services/menuItems';


interface Props {
  burger: Burger;
  onClick: () => void;
}

//Why do we use TypeScript typing (React.FC<Props>)?
//Because without it, React won’t check if you passed all the needed props.
const BurgerCardSwiper: React.FC<Props> = ({ burger, onClick }) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.imageWrapper}>
        <Image
          src={burger.image || '/images/placeholder.png'}
          alt={burger.name}
          layout="fill"
          objectFit="cover"
          priority={true}
        />
      </div>

      <h3 className={styles.name}>{burger.name}</h3>

      <p className={styles.description}>
        {burger.description.length > 80
          ? burger.description.slice(0, 80) + '...'
          : burger.description}
      </p>
    </div>
  );
};

export default BurgerCardSwiper;

