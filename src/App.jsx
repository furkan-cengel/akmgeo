import { Header } from "./components/Header";
import CoreSection from "./components/CoreSection";
import PhotoSlideshow from "./components/PhotoSlideshow";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-[#ece9e3] text-[#2d2d2d]">
      <Header />

      <main className="pt-20 md:pt-24">
        {/* ANA SAYFA */}
        <section id="home">
          <CoreSection />
          <PhotoSlideshow />
        </section>

        {/* HAKKIMIZDA */}
        <section id="hakkimizda" className="mx-auto max-w-4xl px-4 py-12 md:px-8 md:py-20">
          <div className="mb-8 border-b border-[#4a9e8e] pb-4">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Hakkımızda</h2>
          </div>

          <p className="mb-12 leading-relaxed text-[#3a3a3a]">
            <strong>Anıl Kutluay Mühendislik</strong>, "Tutarlı Mühendislik
            Hizmetleri" yaklaşımı ile Jeoloji, Jeofizik ve Geoteknik
            mühendisliği alanında uzmanlaşmış, bilimsel temelli ve mühendislik
            prensiplerine bağlı hizmet anlayışıyla altyapı, ulaştırma, su tutma
            yapıları, maden, enerji alanlarında etüt, proje ve danışmanlık
            hizmeti vermektedir.
          </p>

          <h3 className="mb-6 text-lg font-bold text-[#4a9e8e] md:mb-8 md:text-xl">
            Çalışma Alanları
          </h3>

          <div className="space-y-10">
            <div className="border-t border-[#cfcac2] pt-6">
              <h4 className="mb-3 font-bold">
                Jeolojik-Jeoteknik Etüt ve Geoteknik Projelendirme
              </h4>
              <p className="leading-relaxed text-[#3a3a3a]">
                Jeolojik-Jeoteknik Etüt ve Geoteknik Projelendirme
                hizmetlerimiz, yapıların güvenli ve ekonomik tasarımı için
                zemin ve kaya ortamının mühendislik özelliklerinin
                belirlenmesini kapsar. Zemin etüdü, sondaj, saha deneyleri,
                laboratuvar testleri ve jeofizik çalışmalar ile proje alanının
                jeoteknik modeli oluşturulur. Elde edilen veriler doğrultusunda
                taşıma gücü hesapları, oturma analizleri, şev stabilite
                değerlendirmeleri, temel tasarımı, kazıklı temel, iksa ve zemin
                iyileştirme projeleri yönetmeliklere uygun şekilde hazırlanır.
              </p>
            </div>

            <div className="border-t border-[#cfcac2] pt-6">
              <h4 className="mb-3 font-bold">Saha Jeolojisi Çalışmaları</h4>
              <p className="leading-relaxed text-[#3a3a3a]">
                <strong>Saha jeolojisi çalışmaları</strong>, jeolojik-jeoteknik
                etüt ve zemin etüdü süreçlerinin temelini oluşturan arazi
                incelemeleridir. Proje alanında gerçekleştirilen jeolojik
                haritalama, litolojik birimlerin tanımlanması, süreksizlik
                ölçümleri, fay ve kırık sistemlerinin belirlenmesi ile yeraltı
                su gözlemleri sayesinde zeminin ve kaya ortamının mühendislik
                özellikleri detaylı olarak ortaya konur.
              </p>
            </div>

            <div className="border-t border-[#cfcac2] pt-6">
              <h4 className="mb-3 font-bold">Sondaj ve Saha Deneyleri</h4>
              <p className="leading-relaxed text-[#3a3a3a]">
                Sondaj ve saha deneyleri,{" "}
                <strong>zemin etüdü ve geoteknik proje çalışmalarının</strong>{" "}
                temelini oluşturan en kritik mühendislik uygulamalarıdır.
              </p>
              <p className="mt-3 leading-relaxed text-[#3a3a3a]">
                Firmamız tarafından gerçekleştirilen{" "}
                <strong>zemin ve kaya sondaj çalışmaları</strong>, ulusal ve
                uluslararası standartlara uygun ekipman ve yöntemlerle
                yürütülmektedir. Sondaj sırasında{" "}
                <strong>minimum örselenme (disturbance)</strong> prensibi esas
                alınarak; numune kalitesinin korunması, doğal zemin yapısının
                bozulmaması ve laboratuvar deney sonuçlarının güvenilirliğinin
                artırılması hedeflenir.
              </p>
            </div>

            <div className="border-t border-[#cfcac2] pt-6">
              <h4 className="mb-3 font-bold">Jeofizik Çalışmalar</h4>
              <p className="leading-relaxed text-[#3a3a3a]">
                Jeofizik çalışmalar,{" "}
                <strong>zemin etüdü ve geoteknik projeler</strong> kapsamında
                yeraltı yapısının fiziksel ve dinamik özelliklerinin
                belirlenmesine yönelik mühendislik uygulamalarıdır. Bu
                çalışmalar sayesinde zeminin tabakalaşma yapısı, mühendislik
                parametreleri, yeraltı su seviyesi, kaya kalitesi ve deprem
                davranışı detaylı olarak analiz edilir.
              </p>
              <p className="mt-3 leading-relaxed text-[#3a3a3a]">
                Firmamız tarafından gerçekleştirilen{" "}
                <strong>jeofizik etüt çalışmaları</strong> kapsamında;{" "}
                <strong>
                  MASW (Multi Channel Analysis of Surface Waves), Sismik
                  Kırılma, Sismik Yansıma, Mikrotremor (HVSR), Elektrik
                  Özdirenç Tomografisi (ERT)
                </strong>{" "}
                ve benzeri yöntemler uygulanmaktadır.
              </p>
              <p className="mt-3 leading-relaxed text-[#3a3a3a]">
                Geniş alanları hızlı ve ekonomik şekilde temsil edebilmesi
                sayesinde jeofizik çalışmalar, saha jeolojisi çalışmalarını
                tamamlayıcı nitelikte önemli bir analiz yöntemidir.
              </p>
            </div>
          </div>
        </section>

        {/* ILETISIM */}
        <section
          id="iletisim"
          className="border-t border-[#cfcac2] bg-[#e5e1da] px-4 py-12 md:px-8 md:py-20"
        >
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 border-b border-[#4a9e8e] pb-4">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">İletişim</h2>
            </div>
            <div className="space-y-3 text-[#3a3a3a]">
              <p>
                <span className="font-bold">Tel:</span> +90 539 722 82 58
              </p>
              <p>
                <span className="font-bold">E-posta:</span>{" "}
                <a
                  href="mailto:info@akmgeo.com.tr"
                  className="text-[#4a9e8e] hover:underline"
                >
                  info@akmgeo.com.tr
                </a>
                {" / "}
                <a
                  href="mailto:anil@akmgeo.com.tr"
                  className="text-[#4a9e8e] hover:underline"
                >
                  anil@akmgeo.com.tr
                </a>
              </p>
              <p>
                <span className="font-bold">Adres:</span> Cumhuriyet mah.
                Nazım Hikmet Bulvarı No:1 136 Esenyurt İstanbul
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
