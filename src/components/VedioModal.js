
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import vedio from '../images/video-thumbnail.png';


class VedioModal extends React.Component {

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
    const {selectedVedio} =this.props;
    if(selectedVedio===null){
      return <div></div> 
    } 
    const  vedioSrc = `https://www.youtube.com/embed/${selectedVedio.id.vedioId}`
    return (
      <div>
        <div onClick={this.toggle}>
                        <img src={vedio}/>
        </div>
        <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} style = {{color:"#0f9d58"}}>{selectedVedio.snippet.title}</ModalHeader>
          <ModalBody>
            <iframe src={vedioSrc}></iframe>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default VedioModal;