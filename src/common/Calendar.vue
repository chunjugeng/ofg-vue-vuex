<template>
    <div class="calendar-component">
        <p>当前时间{{dateText}}</p>
        <div class="title">
            <span class="prev" @click="prev"><</span>
                {{calendarData.fullYears}}
            <span class="next" @click="next">></span>
        </div>

        <div class="week">
            <ul>
                <li v-for="(item, index) in calendarData.week" :key="index">{{item}}</li>
            </ul>
        </div>

        <div class="day">
            <ul>
                <li v-for="(item, index) in calendarData.currMthData" :key="index" :class="item.cl" @click="getDateText">{{item.text}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Calendar from '~/utils/calendar';
    export default {
        data() {
          return {
              calendarData: {},
              dateText: null,
          }  
        },
        methods: {
            next(ev) {
                this.calendarData = Calendar.nextMonth();
            },
            prev() {
                this.calendarData = Calendar.prevMonth();
            },
            getDateText(ev) {
                this.dateText = Calendar.getDateText(ev);
                this.$emit('date-text', this.dateText);
                
            },
        },
        created() {
            this.calendarData = Calendar.init();
        },
    }    
</script>

<style lang="scss">
    .calendar-component {
        width: 300px;
        background-color: white;
        padding: 7px 25px;
        border: 1px solid #ccc;
        .title {
            margin-top: 10px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            span {
                border: none !important;
            }
            .prev {
                float: left;
            }
            .next {
                float: right;
            }
        }

        .week {
            
        }
        ul {
            width: 100%;
            li {
                margin: 1%;
                text-align: center;
                line-height: 35px;
                width: 12%;
                display: inline-block;
                cursor: pointer;
                
            }
        }
        .day {
            ul li {
                background-color: #fbfbfb;
                &.pass {
                    color: #cacaca;
                }
                &.today {
                    background-color: green;
                    color: white;
                }
            }
        }
    }
</style>