import  React from 'react'
import {getVedios, getImages} from "./YoutubeAPi";
import VedioList from './VedioList';
import PhotoList from './PhotoList'
import Main from './Main'



class  Body extends React.Component {
    state = {
        vedios:[],
        photos:[]
    }

    componentDidMount() {
        getVedios()
            .then(res=>{
                this.setState({vedios:res.data.items})
            })
            .catch(err=>{
                console.log(err)
            })
        getImages()
            .then((res)=>{
                console.log(res)
                this.setState({photos:res.data.slice(0,4)})
            })
            .catch((err)=>{
                console.log(err)
            })
   }

   vedioSelect = (vedio) => {
       this.setState({selectedVedio:vedio})
   }

    render() {
        return(
            <div className="container">
                <div className="mt-5">
                <Main/>
                </div>
                <div className="row container mt-5" style={{borderStyle:"ridge"}}>
                    <div className="col-md-5  ">
                        <PhotoList 
                            photos={this.state.photos}
                        />
                    </div>
                    <div className="offset-2 col-md-5">
                            <VedioList 
                                vedios={this.state.vedios}
                                vedioSelect={this.vedioSelect}
                             />
                    </div>
                </div>
                 
            </div>
        )
      
   }
}
export default Body