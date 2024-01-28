# ///////////////////////// MODALS CONTROL /////////////////////////

## ---------- CREATE-COLLECTION ----------

### PATH: modal > CreateCollection

    state: redux > myCollection > initialState > createCollectionModal

    open createCollection : methodBtn: 'createCollection',
    close createCollection : methodBtn: 'closeAllModal',


## ----------  CREATE-PASSWORD  ----------

### PATH: modal > CreatePassword

    state: redux > rootSlice > initialState > createPasswordModal


## ---------- DELETE-COLLECTION ----------

### PATH: modal > DeleteCollection

    state: redux > myCollection > initialState > removeCollectionModal


## ----------   DELETE-MODAL    ----------

### PATH: modal > DeleteModal

    state: redux > rootSlice > initialState > deleteModal


## ----------  GET-INFO-MODAL   ----------

### PATH: modal > GetInfoModal

    state: redux > rootSlice > initialState > getInfoModal


## ----------   LOG-IN-MODAL    ----------

### PATH: modal > LogIn

        state: redux > rootSlice > initialState > logIn


## ----------  SAVE-COLLECTION  ----------

### PATH: modal > SaveCollection

    state: redux > myCollection > initialState > SaveCollectionModal

    save - collection: methodBtn: 'saveCollection'
    close - collection: methodBtn: 'closeAllModal'


## ---------- SELECT-PLAN-MODAL ----------

### PATH: modal > SelectPlanModal

    state: redux > selectPlanSlice > initialState > selectPlanModal

## ----------     SIGN-IN       ----------

### PATH: modal > SignIn

    state: redux > rootSlice > initialState > signIn


## --------- SUCCESS-SUPPORT-REQ  --------

### PATH: modal > SuccessSupportReq

    state: redux > supportSlice > initialState > sendRequestModal


## ----------   SUPPORT-MODAL   ----------

### PATH: modal > WelcomeModal

    state: redux > supportSlice > initialState > supportModal


## ----------   UNLIM-ACCESS    ----------
?????


## ----------   WELCOME-MODAL   ----------

### PATH: modal > WelcomeModal

    state: redux > welcomeModalSlice > initialState > welcomeModal



## ----------  YOUR-COLLECTION  ----------

### PATH: modal > YourCollection

    state: redux > myCollection > initialState > yourCollectionModal



# ///////////////////////// PAGES CONTROL /////////////////////////



## ----------  PAYMENT-PAGE  ----------

### PATH: pages > PaymentPage

    state: redux > selectPlanSlice > initialState > paymentDetailsPage

    open-payment-page : methodBtn: 'open-payment-details',
    close-payment-page : methodBtn: 'cancel-payment-btn',





# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
