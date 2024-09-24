import React from 'react';
const ja = {
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
        最新価格が{' '}
        {isStopPriceLessThanLastPrice ? 'に達するか下回る' : 'に達するか上回る'}
        <b>
          {stopPrice} {quoteSymbol}
        </b>
        と、{' '}
        <b>
          {baseAmount} {baseSymbol}
        </b>{' '}
        を{' '}
        <b>
          {price} {quoteSymbol}
        </b>{' '}
        の価格で{isBuy ? '買う' : '売る'}注文が行われます。
      </>
    );
  },
  'account.deposit_contract_tips_AMOUNT': `<div>
      <b>標準</b>
      <div>
        DeGateスマートコントラクトへのシンプルトークン転送を通じて、ガス料金を最小限に抑えながら資金が追加されます。この方法では、1回の取引の上限が
        {AMOUNT}USDです。
      </div>
      <br />
      <b>高度</b>
      <div>
        この方法では、DeGateスマートコントラクトの内部関数を使用し、ガス料金が高くなりますが、最大限度がありません。
      </div>
    </div>`,
};

export default ja;
