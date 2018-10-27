import Vue from 'vue'
// import Router from 'vue-router'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Success from '@/components/Success'
import Confirm from '@/components/Confirm'
import Verify from '@/components/Verify'
import OtpVerify from '@/components/OtpVerify'
import Google from '@/components/Google'
import GoogleVerify from '@/components/GoogleVerify'
import Demo from '@/components/Demo'
// Vue.use(Router)
Vue.use(VueRouter)

// export default new Router({
// export const router = new VueRouter({
//     mode: 'history',
//     routes: [{
//             path: '/helloworld',
//             name: 'HelloWorld',
//             component: HelloWorld
//         },
//         {
//             path: '/',
//             name: 'Login',
//             component: Login
//         },
//         {
//             path: '/register',
//             name: 'Register',
//             component: Register
//         },
//         {
//             path: '/success',
//             name: 'Success',
//             component: Success
//         },
//         {
//             path: '/api/confirm?token=:token',
//             name: 'Confirm',
//             component: Confirm
//         },
//         {
//             path: '/api/confirm',
//             name: 'Verify',
//             component: Verify
//         },
//         {
//             path: '/otpverify',
//             name: 'OtpVerify',
//             component: OtpVerify
//         },
//         {
//             path: '/google',
//             name: 'Google',
//             component: Google
//         },
//         {
//             path: '/gverify',
//             name: 'GoogleVerify',
//             component: GoogleVerify
//         }
//     ]
// })

const routes = [{
        path: '/helloworld',
        name: 'HelloWorld',
        component: HelloWorld
    },
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/success',
        name: 'Success',
        component: Success
            // props: true,
            // meta: {
            //     requiresAuth: true
            // }
    },
    {
        path: '/api/confirm?token=:token',
        name: 'Confirm',
        component: Confirm
            // props: true,
            // meta: {
            //     requiresAuth: true
            // }
    },
    {
        path: '/api/confirm',
        name: 'Verify',
        component: Verify
            // props: true,
            // meta: {
            //     requiresAuth: true
            // }
    },
    {
        path: '/otpverify',
        name: 'OtpVerify',
        component: OtpVerify
            // props: true,
            // meta: {
            //     requiresAuth: true
            // }
    },
    {
        path: '/google',
        name: 'Google',
        component: Google
            // props: true,
            // meta: {
            //     requiresAuth: true
            // }
    },
    {
        path: '/gverify',
        name: 'GoogleVerify',
        component: GoogleVerify
            // props: true,
            // meta: {
            //     requiresAuth: true
            // }
    },
    {
        path: '/demo',
        name: 'Demo',
        component: Demo
            // props: true,
            // meta: {
            //     requiresAuth: true
            // }
    }
];
const router = new VueRouter({ routes });
// router.beforeEach((to, from, next) => {
//     console.log('Checking Logging info...', localStorage.getItem('isAuthenticated'));
//     if (to.matched.some(record => record.meta.requiresAuth) && ((localStorage.getItem('isAuthenticated') == 'false') || (localStorage.getItem('isAuthenticated') == null))) {
//         console.log('Not Authenticated');
//         // if (to.matched.some(record => record.meta.requiresAuth)) {
//         next({
//             path: '/',
//             query: {
//                 redirect: to.fullPath
//             }
//         });
//     } else {
//         next();
//     }
// });

// router.beforeEach((to, from, next) => {
//     let data = JSON.parse(localStorage.getItem("vue-session-key"));
//     // if(data!=null)
//     // console.log('Checking Logging info...', data.access_token);
//     if (to.matched.some(record => record.meta.requiresAuth) && data.access_token == null) {
//         if (to.matched.some(record => record.meta.is_admin)) {
//             next({
//                 path: '/admin',
//                 query: {
//                     redirect: to.fullPath
//                 }
//             });
//         } else {
//             next({
//                 path: '/',
//                 query: {
//                     redirect: to.fullPath
//                 }
//             });
//         }
//     } else {
//         if (to.matched.some(record => record.meta.is_admin)) {
//             let roles = data.current_user.roles
//             let state = false;
//             for (let i = 0; i < roles.length; i++) {
//                 if (roles[i].roleName == 'ROLE_ADMIN') {
//                     state = true;
//                     next();
//                 }
//             }
//             if (!state) {
//                 next({
//                     path: '/admin',
//                     query: {
//                         redirect: to.fullPath
//                     }
//                 });
//             }
//         } else {
//             next();
//         }
//     }
// });
export default router;