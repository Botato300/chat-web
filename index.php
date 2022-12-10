<!DOCTYPE html>
<html lang="es">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link href="estilos.css" rel="stylesheet">
		<title>Chat++</title>
	</head>
	<body>
		<div class="container">
			<div class="container-menu">
				<label>
					Nombre de Usuario
					<input type="text" class="nickname" id="nickname" placeholder="Escribe tu nombre">
			</label>
			</div>
			<div class="container-chat">
				<div class="messages" id="messages">
				</div>
				<div class="inputs">
					<input type="text" id="message" placeholder="Escribe tu mensaje..." autocomplete="off">
					<input type="submit" class="submit" id="submit">
				</div>
			</div>
		</div>
		<script src="main.js"></script>
	</body>
</html>