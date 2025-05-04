import { FaEye } from 'react-icons/fa';
import { FaBookmark } from "react-icons/fa";
import { Link } from 'react-router';

const NewsCard = ({ news }) => {
  const {
    id,
    title,
    author,
    thumbnail_url,
    details,
    rating,
    total_view,
    tags
  } = news;

  const formattedDate = new Date(author.published_date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="card bg-base-100 shadow-xl p-4 ">
      <div className="flex items-center mb-4">
        <img src={author.img} alt={author.name} className="w-10 h-10 rounded-full mr-3" />
        <div>
          <h2 className="font-semibold">{author.name}</h2>
          <p className="text-sm text-gray-500">{formattedDate}</p>
        </div>
       
      </div>
      {/* <div className='flex'>
        <button className=''><FaBookmark /></button>
        <button ><FaBookmark /></button>
        </div> */}

      <figure>
        <img src={thumbnail_url} alt={title} className="w-full h-48 object-cover rounded-lg" />
      </figure>

      <div className="card-body px-0">
        <h2 className="card-title text-lg">{title}</h2>
        <p className="text-sm text-gray-700">
          {details.length > 150 ? `${details.slice(0, 150)}...` : details}
          <Link to={`/news-details/${id}`} className="text-blue-500 font-medium cursor-pointer"> Read More</Link>
        </p>

        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-2">
            <span className="badge badge-warning text-xs uppercase">{rating.badge}</span>
            <span className="text-sm font-medium">{rating.number}</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-500">
        
            <FaEye /> {total_view}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <span key={idx} className="badge badge-outline text-xs">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
