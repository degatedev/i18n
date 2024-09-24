import React from 'react';
import { DISCORD } from 'src/constants/dex';
import WindowOpen from 'src/utils/windowOpen';

const ja = {
  authorization_mode_tips: (
    <>
      <b>署名なし</b>
      <br />
      1回の認証で、署名なしで注文を出すことができます。
      <br />
      <br />
      <b>常に署名する</b>
      <br />
      各取引につき、ウォレットで署名をして注文を出します。
    </>
  ),
  service_unavailable_for_blacklist: (
    <>
      <div>
        DeGateへのアクセスは制限されています。詳しくは{' '}
        <a
          href="https://discord.com/channels/814731180892487702/1086188643342889020"
          target="_black"
        >
          DeGate コミュニティ
        </a>{' '}
        をご覧ください。
      </div>
    </>
  ),
  initialization_desc: (
    <>
      あなたには二つの署名要求があります。 <br />
      署名は無料です。
    </>
  ),
  'account.deposit_status_help': (
    <>
      <b>保留中</b> <br />
      トランザクションがブロックに処理されるのを待っています。
      <br />
      <br />
      <b>確認中</b>
      <br />
      トランザクションはブロックに処理されました。確認を待っています。
      <br />
      <br />
      <b>成功</b>
      <br />
      資金がクレジットされ、取引に利用可能です。
    </>
  ),
  'account.transfer_status_help': (
    <>
      <b>成功</b> <br />
      資産が到着しました。イーサリアムネットワーク上での最終化を待っています。
      <br />
      <br />
      <b>最終化済み</b> <br />
      転送トランザクションを含むブロックがイーサリアムネットワークで最終化されました。
    </>
  ),
  'account.withdraw_status_help': (
    <>
      <b>処理中</b> <br />
      送信リクエストを処理しています。
      <br />
      <br />
      <b>成功</b> <br />
      資産が受取人のアドレスに届けられました。
      <br />
      <br />
      <b>最終化済み</b>
      <br />{' '}
      送信トランザクションを含むブロックがイーサリアムネットワークで最終化されました。
    </>
  ),
  'account.personal_sign_tips': (
    <>
      <div>
        MetaMask が <i>Personal Sign</i> メソッドで再度の署名を求めています
      </div>
    </>
  ),
  tips_dex_balance: (
    <>
      DeGate
      バランスは、ユーザーがDeGateスマートコントラクト内に保持している資産の総価値を表します。
      <br />
      <br />
      DeGate
      バランスに資金を追加することで、すぐに注文を出したりキャンセルしたりできます。また、これらの資金を任意のイーサリアムアドレスに送信することも可能です。
    </>
  ),
  'account.init_step1_title': (
    <>
      初回ユーザーとして、初期化が必要です。このプロセスにはおよそ <b>30秒</b>
      かかります。
    </>
  ),
  'trade.max_number_of_trades_tips': (
    <>
      1つの注文は複数の取引で成立できます。例えば、$100 の注文は、$30 と $70
      の取引で成立することがあります。
      <br />
      「最大取引回数」は、注文がテイカーとして取引される際に成立できる回数の制限です。
    </>
  ),
  'trade.flow_of_funds_tips': (
    <>
      <h3>資金の流れ</h3> お金はあなたの DeGate
      バランスに入ります。ウォレットバランスではありません。
      <br />
      <br />
      <h3>DeGate バランスについて</h3> DeGate バランスは、ユーザーが DeGate
      スマートコントラクト内で保持する価値を表します。
      <br />
      ユーザーは完全に分散された DeGate スマートコントラクトのおかげで、 DeGate
      バランスの完全な保有権を保持します。
    </>
  ),
  'gridOrders.detail_transactions_unit': (
    <>
      <span></span>
    </>
  ),
  'gridOrders.grid_cancel_tips_text': <>リワードはあと</>,
  'gridOrders.grid_cancel_tips_content': `グリッド戦略が 12 時間実行されたら、マイニングリワードが実現されます。`,
  'mining.pools_mining_funds_tips': (
    <>
      マイニング価格範囲内のグリッド注文の総価値。
      <br />
      <br />
      マイニング価格範囲: 最高価格のオーダーブック買い価格 * 0.99
      から最安価格のオーダーブック売り価格 *1.01 まで
    </>
  ),
  'mining.pools_mining_funds_tips_stable': (
    <>
      マイニング価格範囲内のグリッド注文の総価値。
      <br />
      <br />
      マイニング価格範囲:
      最高価格のオーダーブック買い価格から最安価格のオーダーブック売り価格
    </>
  ),
  'campaign.grid2401_desc': (
    <>
      グリッド戦略は、予め決めた価格範囲で市場の変動を活かす強力なツールです。グリッド戦略は、低い価格で自動的に買い、高い価格で売ることで利益を得るために、複数の買い注文と売り注文を設定します。カスタムグリッドの作成方法を学びたい場合は、以下を参考にしてください。{' '}
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
      賞金プールを計算するために対象となるユーザーごとの最大グリッド戦略価値は $
      <b>5000</b> に制限されています。
    </>
  ),
  'campaign.grid2401_faq_1_res': (
    <>
      総賞金額は 21,000 USDC で、24 時間ごとに 3,000 USDC が 7
      回にわたって配布されます。
      <br /> <br />
      イベントの開始後、システムは 24
      時間ごとに口座を決済し、その日の対象となるグリッド戦略に応じて日々の賞金プールを配布します。ウェイトの計算は、その日のグリッド戦略の価値とグリッドが作成されている時間（分）に基づいて導出されます。
      <br /> <br />
      グリッド戦略の価値は、グリッドのセットアップ時の初期価値によって決定され、価格変動によって変化することはありません。ユーザーは、グリッド戦略ブーストのために
      $5000 の参加資金制限があります。ユーザーは、
      アクティビティ期間中に同じアドレスから複数の有資格グリッド戦略を設定することができますが、総有資格資金は
      $5000 に限定されます。
      <br /> <br />
      例：グリッド戦略イベントに参加しているユーザーが 2 人だけで、24
      時間の決済マーク時にユーザー A が $2,500 の価値のグリッド戦略を 500
      分間続け、ユーザー B が $6,000 の価値のグリッド戦略を 1,000
      分間続けている場合、その日の 3,000 USDC が分配されるとしたら、A と B
      のウェイト比は次のようになります: (2,500 x 500) / (5,000 x 1,000) =
      1:4、つまり A は 600 USDC 受け取り、B は 2,400 USDC を受け取ります。
    </>
  ),
  'campaign.grid2401_faq_2_res': (
    <>
      私たちの{' '}
      <a href={DISCORD} target="_blank">
        Discord
      </a>{' '}
      に参加し、このイベント用に作成された特別スレッドでサポートを求めてください
    </>
  ),
  'account.deposit_contract_tips_AMOUNT': (AMOUNT: string) => (
    <div>
      <b>標準</b>
      <div>
        DeGate
        スマートコントラクトへのシンプルなトークントランスファーを通じて、ガス料金を最小化しながら資金を追加します。この方法には1
        つのトランザクションにつき上限 {AMOUNT}USDがあります。
      </div>
      <br />
      <b>高度</b>
      <div>
        この方法はDeGate
        スマートコントラクトの内部関数を利用し、ガス料金が高くなります。ただし、上限はありません。
      </div>
    </div>
  ),
  trading_fee_tips: (v: string) => (
    <>
      メーカー・・・・・・0.00%
      <br />
      テイカー・・・・・・{v || '0.05%'}
    </>
  ),
  'notification.cancel_market_for_depth_desc': (showDesc: any) => {
    return (
      <>
        <b onClick={showDesc}>価格滑り保護(10%)</b>{' '}
        を超えるすべての市場注文は自動的にキャンセルされます。
      </>
    );
  },
  'dca.max_gas_per_order': (Ele: any) => <>{Ele} 毎に</>,
  'campaign.grid2401_step1_desc': (
    baseAmount: string,
    quoteAmount: string,
    baseSymbol: string,
    quoteSymbol: string
  ) => {
    return (
      <>
        最小投資金額を{' '}
        <b>
          {baseAmount} {baseSymbol}
        </b>{' '}
        および{' '}
        <b>
          {quoteAmount} {quoteSymbol}
        </b>{' '}
        とすることをお勧めします
      </>
    );
  },
  'campaign.grid2401_step2_desc1': (minPrice: string, maxPrice: string) => (
    <>
      価格範囲: {minPrice} から {maxPrice} まで
    </>
  ),
  'campaign.grid2401_step2_desc2': (num: string) => <>グリッドの数: {num}</>,
  'campaign.grid2401_faq_3_res': (feesUrl: string, Pair1: any, Pair2: any) => (
    <>
      ユーザーは DeGate 内の{Pair1}取引ペアを通じて ETH を取得し、{Pair2}
      取引ペアを通じて USDC を取得できます。DeGate
      は非常に低い取引手数料を提供しています。詳細については、&apos;
      <a
        href={feesUrl}
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          WindowOpen(feesUrl);
        }}
      >
        手数料
      </a>
      &apos;セクションを参照してください。
    </>
  ),
  device_fast: (time: number) => (
    <>
      デバイスの時間が <br />
      <b>{time} 秒速い</b> です
    </>
  ),
  device_slow: (time: number) => (
    <>
      デバイスの時間が <br />
      <b>{time} 秒遅い</b> です
    </>
  ),
  localTime_tips: (
    <>
      デバイスの時間設定を「自動」に設定し、DeGate
      プロトコルが正常に動作するようにしてください。
      <br />
      <b>変更をした後、ページを再読み込みしてください。</b>
    </>
  ),
};

export default ja;
