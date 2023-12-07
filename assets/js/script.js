function handleFormSubmit(e) {
  e.preventDefault();
  // Mostra o loader
  _showLoading(true);

  // Limpa as mensagem de erro
  _clearMessages();

  //Desabilita os botões
  _disableButtons(true);

  let [nome, email, endereco, mensagem] = e.target;

  var hasError = false;

  if (!nome.value.includes(" ")) {
    _displayMessage("Informe seu nome completo");
    hasError = true;
    nome.classList.add('invalid');
  }

  if (endereco.value.length < 10 || !endereco.value.includes(" ")) {
    _displayMessage("Informe seu endereço completo");
    endereco.classList.add('invalid');
    hasError = true;
  }

  if (mensagem.value.length < 10 || !mensagem.value.includes(" ")) {
    _displayMessage("Sua mensagem está muito curta, inclua mais detalhes.");
    mensagem.classList.add('invalid');
    hasError = true;
  }

  if (email.value.length < 10 || !email.value.includes("@")) {
    _displayMessage("Informe um email válido.");
    email.classList.add('invalid');
    hasError = true;
  }

 // Se não houver erro, envia para o servidor os dados. (Aqui simulamos com um timeout)
  setTimeout(() => {
    if (!hasError) {
      _displayMessage("Formulário enviado com sucesso", true);
    }

    _showLoading(false);
    _disableButtons(false);
  }, 1000);
}

function _displayMessage(errorMessage, isSuccessMessage = false) {
  let error_li = document.createElement("li");
  error_li.classList.add(
    isSuccessMessage ? "success_message" : "error_message"
  );
  error_li.append(errorMessage);
  document.querySelector("#message-area").appendChild(error_li);
}
function _disableButtons(disable = false) {
  document.querySelectorAll("button").forEach((btn) => {
    if (disable) {
      btn.setAttribute("disabled", true);
    } else {
      btn.removeAttribute("disabled");
    }
  });
}

function _showLoading(show = false) {
  if (show)
    document.querySelector("#loader-overlay").classList.remove("d-none");
  else document.querySelector("#loader-overlay").classList.add("d-none");
  return;
}

function _clearMessages() {
  document.querySelectorAll('.invalid').forEach((input) => input.classList.remove('invalid'));
  document.querySelector("#message-area").innerHTML = "";
}
