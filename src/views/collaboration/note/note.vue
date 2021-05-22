<template>
<div class="note">
	<div class="note-search">
		<van-search
			v-model="searchValue"
			shape="round"
			background="#1CBBB4"
			placeholder="搜索便签"
		/>
	</div>

	<div class="note-button">
		<van-button round type="info" @click="create">新建</van-button>
	</div>
	
</div>
</template>

<script>
import { Search } from 'vant';
import { Button } from 'vant';

export default {
    data() {
      return {
        searchValue:''
      };
    },
    components:{
      'van-search':Search,
		  'van-button':Button
    },
    method:{
      create(){
        this.$route.push('/collabration/note/edit')
      }
    }
}
</script>

<style lang="scss" scoped>

</style>