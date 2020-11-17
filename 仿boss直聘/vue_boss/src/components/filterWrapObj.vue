<!--  -->
<template>
    <div>
        <van-nav-bar title="筛选" >
            <template #left>
                <van-icon name="cross" size="18" @click="closeFilterWrap" />               
            </template>
        </van-nav-bar>
        <div class="gridTitle">学历要求</div>
            <van-grid :column-num="3" :gutter="10">
                <van-grid-item @click="itemBtnClick($event)" text="初中及以下" />
                <van-grid-item @click="itemBtnClick($event)" text="不限" />
                <van-grid-item @click="itemBtnClick($event)" text="高中" />
                <van-grid-item @click="itemBtnClick($event)" text="中专/中技" />
                <van-grid-item @click="itemBtnClick($event)" text="大专" />
                <van-grid-item @click="itemBtnClick($event)" text="本科" />
                <van-grid-item @click="itemBtnClick($event)" text="硕士" />
                <van-grid-item @click="itemBtnClick($event)" text="博士" />
            </van-grid>
        <div class="gridTitle">薪资待遇(单选)</div>
            <van-grid :column-num="3" :gutter="10">
                <van-grid-item @click="itemBtnClick($event)" text="3K以下" />
                <van-grid-item @click="itemBtnClick($event)" text="不限" />
                <van-grid-item @click="itemBtnClick($event)" text="3-5K" />
                <van-grid-item @click="itemBtnClick($event)" text="5-10K" />
                <van-grid-item @click="itemBtnClick($event)" text=10-20K />
                <van-grid-item @click="itemBtnClick($event)" text="20-50K" />
                <van-grid-item @click="itemBtnClick($event)" text="50K以上" />
            </van-grid>

        <!-- 确定清除按钮 -->
        <div class="filter_footer">
            <van-button plain type="primary">清除</van-button>
            <van-button plain type="info" @click="confirmBtn">确定</van-button>
        </div>
    </div>
</template>

<script>
import '../assets/reset_vant.css'

export default {
    name:'filterWrapObj', 
        data() {
        return {
            msg:'展示筛选',
            filter_resule:[],
        }
    },
    //方法
    methods: {
        closeFilterWrap(){
            console.log('关闭筛选')
            this.$emit('closeFilterWrap')
        },
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

			if( _is ) {
				// 有就删除
				for(let i=0;i<this.filter_resule.length;i++){
                    if(this.filter_resule[i]==_txt){
                        this.filter_resule.splice(i,1)
                       
                    }
                }
			}else{
                // 没找着，就要添加class：van_grid_item_focus，定义在reset_vant.css里
                _clsArr.push('van_grid_item_focus');
                //这个是把筛选条件保存到数组
                this.filter_resule.push(_txt)
            }

			// console.log( _clsArr )
			// 再把class名写回class属性里
			let _cls_txt = _clsArr.join(' ');
			$e.target.setAttribute('class', _cls_txt);
        },
        confirmBtn(){
            console.log(this.filter_resule)
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
.gridTitle{
    padding: .2rem .2rem;
    clear: both;font-size: .3rem; font-weight: bold;
}
.gridTitle label{font-weight: normal;font-size: .2rem;padding: 0 10px;}
.filter_footer{
    text-align: center;margin-top: 1rem;width: 100%;
}
</style>