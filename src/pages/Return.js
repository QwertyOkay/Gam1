import React from 'react';
import { useSite } from '../context/SiteContext';
import styles from './Return.module.css'; // Stil için CSS modülü varsayıyoruz

const Return = () => {
  const { siteName } = useSite();

  return (
    <div className={styles.returnInfo}>
      <h1>İADE POLİTİKALARI</h1>
      <p>{siteName} olarak müşteri memnuniyetini her şeyin önünde tutuyor ve alışveriş sürecinizi mümkün olduğunca kolaylaştırmayı hedefliyoruz. İşte iade sürecini başlatmanız için gereken adımlar:</p>
      
      <h2>1. İADE ŞARTLARI</h2>
      <p>İade edilecek ürünler, kullanılmamış ve orijinal ambalajlarıyla tüm etiketlerine sahip olmalıdır. Kişiye özel ürünler sadece kusurlu veya zarar görmüş olarak teslim edildiğinde iade edilebilirler.</p>
      
      <h2>2. İADE SÜRECİ</h2>
      <p>İade sürecini başlatmak için, teslim aldığınız tarihten itibaren 30 gün hakkınız vardır. Lütfen süreci hızlandırmak için müşteri hizmetleri ekibimizle derhal iletişime geçiniz.</p>
      
      <h2>3. İADE ADIMLARI</h2>
      <p><strong>İade Yetkilendirmesi Alın:</strong> İade yetkilendirme kodunu almak için müşteri hizmetleri ekibimize e-posta gönderin.</p>
      <p><strong>Paketinizi Hazırlayın:</strong> Ürünü orijinal ambalajına, tüm aksesuarlar ve belgelerle birlikte güvenli bir şekilde yerleştirin. İade yetkilendirme kodunu paketin içine ekleyin.</p>
      <p><strong>Ürünü Gönderin:</strong> İade için izlenebilir bir kargo hizmeti kullanın. İade kargo ücreti, eğer hata bizden kaynaklanıyorsa tarafımızca karşılanacaktır.</p>
      
      <h2>4. İADE VE DEĞİŞİM İŞLEMLERİ</h2>
      <p>İade edilen ürün incelendikten sonra, işleminizi geri ödeme veya değişim olarak başlatacağız. Geri ödemeler, orijinal ödeme şekli ile yapılır ve genellikle 5-7 iş günü sürebilir. Değişimler stok durumuna bağlıdır. Eğer ürün stokta yoksa, alternatif bir ürün ya da geri ödeme sunulabilir. Orijinal kargo ücretlerinin iade edilmediğini hatırlatırız, süreç hatamızdan kaynaklanmadıkça.</p>
      
      <h2>5. HASARLI VEYA YANLIŞ ÜRÜN İŞLEMLERİ</h2>
      <p>Hasarlı ya da yanlış ürün teslim aldıysanız, müşteri hizmetleri ekibimizle derhal iletişime geçin ve durumu fotoğraflarla belgeleyin. Bu tür durumlarda iade kargo ücretlerini biz üstleneceğiz ve gerekirse geri ödeme ya da değişim sağlayacağız.</p>
      
      <h2>6. İADE EDİLEMEYEN ÜRÜNLER</h2>
      <p>Bazı ürünler, örneğin hijyen gerektiren ürünler, sağlık ve hijyen nedenleriyle iade edilemez. Detaylar için lütfen ilgili ürün sayfalarını ziyaret edin ya da netlik için müşteri hizmetleri ekibimizle görüşün.</p>
      
      <h2>7. İADE POLİTİKASI İSTİSNALAR</h2>
      <p>Dış platformlar veya üçüncü taraf satıcılardan satın alınan ürünler, {siteName} üzerinden iade edilemez. Satın alma işlemi gerçekleştirirken lütfen ilgili satıcının iade politikasını inceleyin.</p>
      
      <p>Ek sorularınız veya iade ile ilgili yardım için, <a href={`mailto:support@${siteName.toLowerCase()}`}>support@{siteName}</a> üzerinden müşteri destek ekibimizle iletişime geçmekten çekinmeyin. {siteName} olarak, her alışverişinizde yüksek kaliteli hizmet sunmayı ve tam memnuniyetinizi sağlamayı amaçlıyoruz.</p>
    </div>

  );
};

export default Return;
