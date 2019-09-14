
import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import picture from '../images/photo-thumbnail.png';



class PhotoModal extends React.Component {

  state = {
    modal:false
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    // console.log(this.props)
    const {photo} =this.props;
    if(photo===null){
      return <div></div> 
    } 
    return (
      <div>
        <div onClick={this.toggle}>
                <img src={picture}/>
        </div>
            <Modal 
                isOpen={this.state.modal} 
                fade={false} 
                toggle={this.toggle} 
                className={this.props.className}>
                <ModalHeader toggle={this.toggle} style = {{color:"#0f9d58"}}>{photo.title}</ModalHeader>
                <ModalBody>
                    <img src={photo.url}/>
                </ModalBody>
            </Modal>
      </div>
    );
  }
}

export default PhotoModal;