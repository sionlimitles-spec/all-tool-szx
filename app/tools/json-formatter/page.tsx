"use client";

import { useState } from "react";
import Link from "next/link";

export default function JsonFormatterPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  function formatJson(indent: number) {
    if (!input.trim()) {
      setError("Input kosong");
      setOutput("");
      return;
    }
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, indent));
      setError("");
    } catch (e) {
      setError((e as Error).message);
      setOutput("");
    }
  }

  function minify() {
    if (!input.trim()) {
      setError("Input kosong");
      setOutput("");
      return;
    }
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed));
      setError("");
    } catch (e) {
      setError((e as Error).message);
      setOutput("");
    }
  }

  async function copyResult() {
    if (!output) return;
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      alert("Gagal menyalin");
    }
  }

  function clearAll() {
    setInput("");
    setOutput("");
    setError("");
  }

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
          <span style={{ fontWeight: 600 }}>JSON Formatter</span>
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
          Paste JSON di kiri, hasilnya muncul di kanan.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 16,
          }}
        >
          <div>
            <label className="label">Input JSON</label>
            <textarea
              className="textarea"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder='{"nama": "Budi", "umur": 25}'
              rows={14}
            />
          </div>

          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 6,
              }}
            >
              <label className="label" style={{ marginBottom: 0 }}>
                Hasil
              </label>
              {output && (
                <button onClick={copyResult} className="btn btn-outline btn-sm">
                  {copied ? "Tersalin" : "Salin"}
                </button>
              )}
            </div>
            <textarea
              className="textarea"
              value={output}
              readOnly
              placeholder="Hasil akan muncul di sini"
              rows={14}
              style={{ background: "#f9fafb" }}
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 8,
            marginTop: 16,
            flexWrap: "wrap",
          }}
        >
          <button onClick={() => formatJson(2)} className="btn btn-primary">
            Format (2 spasi)
          </button>
          <button onClick={() => formatJson(4)} className="btn btn-outline">
            Format (4 spasi)
          </button>
          <button onClick={minify} className="btn btn-outline">
            Minify
          </button>
          <button onClick={clearAll} className="btn btn-ghost">
            Reset
          </button>
        </div>

        {error && (
          <div className="error-box">
            <strong>Error:</strong> {error}
          </div>
        )}
      </main>
    </div>
  );
      }
