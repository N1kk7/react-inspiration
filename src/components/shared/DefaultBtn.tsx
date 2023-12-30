import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { popup } from '../../redux/rootSlice';
import { userLogIn } from '../../redux/logInSlice';
import { welcomePopup } from '../../redux/welcomeModalSlice';
import { getInfo } from '../../redux/getInfoSlice';
import { selectPlan } from '../../redux/selectPlanSlice'


const DefaultBtn = (props: {textBtn: string, methodBtn: string}) => {

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