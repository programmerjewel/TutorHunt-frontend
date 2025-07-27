
import tutorIcon from '../assets/icons/tutor.svg'
import reviewIcon from '../assets/icons/review.svg'
import teacherIcon from '../assets/icons/teacher.svg'
import subjectIcon from '../assets/icons/subject.svg'
import { useEffect, useState } from 'react'
import useAxiosSecure from '../hooks/useAxiosSecure'



const StatSection = () => {
  
  const [statData, setStatData] = useState(null);
  const axiosSecure = useAxiosSecure();
  useEffect(()=>{
    const getData = async () =>{
      try{
        const {data} = await axiosSecure.get('/stats');
      setStatData(data);
      }
      catch(err){
        console.error(err)
      }
    }
    getData();
  },[axiosSecure])
  

  return (
    <section className="py-12 w-11/12 mx-auto">
      <h2 className="font-extrabold text-4xl text-violet-600 mb-6 text-center">Discover the Power of TutorFlow in Numbers</h2>
      <div className="grid gap-3 md:grid-cols-4 grid-cols-2">
        <div className="flex flex-col justify-center gap-2 border border-gray-300 rounded-md p-3">
          <img src={tutorIcon} className='w-15' alt="" />
          <h3><span>{statData?.totalTutors}</span> Experienced Tutors</h3>
        </div>
        <div className="flex flex-col justify-center gap-2 border border-gray-300 rounded-md p-3">
          <img src={reviewIcon} className='w-15' alt="" />
          <h3><span>{statData?.totalReviews}</span> Total Reviews</h3>
        </div>
        <div className="flex flex-col justify-center gap-2 border border-gray-300 rounded-md p-3">
          <img src={subjectIcon} className='w-15 mx-auto' alt="" />
          <h3><span>{statData?.totalLanguages}</span> Subjects Taught</h3>
        </div>
        <div className="flex flex-col justify-center gap-2 border border-gray-300 rounded-md p-3">
        <img src={teacherIcon} className='w-15' alt="" />
          <h3 className="font-bold text-xl"><span className="text-violet-600">{statData?.totalUsers}</span> Users</h3>
        </div>
      </div>
    </section>
  );
};



export default StatSection;