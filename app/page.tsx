import Link from "next/link";
import { TOOLS, CATEGORIES } from "@/lib/tools";

export default function Home() {
  const available = TOOLS.filter((t) => t.available).length;

  return (
    <div className="page-bg">
      <header className="site-header">
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 60,
          }}
        >
          <Link href="/" style={{ fontWeight: 700, fontSize: 18 }}>
            All<span style={{ color: "var(--primary)" }}>Tool</span> SXZ
          </Link>
          <span className="badge">{available} tool aktif</span>
        </div>
      </header>

      <main className="container" style={{ padding: "40px 16px 60px" }}>
        <section style={{ textAlign: "center", marginBottom: 40 }}>
          <h1
            style={{
              fontSize: "clamp(28px, 6vw, 44px)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              marginBottom: 12,
            }}
          >
            Semua alat,{" "}
            <span style={{ color: "var(--primary)" }}>satu tempat</span>
          </h1>
          <p
            style={{
              color: "var(--muted-foreground)",
              fontSize: 16,
              maxWidth: 500,
              margin: "0 auto",
            }}
          >
            {TOOLS.length} alat online gratis. Tanpa install, langsung pakai dari HP.
          </p>
        </section>

        {CATEGORIES.map((cat) => {
          const tools = TOOLS.filter((t) => t.category === cat);
          if (tools.length === 0) return null;
          return (
            <section key={cat} style={{ marginBottom: 32 }}>
              <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12 }}>
                {cat}
              </h2>
              <div className="grid-tools">
                {tools.map((tool) =>
                  tool.available ? (
                    <Link
                      key={tool.slug}
                      href={`/tools/${tool.slug}`}
                      className="tool-card"
                    >
                      <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 4 }}>
                        {tool.name}
                      </h3>
                      <p
                        style={{
                          fontSize: 12.5,
                          color: "var(--muted-foreground)",
                          lineHeight: 1.5,
                        }}
                      >
                        {tool.description}
                      </p>
                    </Link>
                  ) : (
                    <div key={tool.slug} className="tool-card disabled">
                      <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 4 }}>
                        {tool.name}
                      </h3>
                      <p
                        style={{
                          fontSize: 12.5,
                          color: "var(--muted-foreground)",
                          lineHeight: 1.5,
                        }}
                      >
                        {tool.description}
                      </p>
                      <p
                        style={{
                          fontSize: 11,
                          color: "var(--muted-foreground)",
                          marginTop: 8,
                        }}
                      >
                        Segera hadir
                      </p>
                    </div>
                  )
                )}
              </div>
            </section>
          );
        })}
      </main>

      <footer
        style={{
          borderTop: "1px solid var(--border)",
          padding: "24px 16px",
          textAlign: "center",
          fontSize: 13,
          color: "var(--muted-foreground)",
        }}
      >
        All Tool SXZ — dibuat dengan Next.js
      </footer>
    </div>
  );
                          }
