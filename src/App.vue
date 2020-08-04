<template>
    <div id="app">
        <!--include component nameinden geliyor-->
        <keep-alive include="Home">
            <router-view></router-view>
        </keep-alive>

    </div>
</template>

<style>
    @import "assets/custom.css";
</style>
