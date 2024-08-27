<template>
   <footer id="mainContainer">
    <div id="container">
        <p id="text">
        Welcome to our 
        <span id="boldText" style="font-size: 20px;">online library</span>, 
        where you can explore a diverse collection of books, enjoy personalized recommendations, 
        and immerse yourself in the world of reading, all from the comfort of your home.
      </p>
    </div>
</footer>
</template>

<script>
export default {
    name: 'FooterView',
   
    
}
</script>

<style scoped>
#mainContainer {
    background: black;
    color: white;
    padding: 20px;
    display: flex;
    justify-content: center; 
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    
};
#container {
    max-width: 800px;
    text-align: 0 auto;
};
#text {
   font-family:'Times New Roman', Times, serif;
   font-size: 16px;
};
#boldText {
    font-weight: bold;
}

</style>