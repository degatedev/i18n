import React from 'react';
const tw = {
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
        如果最新價格
        {isStopPriceLessThanLastPrice ? '降至或低於' : '升至或高於'}
        <b>
          {stopPrice} {quoteSymbol}
        </b>
        會在價格
        <b>
          {price} {quoteSymbol}
        </b>
        處掛上{isBuy ? '買入' : '賣出'}
        <b>
          {baseAmount} {baseSymbol}
        </b>
        的訂單。
      </>
    );
  },
  'account.deposit_contract_tips_AMOUNT': `<div>
      <b>標準</b>
      <div>
        透過一次代幣轉移到DeGate智能合約，資金被添加同時最小化燃料費。此方法每筆交易上限為
        {AMOUNT}美元。
      </div>
      <br />
      <b>進階</b>
      <div>
        通过调用DeGate智能合约的内部功能进行资金划入，该方式会产生较高的燃料費，但没有最大金额限制。
      </div>
    </div>`,
};
export default tw;
