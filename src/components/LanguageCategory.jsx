
import englishLogo from '../assets/icons/englishtutor.svg'
import spanishLogo from '../assets/icons/spansihtutor.svg'
import frenchLogo from '../assets/icons/frenchtutor.svg'
import germanLogo from '../assets/icons/germantutor.svg'
import italianLogo from '../assets/icons/italiantutor.svg'
import chineseLogo from '../assets/icons/chinesetutor.svg'
import arabicLogo from '../assets/icons/arabictutor.svg'
import japaneseLogo from '../assets/icons/japanesetutor.svg'
import portugeseLogo from '../assets/icons/portugesetutor.svg'
import { useNavigate } from 'react-router-dom'



const LanguageCategory = () => {

  const categories = [
    { title: "English tutors", logo: englishLogo,  path: "english" },
    { title: "Spanish tutors", logo: spanishLogo,  path: "spanish" },
    { title: "French tutors", logo: frenchLogo, path: "french" },
    { title: "German tutors", logo: germanLogo, path: "german" },
    { title: "Italian tutors", logo: italianLogo,  path: "italian" },
    { title: "Chinese tutors", logo: chineseLogo,  path: "chinese" },
    { title: "Arabic tutors", logo: arabicLogo, path: "arabic" },
    { title: "Japanese tutors", logo: japaneseLogo, path: "japanese" },
    { title: "Portuguese tutors", logo: portugeseLogo, path: "portuguese" },
  ];

  const navigate = useNavigate();
  
  //handle language category click
  const handleClick = (path) =>{
    navigate(`/find-tutors/${path}`)
  }


  return (
    <section className='py-12 w-11/12 mx-auto'>
      <h2 className='font-black text-4xl text-black/85 dark:text-gray-100 mb-6 text-center'>Explore <span className='text-violet-dark dark:text-violet-light'>Tutors</span> by Language</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {
          categories.map((category, index)=>(
            <div key={index} className='bg-gray-50/30 border border-gray-200 dark:border-gray-600 dark:bg-gray-800 p-4 rounded-sm flex items-center gap-3'>
              <img src={category.logo} className='w-8 h-8 aspect-square bg-violet-100 dark:bg-violet-300 rounded-sm' alt="" />
              <div>
                <h3 className='font-extrabold text-xl'>{category.title}</h3>
                <button onClick={()=>handleClick(category.path)} className='text-sm font-semibold text-violet-dark dark:text-violet-light cursor-pointer hover:text-violet-light'>Explore ➔</button>
              </div>
            </div>
        ))
        }
      </div>
    </section>
  );
};

export default LanguageCategory;