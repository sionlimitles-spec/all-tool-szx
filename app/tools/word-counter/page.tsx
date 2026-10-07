"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

export default function WordCounterPage() {
  const [text, setText] = useState("");

  const stats = useMemo(() => {
    const chars = text.length;
    const charsNoSpace = text.replace(/\s/g, "").length;
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const sentences = text.trim()
      ? text.split(/[.!?]+/).filter((s) => s.trim().length > 0).length
      : 0;
    const paragraphs = text.trim()
      ? text.split(/\n\s*\n/).filter((p) => p.trim().length > 0).length
      : 0;
    const lines = text ? text.split(/\n/).length : 0;
    const readingTimeMin = words > 0 ? Math.ceil(words / 200) : 0;
    return {
      chars,
      charsNoSpace,
      words,
      sentences,
      paragraphs,
      lines,
      readingTimeMin,
    };
  }, [text]);

  const items = [
    { label: "Kata", value: stats.words },
    { label: "Huruf", value: stats.chars },
    { label: "Huruf (tanpa spasi)", value: stats.charsNoSpace },
    { label: "Kalimat", value: stats.sentences },
    { label: "Paragraf", value: stats.paragraphs },
    { label: "Baris", value: stats.lines },
  ];

  return (
    <div className="page-bg">
      <header className="site-header">
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            height: 60,
          }}
        >
          <Link href="/" className="btn btn-outline btn-sm">
            Kembali
          </Link>
          <span style={{ fontWeight: 600 }}>Penghitung Kata</span>
        </div>
      </header>

      <main className="container" style={{ padding: "24px 16px 60px" }}>
        <p
          style={{
            color: "var(--muted-foreground)",
            fontSize: 14,
            marginBottom: 16,
          }}
        >
          Ketik atau paste teks, statistik muncul otomatis.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: 10,
            marginBottom: 16,
          }}
        >
          {items.map((item) => (
            <div
              key={item.label}
              style={{
                background: "#fff",
                border: "1px solid var(--border)",
                borderRadius: 10,
                padding: 14,
              }}
            >
              <p
                style={{
                  fontSize: 12,
                  color: "var(--muted-foreground)",
                  marginBottom: 4,
                }}
              >
                {item.label}
              </p>
              <p
                style={{
                  fontSize: 24,
                  fontWeight: 700,
                  color: "var(--primary)",
                }}
              >
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <label className="label">Teks kamu</label>
        <textarea
          className="textarea"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Mulai ketik di sini..."
          rows={12}
        />

        <div
          style={{
            marginTop: 12,
            fontSize: 13,
            color: "var(--muted-foreground)",
          }}
        >
          Estimasi waktu baca: {stats.readingTimeMin} menit
        </div>

        <div style={{ marginTop: 16 }}>
          <button onClick={() => setText("")} className="btn btn-ghost">
            Hapus semua
          </button>
        </div>
      </main>
    </div>
  );
    }
