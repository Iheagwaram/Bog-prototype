import React from 'react'
import Blogpage from '../components/Blogpage'

const Blogs = () => {
    return (
        <main className='bg-gray-100 px-[300px] py-10'>
            <Blogpage title='This is the first blog' author='Ehis'/>
            <Blogpage title='this is the second blog'author='Damola'/>
            <Blogpage title='this is the third blog'author='Ayo'/>
            <Blogpage title='this is the fourth blog'author='Alex'/>
            <Blogpage title='this is the fifth blog'author='Sydney'/>
        </main>
    )
}

export default Blogs
