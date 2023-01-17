<template>
    <div class="menuBar">  
        <div class="menuItembox">
            <div class="menuItem">
                <router-link class="menuTitle" to="/">Kontakt</router-link>
            </div>
            <div class="menuItem">
                <router-link to="/"><img class="menuLogo" src="./../../assets/Signature_White.png"/></router-link>
            </div>
            <div class="menuItem">
                <router-link class="menuTitle" to="/blog">Blog</router-link>
            </div>
        </div>      
    </div>
</template>

<script>
export default{
    name: 'MenuBar'
}
</script>

<style scoped>


.menuBar{
    display: flex;
    justify-content: center;
    
    height: 100px;
    padding-top: 20px;
}


.menuItembox{
    justify-content: center;
    display: flex;
    max-width: 1600px;
    width: 70%;
    height: inherit;
}
.menuItem{
    justify-content: center;
    display: flex;
    max-width: 1600px;
    text-align: center;
    align-items: center;
    margin: 0 30px;
    font-size: 20px;
    color: white
}
.menuItem:hover{
    color: #fff000;
    
}
.menuLogo{
    align-self: center;
    height: 100px;
}
.menuLogo:hover{
      height: 110px;
      transition: width .1s;
      -webkit-transition: width .1s;
}

.menuTitle{
    transform: translate(0px, -12px);
    color: white;
}

.menuTitle:hover{
    color: #fff000;
}
</style>