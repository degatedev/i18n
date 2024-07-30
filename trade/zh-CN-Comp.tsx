import React from 'react';
import { DISCORD } from 'src/constants/dex';
import WindowOpen from 'src/utils/windowOpen';

const zhCN = {
  authorization_mode_tips: (
    <>
      <b>免签名</b>
      <br />
      授权一次后，下单无需再次签名
      <br />
      <br />
      <b>单次签名</b>
      <br />
      每次都用钱包签名进行下单
    </>
  ),
  service_unavailable_for_blacklist: (
    <>
      <div>
        您的DeGate访问受限。
        <br />
        如有疑问，请访问
        <a
          href="https://discord.com/channels/814731180892487702/1086188643342889020\"
          target="_black"
        >
          DeGate社区
        </a>
        。
      </div>
    </>
  ),
  initialization_desc: <>您将会收到两次签名请求，签名不会产生费用。</>,
  'account.deposit_status_help': (
    <>
      <b>等待入块</b>
      <br />
      等待交易进入区块
      <br />
      <br />
      <b>确认中</b>
      <br />
      交易已进入区块，等待确认
      <br />
      <br />
      <b>成功</b>
      <br />
      资金已到账，可以进行交易
    </>
  ),
  'account.transfer_status_help': (
    <>
      <b>成功</b>
      <br />
      资金已到账，等待以太坊上达到最终性
      <br />
      <br />
      <b>已完成</b>
      <br />
      包含此交易的区块已在以太坊上达到最终性
    </>
  ),
  'account.withdraw_status_help': (
    <>
      <b>系统处理中</b>
      <br />
      正在处理发送请求
      <br />
      <br />
      <b>成功</b>
      <br />
      资金已到账
      <br />
      <br />
      <b>已完成</b>
      <br />
      包含此交易的区块已在以太坊上达到最终性
    </>
  ),
  'account.personal_sign_tips': <>Metamask请求以Personal Sign的形式重新签名</>,
  tips_dex_balance: (
    <>
      DeGate余额是用户在DeGate智能合约中持有的资产的总值。
      <br />
      <br />
      划入资金后，您可以实时地下单和撤单。你也可以将这些资金发送至任意以太坊地址。
    </>
  ),
  'account.init_step1_title': (
    <>
      这是您首次使用DeGate协议，因此请先初始化， 大约<b>30秒</b>完成。
    </>
  ),
  'trade.max_number_of_trades_tips': (
    <>
      一个订单可以通过多次成交来完成；例如，100美元的订单可以分为30美元和70美元的两次成交。
      <br />
      “最大成交次数”限定了每个订单允许以Taker的方式最多成交多少次。
    </>
  ),
  'trade.flow_of_funds_tips': (
    <>
      <h3>资金流向</h3>资金将转入您的DeGate余额，而非您的钱包余额。
      <br />
      <br />
      <h3>关于DeGate余额</h3>DeGate余额是用户在DeGate智能合约中持有的资产。
      <br />
      用户完全掌控自己的DeGate余额，因为DeGate的智能合约是完全去中心化的。
    </>
  ),
  'gridTrade.grid_free_tips': (
    <>
      网格策略完全<b>免费</b>了！
    </>
  ),
  'gridOrders.detail_transactions_unit': <>次</>,
  'gridOrders.grid_cancel_tips_text': <>还需等待</>,
  'gridOrders.grid_cancel_tips_content': `网格策略运行满12小时后可领取挖矿奖励`,
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
      网格策略是一种强大的工具，能在预设的价格区间内，利用市场波动，通过设置多个买卖订单来实现自动低买高卖，从而实现盈利。如想了解如何创建自定义网格，请详见{' '}
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
      每位用户用于计算瓜分奖池份额的最大网格策略价值的上限为<b>5000</b>美元。
    </>
  ),
  'campaign.grid2401_faq_1_res': (
    <>
      总奖池为21,000USDC，每24小时分发3,000 USDC, 共进行7次。
      <br /> <br />
      活动开始后每24小时系统会进行一次结算，对符合要求的网格策略按照权重分发当日奖池，权重计算包含网格策略价值和当日创建网格分钟时长。
      <br /> <br />
      网格策略价值为用户开设网格时的初始价值，随价格变化不再变更，每个用户符合活动条件网格策略结算资金上限为5000美元，用户在活动中可以开设多个符合条件的网格，但结算总资金不超过5000美元。
      <br /> <br />
      举例: 一共有两个用户参加网格策略活动，24小时结算时，用户A,
      在周期内开设了价值2500美元网格策略并持续500分钟，
      用户B，开设价值6000美元网格策略并持续1000分钟。假如当日分发3000USDC，则A和B的权重比是:
      (2500x500) / (5000x1000) = 1:4, 即A获得600USDC， B获得2400USDC
    </>
  ),
  'campaign.grid2401_faq_2_res': (
    <>
      请加入
      <a href={DISCORD} target="_blank">
        Discord
      </a>
      在该活动专区寻求帮助
    </>
  ),
  'account.deposit_contract_tips_AMOUNT': (AMOUNT: string) => (
    <div>
      <b>标准方式</b>
      <div>
        {`通过"标准代币转账"向DeGate智能合约进行资金划入所需gas费用较少，但每笔交易上限为${AMOUNT}美元。`}
      </div>
      <br />
      <b>高级方式</b>
      <div>
        通过调用DeGate智能合约的内部功能进行资金划入，该方式会产生较高的gas费用，但没有最大金额限制。
      </div>
    </div>
  ),
  trading_fee_tips: (v: string) => (
    <>
      挂单：0.00%
      <br />
      吃单：{v || '0.05%'}
    </>
  ),
  'notification.cancel_market_for_depth_desc': (showDesc: any) => {
    return (
      <>
        任何超出<b onClick={showDesc}>价格滑点保护(10%)</b>
        的市价单部分将被自动取消。
      </>
    );
  },
  'dca.max_gas_per_order': (Ele: any) => <>每笔订单 {Ele}</>,
  'campaign.grid2401_step1_desc': (
    baseAmount: string,
    quoteAmount: string,
    baseSymbol: string,
    quoteSymbol: string
  ) => {
    return (
      <>
        建议最小投入{' '}
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
      价格区间: {minPrice} to {maxPrice}
    </>
  ),
  'campaign.grid2401_step2_desc2': (num: string) => <>网格数: {num}</>,
  'campaign.grid2401_faq_3_res': (feesUrl: string, Pair1: any, Pair2: any) => (
    <>
      用户可以通过 DeGate中{Pair1}的交易对来获得ETH，通过{Pair2}
      来获得USDC。DeGate中交易手续费极低，详情请查看
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
      您的设备 <br />
      <b>快了{time}秒</b>
    </>
  ),
  device_slow: (time: number) => (
    <>
      您的设备 <br />
      <b>慢了{time}秒</b>
    </>
  ),
  localTime_tips: (
    <>
      请将您的设备时间调整至&quot;自动设置&quot;，DeGate协议才可以正常运行。
      <br />
      <b>请完成更新后刷新页面。</b>
    </>
  ),
};

export default zhCN;
