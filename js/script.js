const form = document.querySelector('#generate-form');
const qr = document.querySelector('#qrcode');
const url = document.querySelector('#url');
const size = document.querySelector('#size');
const showSpinner = ()=>{
    document.querySelector('#spinner').style.display = 'block';
};
const hideSpinner = ()=>{
    document.querySelector('#spinner').style.display = 'none';
};
const generateQRCode = (url,size)=>{
    const qrcode = new QRCode('qrcode',{
        text:url,
        width:size,
        height: size
    });
};
const clearUI = () =>{
    qr.innerHTML = '';
    const saveLink = document.querySelector('#save-link');
    if(saveLink){
        saveLink.remove();
    }
};
const createSaveButton = (saveURL)=>{
    const link = document.createElement('a');
    link.id = 'save-link';
    link.classList = 'bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded w-1/3 m-auto my-5';
    link.href = saveURL;
    link.download = 'qrcode';
    link.innerHTML = 'Save Image';
    document.querySelector('#generated').appendChild(link);
};  
const onGenerateSubmit = (e) =>{
    e.preventDefault();
    clearUI();
    const url = document.querySelector('#url').value;
    const size = document.querySelector('#size').value;
    console.log(url);
    console.log(size);
    if(url === '') {
        alert('Enter a URL first')
    }
    else{
        showSpinner();
    }
    setTimeout(()=>{
        hideSpinner();
        generateQRCode(url,size);
        setTimeout(()=>{
            const saveURL = qr.querySelector('img').src;
            createSaveButton(saveURL);
        },50);
    },1000);
}
form.addEventListener('submit',onGenerateSubmit);