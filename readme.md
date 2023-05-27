# Odev
[patika.dev](https://patika.dev) Eğitimine kısa bir aradan sonra devam! Temelinin verildiği bu projede bizden javascript dosyası yazılması istendi. Ödevin hazırlanma süreci açıklamalarla aşağıda var. İncelediğiniz için teşekkür ederim...
# Odevin Hazırlanması
* Öncelikle işlem yapacağım elementleri IDlerini kullanarak javascriptte tanımladım.
* İlk başta ekle butonunu aktifleştirmek için ekle butonunu tanımladığım değere addEventListener ile tıklandığında çalışacak fonksiyon oluşturdum.
* Oluşturduğum fonksiyonda if kullandım. Bunun sebebi ise projede input değerinin boş olmaması ve boşlukla liste oluşturulmaması şartının olması. Onun için ise input değerinin 0'dan büyük olması ve input değerinin boşlukla oluşturulmaması şartını oluşturdum bunu da "trim" ile sağladım.
* trim() metodu ile karakter dizisinin başındaki ve sonundaki boşluk karakterlerini sileriz. İnput değerimizi trimlediğimizde oluşan değer 0 ise yani boşlukla oluşturulmuş bir input değeri var değil ise çalışacak bir if bloğu oluşturdum.
* if çalıştığında input değerinde bir Yapılacak Liste elemanı ve kapatma ikonu oluşacak fonksiyonu yazdım.
* if'deki şartlar sağlanmadığında (else) input value değersiz kalması için ("") eşitledim.
* Daha sonraki aşamada ise Yapılacaklar Listesi'ndeki işin yapıldığında yapıldı işaretlemesini sağlamak için seçili (this) elemanın sınıfını değiştiren classList.toggle() kullanarak sınıfı "checked" yapan fonksiyon oluşturdum.
* Oluşturduğum fonksiyonu element eklemek için oluşturduğum fonksiyonun içerisindeki if yapısının içine addEventListener ile ekledim.
* İnput'a yapılacak yazıldığında "Ekle" butonuna tıklamadan klavyedeki Enter'a basarak aynı işlemi yapan fonksiyon da oluşturdum. 
* Sonraki aşamamda ise oluşturduğum yapıya Local Storage'ı da ekleyip verilerin saklanmasını sağladım. Öncelikle listeye eklenenlerin Local Storage'e de eklenmesi için "Tasks" adlı bir dizi(array) oluşturdum.
* Sonrasında ise yapılacak eklenmesi için oluşturdum if yapısına da localStorage.setItem ile ekledim ve bunu "Tasks" dizisine eklettim.
* Local Storage'de var olan yapılacak işin gözükmesi için if yapısı oluşturdum.
* Sonrasında ise eklenecek elementi silecek bir ikon buldum ve ikona tıklandığında silinmesini sağladım.() Yapılacak iş silindiğinde Local Storage'de de silinmesi için bir fonksiyon oluşturdum.
* Listedeki işin silinmesi için bir fonksiyon ve ikon oluşturdum. İkona bu fonksiyonu tanımladım. Ayrıca fonksiyonda Local Storage'deki verinin de silinmesi de var.
* En son iş ise toastları eklemek oldu. Element eklendiğinde ve hata verirken sağ üstte verilecek uyarıyı koduma ekledim.
# ScreenShots
![](/img/pic-1.png)
![](/img/pic-2.png)
![](/img/pic-3.png)
