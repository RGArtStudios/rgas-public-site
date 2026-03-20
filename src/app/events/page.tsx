import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Exhibitions, open houses, artist talks, workshops, and community events at Rainier Gardens Art Studio.",
};

interface EventItem {
  id: number;
  title: string;
  description: string;
  type: string;
  start_date: string;
  end_date?: string;
  start_time: string;
  location: string;
  price: number | null;
  is_free: boolean;
  capacity?: number;
  image: string;
}

async function getEvents(): Promise<EventItem[]> {
  const apiUrl = process.env.NEXT_PUBLIC_LARAVEL_API_URL;
  if (!apiUrl) return [];
  try {
    const res = await fetch(`${apiUrl}/api/public/events`, {
      next: { revalidate: 300 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data.data ?? data ?? [];
  } catch {
    return [];
  }
}

const FALLBACK_EVENTS: EventItem[] = [
  {
    id: 1,
    title: "Spring Members Exhibition",
    description:
      "An annual showcase of work created by our studio members throughout the season. Join us for the opening reception with wine, live music, and a chance to meet the artists.",
    type: "Exhibition",
    start_date: "2026-03-28",
    end_date: "2026-04-18",
    start_time: "6:00 PM",
    location: "Main Gallery",
    price: null,
    is_free: true,
    image: "https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?w=800&q=80",
  },
  {
    id: 2,
    title: "Artist Talk: Ceramics & Identity",
    description:
      "Resident ceramicist Elena Vasquez discusses how cultural identity shapes her ceramic practice and the political dimensions of clay work.",
    type: "Artist Talk",
    start_date: "2026-04-05",
    start_time: "4:00 PM",
    location: "Studio B",
    price: 10,
    is_free: false,
    capacity: 30,
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&q=80",
  },
  {
    id: 3,
    title: "Open House — Spring",
    description:
      "Tour our facility, meet our instructors, and learn about membership options. All are welcome. Light refreshments provided.",
    type: "Open House",
    start_date: "2026-04-12",
    start_time: "11:00 AM",
    location: "Full Studio",
    price: null,
    is_free: true,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
  {
    id: 4,
    title: "Natural Dye Workshop",
    description:
      "A one-day intensive workshop exploring plant-based dyeing for textiles and paper. All materials provided. Limited to 12 participants.",
    type: "Workshop",
    start_date: "2026-04-19",
    start_time: "10:00 AM",
    location: "Fiber Arts Studio",
    price: 85,
    is_free: false,
    capacity: 12,
    image: "https://images.unsplash.com/photo-1452802447250-470a88ac82bc?w=800&q=80",
  },
  {
    id: 5,
    title: "Printmaking Open Studio Night",
    description:
      "Bring a project or start fresh — the presses and plates are available. Instructors on hand for guidance. Open to members and guests.",
    type: "Open Studio",
    start_date: "2026-04-25",
    start_time: "5:00 PM",
    location: "Printmaking Lab",
    price: 20,
    is_free: false,
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80",
  },
];

const PAST_EVENTS: EventItem[] = [
  {
    id: 10,
    title: "Winter Exhibition Opening",
    description: "Members showcased their winter-semester work in our annual exhibition.",
    type: "Exhibition",
    start_date: "2025-12-06",
    end_date: "2025-12-28",
    start_time: "6:00 PM",
    location: "Main Gallery",
    price: null,
    is_free: true,
    image: "https://images.unsplash.com/photo-1541961017-22d85feaf6a1?w=600&q=80",
  },
  {
    id: 11,
    title: "Holiday Clay Market",
    description: "Shop handmade pottery, prints, and art gifts by our studio members.",
    type: "Workshop",
    start_date: "2025-12-13",
    start_time: "10:00 AM",
    location: "Main Studio",
    price: null,
    is_free: true,
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=80",
  },
  {
    id: 12,
    title: "Year-End Member Critique",
    description: "An in-depth group critique session for Studio and Advanced members.",
    type: "Artist Talk",
    start_date: "2025-11-22",
    start_time: "3:00 PM",
    location: "Studio A",
    price: null,
    is_free: true,
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&q=80",
  },
];

const typeColors: Record<string, string> = {
  Exhibition: "#5a5fa0",
  "Artist Talk": "#22863a",
  "Open House": "#b07050",
  Workshop: "#b08800",
  "Open Studio": "#8a4ea0",
};

function formatDateRange(start: string, end?: string): string {
  const s = new Date(start + "T12:00:00");
  if (!end || start === end) {
    return s.toLocaleDateString("en-US", {
      weekday: "short",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }
  const e = new Date(end + "T12:00:00");
  return `${s.toLocaleDateString("en-US", { month: "long", day: "numeric" })} – ${e.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}`;
}

function formatDateBadge(dateStr: string): { month: string; day: string } {
  const d = new Date(dateStr + "T12:00:00");
  return {
    month: d.toLocaleDateString("en-US", { month: "short" }).toUpperCase(),
    day: String(d.getDate()),
  };
}

export default async function EventsPage() {
  const apiEvents = await getEvents();
  const events = apiEvents.length > 0 ? apiEvents : FALLBACK_EVENTS;

  const allTypes = Array.from(new Set(events.map((e) => e.type))).sort();

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative flex items-end overflow-hidden" style={{ minHeight: "50vh" }}>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?w=1600&q=80"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(26,26,46,0.88) 0%, rgba(26,26,46,0.5) 60%, rgba(26,26,46,0.2) 100%)",
            }}
          />
        </div>
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-36">
          <div className="animate-fade-in-up">
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: "#e8c4a8", fontFamily: "system-ui, sans-serif" }}
            >
              Community Calendar
            </span>
            <h1
              className="font-bold text-white mb-4"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", lineHeight: 1.1 }}
            >
              Studio Events &amp; Workshops
            </h1>
            <p
              className="max-w-xl animate-fade-in-up delay-100"
              style={{
                fontSize: "1.125rem",
                color: "rgba(255,255,255,0.72)",
                fontFamily: "system-ui, sans-serif",
                lineHeight: 1.7,
              }}
            >
              Exhibitions, artist talks, open studios, and community
              gatherings — there&apos;s always something happening at
              Rainier Gardens.
            </p>
          </div>
        </div>
      </section>

      {/* ── Filter chips ── */}
      <div
        style={{
          backgroundColor: "var(--color-surface)",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-wrap gap-2">
            {["All", ...allTypes].map((type) => (
              <span
                key={type}
                className="text-sm font-medium px-4 py-2 rounded-full cursor-default"
                style={{
                  fontFamily: "system-ui, sans-serif",
                  backgroundColor:
                    type === "All"
                      ? "var(--color-accent)"
                      : "var(--color-surface-alt)",
                  color: type === "All" ? "#fff" : "var(--color-text-muted)",
                }}
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Upcoming Events ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <AnimateOnScroll className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">Upcoming Events</h2>
        </AnimateOnScroll>

        <div className="space-y-6 mb-20">
          {events.map((event, i) => {
            const color = typeColors[event.type] ?? "var(--color-accent)";
            const badge = formatDateBadge(event.start_date);

            return (
              <AnimateOnScroll key={event.id} delay={(i % 3) * 80}>
                <article
                  className="rounded-2xl overflow-hidden flex flex-col md:flex-row group transition-all hover:shadow-xl"
                  style={{
                    backgroundColor: "var(--color-surface)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  {/* Image */}
                  <div className="md:w-64 lg:w-80 flex-shrink-0 overflow-hidden" style={{ minHeight: "200px" }}>
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ minHeight: "200px" }}
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-7 flex flex-col">
                    <div className="flex items-start gap-4 mb-4">
                      {/* Date badge */}
                      <div
                        className="flex-shrink-0 text-center rounded-xl px-3 py-2 min-w-[52px]"
                        style={{ backgroundColor: color + "18" }}
                      >
                        <div
                          className="text-xs font-bold uppercase tracking-wider"
                          style={{ color, fontFamily: "system-ui, sans-serif" }}
                        >
                          {badge.month}
                        </div>
                        <div
                          className="text-2xl font-bold leading-none mt-0.5"
                          style={{ color, fontFamily: "var(--font-playfair, Georgia, serif)" }}
                        >
                          {badge.day}
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2 flex-wrap">
                          <span
                            className="text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                            style={{
                              backgroundColor: color + "18",
                              color,
                              fontFamily: "system-ui, sans-serif",
                            }}
                          >
                            {event.type}
                          </span>
                          <span
                            className="text-sm font-bold"
                            style={{ color: "var(--color-accent)", fontFamily: "var(--font-playfair, Georgia, serif)" }}
                          >
                            {event.is_free ? "Free" : `$${event.price}`}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                      </div>
                    </div>

                    <p
                      className="text-sm leading-relaxed mb-5 flex-1"
                      style={{ color: "var(--color-text-muted)", fontFamily: "system-ui, sans-serif" }}
                    >
                      {event.description}
                    </p>

                    <div
                      className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs mb-5"
                      style={{ color: "var(--color-text-muted)", fontFamily: "system-ui, sans-serif" }}
                    >
                      <span className="flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {formatDateRange(event.start_date, event.end_date)}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {event.start_time}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {event.location}
                      </span>
                      {event.capacity && (
                        <span className="flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          Limited to {event.capacity}
                        </span>
                      )}
                    </div>

                    <div>
                      <Link href="/contact" className="btn-primary text-sm px-6 py-2.5">
                        {event.is_free ? "RSVP" : "Register"}
                      </Link>
                    </div>
                  </div>
                </article>
              </AnimateOnScroll>
            );
          })}
        </div>

        {/* Past Events */}
        <AnimateOnScroll>
          <div className="flex items-center gap-5 mb-8">
            <h2 className="text-2xl font-bold whitespace-nowrap">Past Events</h2>
            <div className="divider-line" />
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {PAST_EVENTS.map((event, i) => {
            const color = typeColors[event.type] ?? "var(--color-accent)";
            return (
              <AnimateOnScroll key={event.id} delay={i * 100}>
                <div
                  className="rounded-xl overflow-hidden"
                  style={{
                    backgroundColor: "var(--color-surface)",
                    border: "1px solid var(--color-border)",
                    opacity: 0.8,
                  }}
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      style={{ filter: "grayscale(30%)" }}
                    />
                  </div>
                  <div className="p-5">
                    <span
                      className="text-xs font-bold uppercase tracking-widest"
                      style={{ color, fontFamily: "system-ui, sans-serif" }}
                    >
                      {event.type}
                    </span>
                    <h3 className="text-base font-bold mt-1.5 mb-1">{event.title}</h3>
                    <p
                      className="text-xs"
                      style={{ color: "var(--color-text-muted)", fontFamily: "system-ui, sans-serif" }}
                    >
                      {formatDateRange(event.start_date, event.end_date)}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>

        {/* Newsletter CTA */}
        <AnimateOnScroll>
          <div
            className="rounded-2xl p-10 md:p-16 text-center"
            style={{ backgroundColor: "var(--color-dark)" }}
          >
            <span className="section-eyebrow-light">Stay Connected</span>
            <h3 className="section-title-light text-2xl md:text-3xl">
              Never Miss an Event
            </h3>
            <p
              className="mb-8 max-w-md mx-auto"
              style={{
                color: "rgba(255,255,255,0.55)",
                fontFamily: "system-ui, sans-serif",
                lineHeight: 1.75,
              }}
            >
              Join our mailing list for event announcements, exhibition
              openings, and studio news delivered to your inbox.
            </p>
            <Link href="/contact" className="btn-primary">
              Subscribe to Newsletter
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </>
  );
}
