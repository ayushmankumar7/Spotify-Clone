import React from 'react';
import PlayIcon from '../svgs/play.svg'; 
import {Link} from 'react-router-dom';


const Playlist =(props)=>{
    const dataPlaylists = [
        {
            id: 101,
            category_id: 1,
            name: 'Home Play list1',
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTWbn_MtNhLcd2bfmQRlTf1BqMKou-d0NHJA&usqp=CAU',
        },
        {
            id: 102,
            category_id: 1,
            name: 'Home Play list2',
            img:"https://static.toiimg.com/photo/72975551.cms",
        },
        {
            id: 103,
            category_id: 1,
            name: 'Home Play list3',
            img: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9",
        },
        {
            id: 104,
            category_id: 2,
            name: 'Home Play list4',
            img: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&w=1000&q=80"
        },
        {
            id: 105,
            category_id: 2,
            name: 'Home Play list5',
            img: "https://www.filmibeat.com/ph-big/2019/07/ismart-shankar_156195627930.jpg"
        },
        {
            id: 106,
            category_id: 3,
            name: 'Home Play list6',
            img: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?ixlib=rb-1.2.1&w=1000&q=80"
        },
        {
            id: 107,
            category_id: 4,
            name: 'Home Play list7',
            img: "https://i.pinimg.com/originals/41/a0/59/41a0593ec5c6562e838f349aba5ae9ef.jpg"
        },
        {
            id: 108,
            category_id: 4,
            name: 'Home Play list8',
            img: "https://www.w3schools.com/w3css/img_lights.jpg"
        },
        {
            id: 109,
            category_id: 5,
            name: 'Home Play list9',
            img: "https://www.w3schools.com/howto/img_snow.jpg"
        },
        {
            id: 110,
            category_id: 6,
            name: 'Home Play list10',
            img: "https://d.newsweek.com/en/full/772816/1-5-jupiter-nasa.jpg"
        }
    ]

    const matchedPlaylists = dataPlaylists.filter(playlist => playlist.category_id === props.category_id)



    return(
        <div className="cardWrapsInner">
        {matchedPlaylists.map((playlist,id )=>(
            <Link to={'/playlist/' + playlist.id}>
            <div className="card" key={id}>
            <div className="cardImage">
            <img src={playlist.img} alt=""/>
            </div>
            <div className="cardContent">
                <h3>{playlist.name}</h3>
                <h4>Description</h4>
            
            <span className="playIcon">
                <PlayIcon/>
            </span>
            </div>
            </div>
            </Link>
        ))}
       
        </div>
    )
}
export default Playlist 