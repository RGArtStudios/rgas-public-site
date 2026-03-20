import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Classes",
  description:
    "Browse all classes at Rainier Gardens Art Studio — ceramics, painting, drawing, sculpture, mixed media, youth programs, and workshops.",
};

interface ClassItem {
  id: number;
  title: string;
  description: string;
  category: string;
  instructor: string;
  schedule: string;
  duration: string;
  price: number;
  level: string;
  spots_remaining: number;
  total_spots: number;
  image: string;
}

async function getClasses(): Promise<ClassItem[]> {
  const apiUrl = process.env.NEXT_PUBLIC_LARAVEL_API_URL;
  if (!apiUrl) return [];
  try {
    const res = await fetch(`${apiUrl}/api/public/classes`, {
      next: { revalidate: 300 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data.data ?? data ?? [];
  } catch {
    return [];
  }
}

const FALLBACK_CLASSES: ClassItem[] = [
  {
    id: 1,
    title: "Wheel Throwing Fundamentals",
    description:
      "Learn to center clay, open, and pull walls on the potter's wheel. All materials included. Build a set of functional vessels over 8 weeks.",
    category: "Ceramics",
    instructor: "Elena Vasquez",
    schedule: "Tuesdays & Thursdays, 6–9 PM",
    duration: "8 weeks",
    price: 320,
    level: "Beginner",
    spots_remaining: 4,
    total_spots: 10,
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=80",
  },
  {
    id: 2,
    title: "Hand-Building in Clay",
    description:
      "Explore slab, coil, and pinch techniques to create functional and sculptural ceramic forms. Kiln firing included.",
    category: "Ceramics",
    instructor: "Marcus Chen",
    schedule: "Mondays, 10 AM–1 PM",
    duration: "6 weeks",
    price: 240,
    level: "All Levels",
    spots_remaining: 7,
    total_spots: 12,
    image: "https://images.unsplash.com/photo-1481072881274-e5b88f71e7ca?w=600&q=80",
  },
  {
    id: 3,
    title: "Oil Painting Studio",
    description:
      "Explore color mixing, composition, and classical oil painting techniques in a relaxed open studio format guided by a working painter.",
    category: "Painting",
    instructor: "Renata Nowak",
    schedule: "Saturdays, 10 AM–1 PM",
    duration: "10 weeks",
    price: 380,
    level: "All Levels",
    spots_remaining: 2,
    total_spots: 8,
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&q=80",
  },
  {
    id: 4,
    title: "Watercolor Essentials",
    description:
      "Develop fluency with watercolor through studies of light, wet-on-wet technique, and controlled washes. Perfect for building a daily practice.",
    category: "Painting",
    instructor: "Tanya Okafor",
    schedule: "Wednesdays, 1–4 PM",
    duration: "6 weeks",
    price: 215,
    level: "Beginner",
    spots_remaining: 9,
    total_spots: 12,
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80",
  },
  {
    id: 5,
    title: "Botanical Illustration",
    description:
      "Render plants and flowers with scientific precision and artistic beauty using pen, ink, and watercolor. Field sketching sessions included.",
    category: "Drawing",
    instructor: "Hiroshi Tanaka",
    schedule: "Wednesdays, 5–8 PM",
    duration: "8 weeks",
    price: 295,
    level: "Intermediate",
    spots_remaining: 6,
    total_spots: 10,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    id: 6,
    title: "Figure Drawing",
    description:
      "Study the human form through sustained gesture and long pose drawing with live models. Build confidence in anatomy and proportion.",
    category: "Drawing",
    instructor: "Sofia Andrade",
    schedule: "Fridays, 6–9 PM",
    duration: "8 weeks",
    price: 280,
    level: "Intermediate",
    spots_remaining: 5,
    total_spots: 10,
    image: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?w=600&q=80",
  },
  {
    id: 7,
    title: "Introduction to Sculpture",
    description:
      "Work in clay, plaster, and found materials to build three-dimensional forms. Explore additive and subtractive approaches to sculpture.",
    category: "Sculpture",
    instructor: "David Moreau",
    schedule: "Thursdays, 10 AM–1 PM",
    duration: "8 weeks",
    price: 345,
    level: "Beginner",
    spots_remaining: 8,
    total_spots: 10,
    image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=600&q=80",
  },
  {
    id: 8,
    title: "Natural Dye & Fiber Arts",
    description:
      "Learn plant-based dyeing, indigo vat technique, and natural pigment painting. Combine fiber arts with painting for unique mixed works.",
    category: "Mixed Media",
    instructor: "Aiko Yamamoto",
    schedule: "Sundays, 11 AM–2 PM",
    duration: "6 weeks",
    price: 260,
    level: "All Levels",
    spots_remaining: 10,
    total_spots: 12,
    image: "https://images.unsplash.com/photo-1452802447250-470a88ac82bc?w=600&q=80",
  },
  {
    id: 9,
    title: "Youth Ceramics",
    description:
      "A fun, guided introduction to clay for young artists ages 8–14. Hand-building projects, glazing, and kiln firing. All materials included.",
    category: "Youth",
    instructor: "Elena Vasquez",
    schedule: "Saturdays, 9–11 AM",
    duration: "6 weeks",
    price: 180,
    level: "Beginner",
    spots_remaining: 5,
    total_spots: 8,
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80",
  },
  {
    id: 10,
    title: "Weekend Raku Workshop",
    description:
      "A one-day intensive in raku firing — one of ceramics' most dramatic and unpredictable techniques. Fire your own piece and take it home.",
    category: "Workshops",
    instructor: "Marcus Chen",
    schedule: "One Saturday per month, 9 AM–5 PM",
    duration: "1 day",
    price: 145,
    level: "Intermediate",
    spots_remaining: 3,
    total_spots: 8,
    image: "https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?w=600&q=80",
  },
];

const ALL_CATEGORIES = [
  "All",
  "Ceramics",
  "Painting",
  "Drawing",
  "Sculpture",
  "Mixed Media",
  "Youth",
  "Workshops",
];

const levelColors: Record<string, string> = {
  Beginner: "#22863a",
  Intermediate: "#b08800",
  Advanced: "#c05040",
  "All Levels": "#5a5fa0",
};

export default async function ClassesPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const apiClasses = await getClasses();
  const classes = apiClasses.length > 0 ? apiClasses : FALLBACK_CLASSES;

  const { category: activeCategory = "All" } = await searchParams;
  const filtered =
    activeCategory === "All"
      ? classes
      : classes.filter((c) => c.category === activeCategory);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative flex items-end overflow-hidden" style={{ minHeight: "52vh", backgroundColor: "var(--color-dark)" }}>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=1600&q=80"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(26,26,46,0.88) 0%, rgba(26,26,46,0.45) 55%, rgba(26,26,46,0.2) 100%)",
            }}
          />
        </div>
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-36">
          <div className="animate-fade-in-up">
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: "#e8c4a8", fontFamily: "system-ui, sans-serif" }}
            >
              Rainier Gardens Art Studio
            </span>
            <h1
              className="font-bold text-white mb-4"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", lineHeight: 1.1 }}
            >
              Explore Our Classes
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
              Ceramics, painting, drawing, sculpture, and more — all led by
              working professional artists.
            </p>
          </div>
        </div>
      </section>

      {/* ── Filter bar ── */}
      <div style={{ backgroundColor: "var(--color-surface)", borderBottom: "1px solid var(--color-border)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-wrap gap-2">
            {ALL_CATEGORIES.map((cat) => {
              const isActive = cat === activeCategory;
              return (
                <Link
                  key={cat}
                  href={cat === "All" ? "/classes" : `/classes?category=${encodeURIComponent(cat)}`}
                  className="text-sm font-medium px-4 py-2 rounded-full transition-all"
                  style={{
                    fontFamily: "system-ui, sans-serif",
                    backgroundColor: isActive
                      ? "var(--color-accent)"
                      : "var(--color-surface-alt)",
                    color: isActive ? "#fff" : "var(--color-text-muted)",
                    border: isActive ? "2px solid var(--color-accent)" : "2px solid transparent",
                  }}
                >
                  {cat}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Class grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-xl" style={{ color: "var(--color-text-muted)" }}>
              No classes found in this category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((cls, i) => {
              const fillPct =
                ((cls.total_spots - cls.spots_remaining) / cls.total_spots) * 100;
              const almostFull = cls.spots_remaining <= 3;

              return (
                <AnimateOnScroll key={cls.id} delay={(i % 3) * 100}>
                  <div className="card group h-full flex flex-col">
                    {/* Image */}
                    <div className="aspect-[16/9] img-zoom-wrap overflow-hidden">
                      <img
                        src={cls.image}
                        alt={cls.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      {/* Tags */}
                      <div className="flex items-center gap-2 mb-4">
                        <span
                          className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                          style={{
                            backgroundColor: "color-mix(in srgb, var(--color-accent) 12%, transparent)",
                            color: "var(--color-accent)",
                            fontFamily: "system-ui, sans-serif",
                          }}
                        >
                          {cls.category}
                        </span>
                        <span
                          className="text-xs font-semibold px-2.5 py-1 rounded-full"
                          style={{
                            backgroundColor: `color-mix(in srgb, ${levelColors[cls.level] ?? "#777"} 10%, transparent)`,
                            color: levelColors[cls.level] ?? "#777",
                            fontFamily: "system-ui, sans-serif",
                          }}
                        >
                          {cls.level}
                        </span>
                      </div>

                      {/* Title & instructor */}
                      <h3 className="text-lg font-bold mb-1">{cls.title}</h3>
                      <p
                        className="text-xs mb-3"
                        style={{ color: "var(--color-accent)", fontFamily: "system-ui, sans-serif" }}
                      >
                        with {cls.instructor}
                      </p>
                      <p
                        className="text-sm leading-relaxed mb-5 flex-1"
                        style={{ color: "var(--color-text-muted)", fontFamily: "system-ui, sans-serif" }}
                      >
                        {cls.description}
                      </p>

                      {/* Schedule + duration */}
                      <div
                        className="text-xs space-y-1.5 mb-4 pb-4 border-t pt-4"
                        style={{
                          borderColor: "var(--color-border)",
                          color: "var(--color-text-muted)",
                          fontFamily: "system-ui, sans-serif",
                        }}
                      >
                        <div className="flex justify-between">
                          <span>{cls.schedule}</span>
                          <span className="font-semibold">{cls.duration}</span>
                        </div>
                        {/* Fill bar */}
                        <div className="flex items-center gap-2 mt-2">
                          <div
                            className="flex-1 h-1.5 rounded-full overflow-hidden"
                            style={{ backgroundColor: "var(--color-surface-alt)" }}
                          >
                            <div
                              className="h-full rounded-full"
                              style={{
                                width: `${fillPct}%`,
                                backgroundColor: almostFull ? "#c05040" : "var(--color-accent)",
                              }}
                            />
                          </div>
                          <span
                            className="font-semibold whitespace-nowrap"
                            style={{ color: almostFull ? "#c05040" : "var(--color-text-muted)" }}
                          >
                            {cls.spots_remaining} left
                          </span>
                        </div>
                      </div>

                      {/* Price + CTA */}
                      <div className="flex items-center justify-between">
                        <span
                          className="text-2xl font-bold"
                          style={{ color: "var(--color-accent)", fontFamily: "var(--font-playfair, Georgia, serif)" }}
                        >
                          ${cls.price}
                        </span>
                        <Link href="/contact" className="btn-primary text-sm px-5 py-2.5">
                          Enroll Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        )}

        {/* Private instruction CTA */}
        <AnimateOnScroll className="mt-20">
          <div
            className="rounded-2xl p-10 md:p-16 text-center"
            style={{ backgroundColor: "var(--color-dark)" }}
          >
            <span className="section-eyebrow-light">Private Instruction</span>
            <h3 className="section-title-light text-2xl md:text-3xl">
              Want One-on-One Guidance?
            </h3>
            <p
              className="mb-8 max-w-lg mx-auto"
              style={{
                color: "rgba(255,255,255,0.55)",
                fontFamily: "system-ui, sans-serif",
                lineHeight: 1.75,
              }}
            >
              Work directly with any of our resident artists. Private sessions
              are available for all disciplines and skill levels.
            </p>
            <Link href="/contact" className="btn-primary">
              Inquire About Private Sessions
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </>
  );
}
