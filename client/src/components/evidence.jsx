import React from 'react'
import Navbar from './navbar';
import Navbar2 from './navbar2'

class Evidence extends React.Component {
    constructor(props) {
      super(props);
      this.state = {file: '',imagePreviewUrl: ''};
    }
  
    _handleSubmit(e) {
      e.preventDefault();
      // TODO: do something with -> this.state.file
      console.log('handle uploading-', this.state.file);
    }
  
    _handleImageChange(e) {
      e.preventDefault();
  
      let reader = new FileReader();
      let file = e.target.files[0];
  
      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      }
  
      reader.readAsDataURL(file)
    }
  
    render() {
      let {imagePreviewUrl} = this.state;
      let $imagePreview = null;
      if (imagePreviewUrl) {
        $imagePreview = (<img height="370px" src={imagePreviewUrl} />);
      } else {
        $imagePreview = (<div className="previewText"><p>Вставьте пожялуста выберите фото для докакзательство)</p></div>);
      }
  
      return (
        <div>
            <Navbar2/>
            <div className="previewComponent">
            <form onSubmit={(e)=>this._handleSubmit(e)}>
                <label for="file-upload" class="custom-file-upload">
                    Открыть
                </label>
                <input id="file-upload" type="file"/>
            </form>
            <div className="imgPreview">
                {$imagePreview}
            </div>
            </div>
            <div id="form_up">
                <form  id="form_up2">
                    <input className="input_3" name="мЕСТО" placeholder="Место" /><br/>
                    <textarea className="input_2" name="password" placeholder="Описание" /><br/>
                    <button className="btn2" type="submit">Отправить</button>
                </form>
            </div>
        </div>
      )
    }
  }

export default Evidence
