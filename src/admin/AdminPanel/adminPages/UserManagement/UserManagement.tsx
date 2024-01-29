import React, { useEffect, useState } from 'react';
import './UserManagement.scss';

import downloadBtn from '../../../../assets/images/downloadBtn.svg';
import userAvatar from '../../../../assets/images/userAvatar.png';
import arrowRight from '../../../../assets/images/arrow-right.svg';
// import arrowLeft from '../../../../assets/images/arrow-left.svg';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import rowsArray from '../../../../data/dataTablesData';

import DefaultBtn from '../../../../components/shared/DefaultBtn';

const UserManagement = () => {
    const [users, setUsers] = useState([] as Array<any>);
    const [selectedUsers, setSelectedUsers] = useState([] as Array<any>);

    useEffect(() => {
        setUsers(rowsArray);
    }, []);

    return (
        <>
            <div className='userManagement'>
                <h1>User Management</h1>
                <div className='searchFilterWrapper'>
                    <div className='search' onClick={() => {}}>
                        <div className='searchDesktop'>
                            <input type='text' placeholder='User search' />
                            <div className='arrowBtn'>
                                <img src={arrowRight} alt='' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='userManagementWrapper'>
                    <div className='userManagementTable'>
                        <DataTable
                            value={users}
                            selectionMode='single'
                            selection={selectedUsers}
                            onSelectionChange={(e) => setSelectedUsers(e.value)}
                            dataKey='id'
                            rows={13}
                            paginator
                            paginatorTemplate='PrevPageLink PageLinks NextPageLink'
                        >
                            <Column selectionMode='multiple'></Column>
                            <Column field='name' header='User name' style={{ width: '30%' }}></Column>
                            <Column field='email' header='Email' style={{ width: '30%' }}></Column>
                            <Column field='type' header='Type of User' style={{ width: '20%' }}></Column>
                            <Column field='videos' header='# Videos' style={{ width: '20%' }}></Column>
                        </DataTable>
                    </div>

                    <div className='userManagementInfo'>
                        <div className='userManagementInfo-wrapper'>
                            <div className='userAvatar'>
                                <img src={userAvatar} alt='user-avatar' />
                                <div className='avatarBtn'>
                                    <img src={downloadBtn} alt='download-btn' />
                                    <span>Replace photo</span>
                                </div>
                            </div>
                            <div className='inputItem info1'>
                                <div className='inputWrapper'>
                                    <h4>First name</h4>
                                    <input type='text' placeholder='Bohdan' />
                                </div>

                                <div className='inputWrapper'>
                                    <h4>Last name</h4>
                                    <input type='text' placeholder='Mukha' />
                                </div>
                            </div>
                            <div className='inputItem info2'>
                                <div className='inputWrapper'>
                                    <div className='titleWrapper'>
                                        <h4>Country</h4>
                                    </div>
                                    <input type='text' placeholder='Ukraine, Kyiv' />
                                </div>
                                <div className='inputWrapper'>
                                    <h4>Industry</h4>
                                    <input type='text' placeholder='Choose type' />
                                </div>
                            </div>
                            <div className='userDescription'>
                                <div className='inputWrapper'>
                                    <h4>Description</h4>
                                    <textarea
                                        name='description'
                                        placeholder='From the initial meeting to the final delivery,
																Ethan has created a feeling of trust and delivered
																everything we asked of him.'
                                    />
                                </div>
                            </div>
                            <div className='passwordWrapper'>
                                <div className='inputWrapper email'>
                                    <h4>Email</h4>
                                    <input type='email' placeholder='user.email@gmail.com' />
                                </div>
                                <div className='inputWrapper pass'>
                                    <h4>Password</h4>
                                    <input type='text' placeholder='Password1234' />
                                </div>
                            </div>
                            <div className='button-block buttons'>
                                <DefaultBtn textBtn='Cancel' methodBtn='change-btn' />
                                <DefaultBtn textBtn='Save' methodBtn='change-btn' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserManagement;
