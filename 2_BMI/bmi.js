const form=document.querySelector('form');

form.addEventListener('submit',function(it){
    it.preventDefault();
    const ht=parseInt(document.querySelector('#height').value);
    const wt=parseInt(document.querySelector('#weight').value);
    const re=document.querySelector('#results');
    
    if(ht<0 || isNaN(ht) )
    {
        re.innerHTML=`Please give a valid height ${ht}`;
    }
    else if( wt<0 || isNaN(wt) )
    {
        re.innerHTML=`Enter Valid weight`;
    }
    else{
        const ans=((wt/(ht**2))*1000).toFixed(2);
        re.innerHTML=`${ans}`;
    }

});
