let loopDivs = 6;
for (var i = 1; i <= loopDivs; i++) {

    let parentElement = document.querySelector('.dynamic-divs');

    let dyDiv = document.createElement('div');
    dyDiv.id = 'businessCard' + i;
    dyDiv.className = 'card col-lg-4';

    let busHeading = document.createElement('h1');
    busHeading.id = 'businessHead' + i;
    busHeading.className = 'heading-card';
    busHeading.innerHTML = 'Business ' + i;

    let busIcon = document.createElement('h1');
    busIcon.id = 'businessIcon';
    busIcon.className = 'icon-card';
    busIcon.innerHTML = '<i class="fas fa-toolbox"></i>';

    // Now create and append to iDiv
    let innerDiv = document.createElement('div');
    innerDiv.id = 'business-info' + i;
    innerDiv.className = 'card-body';
    innerDiv.innerHTML = '<table class="table-card">\
<tr>\
<td class="attrib-col1">\
<h6>Address:</h6>\
</td>\
<td class="attrib-col2">\
<h6 id="bus-add' + i + '"></h6>\
</td>\
</tr>\
<tr>\
<td class="attrib-col1">\
<h6>Number:</h6>\
</td>\
<td class="attrib-col2">\
<h6 id="bus-num' + i + '"></h6>\
</td>\
</tr>\
<tr>\
<td class="attrib-col1">\
<h6>Email:</h6>\
</td>\
<td class="attrib-col2">\
<h6 id="bus-email' + i + '"></h6>\
</td>\
</tr>\
<tr>\
<td class="attrib-col1">\
<h6>Website:</h6>\
</td>\
<td class="attrib-col2">\
<h6 id="bus-url' + i + '"></h6>\
</td>\
</tr>\
<tr>\
<td class="attrib-col1">\
<h6>Social:</h6>\
</td>\
<td class="attrib-col2">\
<h6 id="bus-social' + i + '"></h6>\
</td>\
</tr>\
</table>'


    let busButtonMore = document.createElement('button');
    busButtonMore.id = 'businessButtonMore' + i;
    busButtonMore.className = 'btn btn-outline-dark more-btn';
    busButtonMore.innerHTML = 'More Info...';

    let busButtonLess = document.createElement('button');
    busButtonLess.id = 'businessButtonLess' + i;
    busButtonLess.className = 'btn btn-outline-dark less-btn';
    busButtonLess.innerHTML = 'Less Info...';

    // The variable iDiv is still good... Just append to it.
    parentElement.appendChild(dyDiv)
    dyDiv.appendChild(busHeading);
    dyDiv.appendChild(busIcon);
    dyDiv.appendChild(innerDiv);
    dyDiv.appendChild(busButtonMore);
    dyDiv.appendChild(busButtonLess);


    //More and Less buttons
    $(busButtonMore).click(function () {
        $(innerDiv).slideDown();
        $(busButtonMore).hide();
        $(busButtonLess).show();
    });

    $(busButtonLess).click(function () {
        $(innerDiv).slideUp();
        $(busButtonMore).show();
        $(busButtonLess).hide();
    });

}

// Constructor function for business objects
function business(businessName, address, number, email, website, social, location, trade) {
    this.businessName = businessName;
    this.address = address;
    this.number = number;
    this.email = email;
    this.website = website;
    this.social = social;
    this.location = location;
    this.trade = trade;
}

// Create a business object
let electrician1 = new business("Ifti-1", "123 Fake Street, St Albans", "0123456789", "1@1.com", "www.website.com", "www.facebook.com", "St Albans", "Electrican");

let electrician2 = new business("Ifti-2", "123 Fake Street, St Albans", "0123456789", "1@1.com", "www.website.com", "www.facebook.com", "St Albans", "Plumber");

let electrician3 = new business("Ifti-3", "123 Fake Street, St Albans", "0123456789", "1@1.com", "www.website.com", "www.facebook.com", "St Albans", "Carpenter");

// Display all information in the right table element
document.getElementById("businessHead1").innerHTML = electrician1.businessName;
document.getElementById("bus-add1").innerHTML = electrician1.address;
document.getElementById("bus-num1").innerHTML = electrician1.number;
document.getElementById("bus-email1").innerHTML = electrician1.email;
document.getElementById("bus-url1").innerHTML = electrician1.website;
document.getElementById("bus-social1").innerHTML = electrician1.social;
document.getElementById("businessCard1").setAttribute("data-trade", electrician1.trade);

document.getElementById("businessHead2").innerHTML = electrician2.businessName;
document.getElementById("bus-add2").innerHTML = electrician2.address;
document.getElementById("bus-num2").innerHTML = electrician2.number;
document.getElementById("bus-email2").innerHTML = electrician2.email;
document.getElementById("bus-url2").innerHTML = electrician2.website;
document.getElementById("bus-social2").innerHTML = electrician2.social;
document.getElementById("businessCard2").setAttribute("data-trade", electrician2.trade);

document.getElementById("businessHead3").innerHTML = electrician3.businessName;
document.getElementById("bus-add3").innerHTML = electrician3.address;
document.getElementById("bus-num3").innerHTML = electrician3.number;
document.getElementById("bus-email3").innerHTML = electrician3.email;
document.getElementById("bus-url3").innerHTML = electrician3.website;
document.getElementById("bus-social3").innerHTML = electrician3.social;
document.getElementById("businessCard3").setAttribute("data-trade", electrician3.trade);
