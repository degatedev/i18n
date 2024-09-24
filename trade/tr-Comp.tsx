/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { DISCORD } from 'src/constants/dex';
import WindowOpen from 'src/utils/windowOpen';

const tr = {
  authorization_mode_tips: (
    <>
      <b>İmzalamadan</b>
      <br />
      Bir kez yetkilendirin ve imzalamadan emir verin.
      <br />
      <br />
      <b>Her zaman imzala</b>
      <br />
      Her işlem için emir vermek üzere cüzdanınızla imzalayın.
    </>
  ),
  service_unavailable_for_blacklist: (
    <>
      <div>
        DeGate erişiminiz kısıtlandı. Daha fazla bilgi için lütfen bu sayfayı
        ziyaret edin.{' '}
        <a
          href="https://discord.com/channels/814731180892487702/1086188643342889020"
          target="_blank"
        >
          DeGate topluluğu
        </a>{' '}
        .
      </div>
    </>
  ),
  initialization_desc: (
    <>
      İki imza isteği alacaksınız. <br />
      İmza ücretsizdir.
    </>
  ),
  'account.deposit_status_help': (
    <>
      <b>Beklemede</b> <br />
      İşlemin bir bloğa işlenmesini bekliyor.
      <br />
      <br />
      <b>Onaylanıyor</b>
      <br />
      İşlem bir bloğa işlendi. Onaylar bekleniyor.
      <br />
      <br />
      <b>Başarılı</b>
      <br />
      Fonlar yatırıldı ve ticaret için kullanılabilir.
    </>
  ),
  'account.transfer_status_help': (
    <>
      <b>Başarılı</b> <br />
      Varlık ulaştı. Ethereum ağı üzerinde kesinleşmesi bekleniyor.
      <br />
      <br />
      <b>Kesinleşti</b> <br />
      Transfer işleminin bulunduğu blok Ethereum ağı üzerinde kesinleşti.
    </>
  ),
  'account.withdraw_status_help': (
    <>
      <b>İşleniyor</b> <br />
      Gönderim isteği işleniyor.
      <br />
      <br />
      <b>Başarılı</b> <br />
      Varlık alıcıya teslim edildi.
      <br />
      <br />
      <b>Kesinleşti</b> <br />
      Gönderim işleminin bulunduğu blok Ethereum ağı üzerinde kesinleşti.
    </>
  ),
  'account.personal_sign_tips': (
    <>
      <div>
        MetaMask sizden tekrar <i>Kişisel İmza</i> yöntemiyle imza atmanızı
        istiyor.
      </div>
    </>
  ),
  tips_dex_balance: (
    <>
      DeGate Bakiyesi, kullanıcıların DeGate akıllı sözleşmesi içinde tuttukları
      varlıkların toplam değerini temsil eder.
      <br />
      <br />
      DeGate Bakiyesine fon ekleyerek anında emir verebilir ve iptal
      edebilirsiniz. Ayrıca bu fonları herhangi bir Ethereum adresine de
      gönderebilirsiniz.
    </>
  ),
  'account.init_step1_title': (
    <>
      Bir ilk kez kullanıcı olarak, başlatma gereklidir. Bu işlem yaklaşık
      olarak <b>30 saniye</b> sürecektir.
    </>
  ),
  'trade.max_number_of_trades_tips': (
    <>
      Bir emir birden fazla işlemle doldurulabilir $30 ve $70'lik işlemlerle
      doldurulabilir.
      <br />
      The &quot bir Piyasa Alıcı olarak işlem yaparken doldurulabilir.
    </>
  ),
  'trade.flow_of_funds_tips': (
    <>
      <h3>Fon Akışı</h3>Fonlar DeGate Bakiyenize gidecek, cüzdan bakiyenize
      değil.
      <br />
      <br />
      <h3>DeGate Bakiyesi Hakkında</h3>DeGate Bakiyesi, kullanıcıların DeGate
      akıllı kontratı içinde tuttukları değeri temsil eder.
      <br />
      Kullanıcılar, tamamen merkeziyetsiz DeGate akıllı kontratı sayesinde
      DeGate Bakiyesi üzerinde tam kontrol sahibidir.
    </>
  ),
  'gridOrders.detail_transactions_unit': (
    <>
      <span></span>
    </>
  ),
  'gridOrders.grid_cancel_tips_text': <>Ödüller şu an mevcut</>,
  'gridOrders.grid_cancel_tips_content': `Madencilik ödülleri, grid stratejisi 12 saat boyunca çalıştıktan sonra geçerli olacaktır.`,
  'mining.pools_mining_funds_tips': (
    <>
      Madencilik fiyat aralığındaki grid emirlerinin toplam değeri.
      <br />
      <br />
      Madencilik fiyat aralığı: En yüksek emir defteri alış fiyatı * 0.99'dan en
      düşük emir defteri satış fiyatı *1.01'e kadar
    </>
  ),
  'mining.pools_mining_funds_tips_stable': (
    <>
      Madencilik fiyat aralığındaki grid emirlerinin toplam değeri.
      <br />
      <br />
      Madencilik fiyat aralığı: En yüksek emir defteri alış fiyatından en düşük
      emir defteri satış fiyatına kadar
    </>
  ),
  'campaign.grid2401_desc': (
    <>
      Grid stratejisi, önceden belirlenmiş bir fiyat aralığında piyasa
      dalgalanmalarından yararlanabilecek güçlü bir araçtır. Grid stratejisi,
      düşük fiyattan otomatik olarak alım ve yüksek fiyattan satım için birden
      fazla alım ve satım emri ayarlar. Özel bir grid nasıl oluşturulacağını
      öğrenmek istiyorsanız{' '}
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
      Kullanıcı başına grid stratejisi için uygun maksimum değer, ödül havuzunun
      hesaplanmasında dikkate alınabilecek maksimum değer $<b>5000</b>'dir.
    </>
  ),
  'campaign.grid2401_faq_1_res': (
    <>
      Toplam ödül havuzu 21,000 USDC'dir ve her 24 saatte bir 3,000 USDC
      dağıtılır, toplamda 7 dağıtım yapılır.
      <br /> <br />
      Etkinlik başladıktan sonra sistem, hesapları her 24 saatte bir kapatacak
      ve uygun grid stratejilerine ağırlıklarına göre günlük ödül havuzunu
      dağıtacaktır. Ağırlık hesaplaması, grid stratejisinin değeri ve o gün
      kurulan gridin süresi (dakika cinsinden) üzerinden yapılır.
      <br /> <br />
      Grid stratejisinin değeri, grid kurulduğunda belirlenen başlangıç değerine
      dayanır ve fiyat dalgalanmalarıyla değişmez. Her kullanıcının grid
      stratejisi artışı için $5000 katılım fonu sınırı vardır. Kullanıcılar,
      etkinlik sırasında aynı adresten birden fazla uygun grid stratejisi
      kurabilir, ancak toplam uygun fonlar $5000 ile sınırlıdır.
      <br /> <br />
      Örnek: Grid stratejisi etkinliğine yalnızca iki kullanıcı katılmaktadır.
      24 saatlik kapanışta, Kullanıcı A, 500 dakika süren $2,500 değerinde bir
      grid stratejisi kurmuşken, Kullanıcı B, 1,000 dakika süren $6,000
      değerinde bir grid stratejisi kurmuştur. O gün 3,000 USDC dağıtıldığında,
      A ve B'nin ağırlık oranı: (2,500 x 500) / (5,000 x 1,000) = 1:4'tür, yani
      A 600 USDC, B ise 2,400 USDC alır.
    </>
  ),
  'campaign.grid2401_faq_2_res': (
    <>
      Lütfen{' '}
      <a href={DISCORD} target="_blank">
        Discord
      </a>{' '}
      ve bu etkinlik için oluşturulan özel başlıkta yardım isteyin
    </>
  ),
  'account.deposit_contract_tips_AMOUNT': (AMOUNT: string) => (
    <div>
      <b>Standart</b>
      <div>
        DeGate akıllı kontratına basit bir token transferi yoluyla fonlar
        eklenir ve gaz ücretleri en aza indirilir. Bu yöntem, işlem başına{' '}
        {AMOUNT}USD limitine sahiptir.
      </div>
      <br />
      <b>Gelişmiş</b>
      <div>
        Bu yöntem, DeGate akıllı kontratının dahili bir işlevini kullanır ve
        daha yüksek gaz ücretlerine neden olur. Ancak, maksimum limit
        bulunmamaktadır.
      </div>
    </div>
  ),
  trading_fee_tips: (v: string) => (
    <>
      Maker: 0.00%
      <br />
      Taker: {v || '0.05%'}
    </>
  ),
  'notification.cancel_market_for_depth_desc': (showDesc: any) => {
    return (
      <>
        Herhangi bir piyasa emri{' '}
        <b onClick={showDesc}>fiyat kayması koruması(10%)</b>'nı aştığında
        otomatik olarak iptal edilecektir.
      </>
    );
  },
  'dca.max_gas_per_order': (Ele: any) => <>{Ele} işlem başına</>,
  'campaign.grid2401_step1_desc': (
    baseAmount: string,
    quoteAmount: string,
    baseSymbol: string,
    quoteSymbol: string
  ) => {
    return (
      <>
        Önerilen minimum yatırım{' '}
        <b>
          {baseAmount} {baseSymbol}
        </b>{' '}
        ve{' '}
        <b>
          {quoteAmount} {quoteSymbol}
        </b>
      </>
    );
  },
  'campaign.grid2401_step2_desc1': (minPrice: string, maxPrice: string) => (
    <>
      Fiyat aralığı: {minPrice} ile {maxPrice}
    </>
  ),
  'campaign.grid2401_step2_desc2': (num: string) => <>Grid sayısı: {num}</>,
  'campaign.grid2401_faq_3_res': (feesUrl: string, Pair1: any, Pair2: any) => (
    <>
      Kullanıcılar, DeGate'te{Pair1} işlem çifti üzerinden ETH ve{Pair2} işlem
      çifti üzerinden USDC elde edebilir. DeGate son derece düşük işlem
      ücretleri sunar. Ayrıntılar için lütfen &apos
      <a
        href={feesUrl}
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          WindowOpen(feesUrl);
        }}
      >
        Ücretler
      </a>
      &apos
    </>
  ),
  device_fast: (time: number) => (
    <>
      Cihazınız <br />
      <b>{time} saniye hızlı</b>
    </>
  ),
  device_slow: (time: number) => (
    <>
      Cihazınız <br />
      <b>{time} saniye yavaş</b>
    </>
  ),
  localTime_tips: (
    <>
      Cihazınızı&apos DeGate protokolü düzgün çalışabilir.
      <br />
      <b>Lütfen değişikliği yaptıktan sonra sayfayı yenileyin.</b>
    </>
  ),
};

export default tr;
