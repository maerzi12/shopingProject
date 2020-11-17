<!--  -->
<template>
    <div class="notify">
        <van-area :title='title_name'
        :area-list="areaList" value="110101" 
        @change="changeItemFn"
        @cancel='closeCityMaskFn'
        @confirm='selectAreaBtn'
        />
    </div>
</template>

<script>
import area from '../assets/area'

export default {
    name:'area_list', 
        data() {
            return {
                msg:'选择城区组件',
                areaList:area,
                title_name:'请选择省市区',
                           
            }
    },
    //方法
    methods: {
        //改变城市选项时，触发
        changeItemFn(_d){
            // console.log(_d.getValues())
            let _data=_d.getValues()
            this.title_name= _data[0].name + '-' + _data[1].name + '-' +_data[2].name
        },
        //关闭城市选项
        closeCityMaskFn(_d){
            // console.log(_d)
            this.$emit('closeCityMaskFn')
        },
        //选中城市按钮
        selectAreaBtn(_d){
            // console.log(_d[1].name)
            this.$emit('closeCityMaskFn',_d[1].name)
        },

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

</style>