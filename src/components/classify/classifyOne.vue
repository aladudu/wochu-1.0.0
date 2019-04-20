<template>
    <div id = "classifyOne"> 
        <div><router-link tag="a" to="/search">
            <img :src="picUrl">
            <span>支持首字母搜索</span>
            </router-link>
        </div>
    </div>
</template>

<script>
import pic from "../../assets/img/1_03.jpg"
export default {
    name:'classifyOne',
    data(){
        return{
           picUrl:pic,
        }
    }
}
</script>


<style>
    #classifyOne{
        width:100%;
        height:1.2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: .24rem solid rgb(241, 239, 239);
        position: fixed;
        background: white;
        top:0;
        z-index: 5;
    }
    #classifyOne div{
        width:94%;
        height:.7rem;
        line-height:.7rem;
        border:1px solid rgb(196, 193, 193);
        border-radius:.125rem;
        position: relative;
    }
    #classifyOne div a img{
        margin-left:.25rem;
        margin-top:-.125rem;
        position: absolute;
        top:.25rem;
        width:.375rem;
        height:.375rem;
    }
    #classifyOne div a span{
        color:rgb(185, 182, 182);
        margin-left:1rem;
        font-size: .3rem;
       
    }
</style>