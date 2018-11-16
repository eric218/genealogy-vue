<template>
    <div>
        <Row :gutter="32" class="videolist">
            <i-col :span="6" v-for="v in data.records" :key="v.id">
                <div class="item">
                    <div class="img" :style="v.fanNewsUploadFile.length ? api.imgBG(v.fanNewsUploadFile[0].filePath) : ''">
                        <img src="@/assets/img/100x100.png" />
                        <div class="hover" @click="toShow(v.fanUploadVedioList[0].filePath)">
                            <Icon type="ios-videocam" />
                        </div>
                    </div>
                    <div class="obj">
                        <div class="tit">{{v.title}}</div>
                        <div class="user">
                            <div class="head"></div>
                            <div class="name">{{v.auth}}</div>
                        </div>
                        <div class="tag">
                            <div class="date">2018-10-10</div>
                            <div class="total">
                                <iconfont name="recordfill" />
                                <span>0</span>
                            </div>
                        </div>
                    </div>
                </div>
            </i-col>
        </Row>
        <Page :total="data.total" />
        <Modal title="查看" v-model="visible" style="text-align:center;" :footer-hide='true' width="630">
            <video width="600" height="480" controls controlsList='nofullscreen nodownload noremote footbar' autoplay v-if="curr">
                <source :src="api.imgurl(curr)" type="video/mp4">
            </video>
        </Modal>
    </div>
</template>
<script>
export default {
    props: ['data'],
    data() {
        return {
            curr: '',
            visible: false,
        }
    },
    methods: {
        toShow(e) {
            console.log(e)
            this.curr = e;
            this.visible = true
        }
    }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/var.scss";
.videolist {
  overflow: hidden;
  padding: 16px 0;

  .item {
    margin: 8px 0;
    position: relative;
    .img {
      position: relative;
      width: 100%;
      background: whitesmoke no-repeat center / cover;
      img {
        width: 100%;
        visibility: hidden;
      }
      .hover {
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        background: rgba(0, 0, 0, 0.8);
        cursor: pointer;
        color: #fff;
        font-size: 48px;
        opacity: 0;
      }
      &:hover {
        .hover {
          opacity: 1;
        }
      }
    }

    .obj {
      .tit {
        font-size: 16px;
        line-height: 40px;
      }

      .user {
        overflow: hidden;
        white-space: nowrap;
        line-height: 32px;

        .head {
          height: 32px;
          width: 32px;
          float: left;
          margin-right: 8px;
          background: whitesmoke;
          border-radius: 50%;
        }
      }

      .tag {
        white-space: nowrap;
        color: #999;

        .date {
          float: right;
        }
      }
    }
  }
}
</style>
