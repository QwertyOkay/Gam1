import React from 'react';
import { useSite } from '../context/SiteContext';
import styles from './Terms.module.css'; // Stil için CSS modülü varsayıyoruz

const Terms = () => {
  const { siteName } = useSite();

  return (
    <div className={styles.termsInfo}>
      <h1>SERVİS KOŞULLARI</h1>
      <p>{siteName}'e hoşgeldiniz! Sitemizi kullanarak ve erişerek, aşağıda belirtilen şartları kabul ettiğinizi beyan edersiniz. Eğer bu şartları kabul etmiyorsanız, lütfen platformumuzu kullanmaktan kaçının.</p>
      
      <h2>1. FİKRİ MÜLKİYET</h2>
      <p>Sitemizde bulunan tüm içerikler; metinler, grafikler, logolar, ikonlar, görüntüler ve videolar {siteName}'e aittir ve fikri mülkiyet hakları kapsamında korunmaktadır. Bu içeriklerin izinsiz kullanımı ve çoğaltılması kesinlikle yasaktır.</p>
      
      <h2>2. YETKİLİ KULLANIMLAR</h2>
      <p>Web sitemiz, şahsi ve ticari olmayan amaçlar için kullanıma açıktır. İçeriği değiştirme, yayma veya kopyalama gibi izin verilmeyen eylemlerden kaçınmalısınız. Ayrıca, sitemizin işlevsellik veya güvenliğini bozabilecek herhangi bir faaliyetten uzak durmalısınız.</p>
      
      <h2>3. BİLGİLERİN DOĞRULUĞU</h2>
      <p>Ürün bilgilerinin doğruluğunu sağlamak için çaba sarf etmekteyiz, fakat bu bilgilerin hatasız olduğunu garanti edemeyiz. Ürün açıklamaları, fiyatlar ve stok durumları hakkında hatalar olabilir ve bunları önceden bildirmeksizin düzeltebiliriz.</p>
      
      <h2>4. FİYAT VE İŞLEMLER</h2>
      <p>Web sitemizde yer alan fiyatlar değişebilir ve belirtilen para birimi üzerinden listelenir. Güvenli ödeme yöntemleri sunarız ve ödeme sırasında kabul edilen yöntemler belirtilir.</p>
      
      <h2>5. SİPARİŞ VE İPTALLER</h2>
      <p>Sipariş verdiğinizde, bir satın alma teklifi oluşturursunuz ve bu teklifi kabul etme veya reddetme hakkımız saklıdır. Stokta olmayan ürünler veya ödeme ile ilgili sorunlar nedeniyle siparişleri iptal edebiliriz. Etkilenen müşterilere hızlıca bilgi verilir ve gerekirse geri ödeme yapılır.</p>
      
      <h2>6. TESLİMAT VE İADELER</h2>
      <p>Çeşitli destinasyonlara kargo hizmeti sağlamaktayız; ücretler ve teslim süreleri seçilen yöntem ve varış yerine göre değişebilir. Detaylı bilgi için Kargo ve İade Politikalarımıza göz atın.</p>
      
      <h2>7. HARİCİ LİNKLER</h2>
      <p>Web sitemiz, kontrolümüz dışında olan harici sitelere linkler içerebilir. Bu sitelerin içeriği veya gizlilik politikaları üzerinde bir sorumluluğumuz yoktur, bu yüzden bu tür sitelere erişirken dikkatli olmanızı tavsiye ederiz.</p>
      
      <h2>8. SORUMLULUK REDDİ</h2>
      <p>Ne {siteName} ne de ilişkili şirketlerimiz, web sitemizin kullanımından veya buradan alınan bilgilere dayanılarak yapılan herhangi bir işlemden kaynaklanan doğrudan veya dolaylı, tesadüfi veya sonuç olarak ortaya çıkan zararlardan sorumlu tutulamaz.</p>
      
      <h2>9. KOŞULLARIN KABULÜ</h2>
      <p>Bu koşullar, önceden haber verilmeksizin değiştirilebilir. Sitemizi kullanmaya devam etmeniz, güncellenmiş koşulları kabul ettiğiniz anlamına gelir. Bu koşullar hakkında sorularınız varsa, lütfen <a href={`mailto:info@${siteName.toLowerCase()}`}>info@{siteName}</a> ile bize ulaşın.</p>
    </div>
  );
};

export default Terms;
