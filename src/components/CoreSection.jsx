import CoreSample from "./CoreSample";
import CalloutItem from "./CalloutItem";

export default function CoreSection() {
  return (
    <section className="relative mx-auto max-w-[1200px] px-6 pt-8 pb-16">
      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-3 md:gap-16">
        {/* LEFT CALLOUTS */}
        <div className="space-y-6 md:space-y-12">
          <CalloutItem
            title="Ulaştırma ve Altyapı Projeleri"
            desc="Karayolu, Demiryolu, Tünel güzergahları için Jeolojik-Jeoteknik Etüt ve Geoteknik Proje"
            icon={
              <>
                <path d="M2 19 Q2 8 12 8 Q22 8 22 19" />
                <line x1="2" y1="19" x2="22" y2="19" />
                <line x1="9" y1="8" x2="9" y2="14" />
                <line x1="15" y1="8" x2="15" y2="14" />
              </>
            }
          />

          <CalloutItem
            title="Enerji Tesisleri ve Maden Sahası Projeleri"
            desc="Baraj, Gölet, HES-RES projeleri ve Maden İşletmeleri için Jeolojik-Jeoteknik Etüt Çalışmaları"
            icon={
              <>
                <path d="M12 2v5" />
                <path d="M9 7h6l2 10H7z" />
                <line x1="8" y1="12" x2="16" y2="12" />
                <line x1="10" y1="17" x2="10" y2="20" />
                <line x1="14" y1="17" x2="14" y2="20" />
              </>
            }
          />

          <CalloutItem
            title="Jeofizik Çalışmalar"
            desc="İnşaat, Maden ve Arkeoloji projeleri için jeofizik çalışmalar"
            icon={
              <polyline points="2 12 5 12 7 5 9 19 11 12 13 15 15 12 22 12" />
            }
          />
        </div>

        {/* CORE SAMPLE */}
        <div className="flex justify-center">
          <CoreSample />
        </div>

        {/* RIGHT CALLOUTS */}
        <div className="space-y-6 md:space-y-12">
          <CalloutItem
            title="Zemin Etüt ve Geoteknik Proje Hizmetleri"
            desc="Parsel bazlı ve imara esas etüt ve proje hizmetleri"
            icon={
              <>
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="13" x2="21" y2="13" />
                <line x1="3" y1="19" x2="21" y2="19" />
                <line x1="12" y1="2" x2="12" y2="7" />
                <path d="M10 2h4" />
              </>
            }
          />

          <CalloutItem
            title="Hidrojeoloji Çalışmaları"
            desc="Bölgesel Hidrojeoloji çalışmaları, su kuyusu açılması ve işletilmesi"
            icon={
              <path d="M12 2C9 6 5 10 5 14a7 7 0 0 0 14 0c0-4-4-8-7-12z" />
            }
          />

          <CalloutItem
            title="Saha Jeolojisi Çalışmaları"
            desc="Bütün Jeolojik unsurlar göz önünde bulundurularak saha detaylıca incelenir ve haritalanır."
            icon={
              <>
                <path d="M2 20l4-7 4 4 4-8 4 5 4-6" />
                <line x1="2" y1="20" x2="22" y2="20" />
              </>
            }
          />
        </div>
      </div>
    </section>
  );
}
