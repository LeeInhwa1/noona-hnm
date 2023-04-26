function getProducts(searchQuery) {
  //미들웨어 액션 리턴값은 함수다
  return async (dispath, getState) => {
    let url = `https://my-json-server.typicode.com/LeeInhwa1/noona-hnm/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    dispath({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
  };
}

/**
 * 상품 상세 가져오기
 * @param {*} id 
 * @returns 
 */
function getProductDetail(id) {
  return async (dispath, getState) => {
    let url = `https://my-json-server.typicode.com/LeeInhwa1/noona-hnm/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("getProductDetail", data);
    dispath({ type: "GET_SINGLE_PRODUCT_SUCCESS", payload: { data } });
  };
}

export const productAction = { getProducts, getProductDetail };
