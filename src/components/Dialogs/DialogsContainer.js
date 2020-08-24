import {addNewMessageActionCreator} from '../Redux/messages-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import WithAuthRedirect from '../HOC/WithAuthRedirect';
import { compose } from 'redux';



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
        profile:state.profilePage.profile
        
    }
}


let mapDispachToProps =(dispatch)=>{
    return {
       
        sendMessage:(newAnswer)=>{
            dispatch(addNewMessageActionCreator(newAnswer));
        }
    }
}

// let AuthRedirectComponent= WithAuthRedirect(Dialogs);


// const DialogsContainer = connect(mapStateToProps,mapDispachToProps)(AuthRedirectComponent)


export default compose(
    connect(mapStateToProps,mapDispachToProps),
    WithAuthRedirect
)(Dialogs);