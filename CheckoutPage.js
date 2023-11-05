var sectionId = document.getElementById("main");
for(var i=0; i<5;i++){
    var div1 = document.createElement("div");
div1.className = "left_div";
//div1.innerHTML="hello how are you" + i;
sectionId.appendChild(div1)
var div3 = document.createElement('div');
div3.className="div3";
var div4 = document.createElement('div');
div4.className="div4";
div1.appendChild(div3)
div1.appendChild(div4)
if(i==0){
    var img_tag= document.createElement('img');
    img_tag.className="img1";
    img_tag.src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2018/9/19/b1373b00-37d4-41a0-a908-5d742a68d3661537343756229-1.jpg";
    //img_tag.innerHTML="hii";
    div3.appendChild(img_tag);

    var h_tag = document.createElement('h4');
    h_tag.className="h_tag";
    h_tag.innerHTML="Men Black Action Parkview Lifestyle Shoes";
    div4.appendChild(h_tag);

    var p_tag = document.createElement('p');
    p_tag.className="p_tag";
    p_tag.innerHTML="x1";
    div4.appendChild(p_tag);

    var p1_tag = document.createElement('p');
    p1_tag.className="p1_tag";
    p1_tag.innerHTML="<span>Amount: Rs</span> <span>6999</span>"
    div4.appendChild(p1_tag);

    
}
if(i==1){
    var img_tag= document.createElement('img');
    img_tag.className="img1";
    img_tag.src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2060340/2017/9/14/11505387708574-Puma-Men-Black-Solid-Sporty-Jacket-371505387708496-1.jpg";
    //img_tag.innerHTML="hii";
    div3.appendChild(img_tag);

    var h_tag = document.createElement('h4');
    h_tag.className="h_tag";
    h_tag.innerHTML="Men Black MAMGP T7 Sweat Sporty Jacket";
    div4.appendChild(h_tag);

    var p_tag = document.createElement('p');
    p_tag.className="p_tag";
    p_tag.innerHTML="x1";
    div4.appendChild(p_tag);

    var p1_tag = document.createElement('p');
    p1_tag.className="p1_tag";
    p1_tag.innerHTML="<span>Amount: Rs</span> <span>7999</span>"
    div4.appendChild(p1_tag);
}
if(i==2){
    var img_tag= document.createElement('img');
    img_tag.className="img1";
    img_tag.src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/3854721/2018/3/12/11520844673915-BARESKIN-Women-Black-Solid-Lightweight-Leather-Jacket-7761520844673718-1.jpg";
    //img_tag.innerHTML="hii";
    div3.appendChild(img_tag);

    var h_tag = document.createElement('h4');
    h_tag.className="h_tag";
    h_tag.innerHTML="Women Black Solid Lightweight Leather Jacket";
    div4.appendChild(h_tag);

    var p_tag = document.createElement('p');
    p_tag.className="p_tag";
    p_tag.innerHTML="x1";
    div4.appendChild(p_tag);

    var p1_tag = document.createElement('p');
    p1_tag.className="p1_tag";
    p1_tag.innerHTML="<span>Amount: Rs</span> <span>9999</span>"
    div4.appendChild(p1_tag);
}
if(i==3){
    var img_tag= document.createElement('img');
    img_tag.className="img1";
    img_tag.src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/5649908/2018/5/10/6bfe80cd-2f55-42bc-aa7f-e0d6c9e2ac531525936414747-SASSAFRAS-Women-Blue-Solid-Shirt-Dress-3831525936414532-1.jpg";
    //img_tag.innerHTML="hii";
    div3.appendChild(img_tag);

    var h_tag = document.createElement('h4');
    h_tag.className="h_tag";
    h_tag.innerHTML="Women Blue Solid Shirt Dress";
    div4.appendChild(h_tag);

    var p_tag = document.createElement('p');
    p_tag.className="p_tag";
    p_tag.innerHTML="x1";
    div4.appendChild(p_tag);

    var p1_tag = document.createElement('p');
    p1_tag.className="p1_tag";
    p1_tag.innerHTML="<span>Amount: Rs</span> <span>5200</span>"
    div4.appendChild(p1_tag);
}
if(i==4){
    var img_tag= document.createElement('img');
    img_tag.className="img1";
    img_tag.src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/10122083/2019/6/24/e533a691-3908-41b0-8307-1928a37d4ec41561362162650-Samsung-Galaxy-Fit-4801561362161527-1.jpg";
    //img_tag.innerHTML="hii";
    div3.appendChild(img_tag);

    var h_tag = document.createElement('h4');
    h_tag.className="h_tag";
    h_tag.innerHTML="Unisex Black Galaxy Fit Fitness Band";
    div4.appendChild(h_tag);

    var p_tag = document.createElement('p');
    p_tag.className="p_tag";
    p_tag.innerHTML="x1";
    div4.appendChild(p_tag);

    var p1_tag = document.createElement('p');
    p1_tag.className="p1_tag";
    p1_tag.innerHTML="<span>Amount: Rs</span> <span>9990</span>"
    div4.appendChild(p1_tag);
}

}

var right_div=document.createElement('div');
right_div.className="right_div";
var div5= document.createElement('h1');

div5.className="h1_tag1"
div5.innerHTML="Total Amount";
right_div.appendChild(div5);

var p = document.createElement('p');
p.className="para"
p.innerHTML="Amount Rs. ";
right_div.appendChild(p);

var s = document.createElement('span');
s.className="span1";
s.innerHTML+=40187;
right_div.appendChild(s)

var b_tag = document.createElement('button');
b_tag.className= "swap";
b_tag.innerHTML = "Place Order";
var a_tag = document.createElement('a');
a_tag.href="OrderPage.html";
// window.location.href = "OrderPage.html";
a_tag.target="blank";
a_tag.appendChild(b_tag);

right_div.appendChild(a_tag)



sectionId.appendChild(right_div);


console.log(sectionId)