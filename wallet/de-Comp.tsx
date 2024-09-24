import React from 'react';
const de = {
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
        Se il prezzo più recente{' '}
        {isStopPriceLessThanLastPrice ? 'scende a o sotto ' : 'sale a o sopra '}
        <b>
          {stopPrice} {quoteSymbol}
        </b>
        , verrà piazzato un ordine per {isBuy ? 'acquistare' : 'vendere'}{' '}
        <b>
          {baseAmount} {baseSymbol}
        </b>{' '}
        al prezzo di{' '}
        <b>
          {price} {quoteSymbol}
        </b>{' '}
        .
      </>
    );
  },
  'account.deposit_contract_tips_AMOUNT': `<div>
      <b>Standard</b>
      <div>
        Tramite un semplice trasferimento di token al contratto intelligente
        DeGate, vengono aggiunti fondi riducendo al minimo le commissioni di
        gas. Questo metodo ha un limite massimo per transazione di {AMOUNT}USD.
      </div>
      <br />
      <b>Avanzato</b>
      <div>
        Questo metodo utilizza una funzione interna del contratto intelligente
        DeGate, con conseguenti commissioni di gas più elevate. Tuttavia, non ha
        un limite massimo.
      </div>
    </div>`,
};
export default de;
