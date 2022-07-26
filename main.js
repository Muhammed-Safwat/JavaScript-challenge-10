let count = document.getElementById( "count" );
let textarea = document.getElementById( "textarea" );
let maxlength = textarea.getAttribute( "maxlength" );
console.log( maxlength );

textarea.oninput = function( ) {
    count.innerHTML = maxlength - this.value.length;
    if ( count.innerHTML == 0  )
    {
        textarea.classList.add( "full" );
    } else
    {
        textarea.classList.remove( "full" );
    }
}