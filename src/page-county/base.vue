<template>
    <Layout>
        <Content>
            <div style="padding:64px;width:320px;margin:64px auto;">
                <Form :model="form" :label-width="80">
                    <FormItem label="网站id">
                        <Input type="text" v-model.number="form.siteid" placeholder="网站id" :maxlength="5"/>
                    </FormItem>
                    <FormItem>
                        <Button type="primary" @click="handleSubmit()">进入</Button>
                    </FormItem>
                </Form>
            </div>
        </Content>
    </Layout>
</template>


<script>
export default {
    data() {
        return {
            form: {
                siteid: '',
            },
        };
    },
    computed: {
    },
    mounted: function () {
    },
    methods: {
        handleSubmit() {
            if (!this.form.siteid) {
                this.$Modal.warning({
                    title: '提示',
                    content: '请输入网站id'
                });
                return;
            }
            this.$store.commit('updateSiteid', this.form.siteid);
            this.$router.push('/c');
        }
    }
};
</script>