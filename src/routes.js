import { AddReview } from './pages/AddReview.jsx'
import { BranchMap } from './pages/BranchMap.jsx'
import { Dashboard } from './pages/Dashboard.jsx'
import { Signin } from './pages/signin.jsx'
import { ToyApp } from './pages/ToyApp.jsx'
import { ToyDetails } from './pages/ToyDetails.jsx'
import { ToyEdit } from './pages/ToyEdit.jsx'
import { Signup } from './pages/signup.jsx'
import { UserDetails } from './pages/user-details.jsx'
import Reviews from './pages/Reviews.jsx'

export default [
    {
        path: '/',
        component: Signin,
    },
    {
        path: '/home',
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
        path: '/toy/add/review/:toyId',
        component: AddReview,
    },
    {
        path: '/signup',
        component: Signup,
    },
    {
        path: '/user/:id',
        component: UserDetails,
    },
    {
        path: '/reviews',
        component: Reviews,
    }

]
