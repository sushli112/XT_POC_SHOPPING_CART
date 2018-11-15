export const selectedImageView = () => {
  var templateHtml = `<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>

        </div>
        <div class="modal-body">
            <div class="modal-item-info">
                    <h4 >{{name}}</h4>
                    <p class="modalImgPrice">21</p>
                    <p><select name="sizeSelector" id="sizeSelector">
                        <option value="Size" selected>Size</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                    </select>
                    <select name="QtySelector" id="QtySelector">
                            <option value="1"selected>QTY:1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                </p>
                    <button type="button" class="btn btn-primary">ADD TO BAG</button>
            </div>
             <div class="modal-item-img">
                 <img src="./src/img/modalPaint.PNG" alt="selected item image">
             </div>
        </div>



      </div>
    </div>
  </div>`;

  var compiledItemTemplate = Handlebars.compile(templateHtml);
  var generatedItemHtml = compiledItemTemplate(itemdata);

  const container = document.querySelector("#selectedImage");
  container.appendChild(selectedImageTemplate);
};
