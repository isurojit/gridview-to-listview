//Assigning UI
const productRow = document.querySelector(".row");
const images = document.querySelectorAll(".image");
const productTemplate = document.querySelectorAll('.product');
const unorderedList = document.querySelectorAll('ul');
const productItems = document.querySelectorAll('.product-item');
const buyBtn = document.querySelectorAll('.buy');
const productHeading = document.querySelectorAll('h3');
const listView = document.querySelector('#list-view');
const gridView = document.querySelector('#grid-view');
const btnSection = document.querySelector('.buttons');
const footerSection = document.querySelector('footer');

//Css variables
const borderShadow = '-webkit-box-shadow: -1px 0px 20px -1px rgba(0,0,0,0.75);-moz-box-shadow: -1px 0px 20px -1px rgba(0,0,0,0.75);box-shadow: -1px 0px 20px -1px rgba(0,0,0,0.75);';
const mainBtn = `width:10%;height:10%;padding:2%;border:none;${borderShadow};border-radius:15px;cursor: pointer;margin-left:15px;`;

//Listen For Events
btnSection.addEventListener('click',function(e){
    let targetElement = e.target;
    console.log(targetElement);

    if(targetElement.id === 'list-view' || targetElement.id === 'list-icon'){
        listViewOperation();
    }else if(targetElement.id === 'grid-view' || targetElement.id === 'grid-icon'){
        gridStyleView();
    }else{
        e.preventDefault();
    }
});

//By default grid style
gridStyleView();

//universal
document.body.style.cssText ="font-family: 'Ubuntu', sans-serif;";

//remove buttes
iteration(unorderedList, "list-style-type: none;position:relative;right:15px");

// //Resizing buttons
listView.style.cssText = mainBtn;
gridView.style.cssText = mainBtn;

//Iteration function
function iteration(itarator,cssElements){
    itarator.forEach(function(variable){
        variable.style.cssText = cssElements;
    });
}

//For Fun (given a footer)
const footer = document.createElement('p');
footer.innerHTML = '<h4>Create by <a href="https://www.linkedin.com/in/surojit-manna" target="_blank">isuro</a>&nbsp;With <i class="fas fa-heart"></i></h4>';
footerSection.appendChild(footer);
footerSection.style.cssText = 'text-align:center';

function listViewOperation(){
    //list Test
    //Productlist view flex
    iteration(productTemplate, `display:flex;border:1px solid transparent;${borderShadow};margin:2% 1%;;border-radius:15px;justify-content:space-evenly;transition: all 0.3s ease`);

    //Making product row column wise
    productRow.style.cssText = "display:flex;flex-direction:column;transition: all 2s ease";

    //Images
    iteration(images, "width:10%;");

    //Buybutton
    iteration(buyBtn, "width:15%;height:10%;transform:translateY(30%);transition: all 0.3s ease");

    //Heading
    iteration(productHeading, "transform:translateY(30%);transition: all 0.3s ease");

    //UI interaction with button when active
    listView.style.cssText = `width:10%;height:10%;padding:2%;border:none;${borderShadow};border-radius:15px;cursor: pointer;margin-left:15px;background-color:green;`
    gridView.style.cssText = `width:10%;height:10%;padding:2%;border:none;${borderShadow};border-radius:15px;cursor: pointer;margin-left:15px;`;
    
}

//gridview function
function gridStyleView(){
    //grid view
    productRow.style.cssText = "display:flex;transition: all 0.3s ease";

    //For Images
    iteration(images,"width:50%;transition: all 0.3s ease");

    //For Product Template
    iteration(productTemplate,`text-align:center;border:1px solid transparent;${borderShadow};margin:2% 1%;;border-radius:15px;justify-content:space-evenly;padding:1%;transition: all 0.3s ease`);

    //For buy now button
    iteration(buyBtn,"width:60%;height:23%;transform:translateY(-10%);transition: all 0.3s ease");

    //UI interaction with button when active
    gridView.style.cssText = `width:10%;height:10%;padding:2%;border:none;${borderShadow};border-radius:15px;cursor: pointer;margin-left:15px;background-color:green;`
    listView.style.cssText = `width:10%;height:10%;padding:2%;border:none;${borderShadow};border-radius:15px;cursor: pointer;margin-left:15px;`;
}