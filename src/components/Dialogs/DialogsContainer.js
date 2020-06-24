import React from 'react';
import {addNewMessageActionCreator,updateMessageTextActionCreator} from '../Redux/messages-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import WithAuthRedirect from '../HOC/WithAuthRedirect';



//const addNewMessage = React.createRef();

/* const DialogsContainer = (props) => {

   
    
    return <SrotreContext.Consumer> 
        {(store) => {
        let state = store.getState().messagesPage;

        const addMessage =(e) =>{
            store.dispatch(addNewMessageActionCreator());
        }
    
        const onChangeMessage = (text) =>{
            store.dispatch(updateMessageTextActionCreator(text));
        }
        
    
   return <Dialogs updateMessage={onChangeMessage}
    sendMessage={addMessage}
     messagesPage={state}/> 
    }
}
    </SrotreContext.Consumer>
} */

let mapStateToProps =(state)=>{
    return{
        dialogs: state.messagesPage.dialogs,
        messages: state.messagesPage.messages,
        newAnswer: state.messagesPage.newAnswer,
        
    }
}

let mapStateToPropsForRedidect=(state)=>{
   return{isAuth:state.auth.isAuth}
}

let mapDispachToProps =(dispatch)=>{
    return {
        updateMessage: (text)=>{
            dispatch(updateMessageTextActionCreator(text));
        },
        sendMessage:()=>{
            dispatch(addNewMessageActionCreator());
        }
    }
}

let AuthRedirectComponent= WithAuthRedirect(Dialogs);


const DialogsContainer = connect(mapStateToProps,mapDispachToProps)(AuthRedirectComponent)


export default DialogsContainer;