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
        Если последняя цена{' '}
        {isStopPriceLessThanLastPrice
          ? 'снизится до или ниже '
          : 'повысится до или выше '}
        <b>
          {stopPrice} {quoteSymbol}
        </b>
        , будет размещен ордер на {isBuy ? 'покупку' : 'продажу'}{' '}
        <b>
          {baseAmount} {baseSymbol}
        </b>{' '}
        по цене{' '}
        <b>
          {price} {quoteSymbol}
        </b>
        .
      </>
    );
  },
  'account.deposit_contract_tips_AMOUNT': `<div>
        <b>Стандартный</b>
        <div>
          Через простую передачу токенов в смарт-контракт DeGate средства добавляются
          с минимизацией комиссии за газ. Этот метод имеет ограничение в {AMOUNT}USD на одну транзакцию.
        </div>
        <br />
        <b>Продвинутый</b>
        <div>
          Этот метод использует внутреннюю функцию смарт-контракта DeGate,
          что приводит к более высоким комиссиям за газ. Однако этот метод не имеет максимального лимита.
        </div>
      </div>`,
};
export default en;
