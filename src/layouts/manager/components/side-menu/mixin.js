import {
    oneOf
} from '@/libs/tools'
import CommonIcon from '_c/common-icon'
export default {
    components: {
        CommonIcon
    },
    computed: {
        user() {
            return this.$store.state.user
        },
    },
    methods: {
        showTitle(item) {
            return ((item.meta && item.meta.title) || item.name)
        },
        showChildren(item) {
            return item.children && (item.children.length > 1 || (item.meta && item.meta.showAlways))
        },
        getNameOrHref(item, children0) {
            return item.href ? `isTurnByHref_${item.href}` : (children0 ? item.children[0].name : item.name)
        },
        showRoleMax(item) {
            if (item.meta.role && this.user.role) {
                // return !oneOf(this.user.role, item.meta.role)
                if (this.user.role != item.meta.role) {
                    return false
                }
            }
            return true
        },
    }
}