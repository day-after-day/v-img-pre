# v-img-pre
图片预览功能

## 适用范围：
* vue项目
* img标签上使用

## 安装
````
npm i v-img-pre -S
````
## 使用示例：
设置

    // main.js
    import Vue from 'vue'
    import imgPre from 'img-pre'

    Vue.use(imgPre)


使用

    // test.vue
    <template>
        <img class="img" v-img-pre src="@/assets/demo_images/test.jpg" alt="刺激" />
    </template>


