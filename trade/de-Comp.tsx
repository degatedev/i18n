import React from 'react';
import { DISCORD } from 'src/constants/dex';
import WindowOpen from 'src/utils/windowOpen';

const de = {
  authorization_mode_tips: (
    <>
      <b>Signatur-frei</b>
      <br />
      Einmalig autorisieren und Orders ohne Signatur aufgeben.
      <br />
      <br />
      <b>Immer signen</b>
      <br />
      Signen Sie mit Ihrer Wallet, um für jede Transaktion Orders aufzugeben.
    </>
  ),
  service_unavailable_for_blacklist: (
    <>
      <div>
        Ihr Zugriff auf DeGate ist eingeschränkt. Weitere Informationen finden
        Sie unter{' '}
        <a
          href="https://discord.com/channels/814731180892487702/1086188643342889020"
          target="_black"
        >
          DeGate Community
        </a>{' '}
        .
      </div>
    </>
  ),
  initialization_desc: (
    <>
      Sie erhalten zwei Signaturanfragen. <br />
      Signen ist kostenlos.
    </>
  ),
  'account.deposit_status_help': (
    <>
      <b>Ausstehend</b> <br />
      Warten auf die Verarbeitung der Transaktion zu einem Block.
      <br />
      <br />
      <b>Bestätigen</b>
      <br />
      Die Transaktion wurde zu einem Block verarbeitet. Auf Bestätigungen wird
      gewartet.
      <br />
      <br />
      <b>Erfolg</b>
      <br />
      Das Geld wurde gutgeschrieben und steht zum Handel zur Verfügung.
    </>
  ),
  'account.transfer_status_help': (
    <>
      <b>Erfolg</b> <br />
      Der Vermögenswert ist angekommen. Das Ethereum-Netzwerk wartet auf seine
      Vollendung.
      <br />
      <br />
      <b>Abgeschlossen</b> <br />
      Der Block, der die Überweisungstransaktion enthält, wurde im
      Ethereum-Netzwerk abgeschlossen.
    </>
  ),
  'account.withdraw_status_help': (
    <>
      <b>Verarbeitung</b> <br />
      Bearbeitung des Sendeauftrags.
      <br />
      <br />
      <b>Erfolg</b> <br />
      Der Vermögenswert wurde an die Adresse des Empfängers geliefert.
      <br />
      <br />
      <b>Abgeschlossen</b>
      <br /> Der Block, der die Überweisungstransaktion enthält, wurde im
      Ethereum-Netzwerk abgeschlossen.
    </>
  ),
  'account.personal_sign_tips': (
    <>
      <div>
        MetaMask fordert Sie auf, erneut mit der Methode{' '}
        <i>Persönliche Signatur</i> zu signieren
      </div>
    </>
  ),
  tips_dex_balance: (
    <>
      Der DeGate-Saldo stellt den Gesamtwert der Vermögenswerte dar, die
      Benutzer im DeGate-Smart-Contract halten.
      <br />
      <br />
      Indem Sie Geldmittel zum DeGate-Guthaben hinzufügen, können Sie sofort
      Orders aufgeben und stornieren. Sie können diese Geldmittel auch an jede
      Ethereum-Adresse senden.
    </>
  ),
  'account.init_step1_title': (
    <>
      Als Erstbenutzer ist eine Initialisierung erforderlich. Dieser Vorgang
      sollte etwa <b>30 Sekunden</b> dauern.
    </>
  ),
  'trade.max_number_of_trades_tips': (
    <>
      Eine Bestellung kann mit mehreren Trades ausgeführt werden; zum Beispiel
      könnte eine Bestellung über 100 $ mit Trades über 30 $ und 70 $ ausgeführt
      werden.
      <br />
      Die &quot;maximale Anzahl von Trades&quot; begrenzt die Häufigkeit, mit
      der eine Order ausgeführt werden kann, wenn Sie als Taker handeln.
    </>
  ),
  'trade.flow_of_funds_tips': (
    <>
      <h3>Geldfluss</h3>Geldmittel fließen auf Ihr DeGate-Guthaben, nicht auf
      Ihr Wallet-Guthaben.
      <br />
      <br />
      <h3>Über DeGate Balance</h3>DeGate Balance stellt den Wert dar, den
      Benutzer im DeGate-Smart-Contract halten.
      <br />
      Dank des vollständig dezentralisierten DeGate-Smart-Contracts behalten die
      Benutzer die vollständige Kontrolle über ihr DeGate-Guthaben.
    </>
  ),
  'gridOrders.detail_transactions_unit': (
    <>
      <span></span>
    </>
  ),
  'gridOrders.grid_cancel_tips_text': <>Belohnungen verfügbar in</>,
  'gridOrders.grid_cancel_tips_content': `Mining-Belohnungen werden aktualisiert, sobald die Grid-Strategie 12 Stunden lang gelaufen ist.`,
  'mining.pools_mining_funds_tips': (
    <>
      Gesamtwert der Grid Orders innerhalb der Mining-Preisspanne.
      <br />
      <br />
      Mining-Preisspanne: Vom höchsten Orderbuch-Kaufpreis * 0,99 bis zum
      niedrigsten Orderbuch-Verkaufspreis *1,01
    </>
  ),
  'mining.pools_mining_funds_tips_stable': (
    <>
      Gesamtwert der Grid Orders innerhalb der Mining-Preisspanne.
      <br />
      <br />
      Mining-Preisspanne: Vom höchsten Orderbuch-Kaufpreis bis zum niedrigsten
      Orderbuch-Verkaufspreis
    </>
  ),
  'campaign.grid2401_desc': (
    <>
      Die Grid-Strategie ist ein leistungsstarkes Tool, mit dem Sie
      Marktschwankungen innerhalb eines vorgegebenen Preisbereichs ausnutzen
      können. Eine Grid-Strategie legt mehrere Kauf- und Verkaufsaufträge fest,
      um automatisch günstig zu kaufen und teuer zu verkaufen, um Gewinn zu
      machen. Wenn Sie erfahren möchten, wie Sie ein benutzerdefiniertes Grid
      erstellen, lesen Sie bitte{' '}
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
      Der maximale Gridstrategiewert pro Benutzer, der zur Berechnung des
      Anteils am Preispool berechtigt ist, ist begrenzt auf $<b>5000</b>.
    </>
  ),
  'campaign.grid2401_faq_1_res': (
    <>
      Der gesamte Preispool beträgt 21.000 USDC, wobei alle 24 Stunden 3.000
      USDC ausgezahlt werden, was insgesamt 7 Ausschüttungen ergibt.
      <br /> <br />
      Nach Beginn des Events rechnet das System alle 24 Stunden ab und verteilt
      den täglichen Preispool entsprechend ihrer Gewichtung an die berechtigten
      Gridstrategien. Die Gewichtungsberechnung ergibt sich aus dem Wert der
      Gridstrategie und der Dauer des an diesem Tag erstellten erstellten Grids
      in Minuten.
      <br /> <br />
      Der Wert der Grid-Strategie wird durch den Anfangswert bei der Einrichtung
      des Grids bestimmt und ändert sich nicht bei Preisschwankungen. Jeder
      Benutzer hat ein Teilnahmelimit von 5.000 USD für den
      Grid-Strategie-Boost. Benutzer können während der Aktivität mehrere
      berechtigte Grid-Strategien von derselben Adresse aus einrichten, aber die
      Gesamtsumme der berechtigten Mittel ist auf 5.000 USD begrenzt.
      <br /> <br />
      Beispiel: Es nehmen nur zwei Benutzer am Grid-Strategie-Ereignis teil.
      Nach 24 Stunden hat Benutzer A eine Grid-Strategie im Wert von 2.500 USD
      mit einer Laufzeit von 500 Minuten eingerichtet, und Benutzer B hat eine
      Grid-Strategie im Wert von 6.000 USD mit einer Laufzeit von 1.000 Minuten
      eingerichtet. Wenn an diesem Tag 3.000 USDC verteilt werden, dann ist das
      Gewichtsverhältnis von A zu B: (2.500 x 500) / (5.000 x 1.000) = 1:4, was
      bedeutet, dass A 600 USDC und B 2.400 USDC erhält.
    </>
  ),
  'campaign.grid2401_faq_2_res': (
    <>
      Bitte joine unseren{' '}
      <a href={DISCORD} target="_blank">
        Discord
      </a>{' '}
      und suchen Sie Hilfe im speziellen Thread, der für dieses Ereignis
      erstellt wurde
    </>
  ),
  'account.deposit_contract_tips_AMOUNT': (AMOUNT: string) => (
    <div>
      <b>Standard</b>
      <div>
        Durch eine einfache Token-Übertragung an den DeGate-Smart-Vertrag werden
        Mittel hinzugefügt, während die Gasgebühren minimiert werden. Diese
        Methode hat eine Obergrenze pro Transaktion von {AMOUNT} USD.
      </div>
      <br />
      <b>Erweitert</b>
      <div>
        Diese Methode verwendet eine interne Funktion des DeGate-Smart-Vertrags,
        wodurch höhere Gasgebühren anfallen. Es gibt jedoch keine Höchstgrenze.
      </div>
    </div>
  ),
  trading_fee_tips: (v: string) => (
    <>
      Maker：0.00%
      <br />
      Taker：{v || '0.05%'}
    </>
  ),
  'notification.cancel_market_for_depth_desc': (showDesc: any) => {
    return (
      <>
        Jede Marktorder, die den{' '}
        <b onClick={showDesc}>Preisrutschschutz (10%)</b> überschreitet, wird
        automatisch storniert.
      </>
    );
  },
  'dca.max_gas_per_order': (Ele: any) => <>{Ele} per order</>,
  'campaign.grid2401_step1_desc': (
    baseAmount: string,
    quoteAmount: string,
    baseSymbol: string,
    quoteSymbol: string
  ) => {
    return (
      <>
        Vorschlag für eine Mindestinvestition von{' '}
        <b>
          {baseAmount} {baseSymbol}
        </b>{' '}
        und{' '}
        <b>
          {quoteAmount} {quoteSymbol}
        </b>
      </>
    );
  },
  'campaign.grid2401_step2_desc1': (minPrice: string, maxPrice: string) => (
    <>
      Preisspanne: {minPrice} nach {maxPrice}
    </>
  ),
  'campaign.grid2401_step2_desc2': (num: string) => <>Number of grids: {num}</>,
  'campaign.grid2401_faq_3_res': (feesUrl: string, Pair1: any, Pair2: any) => (
    <>
      Benutzer können ETH über das {Pair1}-Handelspaar in DeGate und USDC über
      das {Pair2}-Handelspaar erhalten. DeGate bietet extrem niedrige
      Handelsgebühren. Weitere Einzelheiten finden Sie in dem &apos;
      <a
        href={feesUrl}
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          WindowOpen(feesUrl);
        }}
      >
        Gebühren
      </a>
      &apos; Abschnitt.
    </>
  ),
  device_fast: (time: number) => (
    <>
      Ihr Gerät ist <br />
      <b>{time} Sekunden schnell</b>
    </>
  ),
  device_slow: (time: number) => (
    <>
      Ihr Gerät ist <br />
      <b>{time} Sekunden langsam</b>
    </>
  ),
  localTime_tips: (
    <>
      Stellen Sie die Zeiteinstellung Ihres Geräts&apos;s auf
      &quot;Automatisch&quot;, damit das DeGate-Protokoll ordnungsgemäß
      funktionieren kann.
      <br />
      <b>
        Bitte aktualisieren Sie die Seite, nachdem Sie die Änderung vorgenommen
        haben.
      </b>
    </>
  ),
};

export default de;
