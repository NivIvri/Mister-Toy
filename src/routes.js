import { BranchMap } from './pages/BranchMap.jsx'
import { Dashboard } from './pages/Dashboard.jsx'
import {  ToyApp} from './pages/ToyApp.jsx'
import { ToyDetails } from './pages/ToyDetails.jsx'
import { ToyEdit } from './pages/ToyEdit.jsx'
import { UserProfile } from './pages/UserProfile.jsx'

export default [
    {
        path: '/',
        component: ToyApp,
    },
    {
        path: '/dashboard',
        component: Dashboard,
    },
    {
        path: '/branch',
        component: BranchMap,
    },
    {
        path: '/toy/edit/:toyId?',
        component: ToyEdit,
    },
    {
        path: '/toy/:toyId',
        component: ToyDetails,
    },
    
    {
        path: '/userPage',
        component: UserProfile,
    },
 
]
