import React from 'react'

const Creae = () => {
    return (
        <main className='bg-gray-100 flex items-center min-h-screen flex-col'>
            <h2 className='text-center  font-bold text-2xl underline text-slate-800'>Add a blog</h2>
            <form action="">
                <div>
                    <label htmlFor="">Title</label>
                    <input type="text" placeholder='Title' />
                </div>
                <div>
                    <label htmlFor="">Content</label>
                    <textarea name="" id=""></textarea>
                </div>

                <div>
                    <label htmlFor="">Image</label>
                    <input type="file" />
                </div>

                <div>
                    <label htmlFor="">Author:</label>
                    <select className='border ms-2 bg-gray-100 p-2 shadow-xs' name="" id="">
                        <option value="">Gbenga</option>
                        <option value="">Alex</option>
                        <option value="">Ehis</option>
                    </select>
                </div>
                <button className='w-full text-center rounded bg-blue-500 hover:bg-blue-300 mt-4 text-white' type='Submit'>Add Blog</button>
            </form>
        </main>
    )
}

export default Creae
