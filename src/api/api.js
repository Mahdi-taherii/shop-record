import httpService from "services/http.service";

export const getAdminData = async () => {
  const response = await httpService.get(`/users?role=admin`);
  return response.data;
};

export const getProductsData = async () => {
  const response = await httpService.get(`/products`);
  return response.data;
};

export const getOrderedDataWithPaginate = async (
  fieldset,
  start,
  end,
  FilterBy,
  FilterOptions
) => {
  const response = await httpService.get(
    `/${fieldset}?${FilterBy}=${FilterOptions}&_page=${start}&_limit=${end}`
  );
  return { data: response.data, count: response.headers["x-total-count"] };
};

export const getSearchedData = async (fieldset, searchFor, start, end) => {
  const response = await httpService.get(
    `/${fieldset}?q=${searchFor}&_page=${start}&_limit=${end}`
  );
  return response.data;
};

export const Search = async (fieldset, searchFor) => {
  const response = await httpService.get(`/${fieldset}?q=${searchFor}`);
  return response.data;
};

export const getFilteredData = async (fieldset, FilterBy, FilterOptions) => {
  const response = await httpService.get(
    `/${fieldset}?${FilterBy}=${FilterOptions}`
  );
  return response.data;
};

export const getInRangeData = async (
  fieldset,
  filterBy,
  min,
  max,
  start,
  end
) => {
  const response = await httpService.get(
    `/${fieldset}?${filterBy}_gte=${min}&${filterBy}_lte=${max}&_page=${start}&_limit=${end}`
  );
  return { data: response.data, count: response.headers["x-total-count"] };
};

export const paginateData = async (fieldset, start, end) => {
  const response = await httpService.get(
    `/${fieldset}?_page=${start}&_limit=${end}`
  );

  return { data: response.data, count: response.headers["x-total-count"] };
};

export const editData = async (fieldset, id, newData) => {
  const response = await httpService.put(`/${fieldset}/${id}`, newData);
  console.log(response.data);
  return response.data;
};

export const deleteData = async (fieldset, id) => {
  const response = await httpService.delete(`/${fieldset}/${id}`);
  return response.data;
};

export const patchData = async (fieldset, id, data) => {
  const response = await httpService.patch(`/${fieldset}/${id}`, data);
  return response.data;
};

export const postData = async (fieldset, data) => {
  const response = await httpService.post(`/${fieldset}`, data);
  return response.data;
};
