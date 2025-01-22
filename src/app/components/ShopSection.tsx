import Image from 'next/image';
import clothImage1 from '@/app/imagess/shopImages/shopImage (1).png';
import clothImage2 from '@/app/imagess/shopImages/shopImage (2).png';
import clothImage3 from '@/app/imagess/shopImages/shopImage (3).png';
import clothImage4 from '@/app/imagess/shopImages/shopImage (4).png';
import clothImage5 from '@/app/imagess/shopImages/shopImage (5).png';

const clothData = [
  {
    id: 1,
    title: 'CLOTHS',
    items: '5 Items',
    imageUrl: clothImage1,
  },
  {
    id: 2,
    title: 'CLOTHS',
    items: '5 Items',
    imageUrl: clothImage2,
  },
  {
    id: 3,
    title: 'CLOTHS',
    items: '5 Items',
    imageUrl: clothImage3,
  },
  {
    id: 4,
    title: 'CLOTHS',
    items: '5 Items',
    imageUrl: clothImage4,
  },
  {
    id: 5,
    title: 'CLOTHS',
    items: '5 Items',
    imageUrl: clothImage5,
  },
];

const ShopSection = () => (
  <div className="container mx-auto px-5 py-24 bg-slate-100">
    <div className="text-start mb-8 flex justify-between px-5">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Shop</h1>
      <h1 className='text-[22px] font-bold'>Home <span className='text-gray-400'>/ Shop</span></h1>
    </div>
    <div className='sm:flex-col'>
      <div className="flex sm:justify-center sm:items-center flex-col md:flex-row justify-around w-full">
        {clothData.map((cloth) => (
          <div key={cloth.id} className="relative flex-1 m-2 p-2 bg-gray-100 rounded-lg text-center max-w-xs">
            <Image
              src={cloth.imageUrl}
              alt={cloth.title}
              layout="responsive"
              width={720}
              height={600}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white font-bold text-xl">{cloth.title}<br />{cloth.items}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ShopSection;
