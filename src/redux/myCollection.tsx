import { createSlice } from "@reduxjs/toolkit";
// import { redirect } from "react-router-dom";
// import { redirect } from "react-router-dom";




const CollectionSlice = createSlice({

    name: 'CollectionSlice',
    initialState: {
        collectionState: false,
        myCollection: [{id: 1}],
    },
    reducers: {
        createCollection: (state, action) => {

        },
        changeCollectionState: (state) => {
            state.collectionState = !state.collectionState
            console.log(state.myCollection.length !== 0);
            

        },
        openCollectionPage: (state) => {
            // const navigate = useNavigate()
            // const openCollection = () => navigate('/collection-page')
            if (state.myCollection.length) {
                // <Link to='/collection-page'></Link>
                // openCollection()

                state.collectionState = true;
                // redirect('/collection-page')
                // <Link to={'/collection-page'}/>
                // browserHistory.push('/collection-page')
                // redirect('/collection-page')
                
            } else {
                state.collectionState = false

            }

            // state.myCollection.length != 0
        }


    }
})



export const { createCollection, changeCollectionState } = CollectionSlice.actions;
export default CollectionSlice.reducer

