<template>
   <header>
        <span class="h-element"> About me </span>
        <span class="h-element"> My experience </span>
        <span class="h-element"> My projects </span>
        <span class="h-element"> Contact </span>
   </header>
</template>

<script>
export default {
    name: 'NavHeader',

}
</script>>

<style scoped>
header {
    display: flex;
    flex-direction: row;
    background-color: #33afff;
    padding-left: 10%;
    padding-right: 10%;
}

.h-element {
    display: inline-flex;
    align-items: center;
    padding: 10px; 
    opacity: 50%;
    cursor: pointer;
}

.h-element:hover {
    opacity: 100%;
    background-color: #0099ff;
}

</style>