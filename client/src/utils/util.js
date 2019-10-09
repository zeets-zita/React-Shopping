export const formatPrice = (x, currency) => {
    switch (currency) {
      case 'BRL':
        return x.toFixed(2).replace('.', ',');
      default:
        return x.toFixed(2);
    }
  };
  
 
export const productsAPI = "http://localhost:5000/api/products";
  