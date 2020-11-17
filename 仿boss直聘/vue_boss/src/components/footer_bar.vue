<!--  -->
<template>
    <div>
        <van-tabbar v-model="active">
			<van-tabbar-item icon="home-o">职位</van-tabbar-item>
			<van-tabbar-item icon="search">发现</van-tabbar-item>
			<van-tabbar-item icon="friends-o">消息</van-tabbar-item>
			<van-tabbar-item icon="setting-o">我的</van-tabbar-item>
		</van-tabbar>
    </div>
</template>

<script>
export default {
    name:'footer_bar', 
        data() {
            return {
                msg:'footer_bar',
                active: 0,
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

    },
}
</script>
<style scoped>
/* @import url(); 引入css类 */

</style>