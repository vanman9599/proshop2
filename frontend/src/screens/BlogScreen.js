import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {Row, Col, ListGroup,  Card} from 'react-bootstrap'
import { listBlogs } from '../actions/blogActions';




function BlogScreen() {

  const dispatch = useDispatch()
  const blogList = useSelector(state => state.listBlogs)
  const {blogs} = blogList




  useEffect(()=>{
    dispatch(listBlogs())
    
   
    
  },[dispatch])

  return (
   
    <div>
      <h1 className="text-center">Blog</h1>
      
      <Row>
      {blogs.map((blog)=>{
        const date = new Date(blog.createdAt)
        const day = date.getDate()
        const month = date.getMonth()
        const year = date.getFullYear()
        
        
       
        const theDate = month  + "/" + day + "/" + year 
          return(
         <div>
           <Row>
            <Col md={12}>
                    <Card>
                    <ListGroup variant="flush">
                    <ListGroup.Item>
             <h1 className="highlighted-text pt-5" >{blog.title}</h1>
             <span className="about higlighted-text">{theDate}</span>
          <p className="about" style={{margin: '2rem'}} dangerouslySetInnerHTML={{__html: blog.body}}></p>
          </ListGroup.Item>
          </ListGroup>
          </Card></Col>
          </Row><br />
         </div>
         
          
          )
      })}
    </Row>
     
      
    </div>
  )
}

export default BlogScreen
