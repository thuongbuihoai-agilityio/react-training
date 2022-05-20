import axios from "axios";

const get = async (url: string) => {
  const result = await axios
    .get(url)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      throw new Error(error)
  });
}

const post = async (url: string, data: []) => {
  const res = await axios({
    method: "POST",
    url: url,
    data: data
  })
  .then(function (response) {
    return response.data
  })
  .catch(function (error) {
    throw new Error(error)
  });
};

const update = async (url: string, data: []) => {
  const res = await axios ({
    method: "PUT",
    url: url,
    data:{...data},
  })
  .then(function (response) {
    return response.data
  })
  .catch(function (error) {
    throw new Error(error)
  });
}

const remove = async (url: string) => {
  const response = await axios.delete(url)
  .catch(function (error) {
    console.log(error.toJSON());
  });
};

export {
  get, post, update, remove,
};
