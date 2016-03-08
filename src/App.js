import './stylesheets/style.scss';
import './stylesheets/_bootstrap.scss';
import React from 'react';
import CatchatModel from './Model/CatchatModel';
import CatchatForm from './components/CatchatForm';
import CatchatList from './components/CatchatList';





class App extends React.Component {
  constructor() {
    super();

    this.catchats = new CatchatModel();
  }

  render() {

    return (
      <div>
        <div className="container">
          <CatchatList model={this.catchats}/>
        </div>
        <div id="stickyFooter">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-md-offset-3">
                <CatchatForm model={this.catchats}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
