// Mensagem pronta no WhatsApp, codificada para a URL
const TELEFONE = '5531900000000';
const MENSAGEM = 'Olá! Quero agendar um horário na Navalha & Cia.';
const link = `https://wa.me/${TELEFONE}?text=${encodeURIComponent(MENSAGEM)}`;

document.querySelectorAll('.js-agendar').forEach((a) => {
  a.href = link;
});
