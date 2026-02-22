import CoreSample from "./CoreSample";
import CalloutItem from "./CalloutItem";

export default function CoreSection() {
  return (
    <section className="relative mx-auto max-w-[1200px] px-6 py-32">
      <div className="grid grid-cols-1 items-start gap-16 md:grid-cols-3">
        {/* LEFT CALLOUTS */}
        <div className="space-y-12">
          <CalloutItem
            title="Infrastructure"
            desc="Structural integrity analysis for large-scale civil foundations."
            icon="🏗️"
          />

          <CalloutItem
            title="Energy Sector"
            desc="Geological support for HES and renewable energy sites."
            icon="⚡"
          />

          <CalloutItem
            title="Geophysics"
            desc="Subsurface mapping and seismic activity reports."
            icon="📡"
          />
        </div>

        {/* CORE SAMPLE */}
        <div className="flex justify-center">
          <CoreSample />
        </div>

        {/* RIGHT CALLOUTS */}
        <div className="space-y-12">
          <CalloutItem
            title="Water Retention"
            desc="Dams, reservoirs, and hydrological containment."
            icon="💧"
          />

          <CalloutItem
            title="Mining Geology"
            desc="Mineral exploration and stability assessment."
            icon="⛏️"
          />

          <CalloutItem
            title="Transport"
            desc="Highway and railway geotechnical projection."
            icon="🛣️"
          />
        </div>
      </div>
    </section>
  );
}
