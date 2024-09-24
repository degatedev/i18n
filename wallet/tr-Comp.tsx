import React from 'react';
const en = {
  stop_limit_order_desc: ({
    stopPrice,
    quoteSymbol,
    baseAmount,
    baseSymbol,
    price,
    isBuy,
    isStopPriceLessThanLastPrice,
  }: {
    stopPrice: string;
    quoteSymbol: string;
    baseAmount: string;
    baseSymbol: string;
    price: string;
    isBuy: boolean;
    isStopPriceLessThanLastPrice: boolean;
  }) => {
    return (
      <>
        Son fiyat{' '}
        {isStopPriceLessThanLastPrice
          ? 'düşerse veya altına inerse '
          : 'yükselirse veya üstüne çıkarsa '}
        <b>
          {stopPrice} {quoteSymbol}
        </b>
        , bir {isBuy ? 'alış' : 'satış'} emri{' '}
        <b>
          {baseAmount} {baseSymbol}
        </b>{' '}
        fiyatından{' '}
        <b>
          {price} {quoteSymbol}
        </b>{' '}
        verilecektir.
      </>
    );
  },
  'account.deposit_contract_tips_AMOUNT': `<div>
      <b>Standart</b>
      <div>
        Basit bir token transferi ile DeGate akıllı kontratına fon eklenir ve
        gaz ücretleri minimumda tutulur. Bu yöntemle işlem başına {AMOUNT}USD limiti vardır.
      </div>
      <br />
      <b>Gelişmiş</b>
      <div>
        Bu yöntem, DeGate akıllı sözleşmesinin dahili bir fonksiyonunu kullanır,
        daha yüksek gaz ücretleri doğurur. Ancak, maksimum limit yoktur.
      </div>
    </div>`,
};
export default en;
