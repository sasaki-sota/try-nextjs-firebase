type Service = {
  name: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
};

type Services = Service[];

export const services: Services = [
  {
    name: 'Realtime database',
    href: '/firebase/database',
    imageSrc: '/database.png',
    imageAlt: 'database icon',
  },
];
