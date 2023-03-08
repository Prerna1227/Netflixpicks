// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>

// );

// reportWebVitals();
import React from 'react';
import ReactDOM from 'react-dom';
import Cards from './Cards';
import Sdata from './Sdatarr';
import "./index.css"

function ncard(val){
    console.log(val);
    return(
        <Cards 
        key={val.id}
        imgsrc={val.imgsrc}
        category={val.category}
        title={val.title}
        link={val.link}
    />
    )

}
ReactDOM.render(
    <>
    <h1 className='heading' >List of Top Netflix Shows </h1>
   {Sdata.map(ncard)}
   </>,
    document.getElementById('root')

)
