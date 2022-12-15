const products-carte = [
  {title:'capuccino', description:"café au lait de vache-folle", img:"./img/product_1.jpg"},
  {title:'maschiato', description:"grand soin apporté", img:"./img/img/product_2.jpg"},
  {title:'double-expresso', description:"café au lait de vache-folle", img:"./img/product_3.jpg"},
  {title:'café liégeois', description:"café à la bière de liege", img:"./img/product_4.jpg"},
  {title:'cheese-cake framboise', description:"gateau trop bon", img:"./img/product_5.jpg"},
  {title:'tarte-choco', description:"un peu tarte, un peu choco", img:"./img/product_6.jpg"},
]



const generateProduct = (titre, description, img) => {
// creer une box qui represente mon produit et la retourner 
}

const addProductToDOM = (element) => {
  // ajouter l'element dans le DOM
}


let café = [, 'maschiato', 'double-expresso', 'café liegeois', 'cheese-cake framboise', 'tarte choco']


element.classList.add("container-products");

//document.innerhtml pourajouter imgs


//mercredi 14: soutien: exemple d'Anthony

const products = [
    {title:"mon titre", description:"La description",img:"./img/monimg.png"},
    {title:"mon titre 2", description:"La description 2",img:"assets/images/product_0.jpg"}   
]



document.addEventListener("DOMContentLoaded", () => {
    const generateProduct = (titre, description, img) => {
        const card = `
            <div class="card-product">
                <div class="container-product-img">
                    <img class='product-img' src="">
                </div>
                <div class="card-body-product">
                    <h3 class="title-product"></h3>
                    <p class="description-product"></p>
                    <div class="footer-card">
                        <div class="footer-card-qte">
                            <button class="btn-product-qte">-</button>
                            <strong>0</strong>
                            <button class="btn-product-qte">+</button>
                        </div>
                        <button class="btn-product">Ajouter au panier</button>
                    </div>
                </div>
            </div>
        `
        const div = document.createElement("div")
        div.innerHTML = card
        
        const imgElement =  div.getElementsByClassName("product-img")
        const titleElement =  div.getElementsByClassName("title-product")
        const descriptionElement =  div.getElementsByClassName("description-product")
        
        imgElement[0].src = img
        titleElement[0].innerText = titre
        descriptionElement[0].innerText = description
        
        addProductToDOM(div)
    }
    
    const addProductToDOM = (element) => {
        document.body.append(element)
    }    
    
    generateProduct(products[1].title, products[1].description, products[1].img)
})

// CORRECTION COMPLETE


const products = [
    {title:"mon titre", description:"La description",img:"./img/monimg.png"},
    {title:"mon titre 2", description:"La description 2",img:"assets/images/product_0.jpg"}   
]

const card = `
                <div class="container-product-img">
                    <img class='product-img' src="">
                </div>
                <div class="card-body-product">
                    <h3 class="title-product"></h3>
                    <p class="description-product"></p>
                    <div class="footer-card">
                        <div class="footer-card-qte">
                            <button class="btn-product-qte">-</button>
                            <strong>0</strong>
                            <button class="btn-product-qte">+</button>
                        </div>
                        <button class="btn-product">Ajouter au panier</button>
                    </div>
                </div>
        `

document.addEventListener("DOMContentLoaded", () => {
    /**
     * 
     * @param {string} titre
     * @param {string} description
     * @param {string} img
     */
    const generateProduct = (titre, description, img) => {
        // on creer la div card-product et on met son contenu
        const div = document.createElement("div")
        div.classList.add("card-product")
        div.innerHTML = card
        
        //on recupere les elemets de la card
        const imgElement =  div.getElementsByClassName("product-img")
        const titleElement =  div.getElementsByClassName("title-product")
        const descriptionElement =  div.getElementsByClassName("description-product")
        
        //on met les valeurs dans les elements
        imgElement[0].src = img
        titleElement[0].innerText = titre
        descriptionElement[0].innerText = description
        
        // on ajoute la card au DOM
        addProductToDOM(div)
    }
    
    /**
     * 
     * @param {HTMLElement} element 
     */
    const addProductToDOM = (element) => {
        const container = document.getElementsByClassName("container-products")[0]
        container.append(element)
    }
    
    for(let i = 0; i< products.length; i++){
        generateProduct(products[i].title, products[i].description, products[i].img)
    }
    
    
})


/**
 * 
 * @param {number} num1
 * @param {number} num2
 * @return {number} 
 */
function addition(num1,num2){
    return num1 + num2
}


