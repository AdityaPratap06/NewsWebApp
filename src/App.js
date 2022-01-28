import React, { useEffect } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { AboutPage } from './routes/about';
import "./App.css";
import SignUpPage from './routes/SignUp';
import { useState } from 'react/cjs/react.development';
import Card from "./routes/Card"

const App = props => {

  
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = () => {
      return fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=9069ab82676c4f11b73db9f127fcc8f5")
        .then((response) => response.json())
        .then((data) => setData(data));
    }
    fetchData();
  }, []);
  console.log(data)
    

  return (
    <div className="App" style={{display: "flex", flexDirection:"column", justifyContent:"center", alignItems:"center" }}>
      <BrowserRouter>
      <div id="navBar" style={{width:"100%", display: "flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center", border:"2px solid black"}}>
        <div id="logo" style={{marginLeft:"10px"}}>
          <h2>News Web App</h2>
        </div>

        <div style={{width:"40%", display: "flex", flexDirection:"row", justifyContent:"space-between" }}>

          <Link to="/home" style={{textDecoration: 'none'}}> Home</Link>
          <Link to="#" style={{textDecoration: 'none'}}> Entertainment</Link>
          <Link to="#" style={{textDecoration: 'none'}}> Politics</Link>
          <Link to="#" style={{textDecoration: 'none'}}> Society</Link>
          <Link to="#" style={{textDecoration: 'none'}}> Technology</Link>
          <Link to="#" style={{textDecoration: 'none'}}> Economy</Link>
        </div>
        <div style={{width:"13%", display: "flex", flexDirection:"row", justifyContent:"space-between", marginRight:"10px"}}>
          <Link to="/about" style={{textDecoration: 'none'}}> About Page</Link>
          <Link to="/SignUp" style={{textDecoration: 'none'}}> SignUp Page</Link>
        </div>
      </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="SighUp" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
      <div>
        {data ? data.articles.map(news => (<Card data={news} key={news.url} />))
        :"Loading...."}
      </div>
    </div>
    
  );
}
export const Home = props => {
  return (
    <div>
      
    </div>
  )
}

export default App;