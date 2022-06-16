import useSWR, { Key } from "swr";
import React, { ChangeEvent, useState } from "react";
import { ModalCreateProps } from "@/types/modal";
import { CategoryProps } from "@/types/category";
import getBase64 from "@/helpers/getBase64";
import FORM_VALUES from "@/constants/form";
import { validate } from "@/helpers/validate";
import { setFieldsValue } from "@/helpers/index";
import { Product } from "@/types/product";
import { CATEGORIES_URL } from "@/constants/url";
import { getData } from "@/helpers/fetchApi";
import "../modal.css";

const ModalCreate: React.FC<ModalCreateProps> = ({
  hideModalCreate,
  createProduct,
  formValues,
  setFormValues,
  clearValidate
}) => {
  const [newProduct, setNewProduct] = useState([]);
  // fetch data with useSWR
  const key: Key = CATEGORIES_URL;
  const { data } = useSWR(key, getData<Product[]>);
  // create state to handle select file image
  const [selectedFile, setSelectedFile] = useState([]);

  // handle modal
  const handleModal = () => {
    hideModalCreate();
    clearValidate();
  }

  // handle create product
  const handleCreateProduct = () => {
    const images: string[] = [];
    for (let i = 0; i < selectedFile.length; i++) {
      images.push(selectedFile[i]);
    }
    // validate form
    setFormValues(validate(formValues));
    const temp = (Object.keys(formValues) as (keyof typeof formValues)[]).map(
      (fieldName) => {
        if (formValues[fieldName].error) {
          return false;
        }
      }
    );

    // check validate if pass then create product
    if (!temp.includes(false)) {
      createProduct({ images, ...newProduct } as unknown as Product);
      setFormValues(FORM_VALUES);
      handleModal();
    }
  };

  // handle change value
  const handleChange = (event: { target: { value: string; name: string } }) => {
    const value = event.target.value;
    const fieldName = event.target.name;
    setNewProduct({ ...newProduct, [fieldName]: value });
    setFormValues(setFieldsValue(formValues, value, fieldName));
  };

  // handle change image
  const imageChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const imageSrc = await getBase64(files[i]);
        setSelectedFile((selectedFile) => [...selectedFile, imageSrc] as never);
      }
    }
  };

  // handle delete image
  const handleDeleteImage = (event: { target: EventTarget }) => {
    const target = event.target as Element;
    const indexOfArr = selectedFile.findIndex(
      (item: string) => item == (target as HTMLInputElement).dataset.id
    );
    selectedFile.splice(indexOfArr, 1);
    setSelectedFile([...selectedFile]);
  };

  return (
    <div
      data-testid="modal-create"
      className="modal-create"
      id="bookDeleteModal"
    >
      <div className="modal-dialog-modalUpdate">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-heading" id="productModalLabel">
              Add New Product Information
            </h4>
          </div>
          <div className="modal-body">
            <div className="form-control">
              <label htmlFor="">Product name: </label>
              <input
                data-testid="change-value-name"
                className="form__input"
                type="text"
                name="name"
                onChange={handleChange}
              />
              <small className="form__error">
                {formValues.name.error ? formValues.name.error : ""}
              </small>
            </div>
            <div className="form-control">
              <label htmlFor="">Description: </label>
              <textarea
                className="form__text"
                name="description"
                id=""
                cols={30}
                rows={5}
                onChange={handleChange}
              ></textarea>
              <small className="form__error">
                {formValues.description.error
                  ? formValues.description.error
                  : ""}
              </small>
            </div>
            <div className="form-control">
              <label htmlFor="">Categories: </label>
              <select
                className="form__select"
                name="categoryId"
                onChange={handleChange}
              >
                <option value="">Select category</option>
                {data?.map(({ id, name }: CategoryProps, index: number) => (
                  <option key={index} value={id}>
                    {name}
                  </option>
                ))}
              </select>
              <small className="form__error">
                {formValues.categoryId.error
                  ? formValues.categoryId.error
                  : ""}
              </small>
            </div>
            <div id="form__number" className="form-control">
              <div className="form-control">
                <label htmlFor="">Price: </label>
                <input
                  className="modal__input"
                  type="number"
                  min={0}
                  name="price"
                  onChange={handleChange}
                />
                <small className="form__error">
                  {formValues.price.error ? formValues.price.error : ""}
                </small>
              </div>
              <div className="form-control">
                <label htmlFor="">Quantity: </label>
                <input
                  className="modal__input"
                  type="number"
                  min={0}
                  name="quantity"
                  onChange={handleChange}
                />
                <small className="form__error">
                  {formValues.quantity.error ? formValues.quantity.error : ""}
                </small>
              </div>
            </div>
            <div className="form-control">
              <div className="form__img--list">
                {selectedFile.length > 0 &&
                  selectedFile.map((src, key: number) => (
                    <img
                      data-testid="after-change-file"
                      className="form__img"
                      key={key}
                      data-id={src}
                      src={src}
                      onClick={handleDeleteImage}
                    />
                  ))}
                <input
                  data-testid="change-file"
                  className="form__input--img"
                  type="file"
                  id="file"
                  multiple
                  name="images"
                  onChange={imageChange}
                />
              </div>
            </div>
          </div>
          <div className="modal-footer-modalUpdate">
            <button
              data-testid="hide-modal-btn"
              className="btn btn__no"
              onClick={handleModal}
            >
              Cancel
            </button>
            <button
              data-testid="add-new-product"
              className="btn btn__yes"
              onClick={() => handleCreateProduct()}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCreate;
