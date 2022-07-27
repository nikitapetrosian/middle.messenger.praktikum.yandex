import {
    mainTemplate,
    chatTemplate,
    editPasswordTemplate,
    editProfileTemplate,
    errorTemplate,
    signInTemplate,
    signUpTemplate,
} from './templates'
const root = document.querySelector('#root');
const { pathname } = window.location


const routes = [
    {
        link: '/',
        title: 'Главная',
        template: mainTemplate()
    },
    {
        link: '/chat',
        title: 'Чат',
        template: chatTemplate()
    },
    {
        link: '/sign-up',
        title: 'Sign-up',
        template: signUpTemplate()
    },
    {
        link: '/sign-in',
        title: 'Sign-in',
        template: signInTemplate()
    },
    {
        link: '/profile',
        title: 'Profile',
        template: editProfileTemplate()
    },
    {
        link: '/password',
        title: 'Password',
        template: editPasswordTemplate()
    },
    {
        link: '/500',
        title: 'Ошибка',
        template: errorTemplate({ code: 500 })
    }
]

window.addEventListener('DOMContentLoaded', () => {
    routes.find((route) => {
        if (route.link === pathname) {
            root.innerHTML = route.template
            window.document.title = `${route.title} `
            return true
        } else {
            window.document.title = '404 | Telechat'
            root.innerHTML = errorTemplate()
        }
    })
})
