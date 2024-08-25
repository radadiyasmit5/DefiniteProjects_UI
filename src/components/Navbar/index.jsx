import React from 'react';
import logo from '../../assets/images/logo.png'
// interface NavbarProps {
//   // Define any props if needed
// }

const Navbar = () => {
  return (
    <>
      <header className="flex justify-between items-center bg-white py-4 px-6 max-w-[1720px] w-[100%] m-auto">
        <a href="/" className="text-xl font-bold">
          <img src={logo} width={200} height={300} />

        </a>
        <nav className="hidden lg:flex gap-10 w-[100%] justify-end mr-[100px]">
          <a href="#" className="font-Inter-Bold">Home</a>
          <a href="#" className="font-Inter-Bold">Company</a>
          <a href="#" className="font-Inter-Bold">Services</a>
          <a href="#" className="font-Inter-Bold">Projects</a>
          <a href="#" className="font-Inter-Bold">News</a>
          <a href="#" className="font-Inter-Bold">Contact</a>
        </nav>
        <div className="lg:hidden">
          <button className="font-Inter-Bold">
            <i className="fas fa-bars"></i>
            <span className="sr-only text-black">Menu</span>
          </button>
        </div>
        <a href="/login" className=" font-Inter-Bold max-w-[170px] w-[100%] hidden lg:flex items-center justify-center gap-2 bg-[#ff792D] text-center text-white py-2 px-4 rounded-[30px] hover:bg-[#E56C28]">
          <div><svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            height="20px"
            width="20px"
            id="Capa_1"
            viewBox="0 0 248.349 248.349"
            xmlSpace="preserve"
          >
            <g>
              <g>
                <path
                  style={{
                    fill: "#fff",
                  }}
                  d="M9.954,241.305h228.441c3.051,0,5.896-1.246,7.805-3.416c1.659-1.882,2.393-4.27,2.078-6.723    c-5.357-41.734-31.019-76.511-66.15-95.053c-14.849,14.849-35.348,24.046-57.953,24.046s-43.105-9.197-57.953-24.046    C31.09,154.65,5.423,189.432,0.071,231.166c-0.315,2.453,0.424,4.846,2.078,6.723C4.058,240.059,6.903,241.305,9.954,241.305z"
                />
                <path
                  style={{
                    fill: "#fff",
                  }}
                  d="M72.699,127.09c1.333,1.398,2.725,2.73,4.166,4.019c12.586,11.259,29.137,18.166,47.309,18.166    s34.723-6.913,47.309-18.166c1.441-1.289,2.834-2.622,4.166-4.019c1.327-1.398,2.622-2.828,3.84-4.329    c9.861-12.211,15.8-27.717,15.8-44.6c0-39.216-31.906-71.116-71.116-71.116S53.059,38.95,53.059,78.16    c0,16.883,5.939,32.39,15.8,44.6C70.072,124.262,71.366,125.687,72.699,127.09z"
                />
              </g>
            </g>
          </svg></div>
          <div>Login</div>
        </a>
      </header>
    </>
  );
};

export default Navbar;
