import  React from 'react'
import {Row, Col} from 'reactstrap'
import VedioModal from './VedioModal'


class VedioList extends React.Component{
    render(){
        const {vedios} = this.props;
        return (
            <div className="row container">
                <h4 className="ml-4" style={{color:"#0f9d58"} }> MEDIA RESOURCES-VEDIOS</h4>
                {vedios.map((v)=>{ 
                return(
                    <div className="col-md-6" >
                            <VedioModal selectedVedio={v} />
                    </div>
                    ) 
                    })}
            </div>
        )
} 
}
  
export default  VedioList