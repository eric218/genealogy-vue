<template>
    <div>
        <Row :gutter="16">
            <i-col :span="8">
                <Card style="height:160px">
                    <p slot="title">姓氏图腾</p>
                    <Upload multiple type="drag" action="//jsonplaceholder.typicode.com/posts/">
                        <div style="padding:20px 0">
                            <Icon type="ios-cloud-upload" size="32" style="color: #3399ff"></Icon>
                            <span>点击上传</span>
                        </div>
                    </Upload>
                </Card>
                <Card style="margin:16px 0;height:160px;">
                    <p slot="title">简介</p>
                    <a href="#" slot="extra">编辑</a>
                    <p>
                        dasasdsasasa
                    </p>
                </Card>
            </i-col>
            <i-col :span="8">
                <Card style="height:160px">
                    <p slot="title">宣言</p>
                    <a href="#" slot="extra">编辑</a>
                    <p>
                        dasasdsasasa
                    </p>
                </Card>
                <Card style="margin:16px 0;height:160px;">
                    <p slot="title">线下捐款</p>
                    <Form inline>
                        <FormItem prop="user">
                            <i-input type="text" placeholder="请输入金额">
                                <Icon type="logo-yen" slot="prepend"></Icon>
                            </i-input>
                        </FormItem>
                        <FormItem>
                            <Button type="primary">增加</Button>
                        </FormItem>
                        <FormItem>
                            <Button>减少</Button>
                        </FormItem>
                    </Form>
                </Card>
            </i-col>
            <i-col :span="8">
                <Card style="height:336px">
                    <p slot="title">联谊会概况[18个]</p>
                    <Button type="warning" slot="extra" size="small">添加</Button>
                    <Table />
                </Card>
            </i-col>
        </Row>
        <Row :gutter="16">
            <i-col :span="12">
                <Card style="height:336px">
                    <p slot="title">文章审核</p>
                    <Table />
                </Card>
            </i-col>
            <i-col :span="12">
                <Card style="height:336px">
                    <p slot="title">聊天记录审核</p>
                    <Table />
                </Card>
            </i-col>
        </Row>
    </div>
</template>

<script>
export default {
    name: 'home',
    components: {
    },
    data() {
        return {
        }
    },
    mounted() {
    }
}
</script>
