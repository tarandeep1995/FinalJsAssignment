var productData = {
    id: "1",
    name: "Men Navy Blue Solid Sweatshirt",
    preview:
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    photos: [
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg",
    ],
    description:
      "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
    size: [1, 1, 0, 1, 0],
    isAccessory: false,
    brand: "United Colors of Benetton",
    price: 2599,
    review:"Product Preview"
  };
  
  var sectionId = document.getElementById("main_section");
  var div1 = document.createElement("div");
  div1.className = "left_div";
  sectionId.appendChild(div1);
  var leftImage = document.createElement("img");
  div1.appendChild(leftImage);
  var div2 = document.createElement("div");
  div2.className = "right_div";
  sectionId.appendChild(div2);
  var h1 = document.createElement("h1");
  div2.appendChild(h1);
  var h2 = document.createElement("h2");
  div2.appendChild(h2);
  var h4 = document.createElement("h4");
  div2.appendChild(h4);
  var h3 = document.createElement("h3");
  div2.appendChild(h3);
  var p = document.createElement("p");
  div2.appendChild(p);
  var button = document.createElement("button");
  for (var k in productData) {
    if (k == "preview") {
      leftImage.src = productData[k];
    }
    if (k == "name") {
      h1.innerHTML = productData[k];
    }
    if (k == "brand") {
      h4.innerHTML += productData[k];
    }
    if (k == "price") {
      h4.innerHTML += `<br><br> Price: Rs <span>${productData[k]}</span> `;
    }
    if (k == "description") {
      h2.innerHTML += "Description";
      p.innerHTML = `<br> ${productData[k]}`;
    }
      if (k == "review") {
        h2.innerHTML += `<br><br><br>  ${productData[k]} `;
        h2.className = "reviewh2";
      }
  
    if (k == "photos") {
      for (var i = 0; i < productData[k].length; i++) {
        var previewImages = document.createElement("img");
        previewImages.className = "previewImage";
        div2.appendChild(previewImages);
        var y = productData[k][i];
        previewImages.src = y;
      }
    }
  }
  var m = document.getElementsByClassName("previewImage");
  for (var i = 0; i < m.length; i++) {
    if (i == 0) {
      m[i].classList.add("active");
    }
    m[i].onclick = function () {
      var g = this.src;
      leftImage.src = g;
      var x = document.getElementsByClassName("active");
      console.log(x.length);
      if (x.length != 0) {
        x[0].className = "";
      }
      this.className = "active";
    };
  }