<!--  -->
<template>
    <div> 
		<van-sticky>			
			<van-nav-bar class="bar_sty" title="" left-text="返回" left-arrow>
				<template #right>
					<van-icon @click="jobStateOpen" name="plus" />
					<van-icon name="search" size=25px />          
				</template>
			</van-nav-bar>

			<div class="title_menu">
				<van-button  size="mini" class="miniBtn" @click="notifyFnBtn">推荐</van-button>
				<van-button  size="mini" class="miniBtn" >附近</van-button>
				<van-button  size="mini" class="miniBtn" @click="notifyFnBtn">最新</van-button>
				
				<van-button  size="mini" class="filterBtn" @click="notifyFnBtn">最新</van-button>

				<!-- //筛选 -->
				<van-button  size="mini" class="filterBtn"
					@click="openFilterMaskFn" >筛选</van-button>
				
				<!-- 城市选择 -->
				<van-button  size="mini" class="filterBtn" 
					@click="openMaskFn">{{defaulCity}}</van-button>
			</div> 
			<!-- notify提示 -->
			<notify v-show="notifyShow" />
		</van-sticky>
		
        <!-- 职位列表 -->
        <div>
			<!-- 下拉刷新 -->
			<van-pull-refresh v-model="isLoading" @refresh="onRefresh" success-text="刷新成功">	
            	<job_item v-for="(n,inx) in jobsData" :itemObj=n :key=inx></job_item>
			</van-pull-refresh>
        </div>

		<!-- 城市操作wrap -->
		<div v-show="is_cityMaskObj" 
		@touchmove.prevent @mousewheel.prevent :class="maskClassName">
			<area_list @closeCityMaskFn='hideMaskFn($event)' />
		</div>

		<!-- 底部导航栏 -->
		<footer_bar />

		<!-- 筛选功能 @touchmove.prevent @mousewheel.prevent禁止拖动 滑动-->
		<div v-show="is_filter" 
		@touchmove.prevent @mousewheel.prevent
		:class="filterclassname">
			<filterWrapObj @closeFilterWrap='closeFilterMask' />
		</div>

		<!-- 求职意向 -->
		<div v-show="is_jobState" @touchmove.prevent @mousewheel.prevent
		:class="jobStateclassname">
			<jobState @closeMaskFn='jobStateClose' />
		</div>
		

    </div>
</template>

<script>
import { Toast } from 'vant'
import job_item from './job_item'
import footer_bar from './footer_bar'
import notify from './notify'
import area_list from './area_list'
import filterWrapObj from './filterWrapObj'
import jobState from './jobState'



export default {
    name:'index_jobList', 
    data(){
		return{
			msg:'职位列表',
			// 用于js查找div
			maskClassName:'mask_aaa',
			// 用于js查找div
			filterclassname:'mask_filter',
			// 用于js查找div
			jobStateclassname:'mask_jobState',
			is_cityMaskObj:false,
			is_filter:false,
			is_jobState:false,

			notifyShow:false,
			count: 0,
			defaulCity:'沈阳',
      		isLoading: false,
			jobsData:[
                {
				title:'web前端',
				h2_txt:'什么祥 未融资',
				area:['沈阳 和平区','经验不限','本科'],
				hr:{
					img_avatar:'',
					hr_txt:'海峰-招聘者'
				},
				salary:'5-6K'
				},{
				title:'软件开发工程师',
				h2_txt:'牛万科技 未融资',
				area:['沈阳 沈河区','1-3年','学历不限'],
				hr:{
					img_avatar:'',
					hr_txt:'海峰-招聘者'
				},
				salary:'3-8K'
				},{
				title:'前端工程师',
				h2_txt:'成林健康科技 未融资',
				area:['沈阳 皇姑区','经验不限','本科'],
				hr:{
					img_avatar:'',
					hr_txt:'马xx-从事招聘专员'
				},
				salary:'5-6K'
				},{
				title:'前端开发工程师',
				h2_txt:'师福教育 未融资',
				area:['沈阳 沈河区','3-5年','学历不限'],
				hr:{
					img_avatar:'',
					hr_txt:'杨女士 - 人事'
				},
				salary:'5-8K'
				},{
				title:'前端工程师',
				h2_txt:'成林健康科技 未融资',
				area:['沈阳 皇姑区','经验不限','本科'],
				hr:{
					img_avatar:'',
					hr_txt:'马xx-从事招聘专员'
				},
				salary:'5-6K'
				},{
				title:'前端技术经理',
				h2_txt:'星擎科技 未融资',
				area:['沈阳 铁西区','5-10年','本科'],
				hr:{
					img_avatar:'',
					hr_txt:'潘舒-CEO'
				},
				salary:'6-11K'
				},{
				title:'web前端',
				h2_txt:'什么祥 未融资',
				area:['沈阳 和平区','经验不限','本科'],
				hr:{
					img_avatar:'',
					hr_txt:'海峰-招聘者'
				},
				salary:'5-6K'
            }
            ]
		}
},
//方法
methods: {
    onClickLeft() {
      Toast('返回');
    },
    onClickRight() {
      Toast('按钮');
	},
	notifyFnBtn(){
		this.notifyShow=true
		//当css3动画结束，要如何如何
		let _notify = document.querySelector('.notify')
		// console.log(_notify)
		// webkitAnimationEnd,是css3动画结束事件
		_notify.addEventListener('webkitAnimationEnd',()=>{
			this.notifyShow=false
		})
	},
	//下拉刷新
	onRefresh() {
      setTimeout(() => {
        Toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 1000);
	},
	//打开城市选择面板
	openMaskFn(){
		// console.log(document.querySelector('.mask_aaa'))
		this.is_cityMaskObj=true
		this.maskClassName='mask_aaa cityEditWrapObj_open'

		//需要监听css3动画结束之后，在隐藏城市选择面板
		let _mask=document.querySelector('.mask_aaa')
		_mask.addEventListener('webkitAnimationEnd',()=>{
			this.is_cityMaskObj=true
		})
	},
	//关闭城市选择面板
	hideMaskFn(_cityName){
		// console.log(_cityName)
		this.defaulCity=_cityName
		this.maskClassName='mask_aaa cityEditWrapObj_close'
		
		//需要监听css3动画结束之后，在隐藏城市选择面板
		let _mask=document.querySelector('.mask_aaa')
		_mask.addEventListener('webkitAnimationEnd',()=>{
			this.is_cityMaskObj=false
		})
	},
	//筛选  打开筛选面板
	openFilterMaskFn(){
		// console.log(document.querySelector('.mask_aaa'))
		this.is_filter=true
		this.filterclassname='mask_filter filter_open'

		//需要监听css3动画结束之后，在隐藏城市选择面板
		let _mask=document.querySelector('.mask_filter')
		_mask.addEventListener('webkitAnimationEnd',()=>{
			this.is_filter=true
		})
	},
	//筛选 关闭筛选面板
	closeFilterMask(){
		
		this.filterclassname='mask_filter filter_close'

		//需要监听css3动画结束之后，在隐藏城市选择面板
		let _mask=document.querySelector('.mask_filter')
		_mask.addEventListener('webkitAnimationEnd',()=>{
			this.is_filter=false
		})
	},


	//求职状态管理,开启
	jobStateOpen(){
		// console.log('xxx')
		this.is_jobState=true
		this.jobStateclassname='mask_jobState jobState_open'

		//需要监听css3动画结束之后，在隐藏城市选择面板
		let _mask=document.querySelector('.mask_jobState')
		_mask.addEventListener('webkitAnimationEnd',()=>{
			this.is_jobState=true
		})
	},

	//关闭
	jobStateClose(){
		// console.log('xxx')
		
		this.jobStateclassname='mask_jobState jobState_close'

		//需要监听css3动画结束之后，在隐藏城市选择面板
		let _mask=document.querySelector('.mask_jobState')
		_mask.addEventListener('webkitAnimationEnd',()=>{
			this.is_jobState=false
		})
	},
},
components:{job_item,footer_bar,notify,area_list,filterWrapObj,jobState},
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
.bar_sty{
    background:#14c1bb;
}
.van-icon-plus:before{
    color: #fff;font-size:.4rem;margin-right: .1rem;
    border-right: 1px solid #c1c1c1;padding-right: .1rem;
}
.van-nav-bar_text{
    font-size:.35rem;color: #fff;
}
.miniBtn{
    float:left;border:0;margin: .1rem 0 0 0;
}
.filterBtn{
    float:right;border: 0;margin: .1rem .1rem 0 0;
    background: #f2f3f5;
}
.title_menu{
    background: #fff;height: .6rem;
}
.cityEditWrapObj_open{
	width: 100%;height: 100%;background: #fff;position: absolute;left: 0;bottom: 0;
	z-index: 3333;
	animation:cityEditWrapObjAnimation_open .7s
}

.cityEditWrapObj_close{
	width: 100%;height: 100%;background: #fff;position: absolute;left: 0;bottom: 0;
	z-index: 3333;
	animation:cityEditWrapObjAnimation_close .7s
}

.filter_open{
	width: 100%;height: 100%;background: #fff;position: absolute;left: 0;bottom: 0;
	z-index: 3333;
	animation:cityEditWrapObjAnimation_open .7s
}
.filter_close{
	width: 100%;height: 100%;background: #fff;position: absolute;left: 0;bottom: 0;
	z-index: 3333;
	animation:cityEditWrapObjAnimation_close .7s
}

@keyframes cityEditWrapObjAnimation_open{
	from{heiht:0}
	to {height: 100%;}
}

@keyframes cityEditWrapObjAnimation_close{
	from{heiht:100%}
	to {height: 0;}
}

.jobState_open{
	width: 100%;height: 100%;background: #fff;position: absolute;left: 0;bottom: 0;
	z-index: 3333;
	animation:Animation_open .7s
}
.jobState_close{
	width: 100%;height: 100%;background: #fff;position: absolute;left: 0;bottom: 0;
	z-index: 3333;
	animation:Animation_close .7s
}

@keyframes Animation_open{
	from{width: 0;left: 100%;}
	to {width: 100%;left: 0;}
}

@keyframes Animation_close{
	from{width: 100%;left: 0;}
	to {width: 0;left: 100%;}
}
</style>