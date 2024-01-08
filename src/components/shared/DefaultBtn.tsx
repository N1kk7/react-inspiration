import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { popup } from '../../redux/rootSlice';
import { userLogIn } from '../../redux/logInSlice';
import { welcomePopup } from '../../redux/welcomeModalSlice';
import { getInfo } from '../../redux/getInfoSlice';
import { selectPlan } from '../../redux/selectPlanSlice'
import { popupMethod } from '../../redux/myCollection';
import { paymentDetails } from '../../redux/selectPlanSlice';
import { useNavigate } from 'react-router-dom';
import { sendRequest } from '../../redux/supportSlice';
import { getUnlimAccess } from '../../redux/selectPlanSlice';
import { editPage } from '../../redux/editPageSlice';


const DefaultBtn = (props: {textBtn: string, methodBtn: string}) => {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const stateDefaultBtn = useSelector((state: any) => state.mainState.stateDefaultBtn);
  const enterEmail = useSelector((state: any) => state.mainState.enterEmail);
  const enterPassword = useSelector((state: any) => state.mainState.enterPassword);
  const createPassword = useSelector((state: any) => state.mainState.createPassword);
  const confirmPassword = useSelector((state: any) => state.mainState.confirmPassword);

  const firstName = useSelector((state: any) => state.welcomeModalState.firstName)
  const lastName = useSelector((state: any) => state.welcomeModalState.lastName)
  const disableWelcomeBtn = useSelector((state: any) => state.welcomeModalState.disableBtn)

  const disableGetInfoBtn = useSelector((state: any) => state.getInfoState.disableGetInfoBtn)





  const [styleBtn, setStyleBtn] = useState<string>('');

  function showErrorBtn (modal: string, err1?: string, err2?:string) {
    
    if (!stateDefaultBtn) {
      setStyleBtn('disableBtn');
      setTimeout(() => { 
        setStyleBtn('');
        markError(modal, err1, err2)
      },200)
    }
  }

  const markError = (modal: string, err1?: string, err2?: string) => {
    switch (modal) {
      case 'login':

        if (err1 === '') {
          dispatch(popup('email-error'))
          
        }
        if (err2 === '') {
          dispatch(popup('password-error'))

        }

        setTimeout(() => {
          // if (err1 === '') {
            dispatch(popup('cancel-email-error'))
          // }
          // if (err2 === '') {
            dispatch(popup('cancel-password-error'))
          // }
          // dispatch(popup('cancel-email-error'))
        }, 2500)

      break;
      case 'signIn':
        dispatch(popup('email-error'))
        setTimeout(() => {

            dispatch(popup('cancel-email-error'))
 
        }, 2500)


      break;
    }

  }

  const changePasswordModal = () => {
    dispatch(popup('confirm-password-modal'));
    dispatch(welcomePopup('open-welcome-popup'));
  }

  const changeWelcomeModal = () => {
    dispatch(welcomePopup('confirm-welcome-popup'));
    dispatch(getInfo('open-getInfo'))


  }

  const changeInfoModal = () => {
    dispatch(getInfo('close-getInfo'))
    dispatch(selectPlan('open-select-plan'))
    
  }
  
  const toggleClassBtn = (methodBtn: string) => {
    console.log(methodBtn);
    
    window.scrollTo({ 
      top: 0,  
      behavior: 'smooth'
      /* you can also use 'auto' behaviour 
         in place of 'smooth' */
    }); 
    

    switch (methodBtn) {
      case 'Login':
        enterEmail && enterPassword ? dispatch(popup('confirm-logIn')) && dispatch( userLogIn('userFree')) : showErrorBtn('login', enterEmail, enterPassword);
      break
      case 'SignIn':
        enterEmail ? dispatch(popup('confirm-signIn')) : showErrorBtn('signIn', enterEmail);
      break
      case 'CreatePassword':
        createPassword && confirmPassword ?  changePasswordModal() : showErrorBtn('createPassword', createPassword, confirmPassword);
      break;
      case 'WelcomeModal':
        firstName && lastName && disableWelcomeBtn ? changeWelcomeModal() : showErrorBtn('WelcomeModal', firstName, lastName);
      break;
      case 'GetInfoModal':
        disableGetInfoBtn ? changeInfoModal() : showErrorBtn('GetInfoModal');
        

      break;
      case 'openSignUpModal':
        dispatch(popup('open-signIn'))
        
      break;
      case 'openLogInModal':
        dispatch(popup('open-logIn'))
        
      break;

      case 'createCollection':
        dispatch(popupMethod('createCollection'))

      break;

      case 'saveCollection':
        dispatch(popupMethod('saveCollection'))
      break;
      case 'cancelBtn' :
        dispatch(popupMethod('closeAllModal'))
      break;
      case 'unlimCollection':
        dispatch(popupMethod('unlimCollection'))
      break;
      case 'Go-pro':
        // console.log('go-pro');
        dispatch(selectPlan('close-select-plan'))
        dispatch(paymentDetails('open-payment-details'))
        dispatch(getUnlimAccess('close-unlim-access'))
        navigate('/payment-page')
      break;
      case 'send-request':
        // console.log('go-pro');
        dispatch(sendRequest('show-success-request'));

        setTimeout(() => {
          dispatch(sendRequest('hide-success-request'));
        }, 1900)
      break;
      case 'Free-plan':
        dispatch(getUnlimAccess('close-unlim-access'))
      break;
      case 'cancel-payment-btn':
        // dispatch(userLogIn('userPro'));
        dispatch(paymentDetails('close-payment-details'))
        navigate(-1)
      break;
      case 'payment-processed':
        dispatch(userLogIn('userPro'));
        dispatch(paymentDetails('close-payment-details'))
        navigate('/')
      break;
      case 'open-edit-page':
        dispatch(editPage('open-edit-page'))
        navigate('/edit-page')
      break;
  
        
    }
    
  }



  return(
    <>
      <div className={`defaultBtn ${styleBtn}`} onClick={() => toggleClassBtn(props.methodBtn)}>
        {props.textBtn}
      </div>
    
    </>
  )
}

export default DefaultBtn