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
                <v-btn color="success" @click="changeStatus(!status)">X</v-btn>
              </v-flex>
            </v-layout>
          </div>
          <div class="body">
            <div>
              <v-btn>2</v-btn>
              <v-btn>4</v-btn>
            </div>
            <div class="content">
              <!--<img src="./images/duck.png"/>-->
              <img v-for="(img, index) in images" :key="index" :src="img.url" :alt="img.alt"
                   width="400" height="350"/>
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
    };
  },
};
</script>
<style scoped lang="stylus">
  .media-content
    background-color: #e6ccff

  .header
    background-color: #4FC3F7

  .title
    color #ffffff
    padding: 1rem

  .content
    width: 500px
    min-height: 450px
    overflow-x: scroll

  .media-content {
    position: fixed
    z-index: 9998
    top: 0
    left: 0
    width: 100%
    height: 100%
    //background-color: rgba(0, 0, 0, .2);
    display: table
    transition: opacity .4s ease-in-out
    background-color: rgba(0, 0, 0, .5)
  }

  .media-wrap
    width: 70%
    height: 80%
    margin: 5% auto
    padding: 20px 30px
    background-color: #ffffff
    border-radius: 2px
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33)
    transition: all .3s ease-in-out
    font-family: Helvetica, Arial, sans-serif

  .text-align-left
    text-align: left
</style>
