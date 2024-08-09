import React from 'react';
import { useSite } from '../context/SiteContext';
import styles from './Privacy.module.css'; // Stil için CSS modülü varsayıyoruz

const Privacy = () => {
  const { siteName } = useSite();

  return (
    <div className={styles.privacyInfo}>
      <h1>GİZLİLİK BEYANI</h1>
      <p>{siteName} olarak, gizliliğinizi ve bilgilerinizin güvenliğini en öncelikli konularımızdan biri olarak görüyoruz. Bu metin, verilerinizi koruma konusundaki kararlılığımızı ve hizmetlerimizi kullanırken kabul ettiğiniz uygulamaları açıklamaktadır.</p>

      <h2>1. VERİ TOPLAMA</h2>
      <p><strong>Kişisel Bilgiler:</strong> Sipariş işlemleriniz sırasında adınız, e-posta adresiniz, adresiniz ve ödeme bilgileriniz gibi gerekli kişisel bilgileri toplarız.</p>
      <p><strong>Etkileşim Verileri:</strong> Web sitemizle etkileşimlerinizi takip etmek için çerezler ve benzeri teknolojileri kullanırız; IP adresiniz ve tarayıcı bilgileriniz gibi verileri kaydederiz.</p>

      <h2>2. VERİLERİN KULLANIMI</h2>
      <p><strong>Sipariş Yönetimi:</strong> Kişisel bilgilerinizi siparişleri işleme almak ve tamamlamak ve işlem sürecinde sizinle iletişim kurmak için kullanırız.</p>
      <p><strong>Bilgilendirme:</strong> İletişim bilgilerinizi sipariş onayları ve güncellemeleri iletmek için kullanırız.</p>
      <p><strong>Özelleştirme:</strong> Onayınıza dayanarak, web sitesi deneyiminizi kişisel tercihleriniz ve etkileşimlerinize göre özelleştiririz.</p>
      <p><strong>Hizmet İyileştirme:</strong> Topladığımız verileri analiz ederek hizmetlerimizi sürekli olarak geliştiririz.</p>

      <h2>3. VERİLERİN PAYLAŞIMI</h2>
      <p><strong>Operasyonel Amaçlar:</strong> Verileriniz, lojistik ve ödeme işlemleri gibi operasyonlarda yardımcı olması için gizlilik anlaşmaları altında üçüncü taraf hizmet sağlayıcılarla paylaşılabilir.</p>
      <p><strong>Yasal Gereklilikler:</strong> Yasal zorunluluklar, hizmetlerimizin güvenliğini sağlama veya kamu güvenliğini koruma amaçları doğrultusunda gerekli olduğunda bilgilerinizi açıklayabiliriz.</p>

      <h2>4. GÜVENLİK TEDBİRLERİ</h2>
      <p>Kişisel verilerinizi yetkisiz erişim ve kötüye kullanımdan korumak için geliştirilmiş güvenlik önlemleri kullanıyoruz. Bununla birlikte, çevrimiçi veri iletiminin bazı doğal riskler taşıyabileceğini unutmayın.</p>

      <h2>5. GİZLİLİK TERCİHLERİNİZ</h2>
      <p><strong>Pazarlama Mesajları:</strong> Pazarlama iletişimlerini almak istemiyorsanız, mesajlarımızdaki bağlantıları kullanarak veya doğrudan bize ulaşarak bu tercihte bulunabilirsiniz.</p>
      <p><strong>Çerezler:</strong> Çerez tercihlerinizi tarayıcı ayarlarınızdan yönetebilirsiniz.</p>

      <h2>6. ÇOCUKLARIN GÜVENLİĞİ</h2>
      <p>16 yaş altındaki bireylerden kasıtlı olarak veri toplamayız. Yanlışlıkla toplanan bilgiler, derhal sistemlerimizden silinir.</p>

      <h2>7. POLİTİKA DEĞİŞİKLİKLERİ</h2>
      <p>Gizlilik politikamızı zaman zaman güncelleyebiliriz. Güncellemeleri kontrol etmenizi öneririz, zira yapılan değişiklikler sonrasında hizmetlerimizi kullanmaya devam etmeniz bu değişiklikleri kabul ettiğiniz anlamına gelir.</p>

      <p>Gizlilik politikamız hakkında daha fazla bilgi almak veya sorularınızı iletmek için lütfen bizimle iletişime geçin: <a href={`mailto:info@${siteName.toLowerCase()}`}>info@{siteName}</a>. Gizlilik konusundaki endişelerinizi çözmek ve haklarınızı korumak için buradayız.</p>
    </div>

  );
};

export default Privacy;
