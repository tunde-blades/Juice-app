// import React, {useEffect, useState} from 'react'
import Header from '../../layouts/header/Header'
import { Search} from '@mui/icons-material';
import juice from '../../assets/images/juice (1).jpg'
import juicevid from '../../assets/images/juicevid.mp4'


export default function LandingPage() {



  return (
    <div className=''>
      <Header/>
      <section className='section1 flex justify-between py-3 max-h-screen'>
          <div className=''>
        

          </div>
          <picture className='min-w-lg bgimage'>
            
          </picture>
      </section>
      <h1 className='font-bold px-3'>Recently Ordered</h1>
      <section className=' overflow-hidden topbooks'>
            <div className='flex flex-row flex-wrap min-w-max p-2 gap-2'>
              <div className='flex flex-row w-90 items-center  justify-between bg-orange-700 p-2 rounded shadow-md' >
                <picture ><img className='w-20' src={juice} alt="" /></picture>
                <div className='p-2 w-50'>
                  <h3 className='font-normal text-white'>Fruit Juice </h3>
                  <small className='text-white'>Orange blended with apple</small>
                  <div className='flex flex-row gap-2 items-center'>
                    <button className='accessbtn '>Order Now</button>
                </div>
                </div>
              </div>
        </div>
      </section>
      <h1 className='font-bold px-3'>Newly Added</h1>
      <section className='flex overflow-scroll projects'>
            <div className='flex flex-row min-w-max p-2 gap-2'>
              <div className='flex flex-col w-40 overflow-hidden items-start justify-between bg-gray-100 p-2 rounded shadow-md'>
                <picture><img className='max-w-14 flex-1' src={juice} alt="" /></picture>
                <h4 className='font-normal'>Pine juice</h4>
                <small className='text-gray-400'>Pine grinded with pepper</small>
                <div className='flex flex-row gap-2 items-center'>
                  <button className='accessbtn'>Order Now</button>
                </div>
              </div>
        </div>
        <div className='flex flex-row min-w-max p-2 gap-2'>
              <div className='flex flex-col w-40 overflow-hidden items-start justify-between bg-gray-100 p-2 rounded shadow-md'>
                <picture><img className='max-w-14 flex-1' src={juice} alt="" /></picture>
                <h4 className='font-normal'>Pine juice</h4>
                <small className='text-gray-400'>Pine grinded with pepper</small>
                <div className='flex flex-row gap-2 items-center'>
                  <button className='accessbtn'>Order Now</button>
                </div>
              </div>
        </div>
        <div className='flex flex-row min-w-max p-2 gap-2'>
              <div className='flex flex-col w-40 overflow-hidden items-start justify-between bg-gray-100 p-2 rounded shadow-md'>
                <picture><img className='max-w-14 flex-1' src={juice} alt="" /></picture>
                <h4 className='font-normal'>Pine juice</h4>
                <small className='text-gray-400'>Pine grinded with pepper</small>
                <div className='flex flex-row gap-2 items-center'>
                  <button className='accessbtn'>Order Now</button>
                </div>
              </div>
        </div>
        <div className='flex flex-row min-w-max p-2 gap-2'>
              <div className='flex flex-col w-40 overflow-hidden items-start justify-between bg-gray-100 p-2 rounded shadow-md'>
                <picture><img className='max-w-14 flex-1' src={juice} alt="" /></picture>
                <h4 className='font-normal'>Pine juice</h4>
                <small className='text-gray-400'>Pine grinded with pepper</small>
                <div className='flex flex-row gap-2 items-center'>
                  <button className='accessbtn'>Order Now</button>
                </div>
              </div>
        </div>
        <div className='flex flex-row min-w-max p-2 gap-2'>
              <div className='flex flex-col w-40 overflow-hidden items-start justify-between bg-gray-100 p-2 rounded shadow-md'>
                <picture><img className='max-w-14 flex-1' src={juice} alt="" /></picture>
                <h4 className='font-normal'>Pine juice</h4>
                <small className='text-gray-400'>Pine grinded with pepper</small>
                <div className='flex flex-row gap-2 items-center'>
                  <button className='accessbtn'>Order Now</button>
                </div>
              </div>
        </div>
        <div className='flex flex-row min-w-max p-2 gap-2'>
              <div className='flex flex-col w-40 overflow-hidden items-start justify-between bg-gray-100 p-2 rounded shadow-md'>
                <picture><img className='max-w-14 flex-1' src={juice} alt="" /></picture>
                <h4 className='font-normal'>Pine juice</h4>
                <small className='text-gray-400'>Pine grinded with pepper</small>
                <div className='flex flex-row gap-2 items-center'>
                  <button className='accessbtn'>Order Now</button>
                </div>
              </div>
        </div>
        <div className='flex flex-row min-w-max p-2 gap-2'>
              <div className='flex flex-col w-40 overflow-hidden items-start justify-between bg-gray-100 p-2 rounded shadow-md'>
                <picture><img className='max-w-14 flex-1' src={juice} alt="" /></picture>
                <h4 className='font-normal'>Pine juice</h4>
                <small className='text-gray-400'>Pine grinded with pepper</small>
                <div className='flex flex-row gap-2 items-center'>
                  <button className='accessbtn'>Order Now</button>
                </div>
              </div>
        </div>
      </section>
      <video className='w-50 m-b-10' autoPlay loop muted src={juicevid}></video>
      <p className='p-2'>You might also like</p>
      <section className='flex overflow-scroll topbooks'>
            <div className='flex flex-row flex-wrap min-w-max p-2 gap-2'>
              <div className='flex flex-row w-90 items-center  justify-between bg-orange-700 p-2 rounded shadow-md' >
                <picture ><img className='w-20' src={juice} alt="" /></picture>
                <div className='p-2 w-50'>
                  <h3 className='font-normal text-white'>Fruit Juice </h3>
                  <small className='text-gray-600'>Orange blended with apple</small>
                  <div className='flex flex-row gap-2 items-center'>
                    <button className='accessbtn '>Order Now</button>
                </div>
                </div>
              </div>
            </div>
            <div className='flex flex-row flex-wrap min-w-max p-2 gap-2'>
              <div className='flex flex-row w-90 items-center  justify-between bg-orange-700 p-2 rounded shadow-md' >
                <picture ><img className='w-20' src={juice} alt="" /></picture>
                <div className='p-2 w-50'>
                  <h3 className='font-normal text-white'>Fruit Juice </h3>
                  <small className='text-gray-600'>Orange blended with apple</small>
                  <div className='flex flex-row gap-2 items-center'>
                    <button className='accessbtn '>Order Now</button>
                </div>
                </div>
              </div>
            </div>
            <div className='flex flex-row flex-wrap min-w-max p-2 gap-2'>
              <div className='flex flex-row w-90 items-center  justify-between bg-orange-700 p-2 rounded shadow-md' >
                <picture ><img className='w-20' src={juice} alt="" /></picture>
                <div className='p-2 w-50'>
                  <h3 className='font-normal text-white'>Fruit Juice </h3>
                  <small className='text-gray-600'>Orange blended with apple</small>
                  <div className='flex flex-row gap-2 items-center'>
                    <button className='accessbtn '>Order Now</button>
                </div>
                </div>
              </div>
            </div>
            <div className='flex flex-row flex-wrap min-w-max p-2 gap-2'>
              <div className='flex flex-row w-90 items-center  justify-between bg-orange-700 p-2 rounded shadow-md' >
                <picture ><img className='w-20' src={juice} alt="" /></picture>
                <div className='p-2 w-50'>
                  <h3 className='font-normal text-white'>Fruit Juice </h3>
                  <small className='text-gray-600'>Orange blended with apple</small>
                  <div className='flex flex-row gap-2 items-center'>
                    <button className='accessbtn '>Order Now</button>
                </div>
                </div>
              </div>
            </div>
            <div className='flex flex-row flex-wrap min-w-max p-2 gap-2'>
              <div className='flex flex-row w-90 items-center  justify-between bg-orange-700 p-2 rounded shadow-md' >
                <picture ><img className='w-20' src={juice} alt="" /></picture>
                <div className='p-2 w-50'>
                  <h3 className='font-normal text-white'>Fruit Juice </h3>
                  <small className='text-gray-600'>Orange blended with apple</small>
                  <div className='flex flex-row gap-2 items-center'>
                    <button className='accessbtn '>Order Now</button>
                </div>
                </div>
              </div>
            </div>
      </section>
    </div>
  )
}
