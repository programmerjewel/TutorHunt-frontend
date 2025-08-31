import { FaInstagram, FaTiktok, FaXTwitter, FaYoutube } from "react-icons/fa6";
import logo from '/logo.svg'


const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
      <nav>
        <div className='flex gap-1 items-center'>
        <img src={logo} className="w-6 aspect-square" alt="logo" /><span className="font-extrabold text-2xl">TutorHunt</span>
      </div>
        <p>© 2025 | All rights reserved.</p>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Follow Us</h6>
        <a className="link link-hover"><FaXTwitter size={20} /></a>
        <a className="link link-hover"><FaInstagram size={20} /></a>
        <a className="link link-hover"><FaYoutube size={20} /></a>
        <a className="link link-hover"><FaTiktok size={20} /></a>
      </nav>
    </footer>
  );
};

export default Footer;