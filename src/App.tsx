import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import RegisterPage from './components/auth/RegisterPage'
import ProfilePage from './components/profile/ProfilePage'
import LoginPage from './components/auth/LoginPage'
import UserInviteList from './components/users/UserInviteList'
import ShedulerList from './components/scheduler/ShedulerList'
import DataList from './components/data/DataList'
import ComponentList from './components/component/ComponentList'
import ApplicationList from './components/application/ApplicationList'
import Application from './components/application/Application'
import Dashboard from './components/Dashboard'
import AppContent from './components/AppContent'

function App() {
 

  return (
    <>
      <BrowserRouter>
      <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/profile" element={<ProfilePage />} />
        <Route element={<AppContent />}>
          
          
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          
          
          <Route path="/dashboard" element={<Dashboard />} />

          
          <Route path="/applications" element={<ApplicationList/>} />
          
          
          <Route
            path="/applications/:applicationId"
            element={<Application appId={0} appName="" projects={[]} owner="" />}
          />

          
          <Route path="/components" element={<ComponentList />} />

          
          <Route path="/data" element={<DataList />} />

          
          <Route path="/scheduler" element={<ShedulerList />} />

          
          <Route path="/users" element={<UserInviteList />} />
          
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
