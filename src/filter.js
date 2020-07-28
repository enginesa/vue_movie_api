import Vue from "vue";

Vue.filter('maxLength', function (value,maxLength) {
    if(value){
        return value.substr(0,maxLength);
    }else{
        return value;
    }
})
