import React from 'react';
import MyNavbar from './components/MyNavbar'
import Body from "./components/Body";
import Footer from "./components/Footer";
import VedioModal from './components/VedioModal'
import 'bootstrap/dist/css/bootstrap.css';

class App extends  React.Component{
    render(){
        return(
                <React.Fragment>
                    <MyNavbar/>
                    <Body/>
                    {/* <VedioModal/> */}
                    <Footer/>
                </React.Fragment>
            )
    }
}

export default  App;