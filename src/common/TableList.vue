<template>
    <div id="table-list">
       <h5>table title</h5>
       <table>
            <thead>
                <tr>
                    <th v-for="(item, index) in data.thead" :key="index">{{item}}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in data.list" :key="index">
                    <td>{{item.code}}</td>
                    <td>{{item['zh-CN']}}</td>
                    <td>{{item['en-US']}}</td>

                    <td>{{item.modifyDate | money(2)}}</td>
                </tr>
            </tbody>
        
       </table>
    </div>
</template>

<script>

    export default {
        props: ['data'],
        mounted() {
            // console.log(this.data, 'this.data');
        }
    }
</script>
<style lang="scss">
    #table-list {
        width: 100%;
        margin-top: 20px;
        background-color: white;
        border-top: 1px solid #ccc;
        h5 {
            font-size: 16px;
            padding: 20px;
        }
        table {
            width: 100%;
            border-spacing: 0;
            border-collapse: collapse;
            thead {
                tr {
                    th {
                        padding: 6px;
                    }
                }
            }
            th, td {
                text-align: center;
                border: 1px solid #f5f5f5;
                &:nth-child(1) {
                    border-left: none;
                    border-right: none;
                }
                &:last-child {
                    border-left: none;
                    border-right: none;
                }
            }
            tbody {
                tr {
                    td {padding: 10px 5px;}
                }
            }
        }
    }
</style>