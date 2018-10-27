<template>
    <div class="editor">
        <quill-editor v-model="content" ref="myQuillEditor" :options="editorOption" @blur="onEditorBlur($event)" @focus="onEditorFocus($event)" @change="onEditorChange($event)">
        </quill-editor>
    </div>
</template>
<script>
import { quillEditor } from 'vue-quill-editor'
export default {
    name: "Editor",
    data() {
        return {
            content: null,
            editorOption: {
                placeholder: this.placeholder,
                modules: {
                    toolbar: [['bold', 'italic', 'underline', 'strike'],
                    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                    [{ 'indent': '-1' }, { 'indent': '+1' }],
                    [{ 'direction': 'rtl' }],
                    [{ 'color': [] }, { 'background': [] }],
                    [{ 'align': [] }],
                    ['link', 'image', 'video'], ['clean']]
                }
            }
        }
    },
    methods: {
        onEditorBlur() {
        },
        onEditorFocus() {
        },
        onEditorChange() {
        }
    },
    props: {
        placeholder: {
            default: '请输入正文...'
        }
    }
}
</script>
