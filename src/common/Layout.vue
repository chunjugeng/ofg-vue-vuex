<template>
    <div class="wrapper app">
        <header class="top-nav">
            <div class="collapse-btn" :style="{'left': !isCollapse ? '230px' : '64px'}">
                <i class="fa sidebar-toggle" @click="toggleNav"></i>
            </div>

            <div class="navbar-nav">
                <ul>
                    <li class="reset-password">
                        <a><i class="fa fa-adjust" />Reset Password</a>
                    </li>
                    <li class="active">
                        <a><i class="fa fa-user" />ACTIVE</a>
                    </li>
                    <li class="sign-out">
                        <a><i class="fa fa-sign-out" />Reset Password</a>
                    </li>
                </ul>
            </div>
        </header>
        <div class="flex-nav">
            <div class="nav" :style="{'width': !isCollapse ? '230px' : '64px'}">
                <template>
                    <el-menu :unique-opened="true" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
                        :collapse="isCollapse" background-color="#222d32"  :default-active="defaultActiveIndex"
                        active-text-color="#fff"
                        :collapse-transition="false"
                        >
                        <div class="logo">
                            <img src="../images/logo.jpg" />
                        </div>
                        <h5 v-show="!isCollapse">management</h5>
                        <div v-for="(item, index) in navRoute" :key="item.index">
                            <el-submenu :index="item.index" :class="{'parentActive': index === currIndex}" v-if="item.hasSecondNav">
                                <div slot="title" >
                                    <i :class="item.icon" />
                                    <span slot="title" @click="changeNav(index)" >{{item.navTitle}}</span>
                                </div>
                                <template v-for="(v, n) in item.list" v-if="item.hasSecondNav">
                                    <el-submenu v-if="v.hasThreeNav" :index="v.index" class="second-nav">
                                        <span slot="title">
                                            <i :class="v.icon" />
                                            {{v.navTitle}}
                                        </span>
                                        <el-menu-item :index="l.index" class="three-nav" v-for="(l, id) in v.list" :key="id">
                                            <router-link :to="l.path">{{l.navTitle}}</router-link>
                                        </el-menu-item>
                                    </el-submenu>
                                    <el-menu-item :index="v.index" v-else class="second-nav">
                                        <router-link :to="v.path" ><i :class="v.icon" />{{v.navTitle}}</router-link>

                                    </el-menu-item>
                                </template>
                            </el-submenu>

                            <el-menu-item :index="item.index" v-else="!item.hasSecondNav">
                                <i :class="item.icon" />
                                <router-link :to="item.parentPath" >{{item.navTitle}}</router-link>
                            </el-menu-item>

                        </div>
                    </el-menu>
                </template>
            </div>
        </div>

        <div class="flex-content" :style="{'marginLeft': !isCollapse ? '230px' : '64px'}">
            <router-view></router-view>
        </div>

        <footer :style="{'paddingLeft': !isCollapse ? '230px' : '64px'}">
           <p> © 2018 现金贷 保留所有权利</p>
        </footer>
    </div>
</template>
<script>
    import {mapState} from 'vuex';
    export default {
        data() {
            return {
                isCollapse: false,
                currIndex: 0,
                defaultActiveIndex: ''
            }
        },
        computed: {
            ...mapState('nav', {
                navRoute: state=> state.navRoute,
                tableW: state=> state.tableW
            })
        },
        methods: {
            toggleNav() {
                this.isCollapse = !this.isCollapse;
            },
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
                    const subStr = url.substr(url.indexOf('#') +1);
                    if (url.indexOf(nav.parentPath) > 0) {
                        this.currIndex = nav.index -1;
                    }
                    if (subStr === nav.parentPath && !nav.hasSecondNav) {
                        return this.defaultActiveIndex = nav.index;
                    }
                    nav.list && nav.list.map(item => {
                        if (subStr === item.path) {
                            return this.defaultActiveIndex = item.index;
                        }
                        item.hasThreeNav && item.list.map(data=> {
                            if (data.path === subStr) {
                                return this.defaultActiveIndex = data.index;
                            }
                        });
                    });
                    
                });

                
            }
        },

        watch: {
            isCollapse() {
                this.$store.dispatch('nav/calculateTableW', this.isCollapse);
            }
        },
        created() {
            const url= location.href;
            this.init(url);
        },
        mounted() {
        },
        components: {
        },
    }   
</script>

<style lang="sass">
    @import '~/styles/page-content.scss';
    @import '~/styles/table-com.scss';
    @import '~/styles/search.scss';
    @import '~/styles/info-input.scss';
    .app {
        .flex-nav {
            .fa:before {margin-right: 5px;}
            font-weight: 400;
            background-color: #222d32;
            position: fixed;
            top: 0;
            height: 100%;
            overflow-y: scroll;
            z-index: 99998;
            
            .nav {
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
        box-shadow: 1px 1px 1px #4aa783;
        .collapse-btn {
            position: absolute;
            i {
                width: 40px;
                height: 50px;
                line-height: 50px;
                display: inline-block;
                color: white;
                text-align: center;
                font-size: 20px;
                cursor: pointer;
            }
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
        .second-nav {
            padding: 0 !important;
            & > a {
                padding-left: 28px !important;
            }
            .el-submenu__title {
                padding-left: 25px !important;
            }
        }
        .three-nav {
            &.el-menu-item {
                padding: 0 40px !important;
            }
        }

        li {
            .el-submenu__title {
                height:  40px !important;
                line-height: 40px !important;
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
    
    footer {
        padding: 15px 0;
        width: 100%;
        background: white;
        border-top: 1px solid #e4e4e4;
        p {
            margin-left: 24px;
            font-size: 12px;
        }
    }
    
</style>