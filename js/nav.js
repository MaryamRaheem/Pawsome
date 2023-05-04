const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <img src="img/logo.png" class="brand-logo" alt="">
            <div class="pawsome">
                <span style="font-family:Bubble Bobble">PAWSOME - Peace, Love And Belly Rubs</span>
            </div>
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search brand, product">
                    <button class="search-btn">search</button>
                </div>
                <a href="file:///C:/Users/User/Desktop/samia%20design/hci%20project/project/public/shoppingcart.html#"><img src="img/cart1.png" alt=""></a>
                <a href="#"><img src="img/user.png" alt=""></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="file:///C:/Users/User/Desktop/samia%20design/hci%20project/project/public/index.html" class="link">home</a></li>
            <li class="link-item"><a href="file:///C:/Users/User/Desktop/samia%20design/hci%20project/project/public/dogs.html" class="link">dogs</a></li>
            <li class="link-item"><a href="#" class="link">cats</a></li>
            <li class="link-item"><a href="#" class="link">birds</a></li>
            <li class="link-item"><a href="#" class="link">rabbits</a></li>
            <li class="link-item"><a href="#" class="link">fishes</a></li>
            <li class="link-item"><a href="#" class="link">FAQs</a></li>
            <li class="link-item"><a href="#" class="link">Contact</a></li>
        </ul>
    `;
}

createNav();