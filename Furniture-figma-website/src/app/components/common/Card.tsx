import Image from 'next/image';

interface CardProps {
  imageUrl: string;
  title: string;
  price: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, title, price }) => {
  return (
    <div className="max-w-xs p-4 bg-white border border-gray-200 rounded-lg shadow">
      <div className="flex justify-center gap-4 h-[300px]">
        {/* Image */}
        <Image 
          src={imageUrl} 
          alt={title} 
          width={500} 
          height={300} 
          className="rounded-md object-cover"
        />
      </div>
      {/* Title */}
      <h3 className="mt-4 text-lg  text-center text-gray-800 mb-4">
        {title}
      </h3>
      {/* Price */}
      <p className="mt-6 text-center text-lg font-semibold text-gray-900">
        {price}
      </p>
    </div>
  );
};

export default Card;
