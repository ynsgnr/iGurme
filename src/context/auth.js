import React, {Component} from 'react';

const AuthContext = React.createContext()

class AuthManager extends Component{

  state={
    isLogedIn : false,
    login: (username,password) => {this.setState({isLogedIn:true})},
    logout: () => {this.setState({isLogedIn:false})}
  }

  render() {
    return <AuthContext.Provider value={this.state}>
      {this.props.children}
    </AuthContext.Provider>
  }

}

export {AuthManager}
export const Auth = AuthContext.Consumer
