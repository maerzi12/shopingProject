<!--  -->
<template>
    <div class="jobItems">
        <h1>{{itemObj.title}} {{itemObj.salary}}</h1>
        <p>{{itemObj.h2_txt}} </p>
        <ul class="areaUl">
            <li v-for="n in itemObj.area" :key="n.id">{{n}} </li>
        </ul>
        <label>{{itemObj.hr.hr_txt}} </label>
        <span>{{itemObj.salary}} </span>
    </div>
</template>

<script>


export default {
name:'job_item', 
    data() {
        return {
            msg:'具体职位列表',
        }
    },
    props:['itemObj'],
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
.jobItems{
	padding: .3rem 0;border-bottom: .1rem solid #eaeaea;position: relative;
}
ul.areaUl{height: .3rem;margin: 0 0 .2rem .2rem;}
ul.areaUl li{float: left;margin-right: .1rem;
background: #f2f3f5;padding:.02rem .07rem;color: #666;font-size: .1rem;}

.jobItems h1{font-size: .25rem;font-weight: bold;margin:0 0 .1rem .2rem;}
.jobItems p{font-size: .2rem;color: #666;margin:0 0 .1rem .2rem;}
.jobItems label{font-size: .2rem;color: #666;margin:0 0 .1rem .2rem;}
.jobItems span{font-size: .25rem;color: #14c1bb;position: absolute;top: .3rem;right: .3rem;}

</style>

"xPath": "/de[fn:matches(@text,'中国.*')]/../../following-sibling::node[4]de[@text='卖出']",