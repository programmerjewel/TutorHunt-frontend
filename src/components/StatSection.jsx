import { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import TutorIcon from "./icons/tutorIcon";
import ReviewIcon from './icons/ReviewIcon';
import LanguageIcon from './icons/LanguageIcon';
import UserIcon from './icons/UserIcon';

const StatSection = () => {
  const [statData, setStatData] = useState(null);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axiosSecure.get("/stats");
        setStatData(data);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, [axiosSecure]);

  return (
    <section className="py-12 w-11/12 mx-auto">
      <h2 className="font-black text-4xl text-black/85 dark:text-gray-100 mb-6 text-center">
        Discover the Power of{" "}
        <span className="text-violet-dark dark:text-violet-light">
          TutorHunt
        </span>{" "}
        in Numbers
      </h2>

      <div className="grid gap-4 md:grid-cols-4 grid-cols-2 w-4/5 mx-auto">
        <div className="flex flex-col justify-center gap-2 bg-gray-50 border border-gray-200 dark:border-gray-700 rounded-md px-2 py-8 dark:bg-gray-800">
          <div className="mx-auto">
            <TutorIcon className='text-violet-dark dark:text-violet-light'/>
          </div>
          <p className="text-center font-medium text-black/75 dark:text-white/90">
            <strong className="block text-2xl font-black">{statData?.totalTutors}</strong>{" "} 
            Experienced Tutors
          </p>
        </div>

        <div className="flex flex-col justify-center gap-2 border bg-gray-50 border-gray-200 dark:border-gray-700 rounded-md px-2 py-8 dark:bg-gray-800">
          <div className="mx-auto">
            <ReviewIcon className='text-violet-dark dark:text-violet-light'/>
          </div>
          <p className="text-center font-medium text-black/75 dark:text-white/90">
            <strong className="block text-2xl font-black">{statData?.totalReviews}</strong>{" "}Total
            Reviews
          </p>
        </div>

        <div className="flex flex-col justify-center gap-2 border bg-gray-50 border-gray-200 dark:border-gray-700 rounded-md px-2 py-8 dark:bg-gray-800">
          <div className="mx-auto">
            <LanguageIcon className='text-violet-dark dark:text-violet-light'/>
          </div>
          <p className="text-center font-medium text-black/75 dark:text-white/90">
            <strong className="block text-2xl font-black">{statData?.totalLanguages}</strong>{" "}Subjects
            Taught
          </p>
        </div>

        <div className="flex flex-col justify-center gap-2 border bg-gray-50 border-gray-200 dark:border-gray-700 rounded-md px-2 py-8 dark:bg-gray-800">
          <div className="mx-auto">
            <UserIcon className='text-violet-dark dark:text-violet-light'/>
          </div>
          <p className="text-center font-medium text-black/75 dark:text-white/90">
            <strong className="block text-2xl font-black">
              {statData?.totalUsers}
            </strong>{" "}
            Users
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatSection;
