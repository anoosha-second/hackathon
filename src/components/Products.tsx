
import Image from 'next/image';

interface Card {
  image: string;
  name: string;
  description: string;
  price: string;
  age:number;
}


export default function Products() {
  const data: Card[] = [
    {
      name: 'Syltherine',
      price: "Rp 2.500.000",
      age: 30,
      image: "/Hero.png",
      description: 'Stylish cafe chair',
    },
    {
      name: 'Jane Smith',
      price: "Rp 2.500.000",
      age: 25,
      image: "/Pictures/images7.png",
      description: 'A creative designer who loves creating stunning visuals.',
    },
    {
      name: 'Sam Wilson',
      price: "Rp 2.500.000",
      age: 28,
      image: '/Pictures/images8.png',
      description: 'A software engineer specializing in backend systems.',
    },
    {
      name: 'Sam Wilson',
      price: "Rp 2.500.000",
      age: 28,
      image: '/Pictures/image2.png',
      description: 'A software engineer specializing in backend systems.',
    },
    {
      name: 'Sam Wilson',
      price: "Rp 2.500.000",
      age: 28,
      image: '/Pictures/images3.png',
      description: 'A software engineer specializing in backend systems.',
    },
    {
      name: 'Sam Wilson',
      price: "Rp 2.500.000",
      age: 28,
      image: '/Pictures/images4.png',
      description: 'A software engineer specializing in backend systems.',
    },
    {
      name: 'Sam Wilson',
      price: "Rp 2.500.000",
      age: 28,
      image: '/Pictures/images5.png',
      description: 'A software engineer specializing in backend systems.',
    },
    {
      name: 'Sam Wilson',
      price: "Rp 2.500.000",
      age: 28,
      image: '/Pictures/images6.png',
      description: 'A software engineer specializing in backend systems.',
    },
    {
      name: 'Sam Wilson',
      price: "Rp 2.500.000",
      age: 28,
      image: '/Pictures/images8.png',
      description: 'A software engineer specializing in backend systems.',
    },
  ];
  return (
    <div className="cardsContainer">
      {data.map((card, index) => (
        <div key={index} className="relative w-full max-w-[300px] bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative h-[300px] w-full">
            <Image 
              src={card.image} 
              alt={card.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="p-4 space-y-2">
            <h3 className="text-xl font-semibold text-gray-800">{card.name}</h3>
            <p className="text-sm text-gray-600">{card.description}</p>
            <div className="flex justify-between items-center pt-2">
              <span className="text-lg font-bold text-[#B88E2F]">{card.price}</span>
              <button className="px-4 py-2 bg-[#B88E2F] text-white rounded-md hover:bg-[#967524] transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

