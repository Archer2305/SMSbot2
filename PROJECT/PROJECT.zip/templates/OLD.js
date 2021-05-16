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
// ---
function iReallyDontKnowWhatToDo() {
   var startcode="const http = require('http');\nconst express = require('express');\nconst MessagingResponse = require('twilio').twiml.MessagingResponse;\nconst app = express();\napp.use(express.urlencoded({ extended: false }));\napp.post('/sms', (req, res) => {\nconst twiml = new MessagingResponse();\nconst inbMsg = req.body.Body;\nvar understood=true"
   var cmd_one="textBox" 
   var cmd_two="TextBox"
   var cmd_three="TextBox"
   var msgsend_one="TextBox"
   var msgsend_two="TextBox"
   var msgsend_three="TextBox"
   var maincode=" "
   var understood=false;
   console.log(startcode)

   var command1 = document.getElementById("command-1-input").value;

   var command2 = document.getElementById("command-2-input").value;

   var command3 = document.getElementById("command-3-input").value;

   var reply1 = document.getElementById("reply-1-input").value;

   var reply2 = document.getElementById("reply-2-input").value;

   var reply3 = document.getElementById("reply-3-input").value;

   console.log("command 1: " + command1 + " reply 1: " + reply1);
   console.log("command 2: " + command2 + " reply 2: " + reply2);
   console.log("command 3: " + command3 + " reply 3: " + reply3);

   cmd_one = command1;
   cmd_two = command2;
   cmd_three = command3;

   msgsend_one = reply1;
   msgsend_two = reply2;
   msgsend_three = reply3;

   if(cmd_one!=undefined&&msgsend_one!=undefined){
   var output_one=`\n if(inbMsg == \"${cmd_one}\") {\n
       twiml.message(\'${msgsend_one}\');\n
   }\n understood=true `
   maincode=startcode+output_one;
   understood=true
   }

   if(cmd_two!=undefined&&msgsend_two!=undefined){
   var output_two=`\nif(inbMsg == \"${cmd_two}\") {\n
       twiml.message(\'${msgsend_two}\');\n
   }\n  understood=true`
   maincode=maincode+output_two;

   }

   if(cmd_three!=undefined&&msgsend_three!=undefined){
   var output_three=`\nif(inbMsg == \"${cmd_three}\") {\n
       twiml.message(\'${msgsend_three}');\n
   }\n understood=true `
   maincode=maincode+output_three;
   understood=true
   }

   maincode+="\nif(understood==false) { \n twiml.message(\"Im not sure i understand\")\n }\n res.writeHead(200, {'Content-Type': 'text/xml'});\nres.end(twiml.toString());   \n});    \n http.createServer(app).listen(1337, () => {\n console.log('Express server listening on port 1337');\n });\n"
   var filename = "app.js";

   download(filename, maincode)
}

// const fs = require('fs');


// fs.writeFileSync('app.js', maincode);
// console.log('Done!');
