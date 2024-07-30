import React from 'react';
import { DISCORD } from 'src/constants/dex';
import WindowOpen from 'src/utils/windowOpen';

const en = {
  authorization_mode_tips: (
    <>
      <b>Signature-free</b>
      <br />
      Authorize once and place orders without signing.
      <br />
      <br />
      <b>Always Sign</b>
      <br />
      Sign with your wallet to place orders for every transaction.
    </>
  ),
  service_unavailable_for_blacklist: (
    <>
      <div>
        Your access to DeGate is restricted. For more information, please visit{' '}
        <a
          href="https://discord.com/channels/814731180892487702/1086188643342889020"
          target="_black"
        >
          DeGate community
        </a>{' '}
        .
      </div>
    </>
  ),
  initialization_desc: (
    <>
      You will receive two signature requests. <br />
      Signing is free.
    </>
  ),
  'account.deposit_status_help': (
    <>
      <b>Pending</b> <br />
      Waiting for the transaction to be processed into a block.
      <br />
      <br />
      <b>Confirming</b>
      <br />
      The transaction has been processed into a block. Awaiting confirmations.
      <br />
      <br />
      <b>Success</b>
      <br />
      Funds has been credited, and is available for trading.
    </>
  ),
  'account.transfer_status_help': (
    <>
      <b>Success</b> <br />
      Asset has arrived. Awaiting finality on the Ethereum network.
      <br />
      <br />
      <b>Finalized</b> <br />
      The block containing the transfer transaction has been finalized on the
      Ethereum network.
    </>
  ),
  'account.withdraw_status_help': (
    <>
      <b>Processing</b> <br />
      Processing send request.
      <br />
      <br />
      <b>Success</b> <br />
      The asset has been delivered to the recipient&apos;s address.
      <br />
      <br />
      <b>Finalized</b>
      <br /> The block containing the send transaction has been finalized on the
      Ethereum network.
    </>
  ),
  'account.personal_sign_tips': (
    <>
      <div>
        MetaMask requests you to sign again with <i>Personal Sign</i> method
      </div>
    </>
  ),
  tips_dex_balance: (
    <>
      DeGate Balance represents the total value of assets users hold within the
      DeGate smart contract.
      <br />
      <br />
      By adding funds to DeGate Balance, you can instantly place and cancel
      orders. You can also send these funds to any Ethereum address.
    </>
  ),
  'account.init_step1_title': (
    <>
      As a first-time user, initialization is required. This process should take
      approximately <b>30 seconds</b>.
    </>
  ),
  'trade.max_number_of_trades_tips': (
    <>
      An order can be filled with multiple trades; for example, a $100 order
      could be filled with trades of $30 and $70.
      <br />
      The &quot;max number of trades&quot; limits the number of times an order
      can be filled when trading as a Taker.
    </>
  ),
  'trade.flow_of_funds_tips': (
    <>
      <h3>Flow of Funds</h3>Funds will go to your DeGate Balance, not your
      wallet balance.
      <br />
      <br />
      <h3>About DeGate Balance</h3>DeGate Balance represents the value that
      users hold within the DeGate smart contract.
      <br />
      Users maintain complete custody of DeGate Balance thanks to the fully
      decentralized DeGate smart contract.
    </>
  ),
  'gridTrade.grid_free_tips': (
    <>
      Grid strategies are now <b>free</b>!
    </>
  ),
  'gridOrders.detail_transactions_unit': (
    <>
      <span></span>
    </>
  ),
  'gridOrders.grid_cancel_tips_text': <>Rewards available in</>,
  'gridOrders.grid_cancel_tips_content': `Mining rewards will be actualized once the grid strategy has run for 12 hours.`,
  'mining.pools_mining_funds_tips': (
    <>
      Total value of grid orders within the mining price range.
      <br />
      <br />
      Mining price range: From highest order book buy price * 0.99 to lowest
      order book sell price *1.01
    </>
  ),
  'mining.pools_mining_funds_tips_stable': (
    <>
      Total value of grid orders within the mining price range.
      <br />
      <br />
      Mining price range: From highest order book buy price to lowest order book
      sell price
    </>
  ),
  'campaign.grid2401_desc': (
    <>
      Grid strategy is a powerful tool that can capitalize on market
      fluctuations within a predetermined price range. A grid strategy sets
      multiple buy and sell orders to automatically buy low and sell high for
      profit. If you want to learn how to create a custom grid, please refer to{' '}
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
      Maximum grid strategy value per user eligible for calculating share of
      prize pool is limited to $<b>5000</b>.
    </>
  ),
  'campaign.grid2401_faq_1_res': (
    <>
      The total prize pool is 21,000 USDC, with 3,000 USDC distributed every 24
      hours, for a total of 7 distributions.
      <br /> <br />
      Following the start of event, the system will settle accounts every 24
      hours and distribute the daily prize pool to eligible grid strategies
      according to their weight. The weight calculation is derived from the
      value of the grid strategy and the duration in minutes of the grid created
      that day.
      <br /> <br />
      The value of the grid strategy is determined by the initial value when the
      grid is set up and does not change with price fluctuations. Each user has
      a participating fund limit of $5000 for the grid strategy boost. Users can
      establish multiple eligible grid strategies from the same address during
      the activity, but the total eligible funds is capped at $5000.
      <br /> <br />
      For example: There are only two users participating in the grid strategy
      event. At the 24-hour settlement mark, User A has set up a grid strategy
      worth $2,500 lasting 500 minutes, and User B has set up a grid strategy
      worth $6,000 lasting 1,000 minutes. If 3,000 USDC is distributed that day,
      then the weight ratio of A to B is: (2,500 x 500) / (5,000 x 1,000) = 1:4,
      meaning A receives 600 USDC, and B receives 2,400 USDC.
    </>
  ),
  'campaign.grid2401_faq_2_res': (
    <>
      Please join our{' '}
      <a href={DISCORD} target="_blank">
        Discord
      </a>{' '}
      and seek help in the special thread created for this event
    </>
  ),
  'account.deposit_contract_tips_AMOUNT': (AMOUNT: string) => (
    <div>
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
        Any market order exceeding{' '}
        <b onClick={showDesc}>price slippage protection(10%)</b> will be
        auto-canceled.
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
        Suggest min. investment of{' '}
        <b>
          {baseAmount} {baseSymbol}
        </b>{' '}
        and{' '}
        <b>
          {quoteAmount} {quoteSymbol}
        </b>
      </>
    );
  },
  'campaign.grid2401_step2_desc1': (minPrice: string, maxPrice: string) => (
    <>
      Price range: {minPrice} to {maxPrice}
    </>
  ),
  'campaign.grid2401_step2_desc2': (num: string) => <>Number of grids: {num}</>,
  'campaign.grid2401_faq_3_res': (feesUrl: string, Pair1: any, Pair2: any) => (
    <>
      Users can obtain ETH through the{Pair1}trading pair in DeGate, and obtain
      USDC through the{Pair2}trading pair. DeGate offers extremely low trading
      fees. For details, please refer to the &apos;
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
      &apos; section.
    </>
  ),
  device_fast: (time: number) => (
    <>
      Your device is <br />
      <b>{time} seconds fast</b>
    </>
  ),
  device_slow: (time: number) => (
    <>
      Your device is <br />
      <b>{time} seconds slow</b>
    </>
  ),
  localTime_tips: (
    <>
      Set your device&apos;s time setting to &quot;Automatic&quot;, so that
      DeGate protocol can work properly.
      <br />
      <b>Please refresh the page after making the change.</b>
    </>
  ),
};

export default en;
