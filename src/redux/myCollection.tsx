import { createSlice } from "@reduxjs/toolkit";
// import { redirect } from "react-router-dom";
// import { redirect } from "react-router-dom";




const CollectionSlice = createSlice({

    name: 'CollectionSlice',
    initialState: {
        collectionState: false,
        myCollection: [{id: 1}],

        yourCollectionModal: true,
        createCollectionModal: false,
        saveCollectionModal: false,
        removeCollectionModal: false,
        unlimCollectionModal: false,
        unlimAccessModal: false,
        paymentDetailsModal: false,
        supportModal: false,


    },
    reducers: {
        changeCollectionState: (state) => {
            state.collectionState = !state.collectionState
            

        },
        openCollectionPage: (state) => {

            if (state.myCollection.length) {
  

                state.collectionState = true;

                
            } else {
                state.collectionState = false

            }

            // state.myCollection.length != 0
        },
        popupMethod: (state, action) => {

            switch (action.payload) {
                case 'yourCollection':
                    state.yourCollectionModal = true;
                break;
                case 'createCollection':
                    state.yourCollectionModal = false;
                    state.saveCollectionModal = false;
                    state.createCollectionModal = true;
                break;
                case 'saveCollection':
                    state.createCollectionModal = false;
                    state.saveCollectionModal = true;
                break;
                case 'removeCollection':
                    // state.saveCollectionModal = false;
                    state.removeCollectionModal = true;
                break;
                case 'closeRemoveCollection':
                    state.removeCollectionModal = false;
                break;
                case 'unlimCollection':
                    state.removeCollectionModal = false;
                    state.saveCollectionModal = false;
                    state.unlimCollectionModal = true;
                break;
                case 'unlimAccess':
                    state.unlimCollectionModal = false;
                    state.unlimAccessModal = true;
                break;
                case 'paymentDetails':
                    state.unlimAccessModal = false;
                    state.paymentDetailsModal = true;
                break;
                case 'closeAllModal':
                    state.yourCollectionModal = false;
                    state.createCollectionModal = false;
                    state.saveCollectionModal = false;
                    state.removeCollectionModal = false;
                    state.unlimCollectionModal = false;
                    state.unlimAccessModal = false;
                    state.paymentDetailsModal = false;
                break;





            }
            
        }



    }
})



export const { changeCollectionState, openCollectionPage, popupMethod } = CollectionSlice.actions;
export default CollectionSlice.reducer

