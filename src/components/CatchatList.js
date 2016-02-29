import React from 'react';

class CatchatList extends React.Component {
  constructor() {
    super();

    this.state = {
      catchats: []
    };
  }

  componentWillMount() {
    this.catchats = this.props.model;
    //subscribe to it and on change it will put it inside the onchage array in BaseModel
    // wich will the be called back... somethin like that... just use subscribe to call back the changes its the way it works
    this.catchats.subscribe(this.updateCatchatList.bind(this));
  }

  updateCatchatList() {
    this.setState({catchats: this.catchats.resources});
  }

  render() {
    console.log(this.state.catchats);
    return (
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">

            {this.state.catchats.map((catchat) => {
              return (
                <div className="miauw" key={catchat._id}>{catchat.miauw}</div>
              );
            })}

        </div>
        <div className="col-md-3"></div>
      </div>
    );
  }
}

export default CatchatList;
