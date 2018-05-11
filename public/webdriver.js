var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;
var jwt = require('jwt-simple');
var By = webdriver.By,
    until = webdriver.until;

var credentials = {
    username: 'thomas@neovation.com',
    password: 'mypassword'
};


var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);


var driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .build();
//driver.get('http://library-app.firebaseapp.com/');
driver.get('https://neotest-dev.mlearn.io/Admin/');
driver.manage().timeouts().implicitlyWait(15000);

//login
driver.findElement(By.id('attribute-login-field')).sendKeys(credentials.username);
driver.findElement(By.id('attribute-password-field')).sendKeys(credentials.password);
driver.findElement(By.id('status')).click();

//Find how many user on the grid
driver.findElements(By.css('.ReactVirtualized__Table__row')).then(el => {
    console.log("Logged in");
    console.log("Found " + el.length + " users on the grid");
});
//Click on +User
driver.findElement(By.css("button[title='Add user']")).click();
//Check if user context panel is opened
driver.findElement(By.css(".user-panel")).then(el => {
    console.log("New User Context Panel is opened");
});



/*driver.findElement(By.css('.btn-lg')).getText().then(function(txt){
    console.log(txt);
});*/



var username = {
    "organizationId": 2,
    "username": "org2@ottotesting.com",
    "password": "password"
};
json_version = JSON.stringify(username);
var token;


const api_login = (data, callback) => {
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            callback(null, xhttp);
        }
    };

    xhttp.open("POST", "https://api.ottolearn-beta.io/authenticate/login", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(data);

}

var resultado = api_login(json_version, (a, b) => {
    if (b) {
        sessionToken = JSON.parse(b.responseText).sessionToken;
        //console.log(sessionToken);
        /*

        var signature = encodedHeader + "." + encodedData;
        signature = CryptoJS.HmacSHA256(signature, sessionToken);
        signature = base64url(signature);
        token = encodedHeader + encodedData + signature;
        document.getElementById("header").innerHTML = token;*/
    }
});



//driver.quit();