<template>
    <footer>
        <div class="links">
            <img src="@/assets/img/copyright-logo.png" class="logo" />
            <a href="/">友情链接</a>
            <span>|</span>
            <a href="/">相关链接</a>
            <span>|</span>
            <a href="/">帮助我们</a>
            <span>|</span>
            <a href="/">关注我们</a>
            <span>|</span>
            <a href="/">联系我们</a>
        </div>
        <div class="coptrights">炎黄统谱网Copyright @ 2010 yhtpw.com inc.All rights reserved. 鄂ICP备14014437号-2
        </div>
    </footer>
</template>
<script>
export default {
    name: "FootBar",
};
</script>
<style lang="scss" scoped>
footer {
  background-color: #212425;
  position: relative;
  text-align: center;
  color: #999;
  padding: 32px;

  .links {
    padding: 16px;

    .logo {
      margin-right: 20px;
    }

    a {
      font-weight: 700;
      color: #fff;
    }

    span {
      margin: 0 10px;
    }
  }
}
</style>
