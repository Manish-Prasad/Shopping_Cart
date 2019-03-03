import React,{Component} from 'react';
// import Logo from '../../../assets/logo/avetti_logo.png';
import Logo from '../../../assets/logo/HighRadius.jpg';
import NavItem from './NavItem/NavItem';
import {Modal} from 'react-bootstrap';
import './Header.css';

class Header extends Component  {
    state={
        show:false,
        userError:false,
        pwdError:false,
    }

    login = ()=>{
        this.setState({
            show:true
        })
    }

    handleHide=()=>{
        this.setState({
            show:false
        })
    }

    onSubmit=(event)=>{
        event.preventDefault();
        if(this.refs.user.value===''){
            this.setState({
                userError:true
            })
        }
        if(this.refs.user.value!==''){
            this.setState({
                userError:false
            })
        }
        if(this.refs.pwd.value===''){
            this.setState({
                pwdError:true
            })
        }
        if(this.refs.pwd.value!==''){
            this.setState({
                pwdError:false
            })
        }
        
    }

    render(){
    return (
        <div>
            <div className='header'>
                <div className='col-md-4'>
                    <img className='header-img' alt='header-img' src={Logo} />
                </div>
                <div className='col-md-8'>
                    <NavItem/>
                </div>
                <ul className='nav nav1 unav'>
                    <li onClick={this.login}><a>Login</a></li>
                    <li><a>View Cart</a></li>
                    <li><a>Order history</a></li>
                </ul>
                <div className='search-box'>
                    <input style={{borderRadius:'3px',fontSize:'14px'}} type='text' placeholder='Products,Parts,Keywords etc..'/>
                    {'  '}
                    <button style={{borderRadius:'50px'}} className='btn btn-primary btn-sm'>Search</button>
                </div>
            </div>
            <Modal
                  show={this.state.show}
                  onHide={this.handleHide}
                  container={this}
                  aria-labelledby="contained-modal-title"
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title">
                  User Login
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <form>
                  <div className="form-group">
                    <label htmlFor="email">User Name:</label>
                    <input ref='user' type="text" className="form-control" id="user" placeholder="Enter user name"/>
                    {
                        this.state.userError===true?
                        <span className='text-danger'>User name is required</span>
                        :
                        null
                    }
                  </div>
                  <div className="form-group">
                    <label htmlFor="pwd">Password:</label>
                    <input ref='pwd' type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd"/>
                    {
                        this.state.pwdError===true?
                        <span className='text-danger'>Password is required</span>
                        :
                        null
                    }
                  </div>
                  <div className="checkbox">
                    <label><input type="checkbox" name="remember"/> Remember me</label>
                  </div>
                  <button onClick={this.onSubmit} type="submit" className="btn btn-primary">Submit</button>
               </form>
              </Modal.Body>
            </Modal>
        </div>
    );
}
}

export default Header;