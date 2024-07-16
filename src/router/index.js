import { createRouter, createWebHistory } from 'vue-router';
import AppLayout from '@/layout/AppLayout.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: AppLayout,
            children: [
                {
                    path: '/',
                    name: 'dashboard',
                    component: () => import('@/views/uikit/Landingpage.vue') //changes
                },
                {
                    path: '/uikit/formlayout',
                    name: 'formlayout',
                    component: () => import('@/views/uikit/FormLayout.vue')
                },
                {
                    path: '/uikit/input',
                    name: 'input',
                    component: () => import('@/views/uikit/Input.vue')
                },
                {
                    path: '/uikit/floatlabel',
                    name: 'floatlabel',
                    component: () => import('@/views/uikit/FloatLabel.vue')
                },
                {
                    path: '/uikit/invalidstate',
                    name: 'invalidstate',
                    component: () => import('@/views/uikit/InvalidState.vue')
                },
                {
                    path: '/uikit/button',
                    name: 'button',
                    component: () => import('@/views/uikit/Button.vue')
                },
                //changes done here
                {  
                    path: '/uikit/Setting',
                    name: 'Simulation',
                    component: () => import('@/views/uikit/Setting.vue')
                },
                {
                    path: '/uikit/dcproblem',
                    name: 'dcproblem',
                    component: () => import('@/views/uikit/DCProblem.vue')
                },
                {
                    path: '/uikit/povAring',
                    name: 'Ring',
                    component: () => import('@/views/uikit/povAring.vue')
                },
                {
                    path: '/uikit/povAfull',
                    name: 'Complete graph',
                    component: () => import('@/views/uikit/povAfull.vue')
                },
                {
                    path: '/uikit/povAring',
                    name: 'povAring',
                    component: () => import('@/views/uikit/povAring.vue')
                },
                {
                    path: '/uikit/povAfull',
                    name: 'povAfull',
                    component: () => import('@/views/uikit/povAfull.vue')
                },
                {
                    path: '/uikit/povBring',
                    name: 'povBring',
                    component: () => import('@/views/uikit/povBring.vue')
                },
                {
                    path: '/uikit/povBfull',
                    name: 'povBfull',
                    component: () => import('@/views/uikit/povBfull.vue')
                },
                {
                    path: '/uikit/povCring',
                    name: 'povCring',
                    component: () => import('@/views/uikit/povCring.vue')
                },
                {
                    path: '/uikit/povCfull',
                    name: 'povCfull',
                    component: () => import('@/views/uikit/povCfull.vue')
                },
                {
                    path: '/uikit/povDring',
                    name: 'povDring',
                    component: () => import('@/views/uikit/povDring.vue')
                },
                {
                    path: '/uikit/povDfull',
                    name: 'povDfull',
                    component: () => import('@/views/uikit/povDfull.vue')
                },
                {
                    path: '/uikit/povEring',
                    name: 'povEring',
                    component: () => import('@/views/uikit/povEring.vue')
                },
                {
                    path: '/uikit/povEfull',
                    name: 'povEfull',
                    component: () => import('@/views/uikit/povEfull.vue')
                },
                {
                    path: '/uikit/povUserring',
                    name: 'povUserring',
                    component: () => import('@/views/uikit/povUserring.vue')
                },
                {
                    path: '/uikit/povUserfull',
                    name: 'povUserfull',
                    component: () => import('@/views/uikit/povUserfull.vue')
                },
                {
                    path: '/uikit/landingpage',
                    name: 'Landing page',
                    component: () => import('@/views/uikit/Landingpage.vue')
                },
                {
                    path: '/uikit/About',
                    name: 'About',
                    component: () => import('@/views/uikit/About.vue')
                },
                {
                    path: '/uikit/table',
                    name: 'table',
                    component: () => import('@/views/uikit/Table.vue')
                },
                {
                    path: '/uikit/list',
                    name: 'list',
                    component: () => import('@/views/uikit/List.vue')
                },
                {
                    path: '/uikit/tree',
                    name: 'tree',
                    component: () => import('@/views/uikit/Tree.vue')
                },
                {
                    path: '/uikit/panel',
                    name: 'panel',
                    component: () => import('@/views/uikit/Panels.vue')
                },

                {
                    path: '/uikit/overlay',
                    name: 'overlay',
                    component: () => import('@/views/uikit/Overlay.vue')
                },
                {
                    path: '/uikit/media',
                    name: 'media',
                    component: () => import('@/views/uikit/Media.vue')
                },
                {
                    path: '/uikit/menu',
                    component: () => import('@/views/uikit/Menu.vue'),
                    children: [
                        {
                            path: '/uikit/menu',
                            component: () => import('@/views/uikit/menu/PersonalDemo.vue')
                        },
                        {
                            path: '/uikit/menu/seat',
                            component: () => import('@/views/uikit/menu/SeatDemo.vue')
                        },
                        {
                            path: '/uikit/menu/payment',
                            component: () => import('@/views/uikit/menu/PaymentDemo.vue')
                        },
                        {
                            path: '/uikit/menu/confirmation',
                            component: () => import('@/views/uikit/menu/ConfirmationDemo.vue')
                        }
                    ]
                },
                {
                    path: '/uikit/message',
                    name: 'message',
                    component: () => import('@/views/uikit/Messages.vue')
                },
                {
                    path: '/uikit/file',
                    name: 'file',
                    component: () => import('@/views/uikit/File.vue')
                },
                {
                    path: '/uikit/charts',
                    name: 'charts',
                    component: () => import('@/views/uikit/Chart.vue')
                },
                {
                    path: '/uikit/misc',
                    name: 'misc',
                    component: () => import('@/views/uikit/Misc.vue')
                },
                {
                    path: '/blocks',
                    name: 'blocks',
                    component: () => import('@/views/utilities/Blocks.vue')
                },
                {
                    path: '/utilities/icons',
                    name: 'icons',
                    component: () => import('@/views/utilities/Icons.vue')
                },
                {
                    path: '/pages/timeline',
                    name: 'timeline',
                    component: () => import('@/views/pages/Timeline.vue')
                },
                {
                    path: '/pages/empty',
                    name: 'empty',
                    component: () => import('@/views/pages/Empty.vue')
                },
                {
                    path: '/pages/crud',
                    name: 'crud',
                    component: () => import('@/views/pages/Crud.vue')
                },
                {
                    path: '/documentation',
                    name: 'documentation',
                    component: () => import('@/views/utilities/Documentation.vue')
                }
            ]
        },
        {
            path: '/landing',
            name: 'landing',
            component: () => import('@/views/pages/Landing.vue')
        },
        {
            path: '/pages/notfound ',
            name: 'notfound',
            component: () => import('@/views/pages/NotFound.vue')
        },

        {
            path: '/auth/login',
            name: 'login',
            component: () => import('@/views/pages/auth/Login.vue')
        },
        {
            path: '/auth/access',
            name: 'accessDenied',
            component: () => import('@/views/pages/auth/Access.vue')
        },
        {
            path: '/auth/error',
            name: 'error',
            component: () => import('@/views/pages/auth/Error.vue')
        }
    ]
});

export default router;