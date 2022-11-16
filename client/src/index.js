import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import App from './app'

import './styles/index.css';
import './styles/forms.css';
import './styles/custom.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BrowserRouter><App /></BrowserRouter>);