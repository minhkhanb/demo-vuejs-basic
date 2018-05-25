<template>
  <div>
    <v-btn @click="changeStatus(!status)" :disabled="checkStatus">SHOW POPUP</v-btn>

    <div class="media-content" v-if="status">
      <transition name="media-popup" :duration="2000">
        <div class="media-wrap">
          <div class="header">
            <v-layout class="row">
              <v-flex class="xs6 text-sm-left title" >
                <strong class="">
                  MEDIA
                </strong>
              </v-flex>
              <v-flex class="xs6 text-lg-right">
                <v-btn @click="changeStatus(!status)" class="btn-close">X</v-btn>
              </v-flex>
            </v-layout>
          </div>
          <div class="body">
            <div class="btn-toggle row">
              <div class="btn-toggle-item xs6 md6" @click="showTwoImages">
                <div class="two-img two-img-item">
                  <div class="square"></div>
                  <div class="square"></div>
                </div>
              </div>
              <div class="btn-toggle-item xs6 md6" @click="showMultiImages">
                <div class="multi-img multi-img-item">
                  <div class="pd-top">
                    <div class="square"></div>
                    <div class="square"></div>
                  </div>
                  <div>
                    <div class="square"></div>
                    <div class="square"></div>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="statusMultiImage" class="media-container">
              <div v-for="(items, index) in arrImagesTwoElement" :key="index"
                 class="display-inline">
                <div v-for="(img, index) in items" :key="index">
                  <img :src="img" class="media-multi-image"/>
                </div>
              </div>
            </div>
            <div v-else class="media-container">
              <div v-for="(img, index) in imgs" :key="index" class="display-inline">
                <img :src="img" class="media-image"/>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'media-popup',
  computed: {
    ...mapGetters({
      status: 'status',
      checkStatus: 'status',
    }),
  },
  methods: {
    ...mapMutations({
      changeStatus: 'changeStatus',
    }),

    showImages() {
      let i = 0;
      let newImages = [];
      for (i; i < this.imgs.length; i += 2) {
        newImages = this.imgs.slice(i, i + 2);
        this.arrImagesTwoElement = this.arrImagesTwoElement.concat([newImages]);
      }

      this.statusTwoImage = false;
      this.statusMultiImage = true;
    },

    showTwoImages() {
      this.arrImagesTwoElement = [];
      this.statusMultiImage = false;
      this.statusTwoImage = true;
    },

    showMultiImages() {
      if (this.imgs.length > 2) {
        this.showImages();
      } else {
        this.showTwoImages();
      }
    },
  },
  data() {
    return {
      images: [
        {
          url: 'static/images/duck.png',
          alt: 'duck',
        },
        {
          url: 'static/images/cat.jpg',
          alt: 'cat',
        },
        {
          url: 'static/images/sheep.jpg',
          alt: 'sheep',
        },
        {
          url: 'static/images/frog.jpg',
          alt: 'frog',
        },
      ],
      imgs: [
        'static/images/duck.png',
        'static/images/cat.jpg',
        'static/images/sheep.jpg',
        'static/images/frog.jpg',
        'static/images/duck.png',
      ],
      arrImagesTwoElement: [],
      statusMultiImage: false,
      statusTwoImage: false,
    };
  },
};
</script>
<style scoped lang="stylus">
  .header
    background-color #455A64

  .title
    color #ffffff
    padding 1rem

  .media-container
    -webkit-transition: none;
    transition: none;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -ms-flex: 1 0 auto;
    flex: 1 0 auto;
    max-width: 100%;
    will-change: padding;
    min-height 400px
    overflow-x scroll

  img.media-image
    height 350px

  .media-multi-image
    width 200px
    height 150px

  .media-content {
    position fixed
    z-index 9998
    top 0
    left 0
    width 100%
    height 100%
    //background-color: rgba(0, 0, 0, .2);
    transition opacity .4s ease-in-out
    background-color rgba(0, 0, 0, .5)
  }

  .media-wrap
    width 70%
    height 82%
    margin 6% auto
    background-color #ffffff
    border-radius 2px
    box-shadow 0 2px 8px rgba(0, 0, 0, .33)
    transition all .3s ease-in-out
    font-family Helvetica, Arial, sans-serif

  .btn-toggle
    width 160px
    height auto
    margin 1rem 1rem
    padding 0 2rem
    background-color #D7CCC8
    -moz-border-radius 100px / 50px
    -webkit-border-radius 100px / 50px
    border-radius 100px / 50px

    .btn-toggle-item

      .two-img
        &.two-img-item
          padding: 1.3rem 1rem 0 0.1rem

      .multi-img
        border-left 2px solid #BDBDBD
        &.multi-img-item
          padding-left: 0.7rem

  .square
    display inline-block
    width 10px
    height 10px
    margin 0.25rem 0.25rem
    background-color aqua

  .btn-close
    color #ff000a
    font-weight 700
    font-size 2rem

  .text-align-left
    text-align left

  .display-inline
    display inline-block

  .pd-top
    padding-top 0.5rem

</style>
