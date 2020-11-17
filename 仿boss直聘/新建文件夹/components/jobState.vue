<template>
	<div class='jobState'>
		<van-nav-bar 
			@click-left="closeMaskFn"
			left-arrow />

		<h1 class='titleSty'>管理求职意向</h1>

		<van-nav-bar
			left-text="求职状态"
			:right-text=jobStateObj
			@click-right="openJobStateFn"
			/>

		<van-action-sheet
			v-model="show"
			:actions="actions"
  			@select="onSelect"
  			title='求职状态'
			/>

		<van-divider />

		<van-nav-bar
			left-text="求职期望"
			@click-right="addJobStateFn"
			/>
		<div class='div_p'>求职期望的不同，推荐的职位也会不同</div>

		<div class='jobState_footer'>
			<van-button 
				@click='confirmJobStateBtnFn'
				style="width:3rem;" 
				color="#14c1bb">添加期望</van-button>
		</div>
	</div>
</template>

<script>
import { Toast } from 'vant';

export default{
	name:'jobState',
	data(){
		return{
			msg:'管理求职意向',
			show:false,
			actions: [{ 
					name: '离职-随时到岗',
					is_state:0
				},{ 
					name: '在职-月内到岗',
					is_state:1
				},{ 
					name: '在职-考虑机会',
					is_state:2
				},{
					name:'在职-暂不考虑',
					is_state:3
				}],
			jobStateObj:'请选择>>'
		}
	},
	created(){},
	methods:{
		closeMaskFn(){
			this.$emit('closeJobStateFn')
		},
		openJobStateFn(){
			this.show = true;
		},
		onSelect(item) {
			// 点击选项时默认不会关闭菜单，可以手动关闭
			this.show = false;
			console.log(item.name)
			this.jobStateObj = item.name + '>>';
		},
		// 添加求职期望
		addJobStateFn(){
			console.log( '添加求职期望xxx' )
		},
		// 确认求职期望
		confirmJobStateBtnFn(){
			console.log( '确认求职期望 xxx' )
		}
	}
}
</script>

<style scoped>
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