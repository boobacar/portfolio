import React from 'react';

const Contact = () => {
  return (
    <div>
      <div name='contact' className='w-full h-full  bg-[#0a192f] flex justify-center items-center p-4'>
          <form action='https://getform.io/f/defde9c6-e7b9-4aba-a381-c3546079ef3e' method='POST' className='flex flex-col max-w-[600px] w-full'>
              <div className='pb-8 mt-[100px]'>
                  <p className='text-4xl font-bold inline border-b-4 border-red-400 text-gray-300' >Contact</p>
                  <p className='text-gray-300 py-4'>Submit the form below or send me an email - boubsfal@gmail.com</p>
              </div>
              <input className='p-2 bg-[#ccd6f6]' type='text' placeholder='Name' name='name' />
              <input className='my-4 p-2 bg-[#ccd6f6]' type='email' placeholder='Email' name='email' />
              <textarea className='bg-[#ccd6f6] p-2' name='message' rows='10' placeholder='Message'></textarea>
              <button className='text-white border-2 hover:bg-red-400 hover:border-red-400 px-4 py-3  my-8 mx-auto flex items-center'>Let's Collaborate</button>
          </form>
      </div>
      <hr></hr>
    </div>
  )
}

export default Contact;