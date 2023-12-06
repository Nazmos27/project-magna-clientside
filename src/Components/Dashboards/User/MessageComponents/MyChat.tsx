import React from 'react'
import avatar from '../../../../../public/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.webp'

const MyChat = () => {

  const contact = [
    {
      name: 'Adam',
      img: avatar,
      status: 'Available'
    },
    {
      name: 'John',
      img: avatar,
      status: 'Busy'
    },
    {
      name: 'Alexender',
      img: avatar,
      status: 'Available'
    },
    {
      name: 'James',
      img: avatar,
      status: 'Available'
    },
    {
      name: 'Jake',
      img: avatar,
      status: 'Busy'
    },
    {
      name: 'David',
      img: avatar,
      status: 'Available'
    },
    {
      name: 'Samantha',
      img: avatar,
      status: 'Busy'
    }
  ]

  return (
    <div className='w-screen flex'>
      <div className='w-1/4 h-screen bg-gray-200 shadow-lg  overflow-auto'>
        <div className='sticky bg-gray-200 top-0 pt-3'>
          <div className='flex justify-center items-center my-4'>
            <img src={avatar} className='h-16 w-16 rounded-full border-green-500 p-1 border-2' alt="" />
            <div className='text-left ml-2'>
              <h1 className='font-semibold text-xl'>Nazmos Sakib</h1>
              <p>My Account</p>
            </div>
          </div>
          <hr className='border-[1px] border-gray-400' />
        </div>


        <section className=''>
          <div className='flex flex-col items-start ml-6'>
            {
              contact.map(({ name, img, status }) => {
                return (
                  <div className='flex justify-center items-center my-4'>
                    <img src={img} className='h-12 w-12 rounded-full border-green-500 p-1 border-2' alt="" />
                    <div className='text-left ml-2 text-sm'>
                      <h1 className='font-semibold'>{name}</h1>
                      <p className='text-xs'>{status}</p>
                    </div>

                  </div>)
              })
            }
          </div>
        </section>
      </div>
      <div className='w-1/2 h-screen bg-gray-200 shadow-lg'>hey</div>
      <div className='w-1/4 h-screen bg-gray-200 shadow-lg'>hey</div>
    </div>
  )
}

export default MyChat