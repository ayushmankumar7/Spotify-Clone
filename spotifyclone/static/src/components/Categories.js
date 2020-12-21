import React from 'react'; 
import Playlist from '../components/Playlist';


const Categories=()=>{
    const dataCategories = [
        {
            id: 1,
            name: 'Category1',
            tagline: 'Description 1',
        },
        {
            id: 2,
            name: 'Category2',
            tagline: 'Description 2',
        },
        {
            id: 3,
            name: 'Category3',
            tagline: 'Description 3',
        },
        {
            id: 4,
            name: 'Category4',
            tagline: 'Description 4',
        },
        {
            id: 5,
            name: 'Category5',
            tagline: 'Description 5',
        },
        {
            id: 6,
            name: 'Category6',
            tagline: 'Description 6',
        }
    ]
    

    return (
        <div>{dataCategories.map((category,id) =>(
        <div className="mainContext">
     <div className="cardWrap" key={id}>
        <h1>{category.name}</h1>
        <h2>{category.tagline}</h2>
        <Playlist category_id = {category.id}/>
    </div>
    </div>

        ))}
        </div>
        
    )
}
export default Categories