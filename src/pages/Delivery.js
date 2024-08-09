import React from 'react';
import { useSite } from '../context/SiteContext';
import styles from './Delivery.module.css'; // Assuming you have a CSS module for styling

const Delivery = () => {
  const { siteName } = useSite();

  return (
    <div className={styles.shippingInfo}>
      <h1>GÖNDERİM BİLGİLERİ</h1>
      <p>{siteName} aracılığıyla siparişlerinizi hızlı ve emniyetli bir şekilde teslim etmeyi hedefliyoruz. İşte gönderim politikalarımız hakkında bilmeniz gereken bazı önemli bilgiler:</p>
      
      <h2>1. SİPARİŞ HAZIRLAMA SÜRECİ</h2>
      <p>Siparişinizi aldıktan hemen sonra hazırlamaya başlıyoruz. Hazırlama süremiz, sipariş yoğunluğuna ve stok durumlarına bağlı olarak genellikle 1 ila 3 iş günü arasında değişmektedir.</p>
      
      <h2>2. TESLİMAT ZAMANLARI VE YÖNTEMLERİ</h2>
      <p>Teslimat süreleri, seçtiğiniz yönteme ve bulunduğunuz konuma göre farklılık gösterir. Standart gönderimler 5-7 iş günü sürerken, ekspres gönderim seçenekleri de bulunmaktadır.</p>
      
      <h2>3. GÖNDERİM ÜCRETİ</h2>
      <p>Gönderim ücretleri, siparişin ağırlığı ve teslimat adresine göre belirlenir. Belirli bir tutar üzeri siparişler için ücretsiz gönderim sunuyoruz.</p>
      
      <h2>4. SİPARİŞ TAKİBİ</h2>
      <p>Siparişiniz yola çıktığında, size bir takip numarası sağlanır ve bu numara ile siparişinizi takip edebilirsiniz. Aynı zamanda, web sitemiz üzerinden de sipariş durumunuzu kontrol edebilirsiniz.</p>
      
      <h2>5. GARANTİ VE DESTEK</h2>
      <p>Ürünlerimizin arkasındayız ve satın aldığınız ürünlerle ilgili herhangi bir sorun yaşarsanız, lütfen garanti süresi içinde bizimle iletişime geçiniz. Ürünü inceleyip garanti kapsamında olup olmadığını belirleyeceğiz.</p>
      
      <h2>6. GARANTİ TALEPLERİ</h2>
      <p>Geçerli bir garanti talebinde, ürünü tamir eder veya değiştiririz. Eğer orijinal ürün stokta yoksa, değeri eşit veya daha yüksek bir ürünle değiştirme hakkımız saklıdır.</p>
      
      <h2>7. GARANTİ DIŞI DURUMLAR</h2>
      <p>Garantimiz aşağıdaki durumları kapsamamaktadır:</p>
      <ul>
        <li>Normal kullanım koşullarında meydana gelen aşınma ve yıpranma</li>
        <li>Yanlış kullanım veya kazalar sonucu oluşan zararlar</li>
        <li>Yetkisiz onarımlar veya modifikasyonlar</li>
        <li>Bakım talimatlarına uyulmaması</li>
        <li>Dış etkenlerden kaynaklanan zararlar, örneğin doğal afetler</li>
      </ul>
      
      <h2>8. SİPARİŞ ONAYI VE BİLGİLERİ</h2>
      <p>Teslimat bilgilerinizi doğru girdiğinizden emin olun. Tüm ayrıntıları ödeme işlemi sırasında iki kez kontrol edin.</p>
      
      <h2>9. İADE VE YENİDEN GÖNDERİM</h2>
      <p>Yanlış iletişim bilgileri nedeniyle siparişiniz iade edilirse, sizinle tekrar iletişime geçerek yeni bir gönderim planlayacağız. Bu durum ek maliyetlere neden olabilir.</p>
      
      <h2>10. TESLİMAT KISITLARI</h2>
      <p>Bazı ürünlerin doğası gereği veya varış yerine bağlı olarak teslimat kısıtlamaları olabilir. Bu durumda sizi bilgilendirir ve alternatif çözümler sunarız.</p>
      
      <p>Siparişinizle ilgili daha fazla bilgi veya yardım için lütfen müşteri hizmetleri ekibimizle <a href={`mailto:info@${siteName.toLowerCase()}`}>info@{siteName}</a> üzerinden iletişime geçin. Siparişlerinizi zamanında ve güvenle teslim etmek için buradayız.</p>
    </div>
  );
};

export default Delivery;
