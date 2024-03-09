
//   var listProduct = localStorage.setItem("list-product", JSON.stringify(products));

// Reset input
function resetInput() {
    document.getElementById("id").value = ""
    document.getElementById("name").value = ""
    document.getElementById("upload").files[0].name = ""
    document.getElementById("category").value = ""
    document.getElementById("brand").value = ""
    document.getElementById("price").value = ""
    document.getElementById("sale").value = ""
}


// Kiểm tra input 
function validateInput() {
    let formElement = document.querySelector(".themsp")
    let inputElement = formElement.querySelectorAll(".form-input")
    console.log(inputElement)
    for (let i = 0; i < inputElement.length; i++) { //Duyệt từng phần tử input
        if (inputElement[i].value == "") { // Kiểm tra đầu vào rỗng
            // Gán text cho mọi input
            inputElement[i].parentElement.querySelector(".error-message").innerText = `Please enter your ${inputElement[i].id}`
        } else {
            inputElement[i].parentElement.querySelector(".error-message").innerText = ""
        }
    }
}

//Thêm
function Add() {
    validateInput();
    let formElement = document.querySelector(".themsp")
    let errorElement = formElement.querySelectorAll(".error-message")
    let arrErrorElement = []
    for (let i = 0; i < errorElement.length; i++) {
        arrErrorElement.push(errorElement[i].innerText)
    }
    // Hàm every kiểm tra  tất cả các input nếu có 1 input sai -> false
    // Nếu hàm trả về giá trị value === rỗng -> true , nguoc lai
    let checkErrorElement = arrErrorElement.every(value => value === "") 
    if (checkErrorElement) { //true
        //Save data
        let id = document.getElementById("id").value
        let name = document.getElementById("name").value
        let img = document.getElementById("upload").files[0].name
        let category = document.getElementById("category").value
        let brand = document.getElementById("brand").value
        let price = document.getElementById("price").value
        let sale = document.getElementById("sale").value

        // kiem tra trong localStorage co key la list-product hay chua (toan tu 3 ngoi)
        // Neu co lay ra , giai ma them tiep vao
        // Neu chua them mot mang moi
        //listProduct = []
        let listProduct = localStorage.getItem("Product") ? JSON.parse(localStorage.getItem("Product")) : []
        listProduct.push({
            "ProductID": id,
            "Name": name,
            "Price": price,
            "Category":category,
            "Brand": brand,
            "Image": img,
            "Sale":sale
        })
        // console.log(listProduct);

        //Đẩy dữ liệu vào  localStorage với key = "list-product"
        // JSON.stringify(listProduct) có tác dụng mã hóa
        localStorage.setItem("Product", JSON.stringify(listProduct))
        // console.log(listProduct)
        renderProduct()
        resetInput()
    }
}

//Đẩy sản phẩm
function renderProduct() {
    //Kiểm tra  localStorage
    let listProduct = localStorage.getItem("Product") ? JSON.parse(localStorage.getItem("Product")) : []
    
    //Tạo biến để chứa table
    let product = `
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Img</th>
            <th>Category</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Sale</th>
            <th>Action</th>
        </tr>`

    listProduct.map((value, index) => {
        product += `<tr>
                        <td>${index + 1}</td>
                        <td>${value.Name}</td>
                        <td> <img class="img-admin" src="./img/${value.Image}" alt=""></td>
                        <td>${value.Category}</td>
                        <td>${value.Brand}</td>
                        <td>${value.Price} VND</td>
                        <td>${value.Sale} %</td>
                        <td>
                        <input class="action" type="button" name="btn-edit" id="editsp" value="✏" onClick="EditProduct(${index})" >
                        <input class="action" type="button" name="btn-delete" id="deletesp" value="🗑" onClick="DeleteProduct(${index})" >
                        </td>
                    </tr>` 
    })
    // document.getElementById("table-sp").innerHTML = product;
    // renderProduct();
    const tableProduct = document.querySelector("#table-sp");
    let iProduct = product;
    tableProduct.innerHTML = iProduct;
}

// Hàm tạo ẩn hiện cho form thêm sản phẩm 
function formthemsp(){
    document.getElementById("t-themsp").style.display = "block";
}

function themsp(){
    document.getElementById("t-themsp").style.display = "none";
    document.getElementById("save").style.display = "block" // Ẩn nút thêm
    document.getElementById("update").style.display = "none" // Ẩn nút thêm
    resetInput()
}

function mothemsp(){
    document.getElementById("t-themsp").style.display = "block"
}

function dong_sua_user(){
    document.getElementById("form-user").style.display = "none"
}

function mo_sua_user(){
    document.getElementById("form-user").style.display = "block"
}

function dongthemsp(){
    document.getElementById("t-themsp").style.display = "none"
}

function dong_invoice(){
    document.getElementById("form-invoice").style.display = "none"
}

function mo_invoice(){
    document.getElementById("form-invoice").style.display = "block"
}

// Sửa
function EditProduct(index) {
    let listProduct = localStorage.getItem("Product") ? JSON.parse(localStorage.getItem("Product")) : []
    mothemsp();
    // console.log(index)
    //Lấy dữ liệu từ localStorage cho hiển thị trên form
    document.getElementById("name").value = listProduct[index].Name
    document.getElementById("id").value = index
    document.getElementById("upload").files[index] = listProduct[index].Image
    document.getElementById("category").value = listProduct[index].Category
    document.getElementById("brand").value = listProduct[index].Brand
    document.getElementById("price").value = listProduct[index].Price
    document.getElementById("sale").value = listProduct[index].Sale
    document.getElementById("receiveindex").value = index


    document.getElementById("save").style.display = "none" // Ẩn nút thêm
    document.getElementById("update").style.display = "inline-block" //Hiện nút update

}

// Hàm thay đổi dữ liệu sản phẩm 
function changeProduct() {
    let listProduct = localStorage.getItem("Product") ? JSON.parse(localStorage.getItem("Product")) : []
    let receiveindex = document.getElementById("receiveindex").value

    //Cập nhật dữ liệu
    listProduct[receiveindex]={
        Name: document.getElementById("name").value,
        Image: document.getElementById("upload").files[0].name,
        Category: document.getElementById("category").value,
        Brand: document.getElementById("brand").value,
        Price: document.getElementById("price").value,
        Sale: document.getElementById("sale").value     
    }

     // Đẩy dữ liệu vào  localStorage
     localStorage.setItem("Product",JSON.stringify(listProduct))
     document.getElementById("save").style.display = "inline-block" 
     document.getElementById("update").style.display = "none" 
     renderProduct()
     resetInput()
     
}

// Xóa
function DeleteProduct(index) {
    // console.log(index)
    let listProduct = localStorage.getItem("Product") ? JSON.parse(localStorage.getItem("Product")) : []
    let choice = confirm("Bạn có chắc chắn muốn xóa ?")
        if(choice == true){
            listProduct.splice(index,1) // Với index là giá trị lưu trữ hay và bắt đầu , 1 là số phần tử bị xóa tính từ index
            localStorage.setItem("Product",JSON.stringify(listProduct))
            renderProduct()
        }else{
            alert("Đã hủy xóa sản phẩm !");
        }
}


function userCustomer(){
    listUser = localStorage.getItem("LocalListAccount") ? JSON.parse(localStorage.getItem("LocalListAccount")) : []
    let user = `
        <tr>
            <th>STT</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Password</th>
            <th>Action</th>
        </tr>`

    listUser.map((value,index)=>{
        user += `<tr>
                            <td>${index + 1}</td>
                            <td>${value.name}</td>
                            <td>${value.email}</td>
                            <td>${value.number}</td>
                            <td>${value.pass} </td>
                            <td>
                                <input class="action" type="button" name="btn-edituser" id="editur" value="✏" onClick="EditUser(${index})" >
                                <input class="action" type="button" name="btn-deleteuser" id="deleteur" value="🗑" onClick="DeleteUser(${index})" >
                            </td>
                        </tr>` 
    }); 
    // document.querySelector("table-qlur").innerHTML = user    
    // userCustomer()       
    let tableUser = document.querySelector("#table-qlur");
    // console.log(tableUser);
    let tuser = user;
    // console.log(test);
    tableUser.innerHTML = tuser;   
}

function EditUser(index){
    //kiểm tra localstorage
    let listUser = localStorage.getItem("LocalListAccount") ? JSON.parse(localStorage.getItem("LocalListAccount")) : []
    mo_sua_user()

    //Lấy dữ liệu hiển thị trên form 
    document.getElementById("id-ur").value = index
    document.getElementById("name-ur").value = listUser[index].name
    document.getElementById("gmail").value = listUser[index].email
    document.getElementById("phone").value = listUser[index].number
    document.getElementById("password").value = listUser[index].pass
    document.getElementById("userindex").value = index
}

function changeUser(){
    let listUser = localStorage.getItem("LocalListAccount") ? JSON.parse(localStorage.getItem("LocalListAccount")) : []
    let userIndex = document.getElementById("userindex").value

    //Cập nhật dữ liệu 
    listUser[userIndex]={
        name:document.getElementById("name-ur").value,
        email:document.getElementById("gmail").value,
        number:document.getElementById("phone").value,
        pass:document.getElementById("password").value
    }
    //Đẩy dữ liệu vào localStorage
    localStorage.setItem("LocalListAccount",JSON.stringify(listUser));
    userCustomer()
}

function DeleteUser(index){
    // console.log(index);
    listUser = localStorage.getItem("LocalListAccount") ? JSON.parse(localStorage.getItem("LocalListAccount")) : []
    let choice = confirm("Bạn có chắc chắn muốn xóa?")
    if (choice == true){
        listUser.splice(index,1)
        localStorage.setItem("LocalListAccount",JSON.stringify(listUser))
        userCustomer()
    }else{
        alert("Bạn hủy xóa!")
    }
}

function invoiceCustomer(){
    listinvoice = localStorage.getItem("Bill") ? JSON.parse(localStorage.getItem("Bill")) : []
    let invoice = `
        <tr>
            <th>BillID</th>
            <th>Customer</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Date</th>
            <th>Action</th>
        </tr>`

        listinvoice.map((value,index)=>{
        invoice += `<tr>
                            <td>${value.BillID}</td>
                            <td>${value.BillCustomer}</td>
                            <td>${value.BillDC}</td>
                            <td>${value.BillSDT}</td>
                            <td>${value.BillStatus}</td>
                            <td>${value.time}</td>
                            <td>
                                <input class="action" type="button" name="btn-detail" id="detailinvoice" value="🔼" onClick="detailInvoice(${index})" >
                            </td>
                        </tr>` 
    }); 
    // document.querySelector("table-qlur").innerHTML = user    
    // userCustomer()       
    let tableInvoice = document.querySelector("#table-qldh");
    // console.log(tableInvoice);
    let test = invoice;
    // console.log(test);
    tableInvoice.innerHTML = test;   
}

function detailInvoice(index){
    // Kiểm tra localStorage
    // console.log(index);
    listinvoice = localStorage.getItem("Bill")?JSON.parse(localStorage.getItem("Bill")) : []
    mo_invoice()
    
    // Lấy dữ liệu trên form
    document.getElementById("BillID").value = listinvoice[index].BillID
    document.getElementById("BillCustomer").value = listinvoice[index].BillCustomer
    document.getElementById("date").value = listinvoice[index].time
    // document.getElementById("BillQuanlity").value = listinvoice[index].DetailQuanlity
    // document.getElementById("BillTotal").value = listinvoice[index].DetailTotalPrice
    document.getElementById("BillDC").value = listinvoice[index].BillDC
    document.getElementById("BillSDT").value = listinvoice[index].BillSDT
    document.getElementById("select-status").value = listinvoice[index].BillStatus
    document.getElementById("invoiceindex").value = index

    //Lấy dữ liệu giỏ hàng
    let cart = `
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Img</th>
            <th>Buy Price</th>
            <th>Quanlity</th>
            <th>Total Price</th>
        </tr>`

    listinvoice[index].giohang.map((value, index) => {
        cart += `<tr>
                        <td>${index + 1}</td>
                        <td>${value.DetailName}</td>
                        <td> <img class="img-admin" src="${value.DetailImage}" alt=""></td>
                        <td>${value.DetailPrice}</td>
                        <td>${value.DetailQuanlity}</td>
                        <td>${value.DetailTotalPrice} VND</td>
                    </tr>` 
    })
    let tableCart = document.querySelector("#table-detail");
    tableCart.innerHTML = cart;
    
}

function changeInvoice(){
    listinvoice = localStorage.getItem("Bill")?JSON.parse(localStorage.getItem("Bill")) : []
    invoiceIndex = document.getElementById("invoiceindex").value

    //Cập nhật dữ liệu
    listinvoice[invoiceIndex]={
        BillID:document.getElementById("BillID").value,
        BillCustomer:document.getElementById("BillCustomer").value,
        time:document.getElementById("date").value,
        // BillQuanlity:document.getElementById("BillQuanlity").value,
        // BillTotal:document.getElementById("BillTotal").value,
        BillDC:document.getElementById("BillDC").value,
        BillSDT:document.getElementById("BillSDT").value,
        giohang:listinvoice[invoiceIndex].giohang,
        BillStatus:document.getElementById("select-detail").value
        
    }
// console.log(document.getElementById("select-detail").value);
    //Đẩy dữ liệu lên localStorage 
    localStorage.setItem("Bill",JSON.stringify(listinvoice));
    invoiceCustomer()
}

    // let nhan = 0
    // let vongtay = 0
    // let daychuyen = 0
    
    // thongke = localStorage.getItem("invoice-Array") ? JSON.parse( localStorage.getItem("invoice-Array")) : []
    // listProduct = localStorage.getItem("list-product") ? JSON.parse( localStorage.getItem("list-product")) : []
//Thống kê
function statictical(){
    thongke = localStorage.getItem("invoice-Array") ? JSON.parse( localStorage.getItem("invoice-Array")) : []

}

// let bongtai = 0
// thongke.forEach(item => {
//     item.giohang.map((i,index)=>{
//         if(i.category === "Earring"){
//             bongtai++; 
//         }
//     })
    
//     console.log(bongtai)
//     })

statictical()
// Hiển thị trang cần sử dụng
function showcontent() {
    var url = window.location.href;
    var id = url.split('?');
    idd = id[1];
    switch(idd)
    {
        case "sp":
        {
            document.getElementById("container").innerHTML=`
            <div id="t-themsp">
            <div class="themsp-container">
            <!-- Form thêm sản phẩm  -->
            <div class="form-themsp">
            <!-- Tiêu đề form thêm sản phẩm  -->
            <div class="header-tsp" style="position: relative;">
                <h2>Thêm sản phẩm</h2>
                <a class="" onclick="dongthemsp()" style="position:absolute; right: 10px; top: 5px; font-size: 20px; cursor: pointer;" value="themsanpham">
                    <i class="fas fa-times"></i>
                </a>
            </div>
            <hr>
                <form action="" class="themsp">
                    <div class="item-themsp">
                        <p>ID :</p>
                        <input type="text" id="id" class="form-input" >
                        <div class="error-message"></div>
                    </div><br>
                    <div class="item-themsp">
                        <p>Name :</p>
                        <input type="text" id="name" class="form-input" > 
                        <div class="error-message"></div>
                    </div><br>
                    <div class="item-themsp">
                        <p>Img :</p>
                        <input type="file" name="upload" id="upload" class="form-input" onchange="ImagesFileAsURL()">
                        <div class="error-message"></div>
                    </div><br>
                    <div class="item-themsp">
                        <p>Category:</p>
                        <input type="text" id="category" class="form-input" >
                        <div class="error-message"></div>
                    </div><br>
                    
                    <div class="item-themsp">
                        <p>Brand :</p>
                        <input type="text" id="brand" class="form-input" >
                        <div class="error-message"></div>
                    </div><br>
                    <div class="item-themsp">
                        <p>Price :</p>
                        <input type="text" id="price" class="form-input" >
                        <div class="error-message"></div>
                    </div><br>     
                    <div class="item-themsp">
                        <p>Sale :</p>
                        <input type="text" id="sale" class="form-input" >
                    <div class="error-message"></div>
                    </div><br> 
                    <!-- Form ẩn để hứng id truyền lên form chính -->
                    <div class="item-receive-index">
                        <input type="hidden" id="receiveindex" >
                    </div><br> 
                    <!-- Button của form thêm sản phẩm -->
                    <div class="themsp-btn" style="position: relative;">
                        <input id="save" type="button" onclick="Add()" value="Thêm" >
                        <input id="update" style="display: none;" type="button" onclick="changeProduct(this)" value="Sửa" >
                    </div>
                </form>
            </div>
            </div>
                                
        </div>
        <!-- Tiêu đề trang quản lý sản phẩm  -->
        <h2>Danh sách sản phẩm</h2><br>
        <div class="menu-action">
            <input type="button" name="btn-add" id="add" value="Thêm sản phẩm" onclick="mothemsp()" >
        </div><br>
        <br><hr>
        <!-- Bảng chứa danh sách sản phẩm  -->
        <table id="table-sp" style="border: 1;" cellpadding="10" cellspace="0">
        </table>`;
            renderProduct();   
            break;  
        }
        case "dh":
        {
            document.getElementById("container").innerHTML=`<div class="ql-donhang">
            <div id="form-invoice">       
                    <div class="qly-invoice">
                    <!-- Tiêu đề form quản lý đơn hàng    -->
                    <div class="form-invoice-header" style="position: relative;">
                        <h2>Chi tiết đơn hàng</h2>
                        <a class="" onclick="dong_invoice()" style="position:absolute; right: 10px; top: 5px; font-size: 20px; cursor: pointer;" value="themsanpham">
                            <i class="fas fa-times"></i>
                        </a>
                    </div>
                    <form action="" id="form-detail">
                        <div class="item-invoice">
                            <p>BillID:</p>
                            <input type="text" id="BillID" class="form-detail-invoice" readonly>
                        </div><br>
                        <div class="item-invoice">
                            <p>Customer:</p>
                            <input type="text" id="BillCustomer" class="form-detail-invoice" readonly>
                        </div><br>
                        <div class="item-invoice">
                            <p>Date:</p>
                            <input type="text" id="date" class="form-detail-invoice" readonly>
                        </div><br>
                        <div class="item-invoice">
                            <p>Address:</p>
                            <input type="text" id="BillDC" class="form-detail-invoice" readonly>
                        </div><br> 
                        <div class="item-invoice">
                            <p>Phone:</p>
                            <input type="text" id="BillSDT" class="form-detail-invoice" readonly>
                        </div><br> 
                        <div class="item-invoice" id="select-status">
                            <p>Trạng thái:</p>
                            <select name="select" id="select-detail">
                                <option   value="Chưa xử lý">Chưa xử lý</option>
                                <option  value="Đã xử lý">Đã xử lý</option>
                            </select>
                        </div><br>
                        <!-- Form ẩn để hứng id truyền lên form chính -->
                        <div class="invoice-receive-index">
                            <input type="hidden" id="invoiceindex" >
                        </div><br> 
                        <table id="table-detail" style="border: 1;" cellpadding="10" cellspace="0">
                        </table>
                        
                        <!-- Button của form quản lý đơn hàng  -->
                        <div class="qlinvoice-btn" style="position: relative;">
                            <input id="up-invoice"  type="button" onclick="changeInvoice(this)" value="Cập nhật" >
                        </div>
                    </form>
                    </div>
             </div>
        <div class="menu-dh">
            
        </div>
        <h2>Quản lý đơn hàng</h2>
            <table id="table-qldh" style="border: 1;" cellpadding="10" cellspace="0">
            </table>`;
            invoiceCustomer()
            break;     
        }
        case "usr":
        {
            document.getElementById("container").innerHTML=`<div class="ql-user">
                    
                    
            <div id="form-user">       
                    <div class="qly-user">
                    <!-- Tiêu đề form quản lý khách hàng  -->
                    <div class="form-user-header" style="position: relative;">
                        <h2>Sửa thông tin khách hàng</h2>
                        <a class="" onclick="dong_sua_user()" style="position:absolute; right: 10px; top: 5px; font-size: 20px; cursor: pointer;" value="themsanpham">
                            <i class="fas fa-times"></i>
                        </a>
                    </div>
                    <form action="" >
                        <div class="item-user">
                            <p>ID :</p>
                            <input type="text" id="id-ur" class="form-ur-input" >
                            <div class="error-message"></div>
                        </div><br>
                        <div class="item-user">
                            <p>Username:</p>
                            <input type="text" id="name-ur" class="form-ur-input" > 
                            <div class="error-message"></div>
                        </div><br>
                        <div class="item-user">
                            <p>Gmail :</p>
                            <input type="text" id="gmail" class="form-ur-input" >
                            <div class="error-message"></div>
                        </div><br>
                        <div class="item-user">
                            <p>Phone :</p>
                            <input type="text" id="phone" class="form-ur-input" >
                            <div class="error-message"></div>
                        </div><br>
                        <div class="item-user">
                            <p>Password:</p>
                            <input type="text" id="password" class="form-ur-input" >
                            <div class="error-message"></div>
                        </div><br> 
                        <!-- Form ẩn để hứng id truyền lên form chính -->
                        <div class="invoice-receive-index">
                            <input type="hidden" id="userindex" >
                        </div><br> 
                        <!-- Button của form quản lý khách hàng  -->
                        <div class="qlur-btn" style="position: relative;">
                            <input id="up-user"  type="button" onclick="changeUser(this)" value="Sửa" >
                        </div>
                    </form>
                    </div>
                    
                </div> 
                <h2>Quản lý khách hàng </h2>

            <table id="table-qlur" style="border: 1;" cellpadding="10" cellspace="0">
            </table>
            </div>`;
            userCustomer()  
            break;     
        }
        case "tk":
        {
            document.getElementById("container").innerHTML=`<div div class="menu-tk">
            </div>
            <div class="qly-tk">
                <h2>Thống kê</h2>
                <table id="table-tk" style="border: 1;" cellpadding="10" cellspace="0">
                </table>
            </div>`;
            break;     
        }
        default:
        {
            document.getElementById("container").innerHTML="";
            break;
        }
    }

}

showcontent()
// window.onload = function (){  
//     showcontent();
//     renderProduct();
//     userCustomer()
// }