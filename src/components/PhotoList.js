import React from 'react'
import PhotoModal from './PhotoModal'


class PhotoList extends React.Component{
    render(){
        console.log(this.props)
        return(
            <div className="row container">
                <h4 className="ml-4" style={{color:"#0f9d58"}}> MEDIA RESOURCES-PHOTOS</h4>
                {this.props.photos.map((photo)=>{ 
                return(
                    <div className="col-md-6" >
                            <PhotoModal photo={photo} />
                    </div>
                    ) 
                    })}
        </div>
        )
    }
}

export default PhotoList