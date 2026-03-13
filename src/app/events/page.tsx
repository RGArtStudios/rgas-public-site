import type { Metadata } from "next";
import Link from "next/link";

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
  rsvp_url?: string;
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
  },
  {
    id: 6,
    title: "Youth Pottery Day",
    description:
      "A family-friendly morning of hand-building in clay. Ages 6–14 welcome. Parents encouraged to participate.",
    type: "Workshop",
    start_date: "2026-05-03",
    start_time: "10:00 AM",
    location: "Ceramics Studio",
    price: 35,
    is_free: false,
    capacity: 20,
  },
];

const typeColors: Record<string, string> = {
  Exhibition: "#5a5fa0",
  "Artist Talk": "#22863a",
  "Open House": "#b07050",
  Workshop: "#b08800",
  "Open Studio": "#8a4ea0",
};

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T12:00:00");
  return d.toLocaleDateString("en-US", {
    weekday: "short",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function formatDateRange(start: string, end?: string): string {
  if (!end || start === end) return formatDate(start);
  const s = new Date(start + "T12:00:00");
  const e = new Date(end + "T12:00:00");
  const sStr = s.toLocaleDateString("en-US", { month: "long", day: "numeric" });
  const eStr = e.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return `${sStr} – ${eStr}`;
}

export default async function EventsPage() {
  const apiEvents = await getEvents();
  const events = apiEvents.length > 0 ? apiEvents : FALLBACK_EVENTS;

  const types = Array.from(new Set(events.map((e) => e.type))).sort();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="section-title">Events & Exhibitions</h1>
        <p className="section-subtitle">
          Exhibitions, artist talks, open studios, and community gatherings —
          there&apos;s always something happening at Rainier Gardens.
        </p>
      </div>

      {/* Filter chips (visual only — for full interactivity, promote to client component) */}
      <div className="flex flex-wrap gap-2 mb-10 justify-center">
        {["All", ...types].map((type) => (
          <span
            key={type}
            className="text-sm px-4 py-1.5 rounded-full border cursor-default transition-colors"
            style={{
              borderColor: type === "All" ? "var(--color-accent)" : "var(--color-border)",
              backgroundColor: type === "All" ? "color-mix(in srgb, var(--color-accent) 10%, transparent)" : "transparent",
              color: type === "All" ? "var(--color-accent)" : "var(--color-text-muted)",
            }}
          >
            {type}
          </span>
        ))}
      </div>

      {/* Events grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {events.map((event) => {
          const color = typeColors[event.type] ?? "var(--color-accent)";
          return (
            <article key={event.id} className="card flex flex-col">
              {/* Top color bar */}
              <div className="h-1.5 w-full" style={{ backgroundColor: color }} />
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-3">
                  <span
                    className="text-xs font-semibold uppercase tracking-wider px-2 py-1 rounded-full"
                    style={{
                      backgroundColor: `color-mix(in srgb, ${color} 12%, transparent)`,
                      color: color,
                    }}
                  >
                    {event.type}
                  </span>
                  <span className="text-sm font-bold" style={{ color: "var(--color-accent)" }}>
                    {event.is_free ? "Free" : `$${event.price}`}
                  </span>
                </div>

                <h3 className="text-lg font-bold mb-2">{event.title}</h3>
                <p className="text-sm text-muted leading-relaxed mb-4 flex-1">
                  {event.description}
                </p>

                <div
                  className="space-y-1.5 text-xs text-muted border-t pt-4"
                  style={{ borderColor: "var(--color-border)" }}
                >
                  <div className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{formatDateRange(event.start_date, event.end_date)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{event.start_time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{event.location}</span>
                  </div>
                  {event.capacity && (
                    <div className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>Limited to {event.capacity}</span>
                    </div>
                  )}
                </div>

                <div className="mt-4">
                  <Link href="/contact" className="btn-outline text-xs py-2 w-full text-center block">
                    {event.is_free ? "RSVP" : "Register"}
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Newsletter CTA */}
      <div
        className="rounded-2xl p-8 md:p-12 text-center"
        style={{ backgroundColor: "var(--color-surface-alt)" }}
      >
        <h3 className="text-2xl font-bold mb-3">Never Miss an Event</h3>
        <p className="text-muted mb-6 max-w-md mx-auto">
          Join our mailing list for event announcements, exhibition openings, and
          studio news.
        </p>
        <Link href="/contact" className="btn-primary">
          Subscribe to Newsletter
        </Link>
      </div>
    </div>
  );
}
