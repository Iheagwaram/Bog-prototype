import React from 'react'

const Blogpage = ({title,author}) => {
    return (
        <>

            <div className='border p-4 mb-4 rounded'>
                <h2 className='font-bold text-gray-600 text-xl '>{title}</h2>
                <p className='text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consequuntur at, rem similique doloribus dolore itaque quod enim deserunt. Officia a corporis quisquam quod ratione blanditiis nihil id accusamus doloremque! Autem, laudantium eaque ab quod perspiciatis veritatis tenetur aliquam ad quam exercitationem quaerat, vitae voluptatem? Assumenda modi soluta aspernatur accusamus.</p>
                <p>Author: <b className='font-bold text-gray-600 '>{author}</b></p>
            </div>

        </>
    )
}

export default Blogpage
