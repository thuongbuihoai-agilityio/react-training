import useSWR, { Key } from "swr";
import React, { ChangeEvent, useState } from "react";
import { ModalUpdateProps } from "@/types/modal";
import { CategoryProps } from "@/types/category";
import { Product } from "@/types/product";
import getBase64 from "@/helpers/getBase64";
import { getData, update } from "@/helpers/fetchApi";
import { CATEGORIES_URL, PRODUCT_CRUD } from "@/constants/url";
import { SUCCESS_MSG } from "@/constants/message";
import { toast } from "react-toastify";
import "../modal.css";

const ModalUpdate: React.FC<ModalUpdateProps> = ({
  product,
  hideModalUpdate,
  updateProductDetail,
}) => {
  // fetch data with useSWR
  const key: Key = CATEGORIES_URL;
  const { data, mutate } = useSWR(key,  getData<Product[]>);
  // create state to handle select file image
  const [selectedFile, setSelectedFile] = useState([]);
  // create state to update product
  const [productEdit, setProductEdit] = useState(product);
  const updateProduct = async (id: string, productData: Product) => {
    const productEdit: Product = {
      id: productData.id,
      categoryId: productData.categoryId,
      name: productData.name,
      price: +productData.price,
      quantity: +productData.quantity,
      description: productData.description,
      images: productData.images,
    };
    try {
      const response = await update(`${PRODUCT_CRUD}/${id}`, productEdit);
      mutate();
      updateProductDetail(response.data);
      toast.success(SUCCESS_MSG.MESSAGE_UPDATE_PRODUCT);
    } catch (error) {
      toast.error((error as any).message);
    }
  };

  // handle update product
  const handleUpdateProduct = async (id: string, productEdit: Product) => {
    for (let i = 0; i < selectedFile.length; i++) {
      productEdit.images.push(selectedFile[i]);
    }
    updateProduct(id, productEdit);
    hideModalUpdate();
  };

  // handle change value
  const handleChange = (event: { target: { value: {}; name: string } }) => {
    const value = event.target.value;
    const key = event.target.name;
    setProductEdit({ ...productEdit, [key]: value });
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
    const indexOfArr = productEdit.images.findIndex(
      (item: string) => item == (target as HTMLInputElement).dataset.id
    );
    const indexOf = selectedFile.findIndex(
      (item: string) => item == (target as HTMLInputElement).dataset.id
    );
    selectedFile.splice(indexOf, 1);
    productEdit.images.splice(indexOfArr, 1);
    setSelectedFile([...selectedFile]);
  };

  return (
    <div data-testid="modal-update" className="modal-update">
      <div className="modal-dialog-modalUpdate">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-heading" id="productModalLabel">
              Edit Product Information
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
                value={productEdit?.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-control">
              <label htmlFor="">Description: </label>
              <textarea
                className="form__text"
                cols={30}
                rows={5}
                value={productEdit?.description}
                name="description"
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="form-control">
              <label htmlFor="">Categories: </label>
              <select
                className="form__select"
                name="categoryId"
                defaultValue={""}
                onChange={handleChange}
              >
                <option value="" disabled>Choose a category ...</option>
                {data?.map(({ id, name }: CategoryProps, index: number) => (
                  <option
                    key={index}
                    value={id}
                  >
                    {name}
                  </option>
                ))}
              </select>
            </div>
            <div id="form__number" className="form-control">
              <div className="form-control">
                <label htmlFor="">Price: </label>
                <input
                  className="modal__input"
                  type="number"
                  min={0}
                  value={productEdit?.price}
                  name="price"
                  onChange={handleChange}
                />
              </div>
              <div className="form-control">
                <label htmlFor="">Quantity: </label>
                <input
                  className="modal__input"
                  type="number"
                  min={0}
                  value={productEdit?.quantity}
                  name="quantity"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-control">
              <div className="form__img--list">
                {productEdit?.images?.map((img: string, index: number) => (
                  <img
                    data-testid="delete-image"
                    key={index}
                    className="form__img"
                    data-id={img}
                    src={img}
                    onClick={handleDeleteImage}
                  />
                ))}
                {selectedFile.length > 0 &&
                  selectedFile.map((src, key: number) => (
                    <img
                      data-testid="after-change-file"
                      key={key}
                      className="form__img"
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
              data-testid="btn-no-modalUpdate"
              className="btn btn__no"
              onClick={hideModalUpdate}
            >
              Cancel
            </button>
            <button
              data-testid="btn-yes-modalUpdate"
              className="btn btn__yes"
              onClick={() => handleUpdateProduct(product.id, productEdit)}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalUpdate;
