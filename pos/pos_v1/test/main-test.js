'use strict';

describe('pos', () => {
  let inputs;

  beforeEach(() => {
    inputs = [
      'ITEM000001',
      'ITEM000001',
      'ITEM000001',
      'ITEM000001',
      'ITEM000001',
      'ITEM000003-2',
      'ITEM000005',
      'ITEM000005',
      'ITEM000005'
    ];
  });

  it('should print correct text', () => {

    spyOn(console, 'log');

    printReceipt(inputs);

    const expectText = `***<没钱赚商店>收据***
名称：雪碧，数量：5瓶，单价：3.00(元)，小计：12.00(元)
名称：荔枝，数量：2斤，单价：15.00(元)，小计：30.00(元)
名称：方便面，数量：3袋，单价：4.50(元)，小计：9.00(元)
----------------------
总计：51.00(元)
节省：7.50(元)
**********************`;

    expect(console.log).toHaveBeenCalledWith(expectText);
  });

//   it('buildCartItems should print correct text', () => {
//
//     const allItems = loadAllItems();
//     const cartItems = buildCartItems(inputs, allItems);
//
//     const expectcartItems = [
//       {
//         item: {
//           barcode: 'ITEM000001',
//           name: '雪碧',
//           unit: '瓶',
//           price: 3.00
//         }, count: 5
//       },
//       {
//         item: {
//           barcode: 'ITEM000003',
//           name: '荔枝',
//           unit: '斤',
//           price: 15.00
//         }, count: 2
//       },
//       {
//         item: {
//           barcode: 'ITEM000005',
//           name: '方便面',
//           unit: '袋',
//           price: 4.50
//         }, count: 3
//       }
//     ];
//
//     expect(cartItems).toEqual(expectcartItems);
//   });
//   it('buildReceiptItems should print correct text', () => {
//
//     let allItems = loadAllItems();
//     let cartItems = buildCartItems(inputs, allItems);
//     let promotions = loadPromotions();
//
//     let total = buildReceiptItems(cartItems, promotions);
//
//     const expectText = [
//       {cartItem: cartItems[0], saved: 3.00, subtotal: 12.00},
//       {cartItem: cartItems[1], saved: 0.00, subtotal: 30.00},
//       {cartItem: cartItems[2], saved: 4.50, subtotal: 9.00}
//     ];
//
//     expect(total).toEqual(expectText);
//   });
//   it('receiptItemsTotal should print correct text', () => {
//
//     let allItems = loadAllItems();
//     let cartItems = buildCartItems(inputs, allItems);
//     let promotions = loadPromotions();
//
//     let receiptItems = buildReceiptItems(cartItems, promotions);
//     let receiptTotal = receiptItemsTotal(receiptItems);
//
//     const expectText = {receiptItems: receiptItems, savedTotal: 7.50, itemsTotal: 51.00};
//
//     expect(receiptTotal).toEqual(expectText);
//   });
//   it('getReceipt should print correct text', () => {
//
//     let allItems = loadAllItems();
//     let cartItems = buildCartItems(inputs, allItems);
//     let promotions = loadPromotions();
//
//     let receiptItems = buildReceiptItems(cartItems, promotions);
//     let receiptTotal = receiptItemsTotal(receiptItems);
//     let receipt = getReceipt(receiptTotal);
//
//     const expectText = `***<没钱赚商店>收据***
// 名称：雪碧，数量：5瓶，单价：3.00(元)，小计：12.00(元)
// 名称：荔枝，数量：2斤，单价：15.00(元)，小计：30.00(元)
// 名称：方便面，数量：3袋，单价：4.50(元)，小计：9.00(元)
// ----------------------
// 总计：51.00(元)
// 节省：7.50(元)
// **********************`;
//
//     expect(receipt).toEqual(expectText);
//
//   });
});
