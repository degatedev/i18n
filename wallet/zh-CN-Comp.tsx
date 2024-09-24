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
        If the latest price{' '}
        {isStopPriceLessThanLastPrice
          ? 'drop to or below '
          : 'rises to or above '}
        <b>
          {stopPrice} {quoteSymbol}
        </b>
        , an order to {isBuy ? 'buy' : 'sell'}{' '}
        <b>
          {baseAmount} {baseSymbol}
        </b>{' '}
        at the price of{' '}
        <b>
          {price} {quoteSymbol}
        </b>{' '}
        will be placed.
      </>
    );
  },
  'account.deposit_contract_tips_AMOUNT': `<div>
      <b>Standard</b>
      <div>
        Through a simple token transfer to the DeGate smart contract, funds are
        added while minimizing gas fees. This method has a per transaction cap
        of {AMOUNT}USD.
      </div>
      <br />
      <b>Advanced</b>
      <div>
        This method employs an internal function of the DeGate smart contract,
        incurring higher gas fees. However, it comes with no maximum limit.
      </div>
    </div>`,
};
export default en;
