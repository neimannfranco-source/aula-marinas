import { MODULES } from "./data/modules";

export default function Page() {
  return (
    <main style={{ padding: 24, fontFamily: "sans-serif" }}>
      <h1>Aula Marinas Brasil</h1>
      <p>Total de módulos: {MODULES.length}</p>

      <div style={{ display: "grid", gap: 12, marginTop: 20 }}>
        {MODULES.slice(0, 5).map((module) => (
          <div
            key={module.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: 12,
              padding: 16,
            }}
          >
            <h2>
              {module.emoji} {module.title}
            </h2>
            <p><strong>Categoría:</strong> {module.category}</p>
            <p><strong>Nivel:</strong> {module.level}</p>
            <p>{module.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}