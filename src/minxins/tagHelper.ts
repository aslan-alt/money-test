import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export class TagHelper extends Vue {
    createTag() {
        const name = window.prompt("请输入标签名");
        if (name) {
            if (name !== '') {
                this.$store.commit('createTags', name)
            } else {
                alert('内容不能为空')
            }
        }
    }
}
export default TagHelper