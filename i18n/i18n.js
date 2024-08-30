import {createI18n} from "vue-i18n";
import zh from './ja.js'

const i18n = createI18n({
    legacy: false, 
    locale: 'ja', // 默认语言
    globalInjection: true, // 全局注册$t方法
    messages: {
        ja,
    }
})

export default i18n
