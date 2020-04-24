<template>
    <div>
        <br><br><br><br><br><br><br><br><br><br><br><br>
        
        <div class="box-card">
            
            <div class="prva">
                <b-card
                    title="Card Title"
                    img-src="https://picsum.photos/600/300/?image=25"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                    
                >
                    <b-card-text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </b-card-text>

                    <b-button href="#" variant="primary">Go somewhere</b-button>
                </b-card>
            </div>

            <div>
                <b-card
                    title="Card Title"
                    img-src="https://picsum.photos/600/300/?image=25"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                >
                    <b-card-text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </b-card-text>

                    <b-button href="#" variant="primary">Go somewhere</b-button>
                </b-card>
            </div>
            <div>
                <b-card
                    title="Card Title"
                    img-src="https://picsum.photos/600/300/?image=25"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                >
                    <b-card-text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </b-card-text>

                    <b-button href="#" variant="primary">Go somewhere</b-button>
                </b-card>
            </div>

        </div>
        <hr>
        <div class="box-info">
            <br><br>
            <h1>Info</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, velit ab? Alias, recusandae quo. Quos veniam reprehenderit voluptates consectetur consequatur excepturi unde, harum iure. Dignissimos exercitationem esse eaque accusantium fugiat!</p>
        <br><br>
        </div>
        <hr><br><br>


        <div class="box-us">
            <div>
                <b-card no-body class="overflow-hidden" style="max-width: 540px;">
                    <b-row no-gutters>
                    <b-col md="6">
                        <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0"></b-card-img>
                    </b-col>
                    <b-col md="6">
                        <b-card-body title="Horizontal Card">
                        <b-card-text>
                            This is a wider card with supporting text as a natural lead-in to additional content.
                            This content is a little bit longer.
                        </b-card-text>
                        </b-card-body>
                    </b-col>
                    </b-row>
                </b-card>
            </div>
            <div>
                <b-card no-body class="overflow-hidden" style="max-width: 540px;">
                    <b-row no-gutters>
                    <b-col md="6">
                        <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0"></b-card-img>
                    </b-col>
                    <b-col md="6">
                        <b-card-body title="Horizontal Card">
                        <b-card-text>
                            This is a wider card with supporting text as a natural lead-in to additional content.
                            This content is a little bit longer.
                        </b-card-text>
                        </b-card-body>
                    </b-col>
                    </b-row>
                </b-card>
            </div>
        </div>


    <div class="bottom">
        <img src="../assets/dashboard/bottom.png">
    </div>
    
    </div>
</template>

<style scoped>
.box-card{
    display: grid;
    grid-template-columns:repeat(3,1fr);
    grid-auto-rows: minmax(400px,auto);
    grid-gap:5%;
    max-width: 100%;
    margin-left: 11%;
    margin-right: 7%;
       
}
.box-card div{
    align-items: center;
}
img{
    left: 0%;
    width: 100%;
}
.box-info{
    max-width: 100%;
    margin-left: 11%;
    margin-right: 7%;
    display: grid;
    grid-template-columns:repeat(1,1fr);
    grid-auto-rows: minmax(30px,auto);
    text-align: center;
}
.box-us{
    display: grid;
    grid-template-columns:repeat(2,1fr);
    grid-auto-rows: minmax(400px,auto);
    grid-gap:5%;
    max-width: 100%;
    margin-left: 11%;
    margin-right: 7%;
}
.box-us div{
    align-items: center;
}


</style>