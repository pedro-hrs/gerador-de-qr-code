let qrcode = new QRCode("qrcode");
let input = document.getElementById("link");
let qrImage = document.getElementById('qrcode')
let btnDownload = document.getElementById('download')

function gerarQr() {
  if (!input.value) {
    
    Swal.fire(
      'Insira a URL',
      'Informe a url para gerar o qr-code',
      'error'
      )
      
    } else {

    qrcode.makeCode(input.value);
    let a = qrcode.makeCode(input.value);
    qrImage.classList.remove('hidden')// Exibe o qr code
    console.log(a)
    btnDownload.classList.remove('hidden') // Exibe botão de download
  }
}
let img = document.getElementsByClassName('div#qrcode > img')
