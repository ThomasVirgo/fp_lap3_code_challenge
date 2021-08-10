// import React from 'react';

// import '@testing-library/jest-dom';

// import { render } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { MemoryRouter } from 'react-router-dom';
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';

// import uniReducer from '../reducers/uniReducer';

// const TestProviders = ({ initState }) => {
//     initState ||= { unis: [] }
//     const testStore = createStore(() => uniReducer(initState, { type: '@@INIT' }), applyMiddleware(thunk))

//     return ({ children }) => (
//         <MemoryRouter>
//             <Provider store={testStore}>
//                 <Router>
//                     { children }
//                 </Router>
//             </Provider>
//         </MemoryRouter>
//     )
// }

// const renderWithReduxProvider = (ui, options={}) => {
//     let TestWrapper = TestProviders(options)
//     render(ui, { wrapper: TestWrapper, ...options })
// }

// import axios from 'axios';
// jest.mock('axios')
// axios.get.mockResolvedValue({ data: { message: [] }})

// global.renderWithReduxProvider = renderWithReduxProvider
// global.React = React;