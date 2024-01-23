import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { popup } from '../../redux/rootSlice';
import { userLogIn } from '../../redux/logInSlice';
import { adminLogIn } from '../../redux/adminSlice';
import { welcomePopup } from '../../redux/welcomeModalSlice';
import { getInfo } from '../../redux/getInfoSlice';
import { selectPlan } from '../../redux/selectPlanSlice'
import { popupMethod } from '../../redux/myCollection';
import { paymentDetails } from '../../redux/selectPlanSlice';
import { useNavigate } from 'react-router-dom';
import { sendRequest } from '../../redux/supportSlice';
import { getUnlimAccess } from '../../redux/selectPlanSlice';
import { editPage } from '../../redux/editPageSlice';
import { checkPasswordError } from '../../redux/rootSlice';
import { setError } from '../../redux/welcomeModalSlice';
import { setInfoSliceError } from '../../redux/getInfoSlice';
import { deleteModalState } from '../../redux/rootSlice';
import { setBillingError } from '../../redux/subscriptionSlice';


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

  const chooseType = useSelector((state: any) => state.welcomeModalState.inputPlaceholder)

  const answerMessage = useSelector((state: any) => state.getInfoState.answerMessage);
  const answer = useSelector((state: any) => state.getInfoState.answer);

  const fillCardInfo = useSelector((state: any) => state.subscriptionState.fillCardInfo);



  const [styleBtn, setStyleBtn] = useState<string>('');

  function showErrorBtn (modal: string, err1?: string, err2?:string, err3?:string) {

    if (!stateDefaultBtn) {
      setStyleBtn('disableBtn');
      setTimeout(() => {
        setStyleBtn('');
        markError(modal, err1, err2, err3)
      },200)
    }
  }

  const markError = (modal: string, err1?: string, err2?: string, err3?:string) => {


    switch (modal) {
      case 'login':

        if (err1 === '') {
          dispatch(popup('email-error'))

        }
        if (err2 === '') {
          dispatch(popup('password-error'))

        }

      break;
      case 'signIn':
        dispatch(popup('email-error'))

      break;
      case 'createPassword':

        if (err1 === '') {
          dispatch(checkPasswordError('create-password-error'))

        }
        if (err2 === '') {
          dispatch(checkPasswordError('confirm-password-error'))

        }
      break;
      case 'welcomeModal':

        if (err1 === '') {
          dispatch(setError('set-firstName-error'))

        }
        if (err2 === '') {
          dispatch(setError('set-lastName-error'))

        }

        if (err3 === 'Choose type') {
          dispatch(setError('set-chooseType-error'))

        }
      break;
      case 'GetInfoModal':
        if (err1 === '') {

          dispatch( setInfoSliceError('set-message-error'))



        }
        if (err2 === '') {

          dispatch( setInfoSliceError('set-answer-error'))

        }



      break;
    }

  }

  const changePasswordModal = () => {
    dispatch(popup('confirm-password-modal'));
    dispatch(setError('reset-all-errors'));
    dispatch(welcomePopup('open-welcome-popup'));
  }

  const changeWelcomeModal = () => {
    dispatch(welcomePopup('confirm-welcome-popup'));
    dispatch(setInfoSliceError('reset-all-errors'))
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
      case 'welcomeModal':
        firstName && lastName && disableWelcomeBtn ? changeWelcomeModal() : showErrorBtn('welcomeModal', firstName, lastName, chooseType);

      break;
      case 'GetInfoModal':
        disableGetInfoBtn ? changeInfoModal() : showErrorBtn('GetInfoModal', answerMessage, answer);


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
        dispatch(selectPlan('close-select-plan'))
        dispatch(paymentDetails('open-payment-details'))
        dispatch(getUnlimAccess('close-unlim-access'))
        navigate('/payment-page')
      break;
      case 'send-request':
        dispatch(sendRequest('show-success-request'));

        setTimeout(() => {
          dispatch(sendRequest('hide-success-request'));
        }, 1900)
      break;
      case 'Free-plan':
        dispatch(selectPlan('close-select-plan'))
        dispatch(getUnlimAccess('close-unlim-access'));
        dispatch(popup('confirm-logIn')) && dispatch( userLogIn('userFree'));
      break;
      case 'cancel-payment-btn':
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

      case 'AdminLogin':
        dispatch(adminLogIn(true));
        navigate('/admin')
      break;
      case 'confirm-delete':
        dispatch(deleteModalState('close-delete-modal'));
      break;
      case 'cancel-delete':
        dispatch(deleteModalState('close-delete-modal'));
      break;
      case 'cancel-billing-btn':
        navigate(-1)
      break;
      case 'save-billing':
        fillCardInfo ?  navigate(-1) :  dispatch(setBillingError("set-enterCard-error"))


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