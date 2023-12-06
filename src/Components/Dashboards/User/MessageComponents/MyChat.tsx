import React from 'react'
import avatar from '../../../../../public/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.webp'
import { Phone, PhoneEnabledSharp } from '@mui/icons-material'

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

      {/* Messages Section */}
      <div className='w-1/4 h-screen bg-gray-200 shadow-lg' >
        <div className='sticky bg-gray-200 top-0 pt-3'>
          <div className='flex justify-center items-center my-4'>
            <img src={avatar} className='h-12 w-12 rounded-full border-green-500 p-1 border-2' alt="" />
            <div className='text-left ml-2'>
              <h1 className='font-semibold'>Nazmos Sakib</h1>
              <p className='text-sm'>My Account</p>
            </div>
          </div>
          <hr className='border-[1px] border-gray-400' />
        </div>
        <section className='h-[80%] overflow-y-scroll' >
          <div className='h-[1000px] flex flex-col items-start ml-6' >
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

      {/* chatting section */}

      <div className='w-1/2 h-screen bg-white shadow-lg'>
        
          {/* header part */}
          <div className='bg-gray-100 rounded-full mx-5 mb-5 flex justify-between px-10 items-center'>
            <div className='flex justify-center items-center my-4'>
              <img src={avatar} className='h-12 w-12 rounded-full border-green-500 p-1 border-2' alt="" />
              <div className='text-left ml-2'>
                <h1 className='font-semibold'>Nazmos Sakib</h1>
                <p className='text-sm'>My Account</p>
              </div>
            </div>
            <PhoneEnabledSharp />
          </div>
          <div className='h-[75%] border overflow-y-scroll border-black shadow-md'>
            <div className='h-[1000px] px-10 py-14'>
              <div className='bg-slate-200 text-sm p-2 my-4 w-[300px] rounded-b-xl rounded-tr-xl'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quam accusamus voluptatem aliquid. Error modi labore iure doloribus incidunt ab!</div>
              <div className='bg-[#00B2FF] text-sm p-2 my-4 w-[300px] ml-auto text-white rounded-b-xl rounded-tl-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quam accusamus voluptatem aliquid. Error modi labore iure doloribus incidunt ab!</div>
            </div>
          </div>
        </div>
      
      <div className='w-1/4 h-screen bg-gray-200 shadow-lg'>hey</div>
    </div>
  )
}

export default MyChat