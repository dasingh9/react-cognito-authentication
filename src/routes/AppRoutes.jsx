// special component containing all the possible routes for this app
// any props passed into AppRoutes will also be passed onto child components

import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute';;
import LoginPage from '../pages/LoginPage';
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import PageNotFound from "../pages/PageNotFound"
import SampleProtectedPage from '../pages/SampleProtectedPage';
import LogoutPage from '../pages/LogoutPage';
import ProfilePage from '../pages/ProfilePage';

// child components using {...props}
export default function AppRoutes(props) {

    return (
        <Routes>
            <Route path="login" element={<LoginPage/>} />

            {/* index matches on default/home URL: / */}
            <Route index element={
                <ProtectedRoute>
                    <HomePage {...props} />
                </ProtectedRoute>
            }/>

            <Route path='/sample-protected-page' element={
                <ProtectedRoute>
                    <SampleProtectedPage {...props} />
                </ProtectedRoute>
            }/>

            <Route path='/profile' element={
                <ProtectedRoute>
                    <ProfilePage {...props} />
                </ProtectedRoute>
            }/>

            <Route path="logout" element={
                <ProtectedRoute>
                    <LogoutPage/>
                </ProtectedRoute>
            }/>

            {/* /about is a public route that can be accessed without login */}
            <Route path='/about' element={<AboutPage {...props} />} />

            {/* special route to handle if none of the above match */}
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}
// Name this file AppRoutes.jsx and store in 'routes' folder