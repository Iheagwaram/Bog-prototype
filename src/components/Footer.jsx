import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className='bg-gray-300 flex items-center justify-around text-gray-900 p-15'>
        <div>
            <h3 className='font-bold text-md mb-3'>Learn</h3>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/blogs'}>Blogs</Link></li>
                <li><Link to={'/creae'}>Add blog</Link></li>
                <li>Playground</li>
            </ul>
        </div>
        <div>
            <h3 className='font-bold text-md mb-3'>Tailwind UI</h3>
            <ul>
                <li>UI Blocks</li>
                <li>Templates</li>
                <li>UI kit</li>
            </ul>
        </div>
        <div>
            <h3 className='font-bold text-md mb-3'>Resources</h3>
            <ul>
                <li>Refactoring UI</li>
                <li>Headless UI</li>
                <li>Heroicons</li>
                <li>Hero Patterns</li>
            </ul>
        </div>
        <div>
            <h3 className='font-bold text-md mb-3'>Community</h3>
            <ul>
                <li>GitHub</li>
                <li>Discord</li>
                <li>X</li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer
