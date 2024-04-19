import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
// import Home from './pages/Home'
import LoginRecruiter from './pages/Auth/Recruiter/LoginRecruiter'
import LoginWorker from './pages/Auth/Worker/LoginWorker'
import RegisterRecruiter from './pages/Auth/Recruiter/RegisterRecruiter'
import RegisterWorker from './pages/Auth/Worker/RegisterWorker'
import RequestReset from './pages/Auth/ResetPassword.jsx/RequestReset'
import InputOtp from './pages/Auth/ResetPassword.jsx/InputOtp'
import InputNewPassword from './pages/Auth/ResetPassword.jsx/InputNewPassword'
import HomeRecruiter from './pages/Recruiter/HomeRecruiter'
// import Notification from './components/Notification'
import Notifikasipage from './components/Notifikasipage'
import Hire from './pages/Recruiter/Hire'
import Portfolio from './pages/Recruiter/Portfolio'
import LandingPage from './pages/LandingPage'
import Chat from './pages/Chat'
import EditProfileCompany from './pages/Recruiter/EditProfile'
import EditProfileWorker from './pages/Worker/EditProfile'


function App()
{

    return (
        <BrowserRouter>
            <Routes >
                {/* Route placement */ }
                {/* Home */ }
                <Route path='/' exact element={ <LandingPage /> } />

                {/* Chat */ }
                <Route path='/chat' element={ <Chat /> } />

                {/* Login */ }
                <Route path='/login/recruiter' element={ <LoginRecruiter /> } />
                <Route path='/login/worker' element={ <LoginWorker /> } />

                {/* Register */ }
                <Route path='/register/recruiter' element={ <RegisterRecruiter /> } />
                <Route path='/register/worker' element={ <RegisterWorker /> } />

                {/* Reset Password  */ }
                <Route path='/resetpassword' element={ <RequestReset /> } />
                <Route path='/otp' element={ <InputOtp /> } />
                <Route path='/newpassword' element={ <InputNewPassword /> } />

                {/* Perusahaan / Recruiter  */ }
                <Route path='/home' element={ <HomeRecruiter /> } />
                <Route path='/Hire' exact element={ <Hire /> } />
                <Route path='/portfolio' element={ <Portfolio /> } />
                <Route path='/editworker' element={ <EditProfileWorker /> } />
                <Route path='/editcompany' element={ <EditProfileCompany /> } />
                <Route path='/notification' element={ <Notifikasipage /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default App