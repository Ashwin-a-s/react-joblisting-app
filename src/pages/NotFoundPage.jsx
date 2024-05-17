import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';

const NotFoundPage = () => {
  return (
    <section className="m-20">
        <div class="flex flex-col items-center gap-y-4">
            <FaExclamationTriangle className="text-yellow-500 text-6xl" />

            <h1 className="text-4xl font-bold">404 Not Found</h1>

            <p className="text-lg font-bold">This page does not exist !!!</p>

            <Link to="/" className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500">Go Back</Link>
        </div>
    </section>
  )
}

export default NotFoundPage