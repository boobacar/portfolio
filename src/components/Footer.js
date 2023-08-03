import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
return (
    <div 
        className='bg-[#0a192f] text-gray-300 font-bold py-6'>
                <div className='flex justify-center items-center'>
                    <p>
                        ⓒ Boubacar FALL [<span className='text-red-400'>{year}</span>]
                    </p>
                </div>
    </div>
  )
}

export default Footer;
