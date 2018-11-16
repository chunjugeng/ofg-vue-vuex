<template>
    <div class="wrapper app">
        <div class="flex-nav">
            <header class="top-nav">
                <div class="collapse-btn">
                    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
                        <el-radio-button :label="false">展开</el-radio-button>
                        <el-radio-button :label="true">收起</el-radio-button>
                    </el-radio-group>
                </div>

                <div class="navbar-nav">
                    <ul>
                        <li class="reset-password">
                            <a ><i class="fa fa-adjust"/>Reset Password</a>
                        </li>
                        <li class="active">
                            <a><i class="fa fa-user"/>ACTIVE</a>
                        </li>
                        <li class="sign-out">
                            <a><i class="fa fa-sign-out"/>Reset Password</a>
                        </li>
                    </ul>
                </div>
            </header>
            <aside class="flex-nav"  >
                <div class="nav" :style="{'width': !isCollapse ? '230px' : '64px'}">
                    <template>
                        <el-menu :unique-opened="true" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" background-color="#222d32"  :collapse-transition="false" :default-active="currIndex +'-1'" active-text-color="#fff">
                            <div class="logo">
                                <img src="../images/logo.jpg"/>
                            </div>
                            <h5 v-show="!isCollapse">management</h5>
                            <el-submenu v-for="(item, index) in navRoute" :key="item.index" :index="item.index" :class="{'parentActive': item.index === currIndex}">
                                <template slot="title">
                                    <span slot="title" @click="changeNav(item.index)"><i :class="item.icon"/>{{item.navTitle}}</span>
                                </template>
                                
                                <template v-for="(v, n) in item.list" >
                                    <el-submenu v-if="v.hasThreeNav" :index="v.index">
                                        <span slot="title">
                                            <i :class="v.icon"/>
                                            {{v.navTitle}}
                                        </span>
                                        <el-menu-item :index="v.index" class="marginL10" v-for="(l, id) in v.list" :key="id" >
                                            <router-link :to="l.path"><i v-if="l.icon" :class="l.icon"/>{{l.navTitle}}</router-link>
                                        </el-menu-item>
                                    </el-submenu>
                                    <el-menu-item :index="v.index" v-else>
                                        
                                        <router-link :to="v.path"><i :class="v.icon"/>{{v.navTitle}}</router-link>
                                        
                                    </el-menu-item>
                                </template>
                            </el-submenu>
                        </el-menu>
                    </template>
                </div>
            </aside>
        </div>

        <div class="flex-content">
            <router-view></router-view>
        </div>
    </div>
</template>



<script>
    import {mapState} from 'vuex';
    export default {
        data() {
            return {
                isCollapse: false,
                currIndex: 0
            }
        },
        computed: {
            ...mapState('nav', {
                navRoute: state=> state.navRoute,
            })
        },
        methods: {
            changeNav(index) {
                this.currIndex = index;
            },
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            init(url) {
                this.navRoute.map(nav=> {
                    if (url.indexOf(nav.parentPath) > 0) {
                        this.currIndex = nav.index;
                    }
                });
            }
        },

        watch: {
            isCollapse() {
                this.$store.dispatch('nav/calculateClientWidth', this.isCollapse);
            }
        },
        created() {
            const url= location.href;
            this.init(url);
        },
        mounted() {
            console.log(this.$parent,  'parent');
        },
        components: {
        },
    }   
</script>

<style lang="sass">
    @import '~/styles/page-content.scss';
    @import '~/styles/table-com.scss';
    @import '~/styles/search.scss';
    .app {
        .flex-nav {
            .fa:before {margin-right: 5px;}
            font-weight: 400;
            background-color: #222d32;
            
            .nav {
                background-color: #222d32;
                position: relative;
                z-index: 99999;
                .logo {
                    margin-top: 50px;
                    padding-left: 10px;
                    width: 100%;
                    
                    img {
                        max-width: 45px;
                        height: auto;
                    }
                }
            }
            h5 {
                padding: 10px 25px 10px 15px;
                color: #bfc7cb;
                background: #1a2226;
            }
        }
    }
    header {
        padding: 0 15px;
        position: fixed;
        top: 0;
        z-index: 99998;
        width: 100%;
        
        background-color: green;
        height: 50px;
        line-height: 50px;
        text-align: right;
        .collapse-btn {
            position: absolute;
            top: 0;
            left: 30%;
        }
        .navbar-nav {
            display: inline-block;
            .fa:before {margin-right: 5px;}
            
            ul {
                li {
                    display: inline-block;
                    a {
                        height: 100%;
                        display: inline-block;
                        padding: 0 7px;
                        color: white;
                        &:hover {
                            background-color: #128941;
                        }
                    }
                    
                }
            }
        }

    }
    .el-menu {border-right: none !important;}
    .el-menu-vertical-demo, .el-menu--vertical {
        .marginL10 {
            a {padding-left: 8px !important;}
        }

        li {
            .el-submenu__title {
                height:  40px !important;
                line-height: 40px !important;
                padding-left: 15px !important;
                
            }
            a.router-link-exact-active {
                color: white !important;
                i {color: white !important;}
            }
        }
        li a {
            height: 100%;
            display: inline-block;
            width: 100%;
           
        }
        li a, li div, li {
            color: #bfc7cb;
            &.el-menu-item {
                height: 35px !important;
                line-height: 35px !important;
                padding: 0 20px !important;
                
                &:hover {
                   span, i, a {
                        color: white !important;
                    }
                }
               
            }

        }
        & > li {
            .el-submenu__title {
                border-left: 3px solid transparent;
                &:hover {
                    border-color: green !important;
                    color: white !important;
                    span, i {
                        color: white !important;
                    }
                }
            }
            &.parentActive {
                & >div.el-submenu__title {
                    color: white !important;
                    border-color: green !important;
                    background: #2d3b41 !important;
                    span, i {
                        color: white !important;
                    }
                }
            }
            &.is-opened {
                ul[role="menu"]{
                    background: #8aa4af !important; 
                }
            }
        }
        
    }
    
    
</style>