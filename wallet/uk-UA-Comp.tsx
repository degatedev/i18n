import React from 'react';
const ukr = {
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
        Якщо остання ціна{' '}
        {isStopPriceLessThanLastPrice
          ? 'знизиться до або нижче '
          : 'підвищиться до або вище '}
        <b>
          {stopPrice} {quoteSymbol}
        </b>
        , буде розміщено ордер на {isBuy ? 'купівлю' : 'продаж'}{' '}
        <b>
          {baseAmount} {baseSymbol}
        </b>{' '}
        за ціною{' '}
        <b>
          {price} {quoteSymbol}
        </b>
        .
      </>
    );
  },
  'account.deposit_contract_tips_AMOUNT': `<div>
        <b>Стандартний</b>
        <div>
          Через просту передачу токенів до смарт-контракту DeGate кошти додаються
          з мінімізацією комісій за газ. Цей метод має обмеження {AMOUNT}USD на одну транзакцію.
        </div>
        <br />
        <b>Розширений</b>
        <div>
          Цей метод використовує внутрішню функцію смарт-контракту DeGate,
          що призводить до вищих комісій за газ. Однак цей метод не має максимального ліміту.
        </div>
      </div>`,
};
export default ukr;
