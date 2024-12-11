import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons/faCircleChevronLeft';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen font-sans bg-slate-300">
      <h1 className="text-6xl font-bold mb-5 text-gray-500">Page Not Found 🥲</h1>
      <p className="text-gray-800 mb-5">The requested URL was not found on our server.</p>
      <button
        onClick={() => navigate('/')}
        className="flex items-center justify-center"
      >
        <FontAwesomeIcon icon={faCircleChevronLeft} />
        To Home Page
      </button>
    </div>
  );
};

export default PageNotFound;
