"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function Home() {
  const [text, setText] = useState("");
  const [saved, setSaved] = useState("");

  const saveData = async () => {
    await supabase
      .from("aula_marinas_state")
      .upsert({ id: "global", data: { text } });

    setSaved(text);
  };

  const loadData = async () => {
    const { data } = await supabase
      .from("aula_marinas_state")
      .select("*")
      .eq("id", "global")
      .single();

    if (data) {
      setText(data.data.text);
      setSaved(data.data.text);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h1>Aula Marinas</h1>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Escribí algo..."
        style={{ padding: 10, width: 300 }}
      />

      <br /><br />

      <button onClick={saveData}>Guardar</button>

      <p>Guardado: {saved}</p>
    </div>
  );
}