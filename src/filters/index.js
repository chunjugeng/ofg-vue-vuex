import Vue from 'vue';
import {dateFormat} from './date';
import {money} from './money';
Vue.filter('dateFormat', dateFormat);
Vue.filter('money', money);