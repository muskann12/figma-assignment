import Image from "next/image";

const Footer = () => {
  return (
    <footer className="absolute top-[140rem] flex flex-col items-center">
      <div className="flex  justify-center gap-9 ">
        <Image 
        src="/images/fb.png"
        alt="Facebook Logo"
        width={20}
        height={20}
        />
        <Image 
        src="/images/insta.png"
        alt="Instagram Logo"
        width={30}
        height={30}
        />
        <Image 
        src="/images/vector.png"
        alt="Twitter Logo"
        width={20}
        height={20}
        />
        <Image 
        src="/images/Linkedin.png"
        alt="LinkedIn Logo"
        width={20}
        height={20}
        />
      </div>
      <p className="text-center font-heebo py-10 text-lg font-semibold">
      Copyright &copy;2020 All rights reserved 
      </p>
    </footer>
  );
};

export default Footer;