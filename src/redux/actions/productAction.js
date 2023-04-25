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
export const productAction = { getProducts };
