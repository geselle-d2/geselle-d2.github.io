import React from 'react';
import ReactDOM from 'react-dom/client';
import "./stylesheet.css"
import App from './App';
import reportWebVitals from './reportWebVitals';
import Info from "./components/info"
import About from "./components/about"
import Interests from "./components/interests"
import Footer from "./components/footer"
import Carousel from "./components/carousel"
import data from "./components/data"

const cards = data.map(data=> {
  return(
    <Carousel
      cover = {data.cover}
      id = {data.id}
      title = {data.title}
      subtitle = {data.subtitle}  
    />
    )
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<body>
    <div className="canvas">
      <Info />
      <About />
      <Interests />
      <section className='cards-list'>
        {cards}
      </section>
      <Footer />
    </div>
</body>
);


//<React.StrictMode>
 //   <App />
 // </React.StrictMode>
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
