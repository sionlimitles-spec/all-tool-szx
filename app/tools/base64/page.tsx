"use client";

import { useState } from "react";
import Link from "next/link";

export default function Base64Page() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  function encode() {
    if (!input) {
      setError("Input kosong");
      setOutput("");
      return;
    }
    try {
      setOutput(btoa(unescape(encodeURIComponent(input))));
      setError("");
    } catch (e) {
      setError((e as Error).message);
    }
  }

  function decode() {
    if (!input.trim()) {
      setError("Input kosong");
      setOutput("");
      return;
    }
    try {
      setOutput(decodeURIComponent(escape(atob(input.trim()))));
      setError("");
    } catch {
      setError("Input bukan Base64 yang valid");
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
          <span style={{ fontWeight: 600 }}>Base64 Encode / Decode</span>
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
          Encode teks ke Base64 atau decode Base64 ke teks.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 16,
          }}
        >
          <div>
            <label className="label">Input</label>
            <textarea
              className="textarea"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ketik teks di sini..."
              rows={12}
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
              rows={12}
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
          <button onClick={encode} className="btn btn-primary">
            Encode
          </button>
          <button onClick={decode} className="btn btn-outline">
            Decode
          </button>
          <button onClick={clearAll} className="btn btn-ghost">
            Reset
          </button>
        </div>

        {error && <div className="error-box">{error}</div>}
      </main>
    </div>
  );
          }
