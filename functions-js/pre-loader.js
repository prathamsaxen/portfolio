var class_name=document.getElementById('loader');
function pre_loader_off()
{
    
    setTimeout(() => {
        class_name.style.display ='none';
    }, 2000);
    
    console.log('Pre-loader-working');
}