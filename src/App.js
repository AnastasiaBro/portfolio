import React, { Component } from 'react';
import './App.css';
import About from '../src/components/About/About';
// import Education from '../src/components/Education/Education';
import Skills from '../src/components/Skills/Skills';
import Hobby from '../src/components/Hobby/Hobby';
import Email from '../src/components/Email/Email';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

// import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import PersonIcon from '@material-ui/icons/Person';
// import EducationIcon from '@material-ui/icons/CastForEducation';
import DesktopIcon from '@material-ui/icons/DesktopMac';
import ExtensionIcon from '@material-ui/icons/Extension';
import MailIcon from '@material-ui/icons/Email';
// import IconButton from '@material-ui/core/IconButton';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="App__block">
            <aside className="App__sidebar">
              <NavLink to='/' className="App__link" exact activeClassName="active">
                <PersonIcon className="App__link-image" fontSize="large" />
              </NavLink>

              <NavLink to='/skills' className="App__link" activeClassName="active">
                {/* <IconButton color="inherit"> */}
                    <DesktopIcon fontSize="large" />
                {/* </IconButton> */}
              </NavLink>

              <NavLink to='/hobbies' className="App__link" activeClassName="active">
                {/* <IconButton color="inherit"> */}
                    <ExtensionIcon fontSize="large" />
                {/* </IconButton> */}
              </NavLink>

              <NavLink to='/contacts' className="App__link" activeClassName="active">
                {/* <IconButton color="inherit"> */}
                    <MailIcon fontSize="large" />
                {/* </IconButton> */}
              </NavLink>

              
              
            </aside>
            <div className="App__container">
              <header className="App__header">
                {/* <h3 className="App__title">Информация</h3> */}
              </header>
              <Switch>
                <Route exact path='/' component={About}/>
                <Route path='/skills' component={Skills}/>
                <Route path='/hobbies' component={Hobby}/>
                <Route path='/contacts' component={Email}/>
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
