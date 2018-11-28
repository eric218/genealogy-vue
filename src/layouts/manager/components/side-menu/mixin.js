import CommonIcon from '_c/common-icon'
export default {
    components: {
        CommonIcon
    },
    computed: {
        user() {
            return
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
            if (this.user && this.user.role == 9) {
                return true
            }
            return false
        },
    }
}