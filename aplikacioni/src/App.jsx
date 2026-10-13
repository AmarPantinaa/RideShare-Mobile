import { useEffect, useState } from "react";

// 1. Lista e vetme e të dhënave (3 udhëtime fiktive)
const udhetimet = [
  { id: "1", ora: "07:30", nisja: "Pejë", pikenisja: "Sheshi i qytetit", shoferi: "Arben", vende: 3 },
  { id: "2", ora: "08:00", nisja: "Istog", pikenisja: "Stacioni kryesor", shoferi: "Vjosa", vende: 1 },
  { id: "3", ora: "08:15", nisja: "Klinë", pikenisja: "Qendra", shoferi: "Besnik", vende: 0 },
];

const tekstVende = (n) =>
  n === 0 ? "Nuk ka vende" : n === 1 ? "1 vend i lirë" : `${n} vende të lira`;

// Adresa lexohet nga hash-i: #/  ,  #/udhetimi/2  ,  #/udhetimi/2/pritje
function useRruga() {
  const [hash, setHash] = useState(window.location.hash || "#/");
  useEffect(() => {
    const ndrysho = () => setHash(window.location.hash || "#/");
    window.addEventListener("hashchange", ndrysho);
    return () => window.removeEventListener("hashchange", ndrysho);
  }, []);
  return hash.replace(/^#\/?/, "").split("/").filter(Boolean);
}

function Lista() {
  return (
    <>
      <h1>Udhëtime drejt Kampusit</h1>
      {udhetimet.map((u) => (
        <a key={u.id} href={`#/udhetimi/${u.id}`} className="card">
          <div className="row">
            <span className="time">{u.ora}</span>
            <span className={u.vende > 0 ? "badge" : "badge muted"}>
              {u.vende > 0 ? "Shiko" : "Plot"}
            </span>
          </div>
          <div className="route">{u.nisja} → Kampusi</div>
          <div className="sub">Shoferi {u.shoferi} · {tekstVende(u.vende)}</div>
        </a>
      ))}
    </>
  );
}

function Detajet({ u }) {
  return (
    <>
      <a href="#/" className="back">← Kthehu te lista</a>
      <h1>Detajet e udhëtimit</h1>
      <div className="card">
        <div className="label">NISJA</div>
        <div className="time">{u.ora}</div>
        <div className="route">{u.nisja}</div>
        <div className="sub">Pikënisja: {u.pikenisja}</div>
        <div className="label">DESTINACIONI</div>
        <div className="route">Kampusi</div>
        <div className="label">SHOFERI</div>
        <div className="route">{u.shoferi}</div>
        <div className="label">VENDE TË LIRA</div>
        <div className="route">{tekstVende(u.vende)}</div>
      </div>
      {u.vende > 0 ? (
        <a href={`#/udhetimi/${u.id}/pritje`} className="primary">Kërko një vend</a>
      ) : (
        <span className="primary disabled">Nuk ka vende të lira</span>
      )}
    </>
  );
}

function Pritje({ u }) {
  return (
    <>
      <div className="simulation">SIMULIM – nuk dërgohet asnjë rezervim real.</div>
      <h1>Në pritje</h1>
      <div className="card">
        <span className="badge status">Në pritje të shoferit</span>
        <div className="route">{u.nisja} → Kampusi</div>
        <div className="sub">Shoferi {u.shoferi}</div>
        <div className="time">{u.ora}</div>
      </div>
      <a href={`#/udhetimi/${u.id}`} className="back">← Kthehu te detajet</a>
      <a href="#/" className="back">← Kthehu te lista</a>
    </>
  );
}

function NukGjendet() {
  return (
    <>
      <h1>Udhëtimi nuk u gjet</h1>
      <p className="sub">Ky udhëtim nuk ekziston.</p>
      <a href="#/" className="back">← Kthehu te lista</a>
    </>
  );
}

export default function App() {
  const [a, id, c] = useRruga();
  let faqja;

  if (!a) {
    faqja = <Lista />;
  } else if (a === "udhetimi" && id) {
    const u = udhetimet.find((x) => x.id === id);
    if (!u) faqja = <NukGjendet />; // ID e panjohur → nuk tregon udhëtim të gabuar
    else if (c === "pritje") faqja = u.vende > 0 ? <Pritje u={u} /> : <NukGjendet />;
    else if (!c) faqja = <Detajet u={u} />;
    else faqja = <NukGjendet />;
  } else {
    faqja = <NukGjendet />;
  }

  return (
    <div className="app">
      <style>{css}</style>
      <main className="screen">{faqja}</main>
    </div>
  );
}

const css = `
body{margin:0;background:#e8eef8;font-family:system-ui,"Segoe UI",sans-serif;color:#0f1e3d;display:block}
#root{max-width:none;margin:0;padding:0;text-align:left}
*{box-sizing:border-box}a{color:inherit;text-decoration:none}
.app{max-width:430px;min-height:100vh;margin:0 auto;background:#f3f7fd}
.screen{padding:40px 20px 24px;display:flex;flex-direction:column;gap:14px}
h1{margin:0;font-size:26px;font-weight:800;line-height:1.15}
.card{background:#fff;border:1px solid #dce6f5;border-radius:20px;padding:16px;display:flex;flex-direction:column;gap:10px}
.row{display:flex;justify-content:space-between;align-items:center}
.time{font-size:26px;font-weight:800}.route{font-size:14px;font-weight:600}
.sub{font-size:13px;color:#52617f}.label{font-size:11px;font-weight:700;letter-spacing:.06em;color:#52617f}
.badge{background:#e4eefc;color:#1647a0;font-size:12px;font-weight:700;border-radius:999px;padding:4px 10px;align-self:flex-start}
.badge.muted{background:#eef1f6;color:#52617f}.badge.status{background:#fff3d6;color:#8a5a00}
.back{color:#1e5bc6;font-weight:700;font-size:14px}
.primary{display:flex;align-items:center;justify-content:center;min-height:48px;border-radius:16px;background:#1e5bc6;color:#fff;font-weight:700}
.primary.disabled{background:#b9c7e0}
.simulation{background:#fff3d6;color:#8a5a00;border:1px dashed #d9a400;border-radius:12px;padding:10px 12px;font-size:13px;font-weight:700}
`;