import React from 'react';

class CatchatForm extends React.Component {
  componentDidMount() {
    this.catchats = this.props.model;

  }

  createCatchat(event) {
    event.preventDefault();
    let newMiauw = this.refs.newMiauw.value;
    this.catchats.addResource({miauw: newMiauw});
    this.refs.newMiauw.value = "";

  }

  render() {
    return (


        <form onSubmit={this.createCatchat.bind(this)} className="">
          <input className="form-control col-md-5 inny" type="text" ref="newMiauw" placeholder="➕ your catchat here"></input>
          <button className="btn btn-default col-md-1 butty" type="submit">😸</button>
        </form>

    );
  }
}

export default CatchatForm;
