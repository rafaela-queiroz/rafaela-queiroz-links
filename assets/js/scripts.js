function copyPix() {
  const pix = document.getElementById("pix");
  let { value } = pix;

  const button = document.getElementById("copy-button");

  // Selecionando texto para copiar
  pix.select();
  pix.setSelectionRange(0, 99999);

  // Copiando
  document.execCommand("copy");
  button.style.display = "none";
  pix.value = "Copiado 😄!";

  setTimeout(() => {
    pix.value = value;
    button.style.display = "block";
  }, 2000);

  // Deselecionando o texto
  document.getSelection().removeAllRanges();
}
