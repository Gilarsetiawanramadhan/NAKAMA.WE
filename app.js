document.getElementById('search').onclick = function (){
    alert('maaf belum berfungsi')
}
//menambhakan element html menggunakan javscript
let divElement = document.createElement('div'); // langkah pertama membuat element div
divElement.classList.add('description');//menambhakan class pada divElement
let descriptionElement = `
    <dl>
        <dt>NAKAMA</dt>
        <dl>Nakama merupakan website live streaming anime secara gratis, Tanpa di pungunt biaya apapun.dan 
            selalu update dengan anime anime terbaru. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nunc sed ultricies augue, eu eleifend justo. Cras tellus mauris, rhoncus eget efficitur eget, 
            pellentesque vitae arcu. Aenean viverra sollicitudin aliquam. Duis nec eleifend mi. Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. Nullam vestibulum placerat molestie. Vestibulum consectetur sapien erat, 
            eu interdum ipsum varius nec. Aliquam et neque in justo hendrerit lacinia. Quisque sodales porttitor 
            commodo. Pellentesque feugiat dictum libero eu sodales. Fusce eu ante nec nisl auctor vestibulum nec vel ipsum. 
            Proin sollicitudin dui vitae risus pulvinar blandit. Etiam lorem sem, ullamcorper at turpis vitae, condimentum 
            egestas ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
            Donec vulputate porta tincidunt. Phasellus tincidunt pharetra nisl, nec convallis nisi commodo quis.
        <br><br>
            Dan jika anda mempunyai saran untuk website kami agar terlihat lebih menarik dan nyaman maka anada bisa
            menggunakan fitur pesan di atas.
        </dl>
    </dl>
`;
divElement.style.color='white'
divElement.style.margin='4vw'
divElement.style.textAlign='center'


divElement.insertAdjacentHTML('afterbegin', descriptionElement);


let contanerDiv = document.querySelector('.container'); //kemudian menambahkan element ke dalam webpage

contanerDiv.appendChild(divElement);//menambahkan elemen div yang kita buat ke dalam containerDiv
