import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Filter from './Filter';
import {CartContext} from './Cart';

function Posts() {
const [posts,setPosts] = useState([])
const [expandedPostId,setExpandedPostId] = useState(null)
const [selectedCategory,setSelectedCategory] = useState('');
const [categories, setCategories] = useState([]);
const {cartItems, addToCart, loggedIn } = useContext(CartContext)
const [searchValue, setSearchValue] = useState('')
const [searchResult, setSearchResult] = useState([]);

    console.log(loggedIn, 'youre logged in')

    const getAllPosts = () => {
        axios.get('https://fakestoreapi.com/products')
        .then(res=>{
            console.log(res)
            setPosts(res.data);
        })
        .catch (err=>{
            console.log('error fetching posts', err)
        })
    }
    // getAllPosts();

    useEffect(()=>{
        getAllPosts();
    },[])


    const handlePostClick = (postId) => {
        if (postId === expandedPostId ){
            setExpandedPostId(null);
        } else {
            setExpandedPostId(postId);
        }
    };

   const handleCatChange = (category) => {
    setSelectedCategory(category);
   };

   const searchBar = (e) => {
    e.preventDefault();
    const result = posts.filter(post => post.title.toLowerCase().includes(searchValue.toLowerCase()));
    setSearchResult(result);
   }


   const filteredPosts = selectedCategory
   ? posts.filter((post)=> post.category === selectedCategory) : posts;

  return (
    <>
   <div className='Posts'>
    <Filter categories={categories} selectedCategory={selectedCategory} onSelectCategory={handleCatChange}/>
    
    <form onSubmit={searchBar}>
    <label>
        <h6>Search Products: </h6>
        <input type='text' placeholder='Product Name' value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/> 
    </label>
    <br/>
    <button type='submit' className='submitBtn' >Search</button>
    </form>

    <div className='grid-container'>
        

            <h4>Click an item to view more details</h4>
            
            {searchResult.length > 0
            ? searchResult.map(post => (
                <div key={post.id} className='post'>
                    <section onClick={()=> handlePostClick(post.id)}>
                    <h2>{post.title}</h2>
                    <br/>
                    <img src={post.image} alt={post.title}/>
                    <h5 className='price-home'>Price: ${post.price.toFixed(2)} USD</h5>
                    
                    </section>
                    {expandedPostId === post.id &&(
                        <div>
                        <h5>Item Description:</h5> 
                        <p>{post.description}</p>
                        <h5>Category:</h5>
                        <p>{post.category}</p>
                        <h5>Rating:</h5>
                        <p>{post.rating.rate}</p>
                        <h5>Inventory remaining:</h5>
                        <p>{post.rating.count}</p>
                        <button onClick={() => addToCart(post)}>Add to cart</button>
                        
                    </div> 
                    )}
                </div>
            ))
        : filteredPosts.map(post => (
            <div key={post.id} className='post'>
                <section onClick={()=> handlePostClick(post.id)}>
                <h2>{post.title}</h2>
                <br/>
                <img src={post.image} alt={post.title}/>
                <h5 className='price-home'>Price: ${post.price.toFixed(2)} USD</h5>
                
                </section>
                {expandedPostId === post.id &&(
                    <div >
                    <h5>Item Description:</h5> 
                    <p>{post.description}</p>
                    <h5>Category:</h5>
                    <p>{post.category}</p>
                    <h5>Rating:</h5>
                    <p>{post.rating.rate}</p>
                    <h5>Inventory remaining:</h5>
                    <p>{post.rating.count}</p>
                    <button onClick={() => addToCart(post)}>Add to cart</button>
                    
                </div> 
                )}
            </div>
        ))}
        </div>  
    </div>
    </>
)
};

export default Posts;