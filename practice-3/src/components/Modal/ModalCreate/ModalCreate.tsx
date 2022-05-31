import React, { useEffect, useState } from "react";
import Button from "@/components/common/Button/Button";
import { ModalCreateProps } from "@/types/modal";
import useCategories from "@/hooks/useCategories";
import { CategoryProps } from "@/types/category";
import Input from "@/components/Input/Input/Input";
import useProducts from "@/hooks/useProducts";
import getBase64 from "@/helpers/getBase64";
import { Product } from "@/types/product";
import FORM_VALUES from "@/constants/form";
import {validate} from "@/helpers/validate";
import {setFieldsValue} from "../../../helpers/index";
import "./modalCreate.css";

const ModalCreate: React.FC<ModalCreateProps> = ({ hideModalUpdate}) => {
  const {createProduct} = useProducts();
  const [newProduct, setNewProduct] = useState([]);
  const {categories} = useCategories();
  const [selectedFile, setSelectedFile] = useState([]);
  const [formValues, setFormValues] = useState(FORM_VALUES);

  const handleCreateProduct = () => {
    const images: string[] = [];
    for (let i = 0; i < selectedFile.length; i++) {
      images.push(selectedFile[i]);
    }
    setFormValues(validate(formValues));
    console.log("formValue", formValues);
    if(!formValues) {
      createProduct({images, ...newProduct} as any);
      hideModalUpdate(false);
    }
  }

  const handleChange = (event: { target: { value: {}; name: string; } }) => {
    const value = event.target.value;
    const fieldName = event.target.name;
    setNewProduct({...newProduct, [fieldName]: value});
    setFormValues(setFieldsValue(formValues, value, fieldName));
    // console.log("setField", setFieldsValue(formValues, value, fieldName));
    // setFormValues(validate(setFieldsValue(formValues, value, fieldName)));
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

  return (
    <div className="modal-update" id="bookDeleteModal">
    <div className="modal-dialog-modalUpdate">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-heading" id="productModalLabel">Add New Product Information</h4>
        </div>
        <div className="modal-body">
          <div className="form-control">
            <label htmlFor="">Product name: </label>
            <Input className="form__input" type="text" onChange={handleChange} name="name" />
            <small className="form__error">{formValues.name.error}</small>
          </div>
          <div className="form-control">
            <label htmlFor="">Description: </label>
            <textarea className="form__text" onChange={handleChange} name="description" id="" cols={30} rows={3}></textarea>
            <small className="form__error">{formValues.description.error}</small>
          </div>
          <div className="form-control">
            <label htmlFor="">Categories: </label>
            <select className="form__select" name="categoryId" onChange={handleChange} id="">
              {categories.map((cate: CategoryProps, index: number) =>
                <option key={index} value={cate.id}>{cate.name}</option>
              )}
            </select>
          </div>
          <div id="form__number" className="form-control">
            <div className="form-control">
              <label htmlFor="">Price: </label>
              <Input className="modal__input" type="number" min={0} name="price" onChange={handleChange} />
            </div>
            <div className="form-control">
              <label htmlFor="">Quantity: </label>
              <Input className="modal__input" type="number" min={0} name="quantity" onChange={handleChange} />
            </div>
          </div>
          <div className="form-control">
            <div className="form__img--list">
              <Input type="file" id="file" onChange={imageChange} multiple name="images" className="form__input--img"/>
            </div>
          </div>
        </div>
        <div className="modal-footer-modalUpdate">
          <Button className="btn btn__no" onClick={() => hideModalUpdate(false)} text="Cancel" />
          <Button className="btn btn__yes" onClick={() => handleCreateProduct()} text="Submit" />
        </div>
      </div>
    </div>
  </div>
  );
}

export default ModalCreate;
