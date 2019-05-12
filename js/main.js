// Init Values
let metalType = "blank"
let houseType = "blank"
let metalPrice = 0;
let housePrice = 0;
let totalSwordPrice = 0;
let totalDeliveryPrice = 0;
let totalQuantity = 1;
let expressDelivery = false;

//Dom Elements
const metalRadio = document.getElementsByName('metal_type');
const totalPriceField = document.getElementById('total_price');
const deliveryPriceField = document.getElementById('dev_price');
const quantity = document.getElementById('quantity');
const express = document.getElementById('express');
const swordPriceInfo = document.getElementById('sword_price_info');
const deliveryPriceInfo = document.getElementById('delivery_price_info');
const creditCardType = document.querySelectorAll("#card_type");  
const creditCardNumber = document.querySelectorAll("#card_number");
const userName = document.querySelectorAll("#user_name");
const swordImage = document.querySelector("#sword_image img");

// Get Sword Metal Type
function getMetalType () {
    if (metalRadio[0].checked) {
        metalPrice = 200;
        metalType = metalRadio[0].id; //Get Metal Type Name As String
    }
    else if (metalRadio[1].checked) {
        metalPrice = 350;
        metalType = metalRadio[1].id;
    }
    totalSwordPrice = housePrice + metalPrice; //Add House + Metal
    updateDeviveryFee(totalSwordPrice,totalQuantity,expressDelivery); //Update Delivery Fee & Display
    updateTotalPrice(totalSwordPrice,totalDeliveryPrice,totalQuantity); //Update Total Price & Display
    updateSwordImage(metalType, houseType);
    event.preventDefault();  
}

// Get Sword House Type
function getHouseType() {
    //Get House Name
    for (var i=0; i < document.house_form.house.length; i++) {
        if (document.house_form.house[i].checked){
            houseType = document.house_form[i].value;
        }
    }
    //Get The Name OF House Selected  
    switch (houseType) {
        case "Targaryen" :
            housePrice = 15;
            break;
        case "Stark" : 
            housePrice = 25;
            break;
        case "Lannister" :
            housePrice = 30;
            break;
        case "Greyjoy" : 
            housePrice = 35;
            break;
    }
    totalSwordPrice = housePrice + metalPrice;
    updateDeviveryFee(totalSwordPrice,totalQuantity,expressDelivery);
    updateTotalPrice(totalSwordPrice,totalDeliveryPrice,totalQuantity);
    updateSwordImage(metalType, houseType);
    event.preventDefault();
}

// Update Sword Image
function updateSwordImage(metalType, houseType) {
    if (metalType == 'blank') {
        if (houseType == 'Stark') {
            swordImage.src = "./img/swords/Blank/blank-strak.png";
        } else if (houseType == "Targaryen") {
            swordImage.src = "./img/swords/Blank/blank-tar.png";
        } else if (houseType == "Lannister") {
            swordImage.src = "./img/swords/Blank/blank-lan.png";
        } else if (houseType == "Greyjoy") {
            swordImage.src = "./img/swords/Blank/blank-grey.png";
        }
    } else if (metalType == 'iron') {
        if (houseType == 'Stark') {
            swordImage.src = "./img/swords/Iron/iron-stark.png";
        } else if (houseType == "Targaryen") {
            swordImage.src = "./img/swords/Iron/iron-tar.png";
        } else if (houseType == "Lannister") {
            swordImage.src = "./img/swords/Iron/iron-lan.png";
        } else if (houseType == "Greyjoy") {
            swordImage.src = "./img/swords/Iron/iron-grey.png";
        }
    } else if (metalType == 'gold') {
        if (houseType == 'Stark') {
            swordImage.src = "./img/swords/Gold/gold-stark.png";
        } else if (houseType == "Targaryen") {
            swordImage.src = "./img/swords/Gold/gold-tar.png";
        } else if (houseType == "Lannister") {
            swordImage.src = "./img/swords/Gold/gold-lan.png";
        } else if (houseType == "Greyjoy") {
            swordImage.src = "./img/swords/Gold/gold-grey.png";
        }
    }
    if (houseType == 'blank') {
        if (metalType == 'iron') {
            swordImage.src = "./img/swords/Iron-Sword-icon.png";
        } else {
            swordImage.src = "./img/swords/Gold-Sword-icon.png";
        }
    } 
}

// Update Delivery Fee
function updateDeviveryFee(price,quantity,expressDelivery) {
    if ((price * quantity) <= 225 && price != 0) {
        if (expressDelivery == true) {
        totalDeliveryPrice = 3 + 5;
        deliveryPriceField.value = `${totalDeliveryPrice.toString()} coins` //Display Delivery Fee
        } else {
            totalDeliveryPrice = 3;
            deliveryPriceField.value = `${totalDeliveryPrice.toString()} coins` 
        }
    } else if ((price * quantity) > 225 && price != 0) {
        if (expressDelivery == true) {
            totalDeliveryPrice = 2 + 5;
            deliveryPriceField.value = `${totalDeliveryPrice.toString()} coins` //Display Delivery Fee
        } else {
            totalDeliveryPrice = 2;
            deliveryPriceField.value = `${totalDeliveryPrice.toString()} coins` //Display Delivery Fee
        }
    }
    event.preventDefault();
}

// Update Express Delivery Fee 
function updateExpress() {
    if (express.checked) {
        expressDelivery = true;
    }
    else {
        expressDelivery = false;
    }
    updateDeviveryFee(totalSwordPrice,totalQuantity,expressDelivery);
    updateTotalPrice(totalSwordPrice,totalDeliveryPrice,totalQuantity);
    event.preventDefault();
} 

// Update Prices Based On Quantity
function quantityChange() {
    if (quantity.value == 1) {
        totalQuantity = 1;
        updateDeviveryFee(totalSwordPrice,totalQuantity,expressDelivery);
        updateTotalPrice(totalSwordPrice,totalDeliveryPrice,totalQuantity);
    } else if (quantity.value == 2) {
        totalQuantity = 2;
        updateDeviveryFee(totalSwordPrice,totalQuantity,expressDelivery);
        updateTotalPrice(totalSwordPrice,totalDeliveryPrice,totalQuantity);
    } else {
        totalQuantity = 3;
        updateDeviveryFee(totalSwordPrice,totalQuantity,expressDelivery);
        updateTotalPrice(totalSwordPrice,totalDeliveryPrice,totalQuantity);
    }
}

// Update Total Price 
function updateTotalPrice(price,delivery,quantity) {
    totalPriceField.value = `${((price * quantity) + delivery).toString()} coins`; //Update Total Price Display 
}

// Going To Payment - Disable Preferences
function prefs_disable() {  
    if (metalType == "blank") {
        alert("Please Select Metal");
    } else if (houseType == "blank") {
        alert("Please Choose A House");
    } else {
        //1. Disable Quantity Checkbox
        quantity.disabled = true; 

        //2. Disable Metal Type Radios
        if (metalRadio[0].checked){ 
            document.getElementById('gold').disabled = true;
        }
        else {
            document.getElementById('iron').disabled = true;
        }
        
        //3. Disable House Checkboxes
        for (var i=0; i < document.house_form.house.length; i++) {
            if (document.house_form.house[i].checked == false){
                document.house_form[i].disabled = true;
            }
        }

        //4. Disable Express Delivery Checkbox
        express.disabled = true;
        
        //5. Disable All Buttons
        var buttons = document.querySelectorAll('.btn-s');
        buttons.forEach( function (button) {
            button.disabled = true;
            button.style.display = "none";
        });

        var randomBtn = document.getElementById('randomize');
        randomBtn.disabled = true;
        randomBtn.style.display = "none";

        var buttonNext = document.querySelector('#next');
        buttonNext.style.display = "none";

        //6. Change Heading 
        document.querySelector("#sword_overlay h2").innerHTML = 'Your Sword';

        //7. Show Payment Section
        showPayment();
    }
    event.preventDefault();
}

// Complete Order
function completeOrder () {
    // Check Card Type Radio Buttons
    var totalType = 0;
    creditCardType.forEach ((chk) => {   //Check If User Made A Choice
        if (chk.checked) {
            totalType += 1;
        } 
    });

    //Check Card Number Inputs
    var numberBool = false;
    creditCardNumber.forEach ((number) => {                        
        if (number.value == '' || number.value.length < 4) {    //Check If Numbers are Missing
            numberBool = true;
        }
    });
    
    //Check User Name Inputs 
    var nameBool = false;
    userName.forEach ((name) => {
        if (name.value == '') {
            nameBool = true;
        }
    });

    //Validate & Complete Order
    if (totalType == 0) {
        alert("Please Select Credit Card Type");
    } else if (numberBool == true) {
        alert("Please Enter Your Credit Card Number");
    } else if (nameBool == true) {
        alert("Please Enter Your Full Name");
    } else {
        alert("Order Successfully Completed");
        showHomePage();
    }
}

// Cancel Order
function resetOrder () {
    document.getElementById('payment').style.display = "none";

    //1. Disable Quantity Checkbox
    quantity.disabled = false; 

    //2. Disable Metal Type Radios
    if (metalRadio[0].checked){ 
        document.getElementById('gold').disabled = false;
    }
    else {
        document.getElementById('iron').disabled = false;
    }
    
    //3. Disable House Checkboxes
    for (var i=0; i < document.house_form.house.length; i++) {
        if (document.house_form.house[i].checked == false){
            document.house_form[i].disabled = false;
        }
    }

    //4. Disable Express Delivery Checkbox
    express.disabled = false;
    
    //5. Uncheck Credit Card Type
    creditCardType.forEach ((chk) => {   //Check If User Made A Choice
        if (chk.checked) {
            chk.checked = false;
        } 
    });

    //6. Erase Credit Card Numbers
    creditCardNumber.forEach ((number) => {                        
            number.value = '';
    });

    //7.Erase Name Input Field
    userName.forEach ((name) => {
            name.value = '';
    });

    //8. Enable All Buttons
    var buttons = document.querySelectorAll('.btn-s');
    buttons.forEach( function (button) {
        button.disabled = false;
        button.style.display = "";
    });

    var randomBtn = document.getElementById('randomize');
    randomBtn.disabled = false;
    randomBtn.style = ""

    var buttonNext = document.querySelector('#next');
    buttonNext.style.display = "";

    //9. Reset Heading Title
    document.querySelector("#sword_overlay h2").innerHTML = 'Create Your Own Sword';
}

// Get Random Sword
function randomizeSword() {
    //Get Random Metal
    var randomMetal = Math.floor(Math.random() * 2); 
    if (randomMetal == 0 ) {
        metalRadio[0].checked = true //Check The Box
        metalPrice = 200;
        metalType = metalRadio[0].id; //Get Metal Type Name As String
    } else if (randomMetal == 1) {
        metalRadio[1].checked = true //Check The Box
        metalPrice = 350;
        metalType = metalRadio[1].id; //Get Metal Type Name As String
    }
       
    // Get Random House
    var randomHouse = Math.floor(Math.random() * 4); 
    console.log(`Random House Number: ${randomHouse}`); 
    switch (randomHouse) {
        case 0 :
            houseType = document.house_form[0].value;
            // Uncheck Previous Boxes
            for (var i=0; i < document.house_form.house.length; i++) {
                if (document.house_form.house[i].checked){
                    if (document.house_form.house[i].value !== houseType) {
                        document.house_form.house[i].checked = false;
                    } else {
                        break;
                    }
                }
            }
            // Check The New House
            document.house_form.house[0].checked = true;
            housePrice = 15;
            break;
        case 1 : 
            houseType = document.house_form[1].value;
            // Uncheck Previous Boxes
            for (var i=0; i < document.house_form.house.length; i++) {
                if (document.house_form.house[i].checked){
                    if (document.house_form.house[i].value !== houseType) {
                        document.house_form.house[i].checked = false;
                    } else {
                        break;
                    }
                }
            }
            // Check The New House
            document.house_form.house[1].checked = true;
            housePrice = 25;
            break;
        case 2 :
            houseType = document.house_form[2].value;
            //Uncheck Previous Boxes
            for (var i=0; i < document.house_form.house.length; i++) {
                if (document.house_form.house[i].checked){
                    if (document.house_form.house[i].value !== houseType) {
                        document.house_form.house[i].checked = false;
                    } else {
                        break;
                    }
                }
            }
            // Check The New House
            document.house_form.house[2].checked = true;
            housePrice = 30;
            break;
        case 3 :
            houseType = document.house_form[3].value; 
            // Uncheck Previous Boxes
            for (var i=0; i < document.house_form.house.length; i++) {
                if (document.house_form.house[i].checked){
                    if (document.house_form.house[i].value !== houseType) {
                        document.house_form.house[i].checked = false;
                    } else {
                        break;
                    }
                }
            }
            // Check The New House
            document.house_form.house[3].checked = true;
            housePrice = 35;
            break;      
    }
    totalSwordPrice = housePrice + metalPrice; //Add House + Metal
    updateDeviveryFee(totalSwordPrice,totalQuantity,expressDelivery); //Update Delivery Fee & Display
    updateTotalPrice(totalSwordPrice,totalDeliveryPrice,totalQuantity); //Update Total Price & Display
    updateSwordImage(metalType, houseType);
    event.preventDefault();  
}

// Show Payment Div
function showPayment() {
    document.getElementById('payment').style.display = "block";
    swordPriceInfo.value = `${totalSwordPrice * totalQuantity} Coins For Swords`
    deliveryPriceInfo.value = `${totalDeliveryPrice} Coins For Delivery`
}

//Select Only 1 House Script
function chkHouse(j) {
    for (var i=0; i < document.house_form.house.length; i++) {
        if(document.house_form.house[i].checked) {
            document.house_form.house[i].checked = false;
        }
    }
    document.house_form.house[j].checked = true;
}

// Go To Home Page
function showHomePage() {
    window.location.href = "./index.html";
    return false;
}

// 'Only Numbers In Text' Function
function inputNumber (input) {
    var text = String.fromCharCode(input.which);
    if (!(/[0-9]/.test(text))) {
        input.preventDefault();
    }
}

// Sticky Navbar Background
window.addEventListener('scroll',function(){
    console.log("hello");
    if(window.scrollY > 100) {
        document.querySelector("div#navbar").style.opacity = 0.8;
    } else{
        document.querySelector('div#navbar').style.opacity = 1;
    }
}); 