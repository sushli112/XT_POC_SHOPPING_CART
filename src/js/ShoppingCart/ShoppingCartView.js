import {store} from "../store"
const Handlebars = require("handlebars")

export const selectedImageView = itemId => {
  var templateHtml = `<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>

        </div>
        <div class="modal-body">
            <div class="modal-item-info">
                    <input id="selectedItemId" type="hidden" name="" value="{{id}}" />
                    <h4 id="selectedItemName">{{name}}</h4>
                    <p id="selectedItemPrice" class="modalImgPrice">{{price}}</p>
                    <p><select name="sizeSelector" id="sizeSelector" >
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                    </select>
                    <select name="QtySelector" id="QtySelector">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                     
                </p>
                  <p>
                  <button type="button" id="updateCart" class="btn btn-primary" data-dismiss="modal">ADD TO BAG</button>
                  </p>
            </div>
             <div class="modal-item-img">
                 <img src="{{image}}" alt="selected item image">
             </div>
        </div>



      </div>
    </div>
  </div>`

  generateHtmlWithHandlebars(templateHtml, "selectedImage", itemId)
  // var currentState = store.getState()
  // var itemListTemp = currentState.items.itemList
  // var itemdata = {}
  // for (let i = 0; i < itemListTemp.length; i += 1) {
  //   if (itemListTemp[i].id === itemId) {
  //     itemdata = itemListTemp[i]
  //   }
  // }
  // var compiledItemTemplate = Handlebars.compile(templateHtml)
  // var selectedImageTemplate = compiledItemTemplate(itemdata)

  // const container = document.querySelector("#selectedImage")
  // container.innerHTML = selectedImageTemplate
}

export const previewImagesView = itemId => {
  var templateHtml = ` <div class="modal fade" id="itemView" tabindex="-1" role="dialog" aria-labelledby="itemView" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
          <div class="modal-header bg-dark text-light">
              <button type="button" class="close text-light" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
          </button>
          </div>
          <div class="modal-body">

              <div class="form-row">
                 
                 
                  <div class="container">
                      <div class="row blog">
                          <div class="col-md-12">
                              <div id="blogCarousel" class="carousel slide" data-ride="carousel">

                                  <ol class="carousel-indicators">
                                      <li data-target="#blogCarousel" data-slide-to="0" class="active"></li>
                                      <li data-target="#blogCarousel" data-slide-to="1"></li>
                                      <li data-target="#blogCarousel" data-slide-to="2"></li>
                                  </ol>

                                  <!-- Carousel items -->
                                  <div class="carousel-inner">

                                      <div class="carousel-item active">
                                          <div class="row">
                                              <div class="col-md-12">
                                                  <img class="previewImg" src="{{image}}" alt="Image1" width="300" height="300" />
                                              </div>
                                          </div>
                                          <!--.row-->
                                      </div>
                                      <!--.item-->

                                      <div class="carousel-item">
                                          <div class="row">
                                              <div class="col-md-12">
                                                  <a href="#">
                                                      <img class="previewImg" src="{{image2}}" alt="Image2" width="300" height="300">
                                                  </a>
                                              </div>

                                          </div>
                                          <!--.row-->
                                      </div>
                                      <!--.item-->

                                      <div class="carousel-item">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <a href="#">
                                                    <img class="previewImg" src="{{image3}}" alt="Image3" width="300" height="00">
                                                </a>
                                            </div>

                                        </div>
                                        <!--.row-->
                                    </div>
                                    <!--.item-->

                                  </div>
                                  <!--.carousel-inner-->
                              </div>
                              <!--.Carousel-->

                          </div>
                      </div>
                  </div>;`

  generateHtmlWithHandlebars(templateHtml, "previewImage", itemId)
}

const generateHtmlWithHandlebars = (templateHtml, sectionId, itemId) => {
  var currentState = store.getState()
  var itemListTemp = currentState.items.itemList
  var itemdata = {}
  for (let i = 0; i < itemListTemp.length; i += 1) {
    if (itemListTemp[i].id === itemId) {
      itemdata = itemListTemp[i]
    }
  }
  var compiledItemTemplate = Handlebars.compile(templateHtml)
  var selectedImageTemplate = compiledItemTemplate(itemdata)

  const container = document.querySelector("#" + sectionId)
  container.innerHTML = selectedImageTemplate
}
