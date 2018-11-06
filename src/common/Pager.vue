<style lang="sass">
  .pager-com {
    ul {
      li {
        color: #999;
        display: inline-block;
        margin: 3px;
        heiht: 25px;
        width: 25px;
        line-height: 25px;
        text-align: center;
        cursor: pointer;
        border-radius: 3px;
        &.active {
          background-color: #666;
          color: white;
          &:hover {
            background-color: #666;
            color: white;
          }
        }
        &:hover {
          background-color: #f0f0f0;
          transition: all 0.3s ease-in;
        }
      }
    }

    .jumper {
      display: inline-block;
      input {
        width: 40px;
        line-height: 34px;
      }
    }
  }
</style>

<template>
  <div class="pager-com">
    {{pager.totalRecords}}
    <ul>
      <li class="prev" @click="prevPage(currPage)"><</li>
      <li class="first" v-show="rangeNum[0] > 1" @click="changePage(1)">1...</li>
      <li v-for="page of rangeNum" @click="changePage(page)" :class="{'active': currPage === page}">{{page}}</li>
      
      <li class="last" v-show="rangeNum[rangeNum.length-1] < pageCount" @click="changePage(pageCount)">...</li>
      <li class="next" @click="nextPage(currPage)">></li>
    </ul>
    <div class="jumper">
      <input type="number" :value="currPage"  @keyup.13="goJump"/>
    </div>
  </div>  
</template>

<script>
  import Vue from 'vue';
  import {mapActions, mapState} from 'vuex';
  export default {
    props: ['pager', 'onChangePage'],
    computed: {
      ...mapState({
        rangeNum: state=>state.pager.range,
        currPage: state=> state.pager.currPage,
        pageCount: state=> state.pager.pageCount
      })
    },
    methods: {
      changePage(page) {
        this.$store.dispatch('resetPage', {
          currPage: page,
          onChangePage: this.onChangePage
        });
      },
      prevPage(page) {
        this.$store.dispatch('prevPage',{
          currPage: page,
          onChangePage: this.onChangePage
        });
      },
      nextPage(page) {
        this.$store.dispatch('nextPage', {
          currPage: page,
          onChangePage: this.onChangePage
        });
      },
      goJump(e) {
        let page = Number.parseFloat(e.target.value);
        this.$store.dispatch('resetPage', {
          currPage: page,
          onChangePage: this.onChangePage
        });
      }
    },
    mounted() {
     
      this.$store.dispatch('initPage', this.pager);
    }
  }  
</script>