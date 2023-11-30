import UaImage from '/public/images/ukraine.png';
import EnImage from '/public/images/england.png';
import SpImage from '/public/images/spain.png';

export const secondNav = [
  {
    id: 1,
    title: 'Про нас',
    src: '/about',
  },
  {
    id: 2,
    title: 'ЗМІ про нас',
    src: '/media',
  },
  {
    id: 3,
    title: 'Книга відгуків',
    src: '/testimonials',
  },
  {
    id: 4,
    title: 'Оплата та доставка',
    src: '/payment-back',
  },
];

export const footerNav = [
  {
    id: 1,
    src: '/media',
    title: 'ЗМІ про нас',
  },
  {
    id: 2,
    src: '/testimonials',
    title: 'Книга відгуків',
  },
  {
    id: 3,
    src: '/faq',
    title: 'Правила для відвідувачів',
  },
  {
    id: 4,
    src: '/archive-media',
    title: 'Архіви новин',
  },
  {
    id: 5,
    src: '/payment-back',
    title: 'Оплата та доставка',
  },
];

export const mainNav = [
  {
    id: 1,
    title: 'Головна',
    src: '/',
  },
  {
    id: 2,
    title: 'Події',
    src: '/events',
  },
  {
    id: 3,
    title: 'Новини',
    src: '/blog/news',
  },
  {
    id: 4,
    title: 'Магазин',
    src: '/shop',
  },
  {
    id: 5,
    title: 'Контакти',
    src: '/contacts',
  },
];

export const locales = [
  {
    id: 1,
    locate: 'ua',
    href: '/',
    src: UaImage,
  },
  {
    id: 2,
    locate: 'en',
    href: '/',
    src: EnImage,
  },
  {
    id: 3,
    locate: 'es',
    href: '/',
    src: SpImage,
  },
];

export const mainSlider = [
  {
    id: 1,
    src: '/public/images/slider.png',
    title: 'ЗАЛ СЛАВИ УКРАЇНСЬКОГО БОКСУ',
  },
  {
    id: 2,
    src: '/public/images/slider.png',
    title: 'ЗАЛ СЛАВИ УКРАЇНСЬКОГО БОКСУ',
  },
  {
    id: 3,
    src: '/public/images/slider.png',
    title: 'ЗАЛ СЛАВИ УКРАЇНСЬКОГО БОКСУ',
  },
];

export const shopSlides = [
  {
    id: 1,
    src: '/public/images/shop.png',
    title: 'ОФІЦІЙНИЙ ІНТЕРНЕТ-МАГАЗИН ЗАЛИ СЛАВИ УКРАЇНСЬКОГО БОКСУ'
  },
  {
    id: 2,
    src: '/public/images/shop.png',
    title: 'ОФІЦІЙНИЙ ІНТЕРНЕТ-МАГАЗИН ЗАЛИ СЛАВИ УКРАЇНСЬКОГО БОКСУ'
  },
  {
    id: 3,
    src: '/public/images/shop.png',
    title: 'ОФІЦІЙНИЙ ІНТЕРНЕТ-МАГАЗИН ЗАЛИ СЛАВИ УКРАЇНСЬКОГО БОКСУ'
  },
]

export const upcomingEvents = [
  {
    event_id: 1,
    src: '/images/event-image.png',
    title: 'Заголовок',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    event_id: 2,
    src: '/images/event-second.png',
    title: 'Заголовок',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    event_id: 3,
    src: '/images/event-image.png',
    title: 'Заголовок',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    event_id: 4,
    src: '/images/event-second.png',
    title: 'Заголовок',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];



export const monthNames = ['Січ', 'Лют', 'Бер', 'Кві', 'Тра', 'Чер', 'Лип', 'Сер', 'Вер', 'Жов', 'Лис', 'Гру'];

export const fadeIn = {
  initial: {
    y: 0,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { type: "tween", duration: 0.5, delay: 0.1 },
  },
};

