
function Imenik(){
    this.osobe = [];


    this.dodajOsobu = function(osoba){
        this.osobe.push(osoba)
        console.log(this.osobe)

    }

    this.removeContact = function(index){
        console.log(index)
        this.osobe.splice(index, 1)
        console.log('poslije brisanja',this.osobe)
        
    } 




};

function osoba(ime,brojTelefona,slika){
    this.ime = ime;
    this.brojTelefona = brojTelefona;
    this.slika = slika;
}





var imenik = new Imenik();

function addPerson(){
    
    imenik.dodajOsobu(new osoba(document.getElementById('name').value,document.getElementById('number').value,document.getElementById('photolink').value));
    document.getElementById('name').value = '';
    document.getElementById('number').value = '';
    document.getElementById('photolink').value = '';
    showPerson(imenik.osobe)
}


function showPerson(array){
    
    var container = document.querySelector('.show-div')
    container.innerHTML = '';

      for (let i = 0; i <array.length; i++) {
        var osobaDiv = document.createElement('div');
        osobaDiv.id = i;
        var ime = document.createElement('li');
        ime.classList.add('name-contact');
        ime.innerHTML = array[i].ime;
        var broj = document.createElement('li');
        broj.classList.add('number-contact'); 
        broj.innerHTML = array[i].brojTelefona;
        var button = document.createElement('button');
        button.innerHTML = 'Delete'
        button.classList.add('delete-btn');
        button.addEventListener('click', function(){
            imenik.removeContact(i)
            showPerson(imenik.osobe)
        });
        
        var detBtn = document.createElement('button');
        detBtn.innerHTML = 'Details..'
        detBtn.classList.add('det-btn');
        detBtn.addEventListener('click',function(){
            var wrapper = document.getElementById('wrapper');
            var details = document.getElementById('details');
            wrapper.classList.add('none');
            details.classList.remove('none');
            var nameDet = document.getElementById('nameDet');
            var numberDet = document.getElementById('numberDet');
            nameDet.innerHTML = array[i].ime;
            numberDet.innerHTML = array[i].brojTelefona;   
            var photolink = document.createElement('img');
            photolink.src = array[i].slika;
            photolink.classList.add('photo-user')
                        

            details.appendChild(nameDet);
            details.appendChild(numberDet);
            details.appendChild(photolink)
        });

        osobaDiv.appendChild(ime);
        osobaDiv.appendChild(broj);
        osobaDiv.appendChild(button);
        osobaDiv.appendChild(detBtn);
        container.appendChild(osobaDiv);

    }
}

function search(e){
    var filtered = [];
    console.log(imenik.osobe)
    
    for (let osoba of imenik.osobe) {
        console.log(osoba)
        if(osoba.ime.toLowerCase().indexOf(e.target.value.toLowerCase()) > - 1)
          filtered.push(osoba)
    }
    showPerson(filtered)
}
    
    
    
    
    
    
var add = document.getElementById('number');
add.addEventListener("keyup", function(event){
    event.preventDefault();
    console.log('enter',event)
    if(event.key === "Enter"){
        addPerson()

    }
    
});
    
    
  