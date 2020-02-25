import React,{useEffect,useState} from 'react';
import './App.css'

function App() {
    const [page,setPage]=useState({
        width:window.innerWidth,
        height:window.innerHeight
    })
    const resizeWindow=()=>{

        console.log(page)
        setPage({
            width:window.innerWidth,
            height:window.innerHeight
        })
        
    }
    useEffect(()=>{
        window.addEventListener('resize',resizeWindow)
        return ()=>window.removeEventListener('resize',resizeWindow)
    },[])
    const containerStyle={
        width:page.width,
        height:page.height*3,
        display:'grid',
        gridTemplateRow:`${page.width>800?`repeate(${page.height,3})`:`repeate(${page.height,2})`}`,
        backgroundColor:`${page.width<600?'red':'blue'}`
    }
    const containerChilds={
        backgroundColor:'red',
    }
  return (
    <div style={containerStyle} className="container">
     <div style={containerChilds} className='container-childs'>one</div>
     <div style={containerChilds} className='container-childs'>two</div>
     <div style={containerChilds} className='container-childs'>three</div>
    </div>
  );
}

export default App;
