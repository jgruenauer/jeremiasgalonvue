<template>
    <div class="menuBar">  
        <div class="menuItembox">
            <div class="menuItem">
                <router-link class="menuTitle btn-3" to="/">Kontakt</router-link>
            </div>
            <div class="menuItem">
                <router-link to="/"><img class="menuLogo" src="./../../assets/SignVector.svg"/></router-link>
            </div>
            <div class="menuItem">
                <router-link class="menuTitle btn-3" to="/blog">Blog</router-link>
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
    margin: 0 20px;
    font-size: 20px;
    color: white
}
.menuItem:hover{
    color: #fff000;
    
}
.menuLogo{
    align-self: center;
    height: 100px;
    color: white;
}
.menuLogo:hover{
      height: 110px;
      transition: width .1s;
      -webkit-transition: width .1s;
}

.menuTitle{
   transform: translate(0, -12px);
    color: white;
    padding: 10px;
}

.menuTitle:hover{
    color: #fff000;
}

.btn-3 {

}
.btn-3:before {
  border-radius: 25%;
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #272727;
  transform: scale(0);
  transition: 0.3s ease-in-out;
  z-index: -1;

}
.btn-3:hover:before {
  transform: scale(1);
}
.btn-3:hover {
  color: white;
  border-color: #272727;
}
.btn-3:active:before {
  background-color: #272727;
}
.btn-3:active {
    border-radius: 25%;
  background-color: #272727;
}
</style>