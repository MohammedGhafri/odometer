import React from 'react';
// import logo from './logo.svg';
import './css/App.css';
import Odemeter from './template/odometer';
import Header from'./template/header';
import Footer from './template/footer';





function Main(props){
  return(
    <>
<Header />
<main>
<Odemeter />
</main>
<Footer company="Ghafri" name="Mohammed"/>
    </>
  );
}

function App(){
  return(
    <>
    <Main />
    
    </>
  )
}


export default App;