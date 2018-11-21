<template>
    <div class="conversion-statistics">
        <div class="title">
            <h1>Conversion Statistics</h1>
        </div>
        <div class="box header">
            <h4>Set Warning Value</h4>
        </div>

        <div class="box content">
            <div>test</div>
        </div>

        <div class="box footer">
            <h5></h5>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    export default {
        data() {
            return {
            }
        }
    }
</script>

<style lang="scss">
    .conversion-statistics {
        margin-top: 70px;

        .title {
            h1 {
                padding: 10px 0;
                font-size: 26px;
            }
        }
        .box {
            padding: 5px 8px 10px;
            margin-bottom: 20px;
            background-color: white;
            border-radius: 4px;
            box-shadow: 0 1px 1px rgba(0,0,0,0.1);
        }
        .header {
            h4 {
                font-size: 18px;
                margin: 10px 0;
            }
        }
    }    
</style>