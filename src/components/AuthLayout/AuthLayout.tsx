import React from 'react';
import { Outlet } from 'react-router-dom';
import './AuthLayout.css';

 const AuthLayout = () => {
    const BgImage = [
        'https://demo2.wpopal.com/rebuilto/wp-content/uploads/2024/03/h1_img-3.png',
      ];
  return (
    <>
        {BgImage.map((image, index) => (
          <div key={index} className="slide test">
            <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 login_bg' style={{ backgroundImage: `url(${image})` }}>
                <Outlet />
            </div>
          </div>
        ))}
    </>
  );
};

export default AuthLayout;
