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
                <div class="nav" :style="{'width': !isCollapse ? '230px' : 'auto'}">
                    <template>
                        <el-menu :unique-opened="true" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" background-color="#222d32" text-color="#bfc7cb" :collapse-transition="false">
                            <div class="logo">
                                <img src="../images/logo.jpg"/>
                            </div>
                            <h5 v-show="!isCollapse">management</h5>
                            <el-submenu v-for="(item, index) in navRoute" :key="index" :index="item.index">
                                <template slot="title" class="first-nav">
                                    <i :class="item.icon"></i>
                                    <span slot="title">{{item.navTitle}}</span>
                                </template>
                                
                                <template v-for="(v, index) in item.list" >
                                    <el-submenu v-if="v.hasThreeNav" :index="v.index">
                                        <span slot="title">
                                            <i :class="v.icon"></i>
                                            {{v.navTitle}}
                                        </span>
                                        <el-menu-item :index="v.index" class="marginL10" v-for="(l, id) in v.list" :key="id">
                                            <router-link :to="l.path">{{l.navTitle}}</router-link>
                                        </el-menu-item>
                                    </el-submenu>
                                    <el-menu-item :index="v.index" v-else>
                                        <i :class="v.icon"></i>
                                        <router-link :to="v.path">{{v.navTitle}}</router-link>
                                        
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
    // import NavRoute from '~/common/Nav.vue';
    import {mapState} from 'vuex';
    export default {
        data() {
            return {
                isCollapse: false
            }
        },
        computed: {
            ...mapState({
                navRoute: state=> state.nav.navRoute
            })
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        components: {
        },
    }   
</script>

<style lang="sass">
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
                    color: white;
                    a {
                        height: 100%;
                        display: inline-block;
                        padding: 0 7px;
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
        }
        li a, li div, li {
            color: #bfc7cb;
            .is-active {
                color: #bfc7cb !important;
            }
            &:hover {
                color: white!important;
            }
            .el-menu-item {
                height: 35px !important;
                line-height: 35px !important;
                padding: 0 20px !important;
            }
            &:active {
                color: white;
            }
        }
        & > li {
            & > div.el-submenu__title {
                border-left: 3px solid transparent;
            }
            &.is-opened {
                &>div.el-submenu__title {
                    border-color: green !important;
                    background: #2d3b41 !important;
                    
                }
                ul[role="menu"]{
                    background: #8aa4af !important; 
                }
            }
        }
        
    }
    
    
</style>