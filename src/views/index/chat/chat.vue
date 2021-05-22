<template>
	<div>
		<div class="cu-chat">
			<div class="cu-item self">
				<div class="main">
					<div class="content bg-green shadow">
						<text>早上好！</text>
					</div>
				</div>
				<div class="cu-avatar radius" :style="{'background-image':me}"></div>
				<div class="date">10:23</div>
			</div>
			<!-- <div class="cu-info round">对方撤回一条消息!</div> -->
			<div class="cu-item">
				<div class="cu-avatar radius" :style="{'background-image':opposite}"></div>
				<div class="main">
					<div class="content shadow">
						<text>Jason早上好呀！</text>
					</div>
				</div>
				<div class="date "> 10:29</div>
			</div>
			<!-- <div class="cu-info">
				<text class="cuIcon-roundclosefill text-red "></text> 对方拒绝了你的消息
			</div> -->
			<!-- <div class="cu-info">
				对方开启了好友验证，你还不是他(她)的好友。请先发送好友验证请求，对方验证通过后，才能聊天。
				<text class="text-blue">发送好友验证</text>
			</div> -->
			<div class="cu-item self">
				<div class="main">
					<image src="http://icon.tanyang.asia/cor.jpeg" class="radius" mode="widthFix"></image>
				</div>
				<div class="cu-avatar radius" :style="{'background-image':me}"></div>
				<div class="date"> 10:35</div>
			</div>
			<!-- <div class="cu-item self">
				<div class="main">
					<div class="action text-bold text-grey">
						3"
					</div>
					<div class="content shadow">
						<text class="cuIcon-sound text-xxl padding-right-xl"> </text>
					</div>
				</div>
				<div class="cu-avatar radius" :style="{'background-image':me}"></div>
				<div class="date">13:23</div>
			</div> -->
			<div class="cu-item self">
				<div class="main">
					<!-- <div class="action">
						<text class="cuIcon-locationfill text-orange text-xxl"></text>
					</div> -->
					<div class="content shadow">
						我到公司门口啦~
					</div>
				</div>
				<div class="cu-avatar radius" :style="{'background-image':me}"></div>
				<div class="date">10:35</div>
			</div>
			<div class="cu-item">
				<div class="cu-avatar radius" :style="{'background-image':opposite}"></div>
				<div class="main">
					<div class="content shadow">
						好的，一会儿见~
					</div>
					<!-- <div class="action text-grey">
						<text class="cuIcon-warnfill text-red text-xxl"></text> <text class="text-sm margin-left-sm">翻译错误</text>
					</div> -->
				</div>
				<div class="date">10:38</div>
			</div>
      <div class="cu-item self">
				<div class="main">
					<!-- <div class="action">
						<text class="cuIcon-locationfill text-orange text-xxl"></text>
					</div> -->
					<div class="content shadow">
						等会儿我们对一下项目
					</div>
				</div>
				<div class="cu-avatar radius" :style="{'background-image':me}"></div>
				<div class="date">10:40</div>
			</div>
      <div class="cu-item">
				<div class="cu-avatar radius" :style="{'background-image':opposite}"></div>
				<div class="main">
					<div class="content shadow">
						我等下还有个别的会议要开呢
					</div>
					<!-- <div class="action text-grey">
						<text class="cuIcon-warnfill text-red text-xxl"></text> <text class="text-sm margin-left-sm">翻译错误</text>
					</div> -->
				</div>
				<div class="date">10:41</div>
			</div>
      <div class="cu-item self">
				<div class="main">
					<!-- <div class="action">
						<text class="cuIcon-locationfill text-orange text-xxl"></text>
					</div> -->
					<div class="content shadow">
						好的，那我们换个时间
					</div>
				</div>
				<div class="cu-avatar radius" :style="{'background-image':me}"></div>
				<div class="date">10:41</div>
			</div>
      <div class="cu-item">
				<div class="cu-avatar radius" :style="{'background-image':opposite}"></div>
				<div class="main">
					<div class="content shadow">
						OK
					</div>
					<!-- <div class="action text-grey">
						<text class="cuIcon-warnfill text-red text-xxl"></text> <text class="text-sm margin-left-sm">翻译错误</text>
					</div> -->
				</div>
				<div class="date">10:42</div>
			</div>
		</div>

		<div class="cu-bar foot input" :style="[{bottom:InputBottom+'px'}]">
			<div class="action">
				<text class="cuIcon-sound text-grey"></text>
			</div>
			<input class="solid-bottom" :adjust-position="false" :focus="false" maxlength="300" cursor-spacing="10"
			 @focus="InputFocus" @blur="InputBlur">
			<div class="action">
				<text class="cuIcon-emojifill text-grey"></text>
			</div>
			<button class="cu-btn bg-green shadow">发送</button>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				InputBottom: 0,
        me:'url(http://icon.tanyang.asia/me.jpeg)',
        opposite: 'url(http://icon.tanyang.asia/mingren.jpeg)'
			};
		},
		methods: {
			InputFocus(e) {
				this.InputBottom = e.detail.height
			},
			InputBlur(e) {
				this.InputBottom = 0
			}
		}
	}
</script>

<style>
page{
  padding-bottom: 100upx;
}
</style>
