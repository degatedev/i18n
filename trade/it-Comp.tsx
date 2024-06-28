/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { DISCORD } from 'src/constants/dex';
import WindowOpen from 'src/utils/windowOpen';

const it = {
  authorization_mode_tips: (
    <>
      <b>Senza firma</b>
      <br />
      Autorizza una volta e effettua ordini senza firmare.
      <br />
      <br />
      <b>Sempre firma</b>
      <br />
      Firma con il tuo portafoglio per effettuare ordini per ogni transazione.
    </>
  ),
  service_unavailable_for_blacklist: (
    <>
      <div>
        Il tuo accesso a DeGate è limitato. Per ulteriori informazioni, visita{' '}
        <a
          href="https://discord.com/channels/814731180892487702/1086188643342889020"
          target="_black"
        >
          la community di DeGate
        </a>{' '}
        .
      </div>
    </>
  ),
  initialization_desc: (
    <>
      Riceverai due richieste di firma. <br />
      Firmare è gratuito.
    </>
  ),
  'account.deposit_status_help': (
    <>
      <b>In attesa</b> <br />
      In attesa che la transazione venga elaborata in un blocco.
      <br />
      <br />
      <b>In conferma</b>
      <br />
      La transazione è stata elaborata in un blocco. In attesa delle conferme.
      <br />
      <br />
      <b>Successo</b>
      <br />I fondi sono stati accreditati e sono disponibili per il trading.
    </>
  ),
  'account.transfer_status_help': (
    <>
      <b>Inviato/Ricevuto</b> <br />
      L'asset è arrivato. In attesa della finalità sulla rete Ethereum.
      <br />
      <br />
      <b>Finalizzato</b> <br />
      Il blocco contenente la transazione di trasferimento è stato finalizzato
      sulla rete Ethereum.
    </>
  ),
  'account.withdraw_status_help': (
    <>
      <b>In elaborazione</b> <br />
      Elaborazione della richiesta di invio.
      <br />
      <br />
      <b>Successo</b> <br />
      L'asset è stato consegnato all'indirizzo del destinatario.
      <br />
      <br />
      <b>Finalizzato</b>
      <br /> Il blocco contenente la transazione di invio è stato finalizzato
      sulla rete Ethereum.
    </>
  ),
  'account.personal_sign_tips': (
    <>
      <div>
        MetaMask ti chiede di firmare nuovamente con il metodo{' '}
        <i>Firma personale</i>
      </div>
    </>
  ),
  tips_dex_balance: (
    <>
      Il Saldo DeGate rappresenta il valore totale degli asset detenuti dagli
      utenti all'interno del smart contract DeGate.
      <br />
      <br />
      Aggiungendo fondi al Saldo DeGate, puoi effettuare e annullare
      istantaneamente ordini. Puoi anche inviare questi fondi a qualsiasi
      indirizzo Ethereum.
    </>
  ),
  'account.init_step1_title': (
    <>
      Come utente di prima volta, è necessaria l'inizializzazione. Questo
      processo dovrebbe richiedere circa <b>30 secondi</b>.
    </>
  ),
  'trade.max_number_of_trades_tips': (
    <>
      Un ordine può essere completato con più transazioni; ad esempio, un ordine
      di $100 potrebbe essere completato con transazioni di $30 e $70.
      <br />
      "Il numero massimo di transazioni" limita il numero massimo di volte in
      cui ogni ordine può essere eseguito come Taker.
    </>
  ),
  'trade.flow_of_funds_tips': (
    <>
      <h3>Flusso di Fondi</h3>I fondi andranno al tuo Saldo DeGate, non al tuo
      saldo del portafoglio.
      <br />
      <br />
      <h3>Riguardo al Saldo DeGate</h3>Il Saldo DeGate rappresenta il valore che
      gli utenti detengono all'interno del smart contract DeGate.
      <br />
      Gli utenti mantengono la custodia completa del Saldo DeGate grazie al
      smart contract DeGate completamente decentralizzato.
    </>
  ),
  'gridTrade.grid_free_tips': (
    <>
      Le strategie a griglia sono ora <b>gratuite</b>!
    </>
  ),
  'gridOrders.detail_transactions_unit': (
    <>
      <span></span>
    </>
  ),
  'gridOrders.grid_cancel_tips_text': <>Ricompense disponibili in</>,
  'gridOrders.grid_cancel_tips_content': `Le ricompense di mining saranno attualizzate una volta che la strategia a griglia sarà in esecuzione da 12 ore.`,
  'mining.pools_mining_funds_tips': (
    <>
      Valore totale degli ordini a griglia all'interno dell'intervallo di prezzo
      del mining.
      <br />
      <br />
      Intervallo di prezzo del mining: Dal prezzo di acquisto più alto del libro
      degli ordini * 0.99 al prezzo di vendita più basso del libro degli ordini
      * 1.01
    </>
  ),
  'mining.pools_mining_funds_tips_stable': (
    <>
      Valore totale degli ordini a griglia all'interno dell'intervallo di prezzo
      del mining.
      <br />
      <br />
      Intervallo di prezzo del mining: Dal prezzo di acquisto più alto del libro
      degli ordini al prezzo di vendita più basso del libro degli ordini
    </>
  ),
  'campaign.grid2401_desc': (
    <>
      La strategia a griglia è uno strumento potente che può sfruttare le
      fluttuazioni di mercato all'interno di un intervallo di prezzo
      predeterminato. Una strategia a griglia imposta più ordini di acquisto e
      vendita per acquistare automaticamente a basso prezzo e vendere a alto
      prezzo per ottenere profitto. Se vuoi imparare come creare una griglia
      personalizzata, consulta{' '}
      <a
        href="https://docs.degate.com/v/product_en/product-tutorial/grid-strategy-creation-guide"
        target="_blank"
      >
        https://docs.degate.com/v/product_en/product-tutorial/grid-strategy-creation-guide
      </a>
    </>
  ),
  'campaign.notes_2_desc': (
    <>
      Il valore massimo della strategia a griglia per utente ammissibile per il
      calcolo della quota del montepremi è limitato a $<b>5000</b>.
    </>
  ),
  'campaign.grid2401_faq_1_res': (
    <>
      Il montepremi totale è di 21.000 USDC, con 3.000 USDC distribuiti ogni 24
      ore, per un totale di 7 distribuzioni.
      <br /> <br />
      Dopo l'avvio dell'evento, il sistema liquiderà i conti ogni 24 ore e
      distribuirà il montepremi giornaliero alle strategie a griglia ammissibili
      in base al loro peso. Il calcolo del peso è derivato dal valore della
      strategia a griglia e dalla durata in minuti della griglia creata quel
      giorno.
      <br /> <br />
      Il valore della strategia a griglia è determinato dal valore iniziale al
      momento della creazione della griglia e non cambia con le fluttuazioni dei
      prezzi. Ogni utente ha un limite di fondi partecipanti di $5000 per il
      boost della strategia a griglia. Gli utenti possono stabilire più
      strategie a griglia ammissibili dallo stesso indirizzo durante l'attività,
      ma il totale dei fondi ammissibili è limitato a $5000.
      <br /> <br />
      Ad esempio: Partecipano solo due utenti all'evento della strategia a
      griglia. Al momento della liquidazione delle 24 ore, l'utente A ha
      impostato una strategia a griglia del valore di $2.500 della durata di 500
      minuti, e l'utente B ha impostato una strategia a griglia del valore di
      $6.000 della durata di 1.000 minuti. Se vengono distribuiti 3.000 USDC
      quel giorno, allora il rapporto di peso di A rispetto a B è: (2.500 x 500)
      / (5.000 x 1.000) = 1:4, il che significa che A riceve 600 USDC e B riceve
      2.400 USDC.
    </>
  ),
  'campaign.grid2401_faq_2_res': (
    <>
      Si prega di unirsi al nostro{' '}
      <a href={DISCORD} target="_blank">
        Discord
      </a>{' '}
      e chiedere aiuto nel thread speciale creato per questo evento
    </>
  ),
  'account.deposit_contract_tips_AMOUNT': (AMOUNT: string) => (
    <div>
      <b>Standard</b>
      <div>
        Tramite un semplice trasferimento di token al smart contract DeGate, i
        fondi vengono aggiunti riducendo al minimo le commissioni di gas. Questo
        metodo ha un limite per transazione di {AMOUNT}USD.
      </div>
      <br />
      <b>Avanzato</b>
      <div>
        Questo metodo utilizza una funzione interna del smart contract DeGate,
        comportando commissioni di gas più elevate. Tuttavia, non ha alcun
        limite massimo.
      </div>
    </div>
  ),
  trading_fee_tips: (v: string) => (
    <>
      Maker: 0,00%
      <br />
      Taker: {v || '0,05%'}
    </>
  ),
  'notification.cancel_market_for_depth_desc': (showDesc: any) => {
    return (
      <>
        Ogni ordine di mercato che supera{' '}
        <b onClick={showDesc}>la protezione dalla variazione di prezzo (10%)</b>{' '}
        verrà annullato automaticamente.
      </>
    );
  },
  'dca.max_gas_per_order': (Ele: any) => <>{Ele} per ordine</>,
  'campaign.grid2401_step1_desc': (
    baseAmount: string,
    quoteAmount: string,
    baseSymbol: string,
    quoteSymbol: string
  ) => {
    return (
      <>
        Si consiglia un investimento minimo di{' '}
        <b>
          {baseAmount} {baseSymbol}
        </b>{' '}
        e{' '}
        <b>
          {quoteAmount} {quoteSymbol}
        </b>
      </>
    );
  },
  'campaign.grid2401_step2_desc1': (minPrice: string, maxPrice: string) => (
    <>
      Intervallo di prezzo: da {minPrice} a {maxPrice}
    </>
  ),
  'campaign.grid2401_step2_desc2': (num: string) => (
    <>Numero di griglie: {num}</>
  ),
  'campaign.grid2401_faq_3_res': (feesUrl: string, Pair1: any, Pair2: any) => (
    <>
      Gli utenti possono ottenere ETH attraverso il{Pair1}coppia di trading in
      DeGate e ottenere USDC attraverso il{Pair2}coppia di trading. DeGate offre
      commissioni di trading estremamente basse. Per i dettagli, si prega di
      fare riferimento alla sezione '&apos;
      <a
        href={feesUrl}
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          WindowOpen(feesUrl);
        }}
      >
        Commissioni
      </a>
      &apos;.
    </>
  ),
  device_fast: (time: number) => (
    <>
      Il tuo dispositivo è <br />
      <b>{time} secondi in anticipo</b>
    </>
  ),
  device_slow: (time: number) => (
    <>
      Il tuo dispositivo è <br />
      <b>{time} secondi in ritardo</b>
    </>
  ),
  localTime_tips: (
    <>
      Imposta la modalità di impostazione dell'ora del tuo dispositivo su
      "Automatica", in modo che il protocollo DeGate possa funzionare
      correttamente.
      <br />
      <b>Aggiorna la pagina dopo aver apportato la modifica.</b>
    </>
  ),
};

export default it;
