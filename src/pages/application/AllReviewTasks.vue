<template>
    <div class="page-content">
        <div class="search">
            <h1>Review Task</h1>
            <div>
                <h5>Search</h5>
                <Search 
                    :ALLREVIEWTASKS="true" 
                    />
            </div>
        </div>
    </div>   
</template>

<script>
    import Search from './Search.vue';
    export default {
        components: {
            Search
        }
    }
</script>