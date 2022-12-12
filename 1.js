

function submitFormDetails() {

    var fullNameObj = document.getElementById('FullNameFormControlInput');
    var emailObj = document.getElementById('EmailAddressInput');
    var collegeObj = document.getElementById('CollegeDetailsFormControl');
    var addressObj = document.getElementById('AdressDetailsInput');



    var result = `<span>${fullNameObj.value}</span> |
                <span>${emailObj.value}</span> |
                <span>${collegeObj.value}</span> |
                <span>${addressObj.value}</span>`;
    
    
    var alertDiv = document.getElementById('alert-div');

    alertDiv.style.display = "block";

    alertDiv.innerHTML = result;

}

function changeColor() {
    var fullNameObj = document.getElementById('FullNameFormControlInput');

    fullNameObj.style.backgroundColor = "blue";
}

// function changeBackgroundImage(imageName)
// {
//     debugger;
//     var imgObj = document.getElementById('image-tag');

//     var imagePath = `images\\${imageName}`;

//     imgObj.setAttribute("src", imagePath);

// }