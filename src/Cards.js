import React from 'react';
function Cards(props){
    console.log(props);
    return(
    <>
    <body>
    <div className='cards'>
    <div className='card'>
        <img src={props.imgsrc} alt='picture' className='cardimg'/>
        <div className='card_info'>
            <span className='card_category'>{props.category}</span>
            <h2 className='card_title'>{props.title}</h2>
            <a href={props.link} target="_blank">
                <button>Watch Now</button>
            </a>
        </div>

        </div>
    </div>
    </body>
    </>
    )
}
export default Cards;