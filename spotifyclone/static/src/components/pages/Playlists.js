import React from 'react';
import  {useParams}  from 'react-router';
import PlayIcon from '../pages/svgs/play.svg'; 
import HeartIcon from '../pages/svgs/heart.svg';
import NoteIcon from '../pages/svgs/note.svg';

const Play = () =>{
    let {id} = useParams();
    return(
        <div className="playlistPage">
            <div className="playlistPageInfo">
                
                    <div className="playlistPageImage">
                    <img src="https://d.newsweek.com/en/full/772816/1-5-jupiter-nasa.jpg" alt=""/>
                    </div>
                    <div className="playlistPageContent">
                    <h5>PLAYLIST</h5>
                    <h1>Title {id}</h1>
                    <p>Playlist description</p>
                    <h5>Spotify</h5>
                    </div>
            </div>
            <br></br>
            <div className="icons">
                <div className="playbutton">
                    <PlayIcon/>
                </div>
                <div className="hearticon">
                    <HeartIcon/>
                </div>
                <div className="iconsDots"></div>
            </div>
            <div className="playlistPageSongs">
                <ul className="songlist">
                    <li>
                        <div className="songIcon">
                            <NoteIcon />
                        </div>
                        <div className="songDetails">
                            <h3>Held Down</h3>
                            <span>Martina Hingis</span>
                        </div>
                        <div className="songTime">
                            <span>4:05</span>
                        </div>
                    </li>
                    <li>
                        <div className="songIcon">
                            <NoteIcon/>
                        </div>
                        <div className="songDetails">
                            <h3>Held Down</h3>
                            <span>Martina Hingis</span>
                        </div>
                        <div className="songTime">
                            <span>4:05</span>
                        </div>
                    </li>
                    <li>
                        <div className="songIcon"><NoteIcon/></div>
                        <div className="songDetails">
                            <h3>Held Down</h3>
                            <span>Martina Hingis</span>
                        </div>
                        <div className="songTime">
                            <span>4:05</span>
                        </div>
                    </li>
                    <li>
                        <div className="songIcon"><NoteIcon/></div>
                        <div className="songDetails">
                            <h3>Held Down</h3>
                            <span>Martina Hingis</span>
                        </div>
                        <div className="songTime">
                            <span>4:05</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )  
}
export default Play