import React from 'react'
import {Col} from 'reactstrap'
import '../../styles/blog-list.css'
import { Link } from 'react-router-dom'
import blogData from '../../assets/data/blogData'
const BlogList = () => {
  return(
   <>
    {blogData.map(item =>(
       <BlogItem item ={item} key={item.id}/>
     ))}
  </>
  );
    };

const BlogItem = ({item}) =>{
    const {imgUrl, title, author, date, description, time} = item
      return <Col lg='4' md='4' sm='6'>
        <div className='blog_item'>
            <img src={imgUrl} alt='' className='w-100'/>
            <div className='blog_info'>
                <Link to={'/blogs/${title}'}>{title}</Link>
                <p className="section_descrition">
                    {
                        description.length >100 ? description.substr(0,100) : description
                    }
                </p>

                <Link to={'/blogs/${title}'}>Read More</Link>
                <div className="blog_time pt-3 mt-3 d-flex align-items-center
                 justify-content-between">
                    <span className="blog_author">
                      <i class="ri-user-line"></i>{author}
                    </span>
                <span className='d-flex align-items-center gap-1 section_descrition'>
                <i class="ri-calendar-line"></i>{date}
                </span>

                <span className='d-flex align-items-center gap-1 section_descrition'>
                <i class="ri-time-line"></i>{time}
                </span>

                 </div>

            </div>
        </div>
      </Col>
}

export default BlogList
