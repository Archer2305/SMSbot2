function updateCommands() {
    var prefixInput = document.getElementById("prefix-input");
    var prefix = prefixInput.value;

    console.log(prefix);
}

function addCommand() {
    var form = document.getElementById("form-for-things-idk");
    var fieldForExtrathings = document.createElement("div");
    fieldForExtrathings.classList.add("field");

    var labelForExtraThings = document.createElement("label");
    labelForExtraThings.classList.add("label");
    labelForExtraThings.classList.add("is-large");

    labelForExtraThings.innerText = "extra command";

    var inputForExtraThings = document.createElement("input");
    inputForExtraThings.classList.add("input");
    inputForExtraThings.classList.add("has-text-dark");
    inputForExtraThings.placeholder = "This is an extra command :)"
    fieldForExtrathings.appendChild(labelForExtraThings);
    fieldForExtrathings.appendChild(inputForExtraThings);

    form.appendChild(fieldForExtrathings);
}

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

function iReallyDontKnowWhatToDo() {
    var Commands = ["", "", "", "", "", "", "", "", "", "", "", ""];
    var Replys = ["", "", "", "", "", "", "", "", "", "", "", ""];
    var empty = false;
    var ran = false;
    var COMD
    var base = "const http = require('http');\nconst express = require('express');\nconst MessagingResponse = require('twilio').twiml.MessagingResponse;\nconst app = express();\napp.use(express.urlencoded({ extended: false }));\napp.post('/sms', (req, res) => {\nconst twiml = new MessagingResponse();\nconst inbMsg = req.body.Body;\nvar understood=true"
    //base is the first part of the code needded 
    var resp = document.getElementsByTagName("input")
    for (var i = 0; i < resp.length / 2; i++) {    //run all text fields 
        if (window.getComputedStyle(document.getElementById(`command-${i + 1}-input`)).visibility === "hidden") {
            COMD = "NULL_TOKEN_" 
             console.log("Command is null")
        } else{
            
             COMD = document.getElementById(`command-${i + 1}-input`).value;
             console.log("triggered")
        }


        if (window.getComputedStyle(document.getElementById(`reply-${i + 1}-input`)).visibility === "hidden") {
            RPLY = "NULL_TOKEN_"
            console.log("reply is null")
        } else {
            
            RPLY = document.getElementById(`reply-${i + 1}-input`).value;
            console.log("triggered RPLY")
        }

        if (COMD == null || COMD == "" || RPLY == "" ||/* COMD=="NULL_TOKEN_"||RPLY=="NULL_TOKEN_" || */RPLY == null  && document.getElementById(`command${i}`.hidden == false) ) {
            //alert at empty fields 
            empty = true;
        } if (empty == true & ran == false) {
            alert("Empty Text Field Detected");
            ran = true;
        } else {
            //create the commands
            //  console.log(i)
            Commands[i] = document.getElementById(`command-${i + 1}-input`).value;
            Replys[i] = document.getElementById(`reply-${i + 1}-input`).value
            //command builder
            var output = `\nif(inbMsg == \"${Commands[i]}\") {\n twiml.message(\'${Replys[i]}');\n}\n understood=true `
            base = base + output;
            understood = true
        }
    }//for ends
        download("RUN_ME.js", base+EndCode)
    }

}

var EndCode = "\nif(understood==false) { \n twiml.message(\"Im not sure i understand\")\n }\n res.writeHead(200, {'Content-Type': 'text/xml'});\nres.end(twiml.toString());   \n});    \n http.createServer(app).listen(1337, () => {\n console.log('Express server listening on port 1337');\n });\n"
function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

function CreateConfig(){
    var output =` { \n   "twilio": { \n      "accountSid": "${document.getElementById("JSON-1-input").value}", \n      "authToken": "${document.getElementById("JSON-2-input").value}", \n       "phoneNumber": "${document.getElementById("JSON-3-input").value}", \n       "allowedNumbers": ["${document.getElementById("JSON-4-input").value}], \n          "webhookUrl": "${document.getElementById("JSON-5-input").value}" \n    }, \n    \n     "express": {\n      "port": "1337"\n      } \n }\n`
    download("config.json",output)
}


