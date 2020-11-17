<!--  -->
<template>
    <div class="notify">
        {{msg}}
        <van-loading />
    </div>
</template>

<script>
export default {
    name:'notify', 
    data() {
        return {
            msg:'notify提示组件，职位已经更新'
        }
    },
    //方法
    methods: {

    },
    //生命周期 - 创建完成（访问当前this实例）
    created() {

    },
    //生命周期 - 挂载完成（访问DOM元素）
    mounted() {

    }
}
</script>
<style scoped>
/* @import url(); 引入css类 */
.notify{
    width: 100%;height: .5rem;background: #14c1bb;
    text-align: center;line-height: .5rem;
    color: #fff;font-size: .21rem;
    position: absolute;top: 1rem;z-index: 10;

    animation: notify_show .5s;
    animation-delay: 1.5s;
    animation-fill-mode: forwards;
}

@keyframes notify_show{
    from {height: .5rem;}
    to {height: 0;}
}

</style>