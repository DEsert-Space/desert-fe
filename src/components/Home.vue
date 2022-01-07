<template>
    <div class="space">
        <img src="../assets/union.png" class="max-width"/>
        <div class="textbox1">
            <h2>Scale Matters</h2>
            <p>When we dream, we dream big. Metaverse should not be just a few blocks or neighborhoods. </p>
            <p>Project DEsert is here to provide next-gen human being a fictitious space to create their own Metaverse.</p>
        </div>
        <div class="textbox3">
            <h2>Stylish Stars and Planets Sold as NFTs</h2>
            <p>With Stars and Planets designed by artists around the globe, DEsert provides </p>
            <p>a Metaverse filling with galaxies beyond your imagination. </p>
        </div>
        <img src="../assets/img_shop.png" class="img_shop">
        <div class="textbox4">
            <h2>Own a Planet, not a Building</h2>
            <p>Imagine what you can do when you have a whole planet to manage and run.</p>
            <p>Put applications developed from our team and various communities around the globe in your planet. </p>
            <p>Play DEsert like a simulation game, with tons of templates we prepared, you can have your </p>
            <p>planet up and running in few minutes.</p>
        </div>
        <div class="img_box">
            <img src="../assets/plant.png" class="img_plant">
        </div>
        <div class="textbox5">
            <h2>Create Metaverse Applications with Standards Together</h2>
            <p>In early stage, we will unite developers from different communities to build standard protocol in terms of integrating Metaverse applications. It’s a mission haven’t been done before which is utterly important to provide a much better user experience for users who really want to get into Metaverse.</p>
        </div>
        <div class="img_box">
            <img src="../assets/ship.png" class="img_ship" >
        </div>
        <h2 class="text_look">We’re Looking For…</h2>
        <div class="flex_container">
            <div class="flex_box">
                <img src="../assets/people1.png">
                <div class="box1text">
                    <h2>Project Partners </h2>
                    <p>Who are veterans in blockchain and NFT fields.</p>
                </div>
            </div>
            <div class="flex_box">
                <img class="box2img" src="../assets/people2.png">
                <div class="box2text">
                    <h2>Developers</h2>
                    <p>Who have solid understanding in blockchain and open source.</p>
                </div>
            </div>
            <div class="flex_box box3">
                <img src="../assets/people3.png">
                <div class="box3text">
                    <h2>Community Manager</h2>
                    <p>Who has experience in blockchain project operation.</p>
                </div>
            </div>
            <div class="flex_box box3">
                <img src="../assets/people4.png">
                <div>
                    <h2>Interns</h2>
                    <p>Who have solid education background and interests in exploring cutting edge fields.</p>
                </div>
            </div>
        </div>
        <div class="footer_box">
            <h2>Your Metaverse, Your Rules</h2>
            <img src="../assets/footer.png">
        </div>
    </div>
</template>
<style scoped>

@import url('https://fonts.googleapis.com/css?family=Impact');

.max-width {
    width: 100%
}
.space {
    width: 100%;
    height: auto;
    background-image: url("../assets/bg_space.png");
    background-repeat: repeat;
}

.space h2 {
    font-family: Impact;
    font-style: normal;
    font-weight: 900;
    font-size: 32px;
    line-height: 39px;
    letter-spacing: 0.02em;
    color: #FFFFFF;
}

.space p {
    font-family: Avenir Next Condensed;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 32px;
    color: #FFFFFF;
}

.textbox1 {
  margin-left: 248px;
  margin-top: 178px;
}

.textbox3 {
  margin-left: 248px;
  margin-top: 300px;
}

.textbox4 {
    margin-left: 248px;
    margin-top: 103px;
}

.img_shop {
    margin-left: 275px;
    margin-top: 576px;
}

.img_box {
    display: flex;
    flex-direction: row-reverse;
}

.img_plant {
    margin-right: 166px;
}

.textbox5 {
    margin-left: 248px;
    margin-top: 248px;
    max-width: 713px;
}

.img_ship {
    margin-right: 215px;
}

.text_look {
    margin-left: 248px;
}

.flex_container {
   display: flex; 
   flex-direction: row;
   flex-wrap: wrap;
   justify-content: space-between;
   margin-left: 166px;
   margin-right: 166px;
}

.flex_box {
    min-width: 34%;
}

.footer_box {
    display: flex;
    flex-direction: row-reverse; 
}

.box1text {
    max-width: 300px;
    margin-top: -200px;
    margin-left: 260px;
}

.box2text {
    max-width: 300px;
    margin-top: -200px;
    margin-left: 260px;
}

.box2img {
    margin-top: -80px;
}

.box3 {
    display: flex;
    flex-direction: row-reverse;
    margin-top: 24px;
}

.box3 div {
    max-width: 290px;
    margin-top: 120px;
}

.box3 img {
    margin-left: -80px;
}

.footer_box h2 {
    position: absolute;
    font-family: Impact;
font-style: normal;
font-weight: 900;
font-size: 66px;
line-height: 81px;
letter-spacing: -0.02em;
max-width: 520px;

    /* top: 0px; */
    left: 100px;
}

</style>