import React from 'react';
import { DISCORD } from 'src/constants/dex';
import WindowOpen from 'src/utils/windowOpen';

const zhCN = {
  authorization_mode_tips: (
    <>
      <b>免簽名</b>
      <br />
      授權一次，無需簽名即可下單。
      <br />
      <br />
      <b>单次簽名</b>
      <br />
      每筆交易都需使用錢包簽名。
    </>
  ),
  service_unavailable_for_blacklist: (
    <>
      <div>
        您的 DeGate 訪問受限。如需更多信息，請訪問
        <a
          href="https://discord.com/channels/814731180892487702/1086188643342889020"
          target="_blank"
        >
          DeGate 社區
        </a>
        。
      </div>
    </>
  ),
  initialization_desc: (
    <>
      您將收到兩個簽名請求。
      <br />
      簽名是免費的。
    </>
  ),
  'account.deposit_status_help': (
    <>
      <b>待處理</b> <br />
      等待交易被處理到區塊中。
      <br />
      <br />
      <b>確認中</b>
      <br />
      交易已處理到區塊中。等待確認。
      <br />
      <br />
      <b>成功</b>
      <br />
      資金已入賬，可用於交易。
    </>
  ),
  'account.transfer_status_help': (
    <>
      <b>成功</b> <br />
      資產已到達。正在等待以太坊網絡的最終確認。
      <br />
      <br />
      <b>已完成</b> <br />
      包含轉移交易的區塊已在以太坊網絡上最終確認。
    </>
  ),
  'account.withdraw_status_help': (
    <>
      <b>處理中</b> <br />
      處理發送請求。
      <br />
      <br />
      <b>成功</b> <br />
      資產已成功交付至接收方地址。
      <br />
      <br />
      <b>已完成</b>
      <br /> 包含發送交易的區塊已在以太坊網絡上最終確認。
    </>
  ),
  'account.personal_sign_tips': (
    <>
      <div>
        MetaMask 請求您使用 <i>Personal Sign</i> 方法重新簽名
      </div>
    </>
  ),
  tips_dex_balance: (
    <>
      DeGate 餘額代表用戶在 DeGate 智能合約中持有的總價值。
      <br />
      <br />
      通過將資金添加到 DeGate
      餘額，您可以立即下單和取消訂單。您還可以將這些資金發送到任何以太坊地址。
    </>
  ),
  'account.init_step1_title': (
    <>
      作為首次用戶，需要進行初始化。此過程應該需要大約 <b>30 秒</b>。
    </>
  ),
  'trade.max_number_of_trades_tips': (
    <>
      一個訂單可以通過多次交易來成交；例如，一個價值 100 美元的訂單可以通過 30
      美元和 70 美元的交易來成交。
      <br />
      &quot;最大交易次數&quot;
      限制了以吃單方身份進行交易時訂單可以被成交的次數。
    </>
  ),
  'trade.flow_of_funds_tips': (
    <>
      <h3>資金流向</h3>資金將流入您的 DeGate 餘額，而不是您的錢包餘額。
      <br />
      <br />
      <h3>關於 DeGate 餘額</h3>DeGate 餘額代表用戶在 DeGate
      智能合約中持有的價值。
      <br />
      由於完全去中心化的 DeGate 智能合約，用戶可以完全保管 DeGate 餘額。
    </>
  ),
  'gridTrade.grid_free_tips': (
    <>
      網格策略現在<b>免費</b>了！
    </>
  ),
  'gridOrders.detail_transactions_unit': <>次</>,
  'gridOrders.grid_cancel_tips_text': <>實現獎勵</>,
  'gridOrders.grid_cancel_tips_content': `網格策略運作12小時後，挖礦獎勵將會實現。`,
  'mining.pools_mining_funds_tips': (
    <>
      位于挖矿价格区间内的网格订单总价值
      <br />
      <br />
      挖矿价格区间：从最高买单价格*0.99到最低卖单价格*1.01
    </>
  ),
  'mining.pools_mining_funds_tips_stable': (
    <>
      位于挖矿价格区间内的网格订单总价值
      <br />
      <br />
      挖矿价格区间：从最高买单价格到最低卖单价格
    </>
  ),
  'campaign.grid2401_desc': (
    <>
      網格策略是一種強大的工具，可以利用預設的價格範圍內的市場波動。網格策略設定多個買入和賣出訂單，自動以低價買入和高價賣出以獲取利潤。
      如果您想了解如何建立自訂網格，請參閱{' '}
      <a
        href="https://docs.degate.com/v/product_zh/product-tutorial/grid-strategy-creation-guide"
        target="_bank"
      >
        https://docs.degate.com/v/product_zh/product-tutorial/grid-strategy-creation-guide
      </a>
    </>
  ),
  'campaign.notes_2_desc': (
    <>
      每個用戶用於計算獎池份額的最大網格策略價值限制為<b>5000美元</b>。
    </>
  ),
  'campaign.grid2401_faq_1_res': (
    <>
      總獎金池為21,000美元，每24小時分配3,000美元，共7次。
      <br /> <br />
      活動開始後，系統每24小時結算一次帳戶，並根據網格策略的權重將每日獎金池指派給符合條件的網格策略。
      權重計算源自於網格當天創建時的價值和持續時間（以分鐘計算）。
      <br /> <br />
      網格策略的價值是在設定網格時的初始價值，不隨價格波動而改變。
      每個用戶對於網格策略增益有一個參與資金限制為5000美元。
      用戶可以在活動期間從同一地址建立多個符合條件的網格策略，但總資金上限為5000美元。
      <br /> <br />
      例如：參與網格策略活動的使用者只有兩位。
      在24小時結算點，用戶A建立了價值2,500美元、持續時間為500分鐘的網格策略，用戶B建立了價值6,000美元、持續時間為1,000分鐘的網格策略。
      如果當天分配了3,000美元，則A與B的權重比為：（2,500 x 500）/（5,000 x
      1,000）= 1:4，意味著A獲得600美元，B獲得2,400美元。
    </>
  ),
  'campaign.grid2401_faq_2_res': (
    <>
      請加入我們的
      <a href={DISCORD} target="_blank">
        Discord
      </a>
      並在專門為此活動創建的專用主題中尋求幫助。
    </>
  ),
  'account.deposit_contract_tips_AMOUNT': (AMOUNT: string) => (
    <div>
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
    </div>
  ),
  trading_fee_tips: (v: string) => (
    <>
      掛單：0.00%
      <br />
      吃單：{v || '0.05%'}
    </>
  ),
  'notification.cancel_market_for_depth_desc': (showDesc: any) => {
    return (
      <>
        任何超出<b onClick={showDesc}>價格滑點保護(10%)</b>
        的市價訂單部分將被自動取消。
      </>
    );
  },
  'dca.max_gas_per_order': (Ele: any) => <>每筆訂單 {Ele}</>,
  'campaign.grid2401_step1_desc': (
    baseAmount: string,
    quoteAmount: string,
    baseSymbol: string,
    quoteSymbol: string
  ) => {
    return (
      <>
        建議最小投入{' '}
        <b>
          {baseAmount} {baseSymbol}
        </b>{' '}
        和{' '}
        <b>
          {quoteAmount} {quoteSymbol}
        </b>
      </>
    );
  },
  'campaign.grid2401_step2_desc1': (minPrice: string, maxPrice: string) => (
    <>
      價格範圍: {minPrice} to {maxPrice}
    </>
  ),
  'campaign.grid2401_step2_desc2': (num: string) => <>網格數量: {num}</>,
  'campaign.grid2401_faq_3_res': (feesUrl: string, Pair1: any, Pair2: any) => (
    <>
      用戶可以透過 DeGate中{Pair1}的交易對來獲得ETH，透過{Pair2}
      來獲得USDC。DeGate中交易手續費極低，詳情請查看
      <a
        href={feesUrl}
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          WindowOpen(feesUrl);
        }}
      >
        Fees
      </a>
      。
    </>
  ),
  device_fast: (time: number) => (
    <>
      您的裝置快了
      <br />
      <b>{time} 秒</b>
    </>
  ),
  device_slow: (time: number) => (
    <>
      您的裝置慢了
      <br />
      <b>{time} 秒</b>
    </>
  ),

  localTime_tips: (
    <>
      將您裝置的時間設定&quot;自動設置&quot;，DeGate協議才可以正常運行。
      <br />
      <b>完成變更後請重新整理頁面。</b>
    </>
  ),
};

export default zhCN;
