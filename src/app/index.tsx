import { Spin } from "antd"; // ~ shared/ui/sping
import { Routing } from 'pages'
import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react'

import './index.module.scss';
import 'antd/dist/reset.css';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<Spin delay={300} className="overlay" size="large" />}>
                <div className="app">    
                    <Routing />
                </div>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;