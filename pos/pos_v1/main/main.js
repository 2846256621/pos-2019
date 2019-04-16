function printReceipt(inputs) {
  let sale = loadPromotions(); //打折商品
  let content =  loadAllItems(); //商品详情
  let result = {};
  let count;
  let pos = '';
  let lessmoney = 0;
  let money = 0;
  inputs.forEach(val =>{
    count = 0;
    if(val.indexOf('-') !== -1){
      count = parseInt(val.slice(val.indexOf('-')+1));
      val = val.slice(0,val.indexOf('-'));
    }
    else count = 1;
    if(!result[val]){
      result[val] = count;
    }
    else result[val] += count;
  });
  let kinds = Object.keys(result);
  let save = {};
  for(let i=0;i<kinds.length;i++){
    if(isSaved(kinds[i],sale)){
      save[kinds[i]] = 1;
    }
  }
  for(let j =0;j<content.length;j++){
    for(let i= 0;i<kinds.length;i++){     //for-in遍历键（key)，for-of遍历值（value） 数组的键是下标
      if(kinds[i]=== content[j].barcode){
        if(isSaved(kinds[i],sale)){
          lessmoney = (result[kinds[i]]-1)*content[j].price;
        }
        else lessmoney = result[kinds[i]]*content[j].price;
        pos += `名称：${content[j].name}，数量：${ result[kinds[i]]}${content[j].unit }，单价：${content[j].price.toFixed(2)}(元)，小计：${lessmoney.toFixed(2)}(元)\n`;
        money += content[j].price * result[kinds[i]];
      }
    }
  }
  console.log(
    `***<没钱赚商店>收据***
${pos}----------------------
总计：${(saveTotal(result,content)-saveTotal(save,content)).toFixed(2)}(元)
节省：${saveTotal(save,content).toFixed(2)}(元)
**********************`);
}
function saveTotal(res,content) {
  let total = 0;
  for(let i =0;i<content.length;i++){
    for(let j in res){
      if(res.hasOwnProperty(j)){
        if(j === content[i].barcode){
          total += content[i].price*res[j];
        }
      }
    }
  }
  return total;
}
/**
 * 返回 true false，表示传入的barcode是否存在于sale数组中
 * @param barcode
 * @param sale
 */
function isSaved(barcode,sale) {
  for(let j=0;j<sale[0].barcode.length;j++){
    if(barcode === sale[0].barcode[j]){
      return true;
    }
  }
  return false;
}
