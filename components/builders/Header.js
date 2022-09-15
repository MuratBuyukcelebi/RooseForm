import React from 'react'
import ContentEditable from 'react-contenteditable'
import Styles from '../../styles/builders/Header.module.scss'

class Header extends React.Component {
  constructor() {
    super()
    this.contentEditable = React.createRef();
    this.state = {title: "Header", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."};
  };

  handleChange = evt => {
    this.setState({title: evt.target.value, description: evt.target.value });
  };

  render = () => {
    return (
      <div className={Styles.header}>
        <div className={Styles.header__title}>
          <ContentEditable
            innerRef={this.contentEditable}
            html={this.state.title} // innerHTML of the editable div
            disabled={false}       // use true to disable editing
            onChange={this.handleChange} // handle innerHTML change
            tagName='article' // Use a custom HTML tag (uses a div by default)
          />
        </div>
        <div className={Styles.header__description}>
          <ContentEditable
            innerRef={this.contentEditable}
            html={this.state.description} // innerHTML of the editable div
            disabled={false}       // use true to disable editing
            onChange={this.handleChange} // handle innerHTML change
            tagName='article' // Use a custom HTML tag (uses a div by default)
          />
        </div>
      </div>
    )
  };
}

export default Header