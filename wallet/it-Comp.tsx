/* eslint-disable react/no-unescaped-entities */
import React from 'react';
const it = {
  view_asset_key_tips: (
    <div>
      Ecco i dettagli della tua Chiave di Asset.{' '}
      <strong>NON condividere</strong> con nessuno per evitare possibili perdite
      di asset.
    </div>
  ),
  personal_sign_tips: (
    <div>
      MetaMask richiede di firmare nuovamente con il metodo <i>Personal Sign</i>
      .
    </div>
  ),
  sign_and_open_free_mode_tips: (
    <>
      La firma non è richiesta poiché la modalità Senza Firma verrà attivata
      dopo questa azione.
      <br />
      <br />
      Per cambiare modalità, vai su "Impostazioni" sotto il Pulsante di Trading.
    </>
  ),
  'trade.i_understand': <span>Capisco il</span>,
  'trade.flow_of_funds_tips': (
    <>
      <h3>Flusso dei Fondi</h3>I fondi andranno al tuo Saldo DeGate, non al
      saldo del portafoglio.
      <br />
      <br />
      <h3>Riguardo al Saldo DeGate</h3>Il Saldo DeGate rappresenta il valore che
      gli utenti detengono all'interno del contratto intelligente DeGate.
      <br />
      Gli utenti mantengono la custodia completa del Saldo DeGate grazie al
      contratto intelligente DeGate completamente decentralizzato.
    </>
  ),
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
  'account.deposit_contract_tips_AMOUNT': (AMOUNT: string) => (
    <div>
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
    </div>
  ),
};

export default it;
