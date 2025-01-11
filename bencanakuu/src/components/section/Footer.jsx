export default function Footer() {
    return (
      <>
        <footer className="p-16 bg-[#f1f1f1]">
          <div className="wrapper-footer grid grid-cols-3 gap-10">
            <div className="footer-about">
              <p className="font-semibold text-3xl uppercase tracking-widest">bencanaku</p>
              <p className="font-thin text-lg mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                voluptatum, voluptates quidem, quos, quas dolores quae quia
                exercitationem dolorum quibusdam amet.
              </p>
            </div>
            <div className="footer-information">
              <p className="font-semibold text-2xl">Information</p>
              <ul className="mt-5">
                <li className="footer-item cursor-pointer hover:underline">About Us</li>
                <li className="footer-item cursor-pointer hover:underline">Contact</li>
                <li className="footer-item cursor-pointer hover:underline">Privacy Policy</li>
                <li className="footer-item cursor-pointer hover:underline">Terms & Conditions</li>
              </ul>
            </div>
            <div className="footer-contact">
              <p className="font-semibold text-2xl">Contact</p>
              <ul className="mt-5">
                <li className="footer-item">Jl. Lorem ipsum dolor sit amet</li>
                <li className="footer-item">+62 8123 4567 890</li>
                <li className="footer-item">info@bencanaku.com</li>
              </ul>
            </div>
          </div>
        </footer>
      </>
    );
  }
