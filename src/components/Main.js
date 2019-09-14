import React from 'react';
import custmr1 from '../images/custmr_logo01.png';
import custmr2 from '../images/custmr_logo02.png';
import custmr3 from '../images/custmr_logo03.png';
import custmr4 from '../images/custmr_logo04.png';
import custmr5 from '../images/custmr_logo05.png';
import custmr6 from '../images/custmr_logo06.png';
import  banner from '../images/banner_slider_01.jpg'
import { Jumbotron } from 'reactstrap';
import Axios from 'axios';

let customers = [custmr1, custmr2, custmr3, custmr4, custmr5, custmr6]

class Main extends React.Component{
    state={
        news:[]
    }
    componentDidMount(){
        Axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
            this.setState({news:res.data.slice(0,2)})
            console.log(res)
        })
    }


    render(){
        return (
            <div className='container'>
                <div className="row mb-5">
                    <Jumbotron>
                        <img src={banner}/>
                    </Jumbotron>
                </div>
        
                <div className="row">
                    <div className="col-md-5 ">
                        <div >
                                <h4 style={{color:"#0f9d58"}}>OUR CUSTOMERS </h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    and more recently with desktop publishing software like Aldus PageMaker
                                    including versions of Lorem Ipsum.</p>
                        </div>
                        <div className="row">
                            {customers.map((img, i)=>{
                                return(
                                        <div className="col-md-4" key={i}>
                                            <div className="mr-auto">
                                                <img src={img} />
                                            </div>
                                        </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="col-md-5 offset-2">
                        <div>
                        <h4 style={{color:"#0f9d58"}}>IN THE NEWS </h4>
                            {this.state.news.map((n=>{
                                return(
                                    <div>
                                        <p style = {{color:"#0f9d58"}}>{n.title}</p>
                                        <div>
                                            <p>{n.body}</p>
                                        </div>
                                    </div>
                                )
                            }))}
                        </div>
                    </div>
                    </div>
            </div>
        );
    }
}


export default Main;