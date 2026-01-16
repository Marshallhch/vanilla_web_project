async function getRequest(url) {
  return await fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error('Error: ' + response.status);
    }
    return response.json();
  });
}

// Get Products Function
async function getProducts() {
  const getProductsUrl =
    'https://www.dabipyeung.com/soaply_backend/model/get_products.php?qnt=4';

  try {
    // 요청 시도
    const data = await getRequest(getProductsUrl);
    console.log(data);
  } catch (error) {
    // 요청 시 에러 사항
    console.log(`Error: ${error}`);
  }
}

getProducts();
