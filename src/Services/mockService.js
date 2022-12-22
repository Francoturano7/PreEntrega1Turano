import productos from "../data/data";

function getItems(idCategory) {
  return new Promise((resolve)=>{
    if(idCategory === undefined){
      setTimeout(()=>{
          resolve(productos);
      },2000)
    }
    else{
      setTimeout(()=>{
        let itemsRequested= productos.filter((item) => item.categoria === idCategory)
        resolve(itemsRequested);
    },2000)
    }
  });
}

export function getSingleItem(idParam) {
  return new Promise((resolve)=>{
    let itemRequested= productos.find((item) => item.id === parseInt(idParam))
      setTimeout(()=>{
          resolve(itemRequested);
      },2000)
  });
}


export default getItems;