let ulList = document.querySelector('#list')
let addClick = document.querySelector('#liveToastBtn') //ekle butonu
let inputValue = document.querySelector('#task') //input
let closeIcon = `<span class="close" onclick="deleteTask(this.parentNode)" aria-label="Close" aria-hidden="true">&times;</span>`; //silme ikonu(tıklandığında silinmesini de barındırıyor)
let Tasks = []; //Taskları localstroge'e kaydetmek için oluşturduğumuz array


// Ekle butonuna tıklandığında listeye yapılacaklar eklenmesi
addClick.addEventListener("click",function(){
    if ((inputValue.value.length>0) && !(inputValue.value.trim().length === 0)){
        var li = document.createElement("li");
        li.innerHTML = `${inputValue.value}${closeIcon}`;
        ulList.appendChild(li);
        inputValue.value = "";
        li.addEventListener("click",toggleChecked);
        Tasks.push(li.innerHTML);
        localStorage.setItem('Tasks', JSON.stringify(Tasks));
        $('.success').toast('show')
    } else {
        inputValue.value = "";
        $('.error').toast('show')
    }
})
// Yapılacak iş yazıldığında enter ile ekle butonuna tıklanmasını birleştiren fonksiyon
inputValue.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("liveToastBtn").click();
    }
});

// Element class'ına "checked" ekleme fonksiyonu
function toggleChecked(){
    this.classList.toggle("checked");
}

// LocalStorage'de var olan görevin listede gözükmesi
if (localStorage.getItem('Tasks').length > 0) {
    Tasks = JSON.parse(localStorage.getItem('Tasks'));
    Tasks.forEach(element => {
        var li = document.createElement('li');
        li.innerHTML = `${element}`;
        ulList.appendChild(li);
        li.addEventListener('click',toggleChecked);
    });
};

// Kayıtlı taskın silinmesi için fonksiyon
function deleteTask(parentNode) {
    Tasks.splice(Tasks.indexOf(parentNode.innerHTML), 1);
    localStorage.setItem("Tasks", JSON.stringify(Tasks));
    parentNode.remove();
}