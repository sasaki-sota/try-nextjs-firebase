import { services } from '@/const';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

interface ServicesProps {}

const Services: NextPage<ServicesProps> = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Firebase Services
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <Image
                  src={service.imageSrc}
                  alt={service.imageAlt}
                  width={320}
                  height={320}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <h3 className="text-2xl mt-2 text-gray-700">
                <Link href={service.href}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {service.name}
                </Link>
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
