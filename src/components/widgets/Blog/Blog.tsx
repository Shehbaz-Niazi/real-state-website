import SectionHeadings from '@/components/shared/SectionHeadings'
import { blogs } from '@/components/types/data'
import React from 'react'
import BlogCard from './BlogCard'

const Blog = () => {
  return (
    <div className='pt-16 pb-16 bg-gray-100'>
        <div className='w-[80%] mx-auto'>
            <SectionHeadings heading='Check Our Blogs'/>
            <div className='gap-6 mt-16 items-center grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
                {blogs.map((item,i)=>{
                    return(
                        <div key={item.id} data-aos="zoom-out" data-aos-delay={`${i * 150}`}>
                            <BlogCard type={item} />
                        </div>
                    )
                })}

            </div>
        </div>
    </div>
  )
}

export default Blog