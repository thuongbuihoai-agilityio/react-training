import React, { useState } from "react";
import { ModalCreateProps } from "@/types/modal";
import useCategories from "@/hooks/useCategories";
import { CategoryProps } from "@/types/category";
import Input from "@/components/Input/Input/Input";
import useProducts from "@/hooks/useProducts";
import getBase64 from "@/helpers/getBase64";
import FORM_VALUES from "@/constants/form";
import { validate } from "@/helpers/validate";
import { setFieldsValue } from "@/helpers/index";
import { Product } from "@/types/product";
import { FormProps } from "@/types/form";
import "./modalCreate.css";

const ModalCreate: React.FC<ModalCreateProps> = ({ hideModalCreate }) => {
  const {createProduct} = useProducts();
  const [newProduct, setNewProduct] = useState([]);
  const {categories} = useCategories();
  const [selectedFile, setSelectedFile] = useState([]);
  const [formValues, setFormValues] = useState<FormProps>(FORM_VALUES);

  const handleClearModal = () => {
    (Object.keys(formValues) as (keyof typeof formValues)[]).map(fieldName => {
      formValues[fieldName].error = "";
    })
    hideModalCreate(false);
  }

  const handleCreateProduct = () => {
    const images: string[] = [];
    for (let i = 0; i < selectedFile.length; i++) {
      images.push(selectedFile[i]);
    }
    setFormValues(validate(formValues));
    const temp = (Object.keys(formValues) as (keyof typeof formValues)[]).map(fieldName => {
      if(formValues[fieldName].error){
        return false;
      }
    })

    if(!temp.includes(false)){
      createProduct({ images, ...newProduct } as unknown as Product);
      hideModalCreate(false);
    }
  }

  const handleChange = (event: { target: { value: string; name: string; } }) => {
    const value = event.target.value;
    const fieldName = event.target.name;
    setNewProduct({...newProduct, [fieldName]: value});
    setFormValues(setFieldsValue(formValues, value, fieldName) as any);
  }

  const imageChange = async (event: { target: { files: any; }; }) => {
    const files = event.target.files;
    if(files) {
      for (let i = 0; i < files.length; i++) {
        const imageSrc = await getBase64(files[i]);
        setSelectedFile(selectedFile => [...selectedFile, imageSrc] as any)
      }
    }
  }

  const handleDeleteImage = (event: { target: Element| any}) => {
    const target = event.target as Element;
    const indexOfArr = selectedFile.findIndex((item: string) =>
      item == (target as HTMLInputElement).dataset.id);
      selectedFile.splice(indexOfArr, 1);
      setSelectedFile([...selectedFile]);
  }

  return (
    <div data-testid="modal-create" className="modal-create" id="bookDeleteModal">
    <div className="modal-dialog-modalUpdate">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-heading" id="productModalLabel">Add New Product Information</h4>
        </div>
        <div className="modal-body">
          <div className="form-control">
            <label htmlFor="">Product name: </label>
            <Input className="form__input" type="text" onChange={handleChange} name="name" />
            <small className="form__error">{formValues.name.error ? formValues.name.error : ""}</small>
          </div>
          <div className="form-control">
            <label htmlFor="">Description: </label>
            <textarea className="form__text" onChange={handleChange} name="description" id="" cols={30} rows={3}></textarea>
            <small className="form__error">{formValues.description.error ? formValues.description.error : ""}</small>
          </div>
          <div className="form-control">
            <label htmlFor="">Categories: </label>
            <select className="form__select" name="categoryId" onChange={handleChange}>
              {categories.map((cate: CategoryProps, index: number) =>
                <option key={index} value={cate.id}>{cate.name}</option>
              )}
            </select>
            <small className="form__error">{formValues.categoryId.error ? formValues.categoryId.error : ""}</small>
          </div>
          <div id="form__number" className="form-control">
            <div className="form-control">
              <label htmlFor="">Price: </label>
              <Input className="modal__input" type="number" min={0} name="price" onChange={handleChange} />
              <small className="form__error">{formValues.price.error ? formValues.price.error : ""}</small>
            </div>
            <div className="form-control">
              <label htmlFor="">Quantity: </label>
              <Input className="modal__input" type="number" min={0} name="quantity" onChange={handleChange} />
              <small className="form__error">{formValues.quantity.error ? formValues.quantity.error : ""}</small>
            </div>
          </div>
          <div className="form-control">
            <div className="form__img--list">
              {
                (selectedFile.length > 0) && selectedFile.map((src, key: number) =>
                  <img key={key} data-id={src} onClick={handleDeleteImage} className="form__img" src={src} />
                )
              }
              <Input type="file" id="file" onChange={imageChange} multiple name="images" className="form__input--img"/>
            </div>
          </div>
        </div>
        <div className="modal-footer-modalUpdate">
          <button data-testid="hide-modal-btn" className="btn btn__no" onClick={handleClearModal}>Cancel</button>
          <button data-testid="submit-btn" className="btn btn__yes" onClick={() => handleCreateProduct()}>Submit</button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default ModalCreate;
