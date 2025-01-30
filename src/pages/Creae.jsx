import React, { useState } from 'react';

const Create = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log({ title, content, image, author });

        // Clear the form fields
        setTitle('');
        setContent('');
        setImage(null);
        setAuthor('');
      };
    
    return (
        <main className='bg-gray-100 flex items-center min-h-screen flex-col py-10'>
            <div className='bg-white p-6 rounded-lg shadow-md w-full max-w-lg'>
                <h2 className='text-center font-bold text-2xl text-slate-800 mb-4'>Add a Blog</h2>
                <form onSubmit={handleSubmit} className='space-y-4'>
                    <div className='flex flex-col'>
                        <label className='font-medium text-gray-700'>Title</label>
                        <input
                            value={title}
                            type='text'
                            placeholder='Enter blog title'
                            onChange={(e) => setTitle(e.target.value)}
                            className='border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none'
                        />
                    </div>
                    
                    <div className='flex flex-col'>
                        <label className='font-medium text-gray-700'>Content</label>
                        <textarea
                            value={content}
                            placeholder='Write your blog content here...'
                            onChange={(e) => setContent(e.target.value)}
                            className='border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none h-32 resize-none'
                        />
                    </div>

                    <div className='flex flex-col'>
                        <label className='font-medium text-gray-700'>Image</label>
                        <input
                            type='file'
                            onChange={(e) => setImage(e.target.files[0])}
                            className='border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none'
                        />
                    </div>

                    <div className='flex flex-col'>
                        <label className='font-medium text-gray-700'>Author</label>
                        <select
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            className='border border-gray-300 bg-white rounded p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none'
                        >
                            <option value=''>Select an Author</option>
                            <option value='Gbenga'>Gbenga</option>
                            <option value='Alex'>Alex</option>
                            <option value='Ehis'>Ehis</option>
                        </select>
                    </div>

                    <button 
                        type='submit' 
                        className='w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600 transition duration-200'
                    >
                        Add Blog
                    </button>
                </form>
            </div>
        </main>
    );
};

export default Create;
