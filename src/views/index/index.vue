<template>
  <div class="message">
    <van-swipe-cell>
      <van-cell title="单元格" />
      <template #title>
        <van-image
          width="100"
          height="100"
          src="http://icon.tanyang.asia/t0"
        />
      </template>
      <template #right>
        <van-button square type="danger" text="删除" />
        <van-button square type="primary" text="置顶" />
      </template>
    </van-swipe-cell>
    <!-- <div class="cu-list menu-avatar">
      <div
        class="cu-item"
        :class="modalName == 'move-box-' + index ? 'move-cur' : ''"
        v-for="(item, index) in messageArray"
        :key="index"
        @click="toChat"
        @touchstart="ListTouchStart"
        @touchmove="ListTouchMove"
        @touchend="ListTouchEnd"
        :data-target="'move-box-' + index"
      >
        <div
          class="message-avatar cu-avatar round lg"
          :style="[
            {
              backgroundImage:
                'url(http://icon.tanyang.asia/t0' +
                (index) +
                '.jpeg)'
            }
          ]"
        ></div>
        <div class="message-content">
          <div class="text-grey">
            {{ item.name }}
            <span class="text-grey text-xs message-time">{{ item.time }}</span>
          </div>
          <div class="text-gray text-sm"> -->
    <!-- <text v-if="item.failure"
						class="cuIcon-infofill text-red margin-right-xs"></text> -->
    <!-- <text
              :class="{
                'cuIcon-infofill': item.failure,
                'text-red': item.failure,
                'margin-right-xs': item.failure
              }"
            ></text>
            {{ item.preContent }}
          </div>
        </div>
        <div class="move">
          <div class="bg-grey">置顶</div>
          <div class="bg-red">删除</div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import { Cell, SwipeCell, Button, Image as VanImage } from "vant";

export default {
  components: {
    "van-cell": Cell,
    "van-swipe-cell": SwipeCell,
    "van-button": Button,
    VanImage,
  },
  data() {
    return {
      messageArray: [
        {
          name: "博远",
          preContent: "OK",
          newMsg: 0,
          time: "10:42",
          failure: false,
        },
        {
          name: "张升",
          preContent: "明天肯定给你答复！",
          newMsg: 6,
          time: "10:08",
          failure: false,
        },
        {
          name: "秀良",
          preContent: "约个会议室吧",
          newMsg: 4,
          time: "09:03",
          failure: false,
        },
        {
          name: "小明",
          preContent: "持续跟进这个项目哈~",
          newMsg: 5,
          time: "昨天",
          failure: false,
        },
      ]
    };
  },
  methods: {
    toChat() {
      this.$router.push("/chat");
    },
  },
};
</script>

<style lang="scss" scoped>
.message {
  background-color: #bfbfbf !important;
  &-avatar {
    position: relative;
  }
  &-badge {
    position: absolute;
    top: 5%;
    left: 12%;
  }
  &-content {
    width: 80%;
    height: 70px;
    padding: 15px;
    border-bottom: 1px solid #eeeeee;
  }
  &-time {
    float: right;
  }
}
.message-content {
  border-bottom: none;
}
</style>
