$(document).ready(function() {
    $('#contactForm').submit(function(event) {
      event.preventDefault(); // Evita o envio padrão do formulário

      // Obtenha os valores do formulário usando jQuery
      var name = $('#name').val();
      var email = $('#email').val();
      var message = $('#message').val();

      // Faça algo com os valores (por exemplo, envie para um servidor)
      console.log('Nome:', name);
      console.log('Email:', email);
      console.log('Mensagem:', message);

      // Limpe o formulário
      $('#contactForm')[0].reset();
    });
  });