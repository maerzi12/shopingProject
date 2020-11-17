<template>
	<div style='height:100%;'>
		<van-nav-bar :title='title_name'>
			<van-icon @click='closeFilterWrap' size=".4rem" name="cross" slot="left" />
		</van-nav-bar>

		<div class='gridTitle'>学历要求</div>
		<van-grid :column-num='3' :gutter="10">
			<van-grid-item @click='itemBtnClick($event)' text="全部" />
			<van-grid-item @click='itemBtnClick($event)' text="初中" />
			<van-grid-item @click='itemBtnClick($event)' text="高中" />
			<van-grid-item @click='itemBtnClick($event)' text="大学" />
		</van-grid>

		<div class='gridTitle'>薪资待遇<label>(单选)</label></div>
		<van-grid :column-num='3' :gutter="10">
			<van-grid-item @click='itemBtnClick($event)' text="8K" />
			<van-grid-item @click='itemBtnClick($event)' text="10K" />
			<van-grid-item @click='itemBtnClick($event)' text="15K" />
			<van-grid-item @click='itemBtnClick($event)' text="20K" />
			<van-grid-item @click='itemBtnClick($event)' text="20K+" />
		</van-grid>

		<div class='gridTitle'>经验要求</div>
		<van-grid :column-num='3' :gutter="10">
			<van-grid-item @click='itemBtnClick($event)' text="应届" />
			<van-grid-item @click='itemBtnClick($event)' text="三年" />
			<van-grid-item @click='itemBtnClick($event)' text="五年" />
		</van-grid>

		<div class='filter_footer'>
			<van-button 
				@click='resetOptionBtn'
				class='clearBtn' color="#eee" type="default">清除</van-button>
			<van-button 
				@click='confirmBtnFn'
				style="width:3rem;" 
				color="#14c1bb">确定</van-button>
		</div>
	</div>
</template>

<script>
// 重置一些 vant 的样式
import '../assets/reset_vant.css'

export default{
	name:'filterWrapObj',
	data(){
		return{
			title_name:'筛选组件',
			isBtn_touchClass:false,
			switchClass:'',
			optionArr:[]
		}
	},
	created(){},
	methods:{
		closeFilterWrap(){
			this.$emit('closeFilterWrap')
		},
		// 按钮状态切换
		itemBtnClick($e){
			// 切换 class
			// console.log( $e.target.innerText)
			let _txt = $e.target.innerText;
			let _cls = $e.target.getAttribute('class');
			let _clsArr = _cls.split(' ');// 字符串转数组
			let _is = false;//没有添加class

			// console.log( _clsArr )

			for(let i=0; i<_clsArr.length; i++){
				if( _clsArr[i] == 'van_grid_item_focus' ){
					_clsArr.splice( i, 1);
					_is = true;
					break;
				}
				_is = false;
			}

			if( !_is ) {
				// 没找着，就要添加class：van_grid_item_focus，定义在reset_vant.css里
				_clsArr.push('van_grid_item_focus');
			}

			// console.log( _clsArr )
			// 再把class名写回class属性里
			let _cls_txt = _clsArr.join(' ');
			$e.target.setAttribute('class', _cls_txt);
		},
		// 确认按钮
		confirmBtnFn(){
			this.optionArr = []; //每次统计之前重置
			// console.log( document.querySelectorAll('.van-grid')[0].children[1].innerText )
			let _grid = document.querySelectorAll('.van-grid');
			for(let i=0; i<_grid.length; i++){
				for(let j=0; j<_grid[i].children.length; j++){
					// 获得所有选项的class
					// console.log(_grid[i].children[j].children[0].getAttribute('class'))
					let _cls = _grid[i].children[j].children[0].getAttribute('class');
					if( _cls.indexOf('van_grid_item_focus') !== -1 ){
						this.optionArr.push(_grid[i].children[j].innerText);
					}
				}
			}
			console.log( this.optionArr )
		},
		// 清除按钮
		resetOptionBtn(){
			this.optionArr = [];
			let _grid = document.querySelectorAll('.van-grid');
			for(let i=0; i<_grid.length; i++){
				for(let j=0; j<_grid[i].children.length; j++){
					let _cls = _grid[i].children[j].children[0].getAttribute('class');
					if( _cls.indexOf('van_grid_item_focus') !== -1 ){
						// 这里获得、删除、写回class的js操作太复杂，咱们就直接把class属性写回就可以了
						_grid[i].children[j].children[0].setAttribute('class','van-grid-item__content van-grid-item__content--center van-grid-item__content--surround van-hairline')
					}
				}
			}
		}
	}
}
</script>

<style scoped>
.gridTitle{
	padding: .2rem .2rem;clear: both;font-size: .3rem;font-weight: bold;
}
.gridTitle label{font-weight: normal;font-size: .2rem;padding: 0 10px;}
.filter_footer{
	text-align: center;margin-top: 1rem;
	width: 100%;
}
</style>