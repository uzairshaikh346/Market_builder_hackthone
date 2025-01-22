import Image from 'next/image';
import item1 from '@/app/imagess/shopitemImages/item1.jpg';
import item2 from '@/app/imagess/shopitemImages/item2.jpg';
import item3 from '@/app/imagess/shopitemImages/item3.jpg';
import item4 from '@/app/imagess/shopitemImages/item4.jpg';
import item5 from '@/app/imagess/shopitemImages/item5.jpg';
import item6 from '@/app/imagess/shopitemImages/item6.jpg';
import item7 from '@/app/imagess/shopitemImages/item7.jpg';
import item8 from '@/app/imagess/shopitemImages/item8.jpg';
import item9 from '@/app/imagess/shopitemImages/item9.jpg';
import item10 from '@/app/imagess/shopitemImages/item10.jpg';
import item11 from '@/app/imagess/shopitemImages/item11.jpg';
import item12 from '@/app/imagess/shopitemImages/item12.jpg';

const items = [
  {
    id: 1,
    src: item1,
    alt: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    discountPrice: "$6.48",
  },
  {
    id: 2,
    src: item2,
    alt: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    discountPrice: "$6.48",
  },
  {
    id: 3,
    src: item3,
    alt: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    discountPrice: "$6.48",
  },
  {
    id: 4,
    src: item4,
    alt: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    discountPrice: "$6.48",
  },
  {
    id: 5,
    src: item5,
    alt: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    discountPrice: "$6.48",
  },
  {
    id: 6,
    src: item6,
    alt: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    discountPrice: "$6.48",
  },
  {
    id: 7,
    src: item7,
    alt: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    discountPrice: "$6.48",
  },
  {
    id: 8,
    src: item8,
    alt: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    discountPrice: "$6.48",
  },
  {
    id: 9,
    src: item9,
    alt: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    discountPrice: "$6.48",
  },
  {
    id: 10,
    src: item10,
    alt: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    discountPrice: "$6.48",
  },
  {
    id: 11,
    src: item11,
    alt: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    discountPrice: "$6.48",
  },
  {
    id: 12,
    src: item12,
    alt: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    discountPrice: "$6.48",
  },
];

const ShopProductSection = () => {
  return (
    <div className="container mx-auto px-5 py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Shop</h1>
        <p className="text-xl text-gray-600 mb-8">
          Discover our collection of amazing clothes
        </p>
      </div>
      <div className="flex flex-wrap -mx-4">
        {items.map((item) => (
          <div key={item.id} className="w-full md:w-1/2 lg:w-1/4 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative">
                <Image
                  src={item.src}
                  alt={item.alt}
                  layout="responsive"
                  width={720}
                  height={600}
                  className="rounded-lg"
                />
              </div>
              <h2 className="text-lg font-medium text-gray-900 mt-4">
                {item.alt}
              </h2>
              <p className="text-gray-500">{item.department}</p>
              <p className="text-gray-500 line-through">{item.originalPrice}</p>
              <p className="text-red-500 font-bold">{item.discountPrice}</p>
              <div className="flex justify-center space-x-2 mt-2">
                <span className="h-4 w-4 bg-green-500 rounded-full border border-white"></span>
                <span className="h-4 w-4 bg-blue-500 rounded-full border border-white"></span>
                <span className="h-4 w-4 bg-yellow-500 rounded-full border border-white"></span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopProductSection
