import React from "react";
import './ProjectPage.scss'
import UnloggedFooter from "../../components/Footer/UnlogFooter/UnlogFooter";

const ProjectPage = () => {


    return (
        <>
            <div className="projectPage">
                <div className="thumbWrapper">
                    <div className="thumb">
                        <div className="thumbItem">
                            <div className="copyBtn">

                            </div>
                            <div className="notesBtn">

                            </div>
                            <div className="playBtn">

                            </div>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userAvatar">

                        </div>
                        <div className="userName">
                            <span>
                                User Name
                            </span>
                        </div>
                    </div>
                    

                </div>
                <UnloggedFooter/>
            </div>
        
        </>
    )
}

export default ProjectPage