import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store.js";
import ReactDOM from "react-dom";
import App from "./App";
import 'firebase/firestore';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import './FireBase/firebase'
import {ThemeProvider} from "./Providers/ThemeProvider";
import Layout from "./Component/layout";


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}  >
            <ThemeProvider>
                <Layout>
                    <App state={store}  dispatch={store.dispatch.bind(store)} />
                </Layout>
            </ThemeProvider>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);






reportWebVitals();
