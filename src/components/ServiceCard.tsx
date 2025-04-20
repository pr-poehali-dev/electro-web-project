import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
}

const ServiceCard = ({ title, description, imageSrc, link }: ServiceCardProps) => {
  return (
    <div className="service-card bg-white rounded-lg overflow-hidden shadow-md">
      <img 
        src={imageSrc || "/placeholder.svg"} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link 
          to={link} 
          className="inline-block bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
        >
          Подробнее
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
