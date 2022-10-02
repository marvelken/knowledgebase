import React,{useState, useEffect} from 'react';
import "./Article.css" ;
import { ArticleList } from './Api';

function Article(data) {
const[blog, setBlog]=useState([])

console.log(blog)
useEffect(() => {
    ArticleList().then((res) => {
        setBlog(res);
    })
} , []);

const fetchBlog = (id) => { 
    const filterBlog = data.filter((item) => item.id === id)
    console.log('blogs',filterBlog[0].blog)
    setBlog(filterBlog[0].blog)
  } 


const listItems = blog.map((blog) => <li key={blog.title}><button onClick={(e)=>{fetchBlog(ArticleList.id)}}>{blog.title}</button></li>);
    return (
        <div className='Articlecontainer'>
            <h2>Frequently Asked Questions</h2>
          <br /><br />
           <div>
           {listItems}
           </div>
           
          
        </div>
    );
}

export default Article;