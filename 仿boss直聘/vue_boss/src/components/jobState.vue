<!--  -->
<template>
    <div>
        <van-nav-bar
            left-text=""           
            left-arrow
            @click-left="closeMaskFn"       
        />
        <h1 class="titleSty">求职意向管理 </h1>
        
        <!-- 切换求职状态，按钮 -->
        <van-nav-bar
            left-text="求职状态"
            :right-text=selectFn 
            @click-left="xxx"
            @click-right="openJobStateFn"        
        />

       <van-action-sheet v-model="show" :actions="actions" @select="onSelect" />
        <!-- 求职状态的列表，从下向上升起 -->
    </div>
</template>

<script>
import { Toast } from 'vant';

export default {
    name:'jobState', 
    data() {
        return {
            msg:'求职意向管理',
            show: false,
            selectFn:'请选择>>',
            actions: [
                { name: '离职-随时到岗', is_state:0 }, 
                { name: '在职-月内到岗', is_state:1 }, 
                { name: '在职-考虑机会', is_state:2 },
                { name: '在职-暂不考虑', is_state:3 },
                ],
            }
    },
    //方法
    methods: {
        closeMaskFn(){
            this.$emit('closeMaskFn')
        },
        openJobStateFn(){
            // console.log(this.actions)
            this.show = true
        },
        onSelect(item) {
            console.log(item.name)
            // 默认情况下点击选项时不会自动收起
            // 可以通过 close-on-click-action 属性开启自动收起
            this.show = false;
            Toast(item.name);
            this.selectFn=item.name+ ">>"
            },
        xxx(){},
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
.titleSty{font-size: .3rem;font-weight: bold;margin-left: .3rem;
	white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
}

.div_p{
	font-size: .1rem;color: #969696;margin-left: .25rem;
	white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
}
.jobState{
	white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
}
.jobState_footer{text-align: center;margin: 2rem 0;}
</style>