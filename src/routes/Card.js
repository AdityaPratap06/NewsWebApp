import React from "react";
import './Card.css';


function Card({data}) {

    return(
        <div>
            <div id="content">
                <a href={data.url} style={{textDecoration:"none", color:"black"}}>
                <div id="mainContent">
                    <div style={{width:"100%", height:"fitContent"}}>
                        <span><b>Author: </b>{data.author}</span><br/>
                        <span><b>Published At: </b>{data.publishedAt}</span>
                    </div>
                    <h1>{data.title}</h1>
                    <p>{data.description}</p>
                    {/* <span>{data.source.name}</span> */}
                    {/* <span>{data.urlToImage}</span> */}
                    <img src={data.urlToImage} style={{width:"50%", height:"50%"}}/>
                    {/* <span>{data.url}</span> */}
                    {/* <span>{data.content}</span> */}
                </div>
                </a>
            </div>

            {/* Sidebar */}

            {/* <div id="sidebar">
                
                <div id="popup">
                    <button onclick="Time()">Display Time</button><br/>
                    <input type="text" id="pop"/><br/>
                    
                </div>
                <div id="ads1">
                    <img src="images/ads1.jpeg"/>
                </div>
                <div id="query">
                    <form>
                        <label for="name">UserName : </label><br/>
                        <input type="text" name="name" placeholder="Name"/><br/>
                        <label for="email">Email-id : </label><br/>
                        <input type="email" name="email" placeholder="Email"/><br/>
                        <label for="query">Query : </label><br/>
                        <input type="text" name="query" placeholder="Write your query...."/><br/>
                        <input type="button" value="Submit"/>
                    </form>
                </div>
                <div id="ads2">
                    <img src="images/ads2.jpeg"/>
                </div>
                <div id="ads1">
                    <img src="images/ads1.jpeg"/>
                </div>
                <div id="query">
                    <form>
                        <label for="name">UserName : </label><br/>
                        <input type="text" name="name" placeholder="Name"/><br/>
                        <label for="email">Email-id : </label><br/>
                        <input type="email" name="email" placeholder="Email"/><br/>
                        <label for="query">Query : </label><br/>
                        <input type="text" name="query" placeholder="Write your query...."/><br/>
                        <input type="button" value="Submit"/>
                    </form>
                </div>
                <div id="ads2">
                    <img src="images/ads2.jpeg"/>
                </div>
            </div> */}
        </div> 
    );

}

export default Card;