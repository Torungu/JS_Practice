document.querySelector('#modalButton').onclick=function(){
    document.querySelector('body').className='bg-secondary'
    document.querySelector('.modal_content').classList.add('show')
}
document.querySelector('#closeButton').onclick=function(){
    document.querySelector('body').className='bg-dark'
    document.querySelector('.modal_content').classList.remove('show')
}