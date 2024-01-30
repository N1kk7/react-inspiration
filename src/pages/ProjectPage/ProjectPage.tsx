import React from 'react';
import './ProjectPage.scss';
import UnloggedFooter from '../../components/Footer/UnlogFooter/UnlogFooter';
import { copiedLinkState } from '../../redux/rootSlice';
import { useDispatch } from 'react-redux';

const ProjectPage = () => {
    const dispatch = useDispatch();

    function handleLinkCopied(): void {
        dispatch(copiedLinkState('copied-modal-open'));

        setTimeout(() => {
            dispatch(copiedLinkState('copied-modal-close'));
        }, 5000);
    }

    return (
        <>
            <div className='projectPage'>
                <div className='thumbWrapper'>
                    <div className='thumb'>
                        <div className='thumbItem'>
                            <div className='copyBtn' onClick={handleLinkCopied}></div>
                            <div className='notesBtn'></div>
                            <div className='playBtn'></div>
                        </div>
                    </div>
                    <div className='user'>
                        <div className='userAvatar'></div>
                        <div className='userName'>
                            <span>User Name</span>
                        </div>
                    </div>
                </div>
                <UnloggedFooter />
            </div>
        </>
    );
};

export default ProjectPage;
