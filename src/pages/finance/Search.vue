<template>
    <div class="search-com">

        <div class="default">
            <span class="fa fa-phone"></span>
            <input type="text" name="moblie" placeholder="Customer Moblie"/> 
        </div>

        <div class="default">
            <span class="fa fa-user"></span>
            <input type="text" name="name" placeholder="Customer Name"/> 
        </div>
        <template v-if="loan || deposit">
            <div class="default">
                <span class="fa fa-info"></span>
                <input type="text" name="appplicationId" placeholder="Application ID"/> 
            </div>
        </template>

        
        <div class="default">
            <span class="fa fa-info"></span>
            <input type="text" name="customerId" placeholder="Customer ID"/> 
        </div>
        <template v-if="deposit">
            <div class="default">
                <span class="fa fa-info"></span>
                <input type="text" name="paymentId" placeholder="Payment Code"/> 
            </div>
            <div class="default">
                <span class="fa fa-info"></span>
                <input type="text" name="lPayId" placeholder="LPay ID"/> 
            </div>

            

            <div class="default select">
                <span>Deposit Channel</span>
                <select>
                    <option value="..."></option>
                    <option>A</option>
                    <option>B</option>
                </select>
            </div>
        </template>


        

        <template v-if="bonus || loan">
            <div class="default">
                <span class="fa fa-info"/>
                <input type="text" name="outTransactionId" placeholder="Out Transaction ID"/>
            </div>
        </template>

        <div class="default select">
            <span>Issue Method</span>
            <select>
                <option>A</option>
                <option>B</option>
            </select>
        </div>

        <div class="default select">
            <span>Issue Status</span>
            <select>
                <option>A</option>
                <option>B</option>
            </select> 
        </div>

        <div class="default">
            <span class="fa fa-info"></span>
            <input type="text" name="ktpNumber" placeholder="KTP Number"/> 
        </div>

        <div class="date-from-to">
            <div class="create">
                <span>Create Time From</span>
                <input type="text" name="createTime"/> 
            </div>
            <div class="to">
                <span>To</span>
                <input type="text" name="toTime"/> 
            </div>
        </div>

        <template v-if="deposit">
            <div class="default select">
                <span >Extension Nums</span>
                <input type="text" name="extensionNums"/> 
            </div>
        </template>


        <div class="query-btn">
            <button>Search</button>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['deposit', 'loan', 'bonus']
    }
</script>
