export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: 24 }}>
      <div style={{ maxWidth: 520 }}>
        <h1 style={{ fontSize: "2.6rem", margin: "0 0 12px" }}>Next.js deployed.</h1>
        <p style={{ color: "#9db2cf", lineHeight: 1.6 }}>
          Server-rendered at {new Date().toISOString()}. If this time changes on refresh,
          your host is running the server correctly.
        </p>
        <p>
          <a href="/api/health" style={{ color: "#6fb3ff" }}>Check /api/health</a>
        </p>
      </div>
    </main>
  );
}
