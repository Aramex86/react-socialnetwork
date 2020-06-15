import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import {setAuthUserData,authSet} from '../Redux/auth-reducer'; 

class HeaderContainer extends React.Component  {

    componentDidMount(){

        this.props.authSet();
        // authAPI.setAuth()
        // .then(response =>{
        //     if(response.data.resultCode === 0){
        //         let {id,email,login}= response.data.data;
        //         this.props.setAuthUserData(id,email,login);
        //     }
        // });
    }

    render(){
        return <Header {...this.props}/>
    }
   
}

const mapStateToProps=(state)=>({
    isAuth:state.auth.isAuth,
    login:state.auth.login,

})



export default connect(mapStateToProps,{setAuthUserData,authSet})(HeaderContainer);