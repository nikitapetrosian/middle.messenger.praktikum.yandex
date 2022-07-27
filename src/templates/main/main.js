import template from './main.hbs'
import { link } from '../../components'
import * as styles from './main.module.scss'

export const mainTemplate = (props = {}) => {
    const initialProps = {
        styles,
        links: [
            link({
                title: 'Войти',
                url: '/sign-in',
            }),
            link({
                title: 'Регистрация',
                url: '/sign-up',
            }),
            link({
                title: 'К списку чатов',
                url: '/chat',
            }),
            link({
                title: 'Личный кабинет',
                url: '/profile',
            }),
            link({
                title: 'Изменить пароль',
                url: '/password',
            }),
            link({
                title: 'Ошибка 500',
                url: '/500',
            }),
            link({
                title: 'Ошибка 404',
                url: '/404',
            }),
        ],
        ...props,
    }

    return template({ ...initialProps })
}
