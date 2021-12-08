class bookList{
    constructor(bookName,authorName,genre)
    {
    this.bookName = bookName;
    this.authorName = authorName;
    this.genre = genre;
    }
    
}

class Display{
    add(book){
        let tableBody = document.getElementById('tableItems');
        let tableString = `<tr>
                            <td>${book.bookName}</td>
                            <td>${book.authorName}</td>
                            <td>${book.genre}</td>
                        </tr>`;
        tableBody.innerHTML+= tableString;
    }

    clear(){
        recordForm.reset();
    }

    show(colorName,displayMessage){
       let message = document.getElementById('message');
       let boldText;
        if(colorName==='success'){
            boldText = 'Success';
        }
        else{
            boldText = 'Error!';
        }
        message.innerHTML = `<div class="alert alert-${colorName} alert-dismissible fade show" role="alert">
                                <strong>${boldText}:</strong> ${displayMessage}
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">×</span>
                                </button>
                            </div>`;
        setTimeout(function(){
            message.innerHTML='';
        },5000);
                            

    }

    validate(book){
        if(book.bookName.length <2 || book.authorName.length <2){
            return false;
        }
        else{
            return true;
        }

    }
}



    let recordForm = document.getElementById('recordForm');
    recordForm.addEventListener('submit',recordFormFunction);

    function recordFormFunction(e){

        let bookName = document.getElementById('bookName').value;
        let authorName = document.getElementById('authorName').value;
        let genre;
        let fiction = document.getElementById('fiction');
        let horror = document.getElementById('horror');
        let thriller = document.getElementById('thriller');
        let technology = document.getElementById('technology');
        let others = document.getElementById('others');

        if(fiction.checked){
            genre = fiction.value;
        }
        else if(horror.checked){
            genre = horror.value;
        }
        else if(thriller.checked){
            genre = thriller.value;
        }
        else if(technology.checked){
            genre = technology.value;
        }
        else{
            genre = others.value;
        }

        let book = new bookList(bookName,authorName,genre);
        let display = new Display();

        if(display.validate(book)){
            display.add(book);
            display.clear();
            display.show('success', 'Your book has been successfully added');

        }
        else{
            console.log('bhak');
            display.show('danger', 'Sorry you cannot add this book');
        }

        e.preventDefault();

    }






