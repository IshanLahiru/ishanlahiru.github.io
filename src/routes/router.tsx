import React, { ReactNode } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import PageNotFound from './pageNotFound';
import HomePage from './home/homePage';

interface RouterProps {
    children?: ReactNode;
}

const Router: React.FC<RouterProps> = ({ children }) => {
    return (
        <BrowserRouter>
            {children}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;