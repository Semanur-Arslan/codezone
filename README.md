# Codezone Projesi

## 1. Proje Hakkında

**Kullanılan Ana Teknolojiler:**
- Next.js
- TypeScript
- React
- Tailwind CSS
- Swiper.js
- FontAwesome
- Axios

---

## 2. Klasör/Dosya Yapısı ve Açıklamaları

```
/src
  /app
  /components
    /sections
  /constants
  /context
  /types
/public
```

- **src/components/sections/**: Ana sayfa ve blog gibi bölümlerde kullanılan özel bileşenler (Slider, Discovery, Trends, Favorites, Promotion, Tags).
- **src/constants/**: Sabitler (menü, slider, favoriler, etiketler, sosyal linkler) burada tutulur.
- **src/context/**: Global state yönetimi için context dosyaları (örn. TagsContext).
- **src/types/**: TypeScript tip tanımlamaları merkezi olarak burada yönetilir.
- **public/**: Statik dosyalar (görseller, ikonlar, svg'ler) burada yer alır.

---

## 3. Bileşenler (Components)

### Header.tsx
- **Ne işe yarar?**: Bölüm başlıklarını, arama ve görünüm değiştirme gibi fonksiyonları yönetir.
- **Neden bu şekilde tasarlandı?**: Esnek ve tekrar kullanılabilir olması için props ile özelleştirilebilir yapıda.
- **Teknikler/Kütüphaneler**: FontAwesome, TypeScript, fonksiyonel component.

### Footer.tsx
- **Ne işe yarar?**: Alt bilgi, sosyal medya linkleri ve e-posta abonelik formunu içerir.
- **Neden bu şekilde tasarlandı?**: Kullanıcı etkileşimini ve sosyal medya entegrasyonunu artırmak için.
- **Teknikler/Kütüphaneler**: FontAwesome, form yönetimi.

### Navbar.tsx
- **Ne işe yarar?**: Üst menü, logo ve navigasyon linklerini içerir. Mobilde açılır menü desteği vardır.
- **Neden bu şekilde tasarlandı?**: Responsive ve kullanıcı dostu bir navigasyon için.
- **Teknikler/Kütüphaneler**: FontAwesome, Next.js Link, useState.

### PreviewPost.tsx
- **Ne işe yarar?**: Blog ve trend içeriklerinin önizlemesini farklı varyantlarda gösterir.
- **Neden bu şekilde tasarlandı?**: İçeriklerin farklı bölümlerde farklı şekilde sunulabilmesi için varyant desteği.
- **Teknikler/Kütüphaneler**: TypeScript, Image, props ile varyant yönetimi.

---

## 4. Context ve State Yönetimi

### TagsContext.tsx
- **Hangi state’leri tutar?**: Seçili etiketler (selected), etiket ekleme/çıkarma ve temizleme fonksiyonları.
- **Neden context kullanıldı?**: Etiket seçiminin birden fazla bileşende (Discovery, Tags) paylaşılması için.
- **Alternatifler ve gerekçe**: Redux gibi ağır çözümler yerine, küçük/orta ölçekli projede Context API yeterli ve sade bir çözüm sunar.

---

## 5. Sabitler ve Tipler

### constants.ts
- Menü, slider, favoriler, etiketler ve sosyal medya linkleri gibi sabitler burada tutulur.
- Kodun okunabilirliğini ve merkezi yönetimini sağlar.

### types.ts
- Tüm veri tipleri (TrendItem, MenuItem, SliderItem, vb.) burada tanımlanır.
- Tip güvenliği ve otomatize edilen props yönetimi için kullanılır.

---

## 6. Stil ve Tasarım

### globals.css
- Tailwind CSS ile birlikte özel renkler, fontlar ve global stiller burada tanımlanır.
- Responsive tasarım için media query'ler ve utility class'lar kullanılır.
- Swiper.js için özel stiller ve scrollbar gizleme gibi özelleştirmeler içerir.

**Metodoloji:**
- Utility-first (Tailwind)
- Bileşen bazlı özel class'lar

---

## 7. API ve Veri Yönetimi

### api.ts
- **Veri çekme:** Axios ile dış API'den trend verileri çekilir (`getTrends`).
- **Hata yönetimi:** Hatalar konsola loglanır ve boş array döndürülür.
- **Kullanım:** Ana sayfa ve Trends bileşeninde trend verisi için kullanılır.

---


## 8. Devamında Yapılabilecekler ve Geliştirme Notları

- Blog detay sayfası için dinamik veri entegrasyonu
- Kullanıcı oturum yönetimi ve giriş/çıkış işlemleri
- Testler ve hata yönetimi iyileştirmeleri
- Performans optimizasyonları

---

## 10. Kurulum ve Çalıştırma

1. Bağımlılıkları yükleyin:
   ```bash
   npm install
   ```
2. Geliştirme sunucusunu başlatın:
   ```bash
   npm run dev
   ```
3. Uygulamayı [http://localhost:3000](http://localhost:3000) adresinde görüntüleyin.


