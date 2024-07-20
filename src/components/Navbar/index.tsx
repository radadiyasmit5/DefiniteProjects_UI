import React from 'react';

interface NavbarProps {
  // Define any props if needed
}

const Navbar = () => {
  return (
    <>
    <header className="flex justify-between items-center bg-white py-4 px-6 max-w-[1720px] w-[100%] m-auto">
      <a href="/" className="text-xl font-bold">
        <svg xmlns="http://www.w3.org/2000/svg" width="153" height="31" viewBox="0 0 153 31" fill="none">
        <path d="M6.23185 0L0 8.28531V2.7073L2.03785 0H6.23185ZM12.1969 3.22841L0 19.4446V13.8653L8.0351 3.19166H8.02852L10.4285 0H11.3958C18.137 0 22.4696 3.62811 22.4696 9.13655C22.4696 12.9491 20.5251 15.5704 17.5396 17.0202L15.7134 14.5932C17.7308 13.5437 18.9689 11.7132 18.9689 9.26716C18.9689 5.74538 16.4908 3.53622 12.1969 3.22841ZM9.67865 12.1549L0 25.0226V30.6L7.57771 20.5275L9.69114 17.7172C12.9014 22.0128 16.105 26.2985 19.3198 30.6007H23.5552C18.9288 24.4516 14.3037 18.3033 9.67865 12.1549Z" fill="#FF792D"></path><path d="M35.2322 7.57316C28.9011 7.57316 24.1025 12.4568 24.1025 18.9445C24.1025 25.4394 28.9011 30.323 35.2322 30.323C39.9657 30.323 43.8029 27.6977 45.6495 23.202H42.0266C40.6807 25.5562 38.2519 26.9659 35.2322 26.9659C31.0987 26.9659 28.0908 24.3144 27.5513 20.2774H46.1562C46.193 19.8653 46.2298 19.4498 46.2298 19.0377C46.2298 12.6708 41.8544 7.57316 35.2322 7.57316ZM27.6302 17.1048C28.3406 13.3107 31.2689 10.82 35.2322 10.82H35.2329C39.095 10.82 42.0489 13.2253 42.7863 17.1048H27.6302Z" fill="#000"></path><path d="M61.2649 7.57316C58.0199 7.57382 55.1967 8.78538 53.1838 10.8127V0.271011H49.7489V29.8458H52.4097L52.8743 26.7435C54.9017 28.9703 57.8503 30.323 61.2649 30.323C67.8418 30.323 72.5195 25.4394 72.5195 18.9484C72.5195 12.42 67.8418 7.57316 61.2649 7.57316ZM61.0067 27.0027C56.3862 27.0027 52.963 23.4993 52.963 18.9484C52.963 14.3568 56.3862 10.8941 61.0067 10.8941C65.6344 10.8941 69.0102 14.3129 69.0102 18.9484C69.0102 23.584 65.6344 27.0027 61.0067 27.0027Z" fill="#000"></path><path d="M91.6441 20.0983C91.6441 24.342 89.2922 27.0027 85.4031 27.0027C81.5508 27.0027 79.162 24.3787 79.162 20.0983V8.05096H75.7271V20.6509C75.7271 26.5 79.5346 30.3236 85.4031 30.3236C91.309 30.3236 95.0791 26.5 95.0791 20.6509V8.05096H91.6441V20.0983Z" fill="#000"></path><path d="M103.457 8.05096H100.022V29.8465H103.457V8.05096Z" fill="#000"></path><path d="M103.6 0.341893H99.8797V4.2765H103.6V0.341893Z" fill="#000"></path><path d="M112.186 0.271668H108.751V29.8458H112.186V0.271668Z" fill="#000"></path><path d="M121.933 22.1171V11.1501H128.777V8.05096H121.933V3.43707H121.394L114.657 10.5364V11.1501H118.497V22.2274C118.497 26.9528 121.391 29.8458 126.078 29.8458H128.905V26.6732H126.521C123.551 26.6732 121.933 25.0502 121.933 22.1171Z" fill="#000"></path><path d="M141.429 7.57316C134.82 7.57316 129.859 12.3761 129.859 18.9484C129.859 25.4794 134.819 30.323 141.429 30.323C148.043 30.323 153 25.4794 153 18.9484C153 12.4168 148.043 7.57316 141.429 7.57316ZM141.43 27.0034C136.761 27.0027 133.368 23.6135 133.368 18.9484C133.368 14.28 136.758 10.8941 141.43 10.8941C146.102 10.8941 149.491 14.284 149.491 18.9491C149.491 23.6141 146.101 27.0034 141.43 27.0034Z" fill="#000;">
        </path></svg>
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
