<template>
    <div class="table-content">
       <table>
            <thead>
                <tr>
                    <th v-for="(item, index) in data.thead" :key="index">{{item}}</th>
                </tr>
            </thead>
            <tbody v-if="ALL">
                <tr v-for="(item, index) in data.list" :key="index">
                    <td>{{item._id}}</td>
                    <td>{{item.author}}</td>
                    <td>{{item.modifyDate}}</td>
                    <td>{{item.hot}}</td>
                    <td>{{item.modifyDate | dateFormat}}</td>
                </tr>
            </tbody>

            <tbody v-if="SMS">
                <tr v-for="(item, index) in data.list" :key="index">
                    <td>{{item._id}}</td>
                    <td>test data</td>
                    <td>{{item._id}}</td>
                    <td>{{item._id}}</td>
                    <td>{{item.hot}}</td>
                    <td>{{item.modifyDate | dateFormat}}</td>
                    <td>test data</td>
                </tr>
            </tbody>

            <tbody v-if="MOBILE">
                <tr v-for="(item, index) in data.list" :key="index">
                    <td>{{item.author}}</td>
                    <td>test data</td>
                    <td>{{item.modifyDate}}</td>
                    <td>{{item.modifyDate | dateFormat}}</td>
                </tr>
            </tbody>
        
       </table>
    </div>
</template>


<script>
    export default {
        props: ['data', 'ALL', 'SMS', 'MOBILE'],
    }
</script>
