import React, { useState } from "react";
import Button from "@/components/common/Button/Button";
import { ModalUpdateProps } from "@/types/modal";
import useCategories from "@/hooks/useCategories";
import { CategoryProps } from "@/types/category";
import Input from "@/components/Input/Input/Input";
import useProducts from "@/hooks/useProducts";
import { Product } from "@/types/product";
import getBase64 from "@/helpers/getBase64";
import "./modalUpdate.css";

const ModalUpdate: React.FC<ModalUpdateProps> = ({ product, hideModalUpdate, onChangeProductDetail }) => {
  const {updateProduct} = useProducts(); 
  const [productEdit, setProductEdit] = useState(product);

  const {categories} = useCategories();
  const [selectedFile, setSelectedFile] = useState([]);

  const handleUpdateProduct = async (id: string, productEdit: Product) => {
    for (let i = 0; i < selectedFile.length; i++) {
      productEdit.images.push(selectedFile[i]);
    }
    updateProduct(id, productEdit);
    onChangeProductDetail(productEdit);
    hideModalUpdate(false);
  }

  const handleChange = (event: { target: { value: {}; name: string; } }) => {
    const value = event.target.value;
    const key = event.target.name;
    setProductEdit({...productEdit, [key]: value});
  }

  const imageChange = async (event: { target: { files: any; }; }) => {
    const files = event.target.files;
    if(files) {
      for (let i = 0; i < files.length; i++) {
        const imageSrc = await getBase64(files[i]);
        setSelectedFile(selectedFile=>[...selectedFile, imageSrc] as any)
      }
    }
  }

  const handleDeleteImage = (event: { target: Element| any}) => {
    const target = event.target as Element;
    const indexOfArr = productEdit.images.findIndex(item=> item == (target as HTMLInputElement).dataset.id);
    productEdit.images.splice(indexOfArr, 1);
  }

  return (
    <div className="modal-update" id="bookDeleteModal">
      <div className="modal-dialog-modalUpdate">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-heading" id="productModalLabel">Edit Product Information</h4>
          </div>
          <div className="modal-body">
            <div className="form-control">
              <label htmlFor="">Product name: </label>
              <Input className="form__input" type="text" onChange={handleChange} name="name" value={productEdit.name} />
            </div>
            <div className="form-control">
              <label htmlFor="">Description: </label>
              <textarea className="form__text" value={productEdit.description} onChange={handleChange} name="description" id="" cols={30} rows={5}></textarea>
            </div>
            <div className="form-control">
              <label htmlFor="">Categories: </label>
              <select className="form__select" name="categoryId" onChange={handleChange} id="">
                {categories.map((cate: CategoryProps, index: number) =>
                  <option key={index} value={cate.id} selected={productEdit.categoryId == cate.id}>{cate.name}</option>
                )}
              </select>
            </div>
            <div id="form__number" className="form-control">
              <div className="form-control">
                <label htmlFor="">Price: </label>
                <Input className="modal__input" type="number" min={0} name="price" onChange={handleChange} value={productEdit.price} />
              </div>
              <div className="form-control">
                <label htmlFor="">Quantity: </label>
                <Input className="modal__input" type="number" min={0} name="quantity" onChange={handleChange} value={productEdit.quantity} />
              </div>
            </div>
            <div className="form-control">
              <div className="form__img--list">
                {product.images.map((img: string, index: number) =>
                  <img key={index} data-id={img} onClick={handleDeleteImage} className="form__img" src={img} />
                )}
                <Input type="file" id="file" onChange={imageChange} multiple name="images" className="form__input--img"/>
              </div>
            </div>
          </div>
          <div className="modal-footer-modalUpdate">
            <Button className="btn btn__no" onClick={() => hideModalUpdate(false)} text="Cancel" />
            <Button className="btn btn__yes" onClick={() => handleUpdateProduct(product.id, productEdit)} text="Submit" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalUpdate;
