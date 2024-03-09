// Top up Button
let mybutton = document.getElementById("TopUpButton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function FooterFunction() {
  window.scrollTo({ top: 2000, behavior: 'smooth' });
}

var ProductArray = [];

function Product(ProductID, Name, Price, Category, Brand, Image, Sale) {
  this.ProductID = ProductID;
  this.Name = Name;
  this.Price = Price;
  this.Category = Category;
  this.Brand = Brand;
  this.Image = Image;
  this.Sale = Sale;
}

function CreateProduct() {
  if (localStorage.getItem('Product') === null) {
      ProductArray = [
          new Product( 10001 , 'Bracelet 1' , '1700000', 'Bracelet' , "Harry Winston" ,'Bracelet_01.jpg' , ' 0 '),
          new Product( 10002 , 'Bracelet 2' , '2100000', 'Bracelet' , "LEKANI" ,'Bracelet_02.jpg' , ' 0 '),
          new Product( 10003 , 'Bracelet 3' , '600000', 'Bracelet' , "Chopard" ,'Bracelet_03.jpg' , ' 0 '),
          new Product( 10004 , 'Bracelet 4' , '1100000', 'Bracelet' , "Graff" ,'Bracelet_04.jpg' , ' 10 '),
          new Product( 10005 , 'Bracelet 5' , '700000', 'Bracelet' , "Harry Winston" ,'Bracelet_05.jpg' , ' 0 '),
          new Product( 10006 , 'Bracelet 6' , '2300000', 'Bracelet' , "THAYA" ,'Bracelet_06.jpg', ' 0 '),
          new Product( 10007 , 'Bracelet 7' , '1150000', 'Bracelet' , "Tiffany & Co" ,'Bracelet_07.png' , ' 0 '),
          new Product( 10008 , 'Bracelet 8' , '1400000', 'Bracelet', "LEKANI" ,'Bracelet_08.jpg' , ' 0 '),
          new Product( 10009 , 'Bracelet 9' , '600000', 'Bracelet' , "Graff" ,'Bracelet_09.jpg' , ' 10 '),
          new Product( 10010 , 'Earring 1' , '650000', 'Earring' , "Tiffany & Co" ,'Earring_01.jpg' , ' 0 '),
          new Product( 10011 , 'Earring 2' , '900000', 'Earring' , "THAYA" ,'Earring_02.jpg' , ' 0 '),
          new Product( 10012 , 'Earring 3' , '1400000', 'Earring' , "Chopard" ,'Earring_04.jpg' , ' 0 '),
          new Product( 10013 , 'Earring 4' , '900000', 'Earring' , "Graff" ,'Earring_05.jpg' , ' 10 '),
          new Product( 10014 , 'Earring 5' , '1350000', 'Earring' , "Tiffany & Co" ,'Earring_06.jpeg' , ' 0 '),
          new Product( 10015 , 'Earring 6' , '2200000', 'Earring' , "THAYA" ,'Earring_07.jpg' , ' 0 '),
          new Product( 10016 , 'Earring 7' , '1800000', 'Earring' , "Tiffany & Co" ,'Earring_08.jpg' , ' 0 '),
          new Product( 10017 , 'Earring 8' , '1750000', 'Earring' , "Harry Winston" ,'Earring_09.jpg' ,  ' 20 '),
          new Product( 10018 , 'Earring 9' , '850000', 'Earring' , "Graff" ,'Earring_10.jpeg' , ' 0 '),
          new Product( 10019 , 'Earring 10' , '1125000', 'Earring' , "Tiffany & Co" ,'Earring_11.jpg' , ' 0 '),
          new Product( 10020 , 'Necklace 1' , '2400000', 'Necklace' , "LEKANI" ,'Necklace_01.jpg' , ' 0 ' ),
          new Product( 10021 , 'Necklace 2' , '3000000', 'Necklace' , "Tiffany & Co" ,'Necklace_02.jpg' , ' 0 '),
          new Product( 10022 , 'Necklace 3' , '1200000', 'Necklace' , "THAYA" ,'Necklace_03.jpg' , ' 0 '),
          new Product( 10023 , 'Necklace 4' , '1100000', 'Necklace' , "Graff" ,'Necklace_04.jpg' , ' 20 '),
          new Product( 10024 , 'Necklace 5' , '1700000', 'Necklace' , "Harry Winston" ,'Necklace_05.jpg' , ' 0 '),
          new Product( 10025 , 'Necklace 6' , '1100000', 'Necklace' , "LEKANI" ,'Necklace_06.jpg' , ' 0 '),
          new Product( 10026 , 'Necklace 7' , '1600000', 'Necklace' , "THAYA" ,'Necklace_07.jpg' , ' 0 '),
          new Product( 10027 , 'Necklace 8' , '1800000', 'Necklace' , "Chopard" ,'Necklace_08.jpg' , ' 0 '),
          new Product( 10028 , 'Necklace 9' , '1200000', 'Necklace' , "Tiffany & Co" ,'Necklace_09.jpg' , ' 0 '),
          new Product( 10029 , 'Ring 1' , '1135000', 'Ring' , "LEKANI" ,'Ring_01.jpg' , ' 0 '),
          new Product( 10030 , 'Ring 2' , '1115000', 'Ring' , "Chopard" ,'Ring_02.jpg' , ' 0 '),
          new Product( 10031 , 'Ring 3' , '975000', 'Ring' , "THAYA" ,'Ring_03.png' , ' 20 '),
          new Product( 10032 , 'Ring 4' , '635000', 'Ring' , "Graff" ,'Ring_04.jpg' , ' 10 '),
          new Product( 10033 , 'Ring 5' , '2450000', 'Ring' , "Harry Winston" ,'Ring_05.jpg' , ' 0 '),
      ];
      localStorage.setItem('Product', JSON.stringify(ProductArray));
  }
}

let StartPage = 0;
let PageSize = 12;
let EndPage = PageSize;
let TotalPage;
let PageID = 1; 

// Hiện sản phẩm 
function ShowProduct(Product){
  let HTML = "";
    for ( let i = 0 ; i < Product.length ; i++ ){
      if ( i >= StartPage && i <EndPage && Product[i].Sale > 0){
        let html =  '<div class = "Products">'
            html += ' <div class = "Product" onclick="OpenDetail('+ Product[i].ProductID + ')">'
            html += '   <div class = "Product-Image">'
            html += '     <img src = "./img/'+ Product[i].Image +'" style="width:200px;height:200px;">'   
            html += '   </div>'
            html += ' <h2 class = "Product-Title">'+ Product[i].Name + '</h2>'
            html += ' <h3 class = "Product-Price" style = "color: red;">'+ ( Product[i].Price - (Product[i].Price / Product[i].Sale) ) +' vnd  ( -'+Product[i].Sale+'% )</h3>'
            html += ' </div>'
            html += '</div>';
          HTML = HTML + html;
      } else {
        if ( i >= StartPage && i <EndPage && Product[i].Sale == 0){
          let html =  '<div class = "Products">'
              html += ' <div class = "Product" onclick="OpenDetail('+ Product[i].ProductID + ')">'
              html += '   <div class = "Product-Image">'
              html += '     <img src = "./img/'+ Product[i].Image +'" style="width:200px;height:200px;">'   
              html += '   </div>'
              html += ' <h2 class = "Product-Title">'+ Product[i].Name + '</h2>'
              html += ' <h3 class = "Product-Price" >'+ Product[i].Price +' vnd</h3>'
              html += ' </div>'
              html += '</div>';
            HTML = HTML + html;
      }
    }
  document.querySelector("#content").innerHTML = HTML;
  }
}


// Lấy dữ liệu từ Local Storage
function GetProductArray() {
  if ( localStorage.getItem('Product') === null ) {
      return false;
  }
  ProductArray = JSON.parse(localStorage.getItem('Product') );
  TotalPage = Math.ceil(ProductArray.length / PageSize);
  return ProductArray;
}

// Hàm tính tổng số trang
function ListPage(TotalPage){
  if (TotalPage < 2){
    document.querySelector(".pagination").innerHTML = "";
    return;
  }
  let html = '';
  html += `<li class="active"><a>${1}</a></li>`;;
  for (let i = 2 ; i <= TotalPage ; i++) {
    html += `<li><a>${i}</a></li>`;
  }
document.querySelector(".pagination").innerHTML = html;
}

// lấy danh sách sản phẩm của trang
function GetPage(Page){
    StartPage = ( Page - 1 ) * PageSize;
    EndPage = Page * PageSize ;
}

// Phân trang
function ProductPage(Product){
  const PageIDs = document.querySelectorAll('.pagination li');
  for ( let i = 0 ; i < PageIDs.length ; i++ ){
    PageIDs[i].onclick = function() {
      let value = i + 1;
      const current = document.querySelector('.active');
      current.className = current.className.replace('active', '');
      PageIDs[i].classList.add('active');
      PageID = value;
      GetPage(PageID);
      ShowProduct(Product);
      GetPage(1);
    }
  }
}

// Hàm thực hiện các chức năng tìm kiếm
function LeftBarAction(value){
  let Category = ProductArray;
  switch(value){
    // Toàn bộ sản phẩm
    case value = 0:
        ListPage(TotalPage);
        ShowProduct(Category);
        ProductPage(Category);
        break;
    // Sản phẩm thuộc loại Ring
    case value = 1:
        Category = ProductArray.filter(item => {
          return item.Category.includes("Ring");
        })
        ListPage((Math.ceil(Category.length / PageSize)));
        ShowProduct(Category);
        ProductPage(Category);
        break;
    // Sản phẩm thuộc loại Bracelet
    case value = 2:
        Category = ProductArray.filter(item => {
          return item.Category.includes("Bracelet");
        })
        ListPage((Math.ceil(Category.length / PageSize)));
        ShowProduct(Category);
        ProductPage(Category);
        break;
    // Sản phẩm thuộc loại Earring
    case value = 3:
        Category = ProductArray.filter(item => {
          return item.Category.includes("Earring");
        })
        ListPage((Math.ceil(Category.length / PageSize)));
        ShowProduct(Category);
        ProductPage(Category);
        break;
    // Sản phẩm thuộc loại Earring
    case value = 4:
        Category = ProductArray.filter(item => {
          return item.Category.includes("Necklace");
        })
        ListPage((Math.ceil(Category.length / PageSize)));
        ShowProduct(Category);
        ProductPage(Category);
        break;
    // Sản phẩm có giá dưới 1m
    case value = 5:
        Category = ProductArray.filter(item => {
          return item.Price < 1000000;
        })
        ListPage((Math.ceil(Category.length / PageSize)));
        ShowProduct(Category);
        ProductPage(Category);
        break;
     // Sản phẩm có giá từ 1m đến 2m
    case value = 6:
        Category = ProductArray.filter(item => {
          return item.Price >= 1000000 && item.Price <= 2000000;
        })
        ListPage((Math.ceil(Category.length / PageSize)));
        ShowProduct(Category);
        ProductPage(Category);
        break;
    //  Sản phẩm có giá trên 2m
    case value = 7:
        Category = ProductArray.filter(item => {
          return item.Price > 2000000;
        })
        ListPage((Math.ceil(Category.length / PageSize)));
        ShowProduct(Category);
        ProductPage(Category);
        break;
    case value = 8:
        Category = ProductArray.filter(item => {
          return item.Sale > 0;
        })
        ListPage((Math.ceil(Category.length / PageSize)));
        ShowProduct(Category);
        ProductPage(Category);
        break;
  }
}

function Search(value){
  switch (value){
    // Tìm theo tên sản phẩm
    case value = 0:
      let Name = document.getElementById('search-text').value;
      if (!isNaN(Name)) {
        LeftBarAction(0);
        }
      else{
        let Product = ProductArray.filter(item => {
                return item.Name.includes(Name)
            })
            ListPage((Math.ceil(Product.length / PageSize)));
            ShowProduct(Product);
            ProductPage(Product);
      }
      break;
    // Tìm theo giá
    case value = 1:
      let MinPrice = parseInt(document.getElementById('PriceMin').value);
      let MaxPrice = parseInt(document.getElementById('PriceMax').value);
      if (!isNaN(MinPrice) && !isNaN(MaxPrice)) {
        if (MinPrice > MaxPrice) {
            alert("The maximum price must be greater than the minimum price");
            return false;
        } else {
            let Price = ProductArray.filter(item => {
                return item.Price >= MinPrice && item.Price <= MaxPrice;
            })
            ListPage((Math.ceil(Price.length / PageSize)));
            ShowProduct(Price);
            ProductPage(Price);
        }
      } else {
        if (isNaN(MinPrice) && isNaN(MaxPrice))
          alert("Please enter the minimum value and the maximum value!");
        else {
          if (isNaN(MinPrice))
            alert("Please enter the minimum value!");
          if (isNaN(MaxPrice))
            alert("Please enter the maximum value!");
        }
      break;
    }
  }
}

var DetailArray;
var ProductPrice;
var ProductSale;
var PriceNow;
var NumberNow;
var SaleNow;
var NameNow;
var ImageNow;
var IDNow;
// hiện thông tin sản phẩm
function OpenDetail(ID){
  for ( let i = 0 ; i < ProductArray.length ; i++ )
    if ( ID == ProductArray[i].ProductID ){
      DetailArray = ProductArray[i];
      break;
    }
  let html = '<img src="./img/'+ DetailArray.Image +'" style = "margin-left: 30px; width: 300px; height: 300px; border: 1px solid #5e5e5e ;">'
  document.getElementById('Product_Image').innerHTML = html;
  document.getElementById('lab_ProductName').innerHTML = " <b> "+ DetailArray.Name +" </b> ";
  document.getElementById('lab_ProductBrand').innerHTML =  " <b> "+  DetailArray.Brand +" </b> ";
  document.getElementById('lab_ProductCategory').innerHTML =  " <b> "+  DetailArray.Category +" </b> ";
  document.getElementById('lab_ProductPrice').innerHTML =  " <b> "+  DetailArray.Price +" vnd </b>";
  ProductSale = DetailArray.Sale;
  if ( ProductSale == 0 ){
    document.getElementById('lab_ProductSale').innerHTML =  " <b>None</b>";
    document.getElementById('lab_ProductTotalPrice').innerHTML = " <b> "+  DetailArray.Price +" vnd </b>";
    PriceNow = DetailArray.Price;
    NumberNow = 1;
    NameNow = DetailArray.Name;
    ImageNow = DetailArray.Image;
    IDNow = DetailArray.ProductID;
  } else {
    document.getElementById('lab_ProductSale').innerHTML =  " <b> "+ ProductSale  +"% </b>";
    document.getElementById('lab_ProductTotalPrice').innerHTML = " <b> "+  (DetailArray.Price - (DetailArray.Price / DetailArray.Sale)) +" vnd </b>";
    SaleNow = (DetailArray.Price - (DetailArray.Price / DetailArray.Sale));
    PriceNow = SaleNow;
    NumberNow = 1;
    NameNow = DetailArray.Name;
    ImageNow = DetailArray.Image;
    IDNow = DetailArray.ProductID;
  }
  ProductPrice = DetailArray.Price;
  document.getElementById("ProductWindow").style.display = "block";
  
}

// Thoát chương trình
function ExitDetail(){
  document.getElementById("ProductWindow").style.display = "none";
  document.getElementById("Number").value = "1";
}

// Cặp nhật giá
function ChangeNumber(Number){
  if (Number < 1) return
  document.getElementById('Number').value = Number;
  if ( ProductSale == 0){
    document.getElementById('lab_ProductTotalPrice').innerHTML = " <b> "+ ProductPrice * Number +" vnd </b>";
    PriceNow = ProductPrice * Number;
    NumberNow = Number;
  }
  else {
    document.getElementById('lab_ProductTotalPrice').innerHTML = " <b> "+ ( ProductPrice - ( ProductPrice / ProductSale ) ) * Number +" vnd </b>";
    PriceNow = (ProductPrice - ( ProductPrice / ProductSale )) * Number;
    NumberNow = Number;
  }
}

// Tăng số lượng
function IncreaseNumber(){
  let Number = parseInt(document.getElementById('Number').value);
  ChangeNumber(Number + 1);
}

// Giảm số lượng
function DecreaseNumber(){
  let Number = parseInt(document.getElementById('Number').value);
  ChangeNumber(Number - 1);
}

/*function AddCart(){
  alert("Add product to cart successfully");
  document.getElementById("ProductWindow").style.display = "none";
  document.getElementById("Number").value = "1";
}*/

var CartArray = [];
let ProductId;

function Cart(DetailImage, DetailName, DetailPrice, DetailQuanlity, DetailTotalPrice){
  this.DetailImage = DetailImage;
  this.DetailName = DetailName;
  this.DetailPrice = DetailPrice;
  this.DetailQuanlity = DetailQuanlity;
  this.DetailTotalPrice = DetailTotalPrice;
}

function CheckCartStorage(){
  if (localStorage.getItem('Cart') === null){
    
    localStorage.setItem("Cart",JSON.stringify([]));
  }
}

function ShowCart(CartArray){
  let HTML =' <table width="100%">'
      HTML +=' <thead class="head">'
      HTML +='    <tr>'
      HTML +='        <th>Image</th>'
      HTML +='        <th>Name</th>'
      HTML +='        <th>Buy Price</th>'
      HTML +='         <th>Quanlity</th>'
      HTML +='        <th>Total Price</th>'
      HTML +='        <th>Action</th>'
      HTML +='    </tr>'
      HTML +='</thead>';
  
    for ( let i = 0 ; i < CartArray.length ; i++ ){
        let html =  '<thead class="body">'
            html +=   '<tr>'
            html +=     '<th><img src = "./img/'+ CartArray[i].DetailImage +'" style = "height: 200px; width: 200px"></th>'
            html +=     '<th>'+ CartArray[i].DetailName +'</th>'
            html +=     '<th>'+ CartArray[i].DetailPrice +'</th>'
            html +=     '<th>'+ CartArray[i].DetailQuanlity +'</th>'
            html +=     '<th>'+ CartArray[i].DetailTotalPrice+'</th>'
            html +=     '<th><button style = "padding: 16px 25px; width: 100px; background-color: black; color: white;" onclick = "DeleteCart(' + CartArray[i].CartID + ')">Delete</button></th>'
            html +=   '</tr>'
            html +=  '</thead>'
          HTML = HTML + html; 
    }
    HTML += '</table>';
    document.getElementById("CartItem").innerHTML = HTML;
  }

// Lấy dữ liệu từ Local Storage
function GetCartArray() {
  if ( localStorage.getItem('Cart') === null ) {
      return [];
  }
  CartArray = JSON.parse(localStorage.getItem('Cart'));
  return CartArray;
}

// xóa
function DeleteCart(index){
    let choice = confirm("Bạn có chắc chắn muốn xóa ?")
        if(choice == true){
            for (let i = 0; i < CartArray.length; i++){
              if (CartArray[i].CartID == index){
                CartArray.splice(i,1); // Với index là giá trị lưu trữ hay và bắt đầu , 1 là số phần tử bị xóa tính từ index
                localStorage.setItem("Cart",JSON.stringify(CartArray)) ;
                ShowCart(CartArray);
                alert("Đã xóa sản phẩm khỏi giỏ hàng!");
                GetPrice(CartArray);
                return 0; 
            }
        }
    }
}





function OpenCart(){
  if (login == 0){
    alert ("Please login to open shopping cart.");
  } else {
    document.getElementById("PRODUCTS").style.display = "none";
    document.getElementById("HOME").style.display = "none";
    document.getElementById("Cart").style.display = "block";
    let html = '<label class = "linkbartext" href="" target="_blank">JEWELS HEARTS > <b>CART</b></label>';
    document.getElementById('linkbar').innerHTML = html;
    ShowCart(CartArray);
    GetPrice(CartArray);
  }
} 

function CloseCart()
{
  var Cart=document.getElementById("Cart");
  var container=document.getElementById("container");
  Cart.style.display="none";
  container.style.display="block";
}

function OpenProduct(){
  document.getElementById("midder").style.display = "grid";
  let html = '<label class = "linkbartext" href="" target="_blank">JEWELS HEARTS > <b>PRODUCTS</b></label>';
  document.getElementById('linkbar').innerHTML = html;
}

function SaleSeemore(){
  let Category = ProductArray;
  Category = ProductArray.filter(item => {
    return item.Sale > 0;
  })
  ListPage((Math.ceil(Category.length / PageSize)));
  ShowSales(Category);
}

function ShowSales(Product){
  let HTML = "";
    for ( let i = 0 ; i < 5 ; i++ ){
      if ( i >= StartPage && i < EndPage){
        let html =  '<div class = "Products">'
            html += ' <div class = "Product" onclick="OpenDetail('+ Product[i].ProductID + ')">'
            html += '   <div class = "Product-Image">'
            html += '     <img src = "./img/'+ Product[i].Image +'" style="width:200px;height:200px;">'   
            html += '   </div>'
            html += ' <h2 class = "Product-Title">'+ Product[i].Name + '</h2>'
            html += ' <h3 class = "Product-Price" style = "color: red;">'+ ( Product[i].Price - (Product[i].Price / Product[i].Sale) ) +' vnd  ( -'+Product[i].Sale+'% )</h3>'
            html += ' </div>'
            html += '</div>';
          HTML = HTML + html;
      }
    document.querySelector(".sales").innerHTML = HTML;
  }
}

function ShowNewProduct(Product){
  let HTML = "";
  var ArraySize = 0;
    for ( let check = 0; check < Product.length ; check++ )
      ArraySize++;
    ArrayCheck = ArraySize - 5;
    for ( let i = ArrayCheck; i < ArraySize ; i++ ){
      if ( Product[i].Sale > 0){
        let html =  '<div class = "Products">'
            html += ' <div class = "Product" onclick="OpenDetail('+ Product[i].ProductID + ')">'
            html += '   <div class = "Product-Image">'
            html += '     <img src = "./img/'+ Product[i].Image +'" style="width:200px;height:200px;">'   
            html += '   </div>'
            html += ' <h2 class = "Product-Title">'+ Product[i].Name + '</h2>'
            html += ' <h3 class = "Product-Price" style = "color: red;">'+ ( Product[i].Price - (Product[i].Price / Product[i].Sale) ) +' vnd  (-'+Product[i].Sale+'%)</h3>'
            html += ' </div>'
            html += '</div>';
          HTML = HTML + html;
      } else {
        if ( Product[i].Sale == 0){
          let html =  '<div class = "Products">'
              html += ' <div class = "Product" onclick="OpenDetail('+ Product[i].ProductID + ')">'
              html += '   <div class = "Product-Image">'
              html += '     <img src = "./img/'+ Product[i].Image +'" style="width:200px;height:200px;">'   
              html += '   </div>'
              html += ' <h2 class = "Product-Title">'+ Product[i].Name + '</h2>'
              html += ' <h3 class = "Product-Price" >'+ Product[i].Price +' vnd</h3>'
              html += ' </div>'
              html += '</div>';
            HTML = HTML + html;
      }
    }
    document.querySelector(".newproduct").innerHTML = HTML;
  }
}

function OpenSearch(){
  showProduct();
  Search(0);
}

// Cart 

function AddCart(){
  if (login==0)
  {
      alert("Đăng nhập để có thể mua hàng");
  }
  else 
  {
      AddtoCart(UserName);
      
      alert("Add product to cart successfully");
      document.getElementById("ProductWindow").style.display = "none";
      document.getElementById("Number").value = "1";
  }
}

let MaxID = 0;

function AddtoCart(UserName){
  var Price = 0;
  CheckCartStorage();
  if (ProductSale == 0){
    Price = PriceNow;
  } else {
    Price = SaleNow;
  }
  var thisStatus = "Chưa xử lý";
  MaxID++;
  CartArray = JSON.parse(localStorage.getItem("Cart"));
  CartArray.push({
    "DetailImage":ImageNow,
    "DetailName":NameNow,
    "DetailPrice":Price,
    "DetailQuanlity":NumberNow,
    "DetailTotalPrice":PriceNow,
  })
  localStorage.setItem("Cart",JSON.stringify(CartArray));
  GetCartArray();
}

function Max(){
  for ( let i = 0; i < CartArray.length; i++ ){
    if ( CartArray[i].CartID > MaxID ) {
      MaxID = parseInt(CartArray[i].CartID);
    }
  }
  MaxID = MaxID + 1;
}

function GetPrice(CartArray){
  var TotalPriceCart = 0;
  // alert(UserName);
  for (let i = 0; i < CartArray.length; i++ ){
      TotalPriceCart = TotalPriceCart + Number(CartArray[i].DetailTotalPrice);
  }
  document.getElementById("tamtinh").innerHTML = Number(TotalPriceCart);
  
  TotalPriceCart=TotalPriceCart+25000;
  document.getElementById("total").innerHTML=String(TotalPriceCart);
  return TotalPriceCart;

}
var Bills=[];

function Bill(BillID, BillCustomer,BillTotal,  BillDC, BillSDT,  BillStatus,giohang,time){
  this.BillID = BillID;
  this.BillCustomer = BillCustomer;
  this.BillTotal = BillTotal;
  this.BillDC =  BillDC;
  this.BillSDT = BillSDT;
  this.BillStatus = BillStatus;
  this.giohang = giohang,
  this.time = time
}

function CheckBillStorage(){
  if (localStorage.getItem('Bill') === null){
    Bills = []
    localStorage.setItem("Bill",JSON.stringify(Bills));
  }
}

var CartDetail = [];

function CheckBill(){
  var Ten = document.getElementById("DienTen").value;
  var SDT = document.getElementById("DienSDT").value;
  var DC = document.getElementById("DienDC").value;
  if (Ten == ""){
    alert("input name");
    return}
    if (SDT == ""){
    alert("input name");return}
      if (DC == ""){
      alert("input name");return}
        
  for(let i = 0; i < CartArray.length; i++){
      CartDetail = CartArray[i];
      Tobill(CartDetail);
      ChangeCart(i);
  }

  ShowCart(CartArray);
  document.getElementById("tamtinh").innerHTML = "";
  document.getElementById("total").innerHTML = "";
  ShowHome();
}

function ChangeCart(i){
  CartArray = localStorage.getItem("Cart") ? JSON.parse(localStorage.getItem("Cart")) : []
  var Cart = CartArray[i];
  let status = "Yes";
  CartArray[i]={
      DetailImage: Cart.DetailImage,
      DetailName: Cart.Name,
      DetailPrice: Cart.Price,
      DetailQuanlity: Cart.DetailQuanlity,
      DetailTotalPrice: Cart.DetailTotalPrice,
  }

   // Đẩy dữ liệu vào  localStorage
   localStorage.setItem("Cart",JSON.stringify(CartArray));
}

function MaxB(){
  for ( let i = 0; i < Bills.length; i++ ){
    if ( Bills[i].BillID > MaxBill ) {
      MaxBill = parseInt(Bills[i].BillID);
    }
  }
  MaxBill = MaxBill + 1;
}

let MaxBill = 0;
function Tobill(Detail){
  var Ten = document.getElementById("DienTen").value;
  var SDT = document.getElementById("DienSDT").value;
  var DC = document.getElementById("DienDC").value;
  var thisStatus = "Chưa xử lý";
  var giohang = JSON.parse(localStorage.getItem("Cart"))
  MaxBill++;
  Bills = JSON.parse(localStorage.getItem("Bill"));
  Bills.push({
    "BillID": MaxBill,
    "BillCustomer":Ten,
    "BillDC": DC,
    "BillSDT": SDT,
    "BillStatus":thisStatus,
    "giohang":giohang,
    "time": new Date().toLocaleDateString()
  })
  localStorage.setItem("Bill",JSON.stringify(Bills));
  localStorage.setItem("Cart",JSON.stringify([]))
}


window.onload = function() {
  OpenProduct();  
  CreateProduct();
  GetProductArray();
  GetCartArray();
  SaleSeemore();
  CheckCartStorage();
  ShowNewProduct(ProductArray);
  ListPage(TotalPage);
  ProductPage(ProductArray);
  Max();
  ShowProduct(ProductArray);
  GetPrice(CartArray);
  CheckBillStorage();
  MaxB();
}


