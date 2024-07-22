import { useEffect, useState } from 'react'
import './App.css'
import Header from './Header'
import Card from './Card'
import axios from 'axios'

const API_URL= 'http://www.omdbapi.com/?apikey=563aa61a';

function App() {

  const [search,setSearch]=useState('')
  const [movies,setMovies]=useState([])
  const [Info, setInfo]=useState(false)
  const [Title,setTitle]=useState('')

   useEffect(()=>{
    if(search === '') return
    axios.get(`${API_URL}&s=${search}`)
    .then(res => setMovies(res.data.Search))
    .catch(err => console.log(err))
   })
  
   useEffect(()=>{
    if(Title === '') return
    axios.get(`${API_URL}&t=${Title}`)
    .then( res => setInfo(res.data) )
    .catch(err => console.log(err))
   },[Title])
   
   function handelclose(){
    setInfo(false)
    setTitle('')
   }

   return (
    <>
      {Info &&
       <div className='more-info'>
        <div className='details'> 
         <img src={Info.Poster} alt="poster" />
           <h3> {Info.Title} </h3>
        </div>
        <button type='button' onClick={()=>handelclose()} >Close</button>
       </div> 
      }
     <Header search={search}  setSearch={setSearch}/>
     <div className='card-list'>
      {
       movies == undefined?
       <h1> Movie not found </h1>:
       movies.length === 0 ?
       <h1> Search for a movie </h1> :
       movies.map( (movie, index )=>(
        <Card Title={movie.Title} Year={movie.Year} Type={movie.Type} Poster={movie.Poster} key={index} onClick={()=> setTitle(movie.Title)} /> )) 
     }

     </div>
    </>
  )
}

export default App
