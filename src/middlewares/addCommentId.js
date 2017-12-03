import {ADD_ARTICLE_COMMENT} from '../constants'

export default store => next => action => {
    if (action.type !== ADD_ARTICLE_COMMENT) {
        next(action)
        return
    }

    action.payload.comment.id = getId(24)

    next(action)

    function getId(len) {
        const source = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        const comments= store.getState().comments
        let res

        do {
            res = ''
            for (let i = 0; i <= len; i++)
                res += source[Math.round(Math.random() * 61)]
        } while (Object.keys(comments).includes(res))

        return res
    }
}