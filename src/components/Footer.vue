<template>
    <div class="bottom">
        <b-container class="bv-example-row">
            <b-row>
                <b-col cols="12"><p><pre>M A D E    B Y    S T A N K O    A N D    A N T O N I O</pre></p></b-col>

            </b-row>
        </b-container>
    </div>
</template>

<style scoped>

.bottom{
position: fixed;
bottom: 0;
background-color:#ffcc00;
width: 100%;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
p{
    color:white;
    text-align: center;
    font-family:'Courier New', Courier, monospace ;
    margin-top: 5px;
    margin-bottom: 5px;
}
pre{
    color:white;
    text-align: center;
    font-size: 25px;
    font-family:'Courier New', Courier, monospace ;
    margin-top: 5px;
    margin-bottom: 5px;

}
.space{
    font-family:Courier;
    white-space:pre;
}
@media screen and (max-width: 1000px) {
    pre{
    color:white;
    text-align: center;
    font-size: 20px;
    font-family:'Courier New', Courier, monospace ;
    margin-top: 5px;
    margin-bottom: 5px;
    }

}
@media screen and (max-width: 780px) {
    pre{
    color:white;
    text-align: center;
    font-size: 13px;
    font-family:'Courier New', Courier, monospace ;
    margin-top: 5px;
    margin-bottom: 5px;
    }

}




</style> 