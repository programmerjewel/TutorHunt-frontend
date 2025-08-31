import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const FindTutors = () => {
  const [tutors, setTutors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [appliedSearch, setAppliedSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [limit, setLimit] = useState(10);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const AllTutors = async () => {
      try {
        setLoading(true);
        const { data } = await axiosSecure.get(
          `/find-tutors?page=${currentPage}&limit=${limit}${appliedSearch ? `&language=${appliedSearch}` : ''}`
        );
        setTutors(data.result || []);
        setTotalPages(data.totalPage || 1);
      } 
      catch (err) {
        console.error(err);
      } 
      finally {
        setLoading(false);
      }
    };

    AllTutors();
  }, [appliedSearch, axiosSecure, currentPage, limit]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Apply the search term and reset to page 1
    setAppliedSearch(searchTerm);
    setCurrentPage(1);
    setSearchTerm('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  };
 const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleLimitChange = (e) => {
    setLimit(parseInt(e.target.value));
    setCurrentPage(1);
  };

  if (loading) {
    return (
      <div className="flex flex-col gap-4 justify-center items-center h-64">
        <span className="loading loading-spinner loading-lg"></span>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <main className="my-10">
      <h2 className="text-4xl text-center font-extrabold mb-6 text-black/85 dark:text-gray-100">Find Tutors</h2>
      <form onSubmit={handleSearch}>
        <div className="flex justify-center join">
          <input
            className="input mb-8"
            type="text"
            name="search"
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyUp={handleKeyPress}
            placeholder="Search by language"
            aria-label="Search by language"
            value={searchTerm}
          />
          <button type="submit" className="btn bg-violet-dark text-white hover:bg-violet-light rounded-r-sm">
            Search
          </button>
        </div>
      </form>
      <div className="grid gap-6 md:grid-cols-2 grid-cols-1 w-11/12 mx-auto">
        {tutors.length > 0 ? (
          tutors.map(tutor => (
            <div key={tutor._id} className="border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 rounded-sm flex items-center p-3">
              <div className="w-2/5">
                <img 
                  src={tutor.image} 
                  className="aspect-square object-cover rounded-sm h-40" 
                  alt={tutor.name} 
                />
                <h3 className="font-bold text-lg mt-2">{tutor.name}</h3>
                <p className="text-gray-600 dark:text-gray-100">{tutor.language}</p>
              </div>
              <div className="w-3/5">
                <p className="mb-4 line-clamp-3">{tutor.description}</p>
                <Link to={`/tutors/${tutor._id}`}>
                  <button className="btn border-none shadow-none bg-violet-dark text-white hover:bg-violet-light">Details</button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-2 text-center py-10">
            <p className="text-xl">No tutors available at the moment.</p>
          </div>
        )}
      </div>
      <div className="flex justify-center items-center gap-2 mt-8 flex-wrap">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="btn bg-violet-light text-white btn-sm"
            >
              <FaArrowLeft /> Prev
            </button>
           {/* Dynamic page buttons */}
          {Array.from({ length: Math.min(totalPages, 5) }, (_, index) => {
            const startPage = Math.max(1, currentPage - 2);
            const page = startPage + index;
            if (page <= totalPages) {
              return (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`btn btn-sm ${currentPage === page ? 'bg-violet-dark text-white' : ''}`}
                >
                  {page}
                </button>
              );
            }
            return null;
          })}
        {/* Ellipsis and last page */}
          {totalPages > 5 && currentPage <= totalPages - 3 && (
            <>
              <span>...</span>
              <button
                onClick={() => handlePageChange(totalPages)}
                className={`btn btn-sm ${currentPage === totalPages ? '' : ''}`}
              >
                {totalPages}
              </button>
            </>
          )}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="btn bg-violet-light text-white btn-sm"
            >
              <FaArrowRight/> Next
            </button>
            <select
              value={limit}
              onChange={handleLimitChange}
              className="select select-bordered w-40"
            >
              {[5, 10, 15, 20].map(option => (
                <option key={option} value={option}>
                  {option} per page
                </option>
              ))}
            </select>
      </div>
          
    </main>
  );
};

export default FindTutors;