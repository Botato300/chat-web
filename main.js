const message = document.getElementById("message");
const messagesContainer = document.getElementById("messages");

const nicknameElement = document.getElementById("nickname");

const submit = document.getElementById("submit");

const xhr = new XMLHttpRequest();
const xhr2 = new XMLHttpRequest();

uStorage = window.localStorage;

message.addEventListener("keydown", function(e){
	if(e.code == "Enter"){
		SendMessage(message);
	}
});

submit.addEventListener("click", function(){
	SendMessage(message);
});

xhr.addEventListener("readystatechange", function(){
	if(xhr.readyState == 4) {
		const data = xhr.responseText;
		InsertMessage(data);

		message.value = "";
		message.focus();
	}
});

window.addEventListener("DOMContentLoaded", function(){
	UpdateChat("Cargando...");

	nicknameElement.value = uStorage.getItem("username");
});

setInterval(function(){
	xhr2.open("POST", "database.php", true);
	xhr2.send();
}, 1000);

xhr2.addEventListener("readystatechange", function(){
	if(xhr2.readyState == 4) {
		const data = xhr2.responseText;

		UpdateChat(data);
	}
});

function SendMessage(message){
	if(IsValidMessage(message.value)){
		xhr.open("POST", "server.php", true);
		xhr.setRequestHeader("Content-Type", "text/plain");
		xhr.send(GetUserName() +  message.value);
	}
}

function UpdateChat(messages){
	messagesContainer.innerHTML = "<pre>"  + messages + "</pre>";
	messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function InsertMessage(message){
	const element = document.createElement("pre");
	element.textContent = message;
	messagesContainer.appendChild(element);

	messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function IsValidMessage(message){
	if(message.length > 0) return 1;
	return 0;
}

function GetUserName(){
	let nickname = nicknameElement.value;
	if(nickname.length == 0){
		nickname = "Sin nombre";
	}

	uStorage.setItem("username", nickname);

	return nickname + ": ";
}