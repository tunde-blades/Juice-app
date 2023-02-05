import React, {useEffect, useState} from 'react'
import Header from '../../layouts/header/Header'
import image1 from '../../assets/images/landingimage.png'
import { Search} from '@mui/icons-material';


export default function LandingPage() {

const [books, setBooks] = useState([])

useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/photos')
  .then(response => response.json())
  .then(json => {
    const data = json
    setBooks(data)
  })

}, [])





  return (
    <div>
      <Header/>
      <section className='flex justify-between py-3 max-h-screen'>
          <div className='bg-gradient-to-r from-blue-200 to-gray-300 w-full content'>
              <div className='h-full flex flex-col justify-center items-left text-left'>
                <h1 className='text-3xl font-bold mx-auto'>There is no <span className='text-blue-800'> Friend </span><br /> as loyal as a <span className='text-blue-800'> Book</span></h1>
                <p className='text-sm max-w-sm mx-auto px-16 py-4 leading-4'>
                  Welcome to the best library where you can get to read or listen to your favorite book or audiobook for free.
                </p>
                <form action="">
                  <label className='bg-white px-3 py-1 rounded shadow-md flex mx-auto justify-between max-w-sm' htmlFor="search">
                    <input type="text" placeholder='Search for your favorite book' className='bg-transparent outline-none text-sm'/>
                    <div>
                      <Search className='text-gray-400'/>
                      <button className='text-white bg-blue-700 text-sm px-1 ml-1'>Search</button>
                    </div>
                  </label>
                </form>
              </div>

          </div>
          <picture className='min-w-lg bgimage'>
            <img src={image1} alt="" />
          </picture>
      </section>
      <h1 className='font-bold px-3'>Top Books</h1>
      <section className=' overflow-scroll topbooks'>
            <div className='flex flex-row min-w-max p-2 gap-2'>
          {books.map(book =>(
              <div className='flex flex-col w-40 overflow-hidden items-center justify-between bg-gray-100 p-2 rounded shadow-md' key={book.id}>
                <picture><img className='max-w-14 flex-1' src={book.url} alt="" /></picture>
                <h3 className='font-thin'>{book.title} </h3>
                <p className='text-blue-300'>{book.dscription}</p>
                <div className='flex flex-row gap-2 items-center'>
                  <button className='accessbtn'>Get access</button>
                  <span>love</span>
                </div>
              </div>
          )).slice(0, 8)}
        </div>
      </section>
      <h1 className='font-bold px-3'>Projects and Reasearch</h1>
      <section className=' overflow-scroll projects'>
            <div className='flex flex-row min-w-max p-2 gap-2'>
          {books.map(book =>(
              <div className='flex flex-col w-40 overflow-hidden items-center justify-between bg-gray-100 p-2 rounded shadow-md' key={book.id}>
                <picture><img className='max-w-14 flex-1' src={book.url} alt="" /></picture>
                <h3 className='font-thin'>{book.title} </h3>
                <p className='text-blue-300'>{book.dscription}</p>
                <div className='flex flex-row gap-2 items-center'>
                  <button className='accessbtn'>Get access</button>
                  <span>love</span>
                </div>
              </div>
          )).slice(0, 8)}
        </div>
      </section>
    </div>
  )
}
