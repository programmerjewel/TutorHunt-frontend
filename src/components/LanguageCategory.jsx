
import englishLogo from '../assets/icons/englishtutor.svg'
import spanishLogo from '../assets/icons/spansihtutor.svg'
import frenchLogo from '../assets/icons/frenchtutor.svg'
import germanLogo from '../assets/icons/germantutor.svg'
import italianLogo from '../assets/icons/italiantutor.svg'
import chineseLogo from '../assets/icons/chinesetutor.svg'
import arabicLogo from '../assets/icons/arabictutor.svg'
import japaneseLogo from '../assets/icons/japanesetutor.svg'
import portugeseLogo from '../assets/icons/portugesetutor.svg'



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
  
  return (
    <section className='py-12 w-11/12 mx-auto'>
      <h2 className='text-center font-extrabold text-4xl text-violet-600 mb-6'>Explore Tutors by Language</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2'>
        {
          categories.map((category, index)=>(
            <div key={index} className='border border-gray-200 p-3 rounded-sm flex gap-1.5'>
              <img src={category.logo} className='' alt="" />
              <div>
                <h3 className='uppercase font-extrabold text-lg'>{category.title}</h3>
                <span className='text-sm'>Explore ➔</span>
              </div>
            </div>
        ))
        }
      </div>
    </section>
  );
};

export default LanguageCategory;