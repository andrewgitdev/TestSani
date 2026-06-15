// calc-steps.jsx — Schritt-Inhalte des Rechners: Details, Ausstattung, Kontakt, Ergebnis
const {
  CALC_TYPES, RENO_TYPES, BAD_ERSETZEN, ALTER_OPTS, BAD_FLIESEN,
  UMBAU_BEREICH, UMBAU_UMFANG, NEUBAU_AUSBAU, NOTFALL_ART, WARTUNG_ART,
  QUALITY, BRANDS, EXTRAS, ZEITRAHMEN,
  fmtChf, byId, includedSummary, summaryRows,
} = window.CALC_CFG;
const { OptionCard, CalcSlider, CalcStepper, FieldGroup, BrandChip, CalcField } = window.CalcUI;

/* =========================================================================
   DETAILS — verzweigt nach Projekttyp
========================================================================= */
function DetailsBody({ data, setDetail, toggleDetail, site }) {
  const t = data.type, d = data.details;

  if (t === 'bad') return (
    <div className="space-y-7">
      <FieldGroup label="Wie gross ist das Bad?" hint="Grobe Schätzung genügt.">
        <CalcSlider value={d.size} min={2} max={16} step={1} unit=" m²" onChange={(v) => setDetail('size', v)} />
      </FieldGroup>
      <FieldGroup label="Was soll ersetzt werden?" hint="Mehrfachauswahl möglich.">
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
          {BAD_ERSETZEN.map((o) => (
            <OptionCard key={o.id} compact icon={o.icon} label={o.label} active={(d.ersetzen || []).includes(o.id)} onClick={() => toggleDetail('ersetzen', o.id)} />
          ))}
        </div>
      </FieldGroup>
      <FieldGroup label="Alter der bestehenden Installation">
        <div className="grid gap-2.5 sm:grid-cols-3">
          {ALTER_OPTS.map((o) => (
            <OptionCard key={o.id} compact icon={o.icon} label={o.label} sub={o.sub} active={d.alter === o.id} onClick={() => setDetail('alter', o.id)} />
          ))}
        </div>
      </FieldGroup>
      <FieldGroup label="Umfang der Arbeiten">
        <div className="grid gap-2.5 sm:grid-cols-2">
          {BAD_FLIESEN.map((o) => (
            <OptionCard key={o.id} compact icon={o.icon} label={o.label} sub={o.sub} active={d.fliesen === o.id} onClick={() => setDetail('fliesen', o.id)} />
          ))}
        </div>
      </FieldGroup>
    </div>
  );

  if (t === 'umbau') return (
    <div className="space-y-7">
      <FieldGroup label="Welcher Bereich?">
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          {UMBAU_BEREICH.map((o) => (
            <OptionCard key={o.id} compact icon={o.icon} label={o.label} sub={o.sub} active={d.bereich === o.id} onClick={() => setDetail('bereich', o.id)} />
          ))}
        </div>
      </FieldGroup>
      <FieldGroup label="Wie umfangreich?">
        <div className="grid gap-2.5 sm:grid-cols-3">
          {UMBAU_UMFANG.map((o) => (
            <OptionCard key={o.id} compact icon={o.icon} label={o.label} sub={o.sub} active={d.umfang === o.id} onClick={() => setDetail('umfang', o.id)} />
          ))}
        </div>
      </FieldGroup>
      <FieldGroup label="Alter der bestehenden Installation">
        <div className="grid gap-2.5 sm:grid-cols-3">
          {ALTER_OPTS.map((o) => (
            <OptionCard key={o.id} compact icon={o.icon} label={o.label} sub={o.sub} active={d.alter === o.id} onClick={() => setDetail('alter', o.id)} />
          ))}
        </div>
      </FieldGroup>
    </div>
  );

  if (t === 'neubau') return (
    <div className="space-y-5">
      <CalcStepper label="Anzahl Bäder / WC" sub="Inkl. Gäste-WC" value={d.baeder} min={1} max={8} onChange={(v) => setDetail('baeder', v)} />
      <CalcStepper label="Anzahl Stockwerke" sub="Mit Sanitär-Installation" value={d.stockwerke} min={1} max={5} onChange={(v) => setDetail('stockwerke', v)} />
      <FieldGroup label="Bauphase">
        <div className="grid gap-2.5 sm:grid-cols-2">
          {NEUBAU_AUSBAU.map((o) => (
            <OptionCard key={o.id} compact icon={o.icon} label={o.label} sub={o.sub} active={d.ausbau === o.id} onClick={() => setDetail('ausbau', o.id)} />
          ))}
        </div>
      </FieldGroup>
    </div>
  );

  if (t === 'notfall') return (
    <div className="space-y-5">
      <div className="grid gap-2.5 sm:grid-cols-2">
        {NOTFALL_ART.map((o) => (
          <OptionCard key={o.id} icon={o.icon} label={o.label} sub={o.sub} active={d.art === o.id} onClick={() => setDetail('art', o.id)} />
        ))}
      </div>
      <div className="flex flex-col gap-3 rounded-2xl border border-copper/40 bg-copper/15 p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-copper text-white shadow-copper"><Icon name="zap" size={20} /></span>
          <p className="text-sm font-medium text-white/90">Akuter Notfall? Am besten sofort anrufen – wir sind in der Regel in 30&nbsp;Minuten vor Ort.</p>
        </div>
        <Button href={`tel:${site.telRaw}`} variant="primary" size="sm" icon="phone" className="w-full sm:w-auto">{site.tel}</Button>
      </div>
    </div>
  );

  if (t === 'wartung') return (
    <div className="grid gap-2.5 sm:grid-cols-3">
      {WARTUNG_ART.map((o) => (
        <OptionCard key={o.id} icon={o.icon} label={o.label} sub={o.sub} active={d.art === o.id} onClick={() => setDetail('art', o.id)} />
      ))}
    </div>
  );

  return null;
}

/* =========================================================================
   AUSSTATTUNG & QUALITÄT
========================================================================= */
function QualityBody({ data, setQuality, toggleExtra }) {
  const q = data.quality;
  return (
    <div className="space-y-7">
      <FieldGroup label="Preisklasse" hint="Bestimmt Materialien und Apparate.">
        <div className="grid gap-2.5 sm:grid-cols-3">
          {QUALITY.map((o) => (
            <OptionCard key={o.id} compact icon={o.icon} label={o.label} sub={o.sub} active={q.preisklasse === o.id} onClick={() => setQuality('preisklasse', o.id)} />
          ))}
        </div>
      </FieldGroup>
      <FieldGroup label="Marken-Präferenz" hint="Optional – wir beraten Sie gerne.">
        <div className="flex flex-wrap gap-2">
          {BRANDS.map((b) => (
            <BrandChip key={b} label={b} active={q.marke === b} onClick={() => setQuality('marke', q.marke === b ? '' : b)} />
          ))}
        </div>
      </FieldGroup>
      <FieldGroup label="Extras" hint="Mehrfachauswahl möglich.">
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          {EXTRAS.map((o) => (
            <OptionCard key={o.id} compact icon={o.icon} label={o.label} active={(q.extras || []).includes(o.id)} onClick={() => toggleExtra(o.id)} />
          ))}
        </div>
      </FieldGroup>
    </div>
  );
}

/* =========================================================================
   STANDORT & KONTAKT
========================================================================= */
function ContactBody({ data, setC, errors, inputCls }) {
  const c = data.contact;
  return (
    <div className="space-y-7">
      <FieldGroup label="Wo befindet sich das Objekt?" hint="Für Anfahrt und regionale Planung.">
        <div className="grid gap-4 sm:grid-cols-[140px_1fr]">
          <CalcField label="PLZ *" error={errors.plz}>
            <input type="text" inputMode="numeric" value={c.plz} onChange={setC('plz')} placeholder="4057" className={inputCls('plz')} />
          </CalcField>
          <CalcField label="Ort">
            <input type="text" value={c.ort} onChange={setC('ort')} placeholder="Basel" className={inputCls('ort')} />
          </CalcField>
        </div>
      </FieldGroup>

      <FieldGroup label="Wunsch-Zeitrahmen">
        <div className="grid gap-2.5 sm:grid-cols-3">
          {ZEITRAHMEN.map((o) => (
            <OptionCard key={o.id} compact icon={o.icon} label={o.label} sub={o.sub} active={c.zeitrahmen === o.id} onClick={() => setC('zeitrahmen')(o.id)} />
          ))}
        </div>
      </FieldGroup>

      <FieldGroup label="Ihre Kontaktdaten">
        <div className="grid gap-4 sm:grid-cols-2">
          <CalcField label="Name *" error={errors.name}>
            <input type="text" value={c.name} onChange={setC('name')} placeholder="Vor- und Nachname" className={inputCls('name')} />
          </CalcField>
          <CalcField label="Telefon *" error={errors.phone}>
            <input type="tel" value={c.phone} onChange={setC('phone')} placeholder="079 123 45 67" className={inputCls('phone')} />
          </CalcField>
        </div>
        <div className="mt-4">
          <CalcField label="E-Mail *" error={errors.email}>
            <input type="email" value={c.email} onChange={setC('email')} placeholder="ihre@email.ch" className={inputCls('email')} />
          </CalcField>
        </div>
        <button type="button" onClick={() => setC('rueckruf')(!c.rueckruf)} className="mt-4 flex w-full items-center gap-3 rounded-xl border border-white/12 bg-white/5 p-3.5 text-left transition-colors hover:bg-white/10 focus-ring">
          <span className={`relative grid h-6 w-6 shrink-0 place-items-center overflow-hidden rounded-md border transition-colors ${c.rueckruf ? 'border-brand-glow text-navy' : 'border-white/30'}`}>
            {c.rueckruf && <span aria-hidden="true" className="absolute inset-0 z-0" style={{ backgroundColor: '#8aa6bd' }}></span>}
            {c.rueckruf && <Icon name="check" size={15} strokeWidth={3} className="relative z-10" />}
          </span>
          <span className="text-sm text-white/85">Bitte rufen Sie mich innerhalb von 24&nbsp;Stunden zurück.</span>
        </button>
        <p className="mt-4 text-xs text-white/55">* Pflichtfeld · Ihre Daten behandeln wir vertraulich und unverbindlich.</p>
      </FieldGroup>
    </div>
  );
}

/* =========================================================================
   ERGEBNIS
========================================================================= */
function ResultView({ data, est, site, isEmergency, onConfirm, onReset }) {
  const included = includedSummary(data);
  const rows = summaryRows(data);
  return (
    <div>
      {isEmergency && (
        <div className="mb-5 flex flex-col gap-3 rounded-2xl bg-copper p-4 text-white shadow-copper sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/20"><Icon name="zap" size={22} /></span>
            <div>
              <p className="font-sans text-sm font-bold uppercase tracking-wide">Notdienst – rund um die Uhr</p>
              <p className="text-sm text-white/80">Bei akuten Schäden zählt jede Minute. Rufen Sie uns direkt an.</p>
            </div>
          </div>
          <Button href={`tel:${site.telRaw}`} variant="ghost" size="sm" icon="phone-call" className="w-full !border-white/40 !bg-white/15 sm:w-auto">{site.tel}</Button>
        </div>
      )}

      {/* Preis-Karte */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-navy via-navy-800 to-[#06304f] p-6 text-center shadow-lift md:p-8">
        <div className="relative z-10">
          <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-brand-glow">Unverbindliche Richtpreis-Schätzung</span>
          <div className="mt-3 flex flex-wrap items-baseline justify-center gap-x-2 font-sans font-bold leading-tight text-white">
            <span className="text-lg font-semibold text-white/55 sm:text-2xl md:text-3xl">ca. CHF</span>
            <span className="whitespace-nowrap text-[2rem] sm:text-4xl sm:leading-none md:text-6xl">{fmtChf(est.lo)} <span className="text-white/45">–</span> {fmtChf(est.hi)}</span>
          </div>
          <p className="mx-auto mt-3 max-w-md text-sm text-white/55">
            Spanne abhängig von Material, Zugänglichkeit und tatsächlichem Aufwand. Endgültige Offerte nach kurzer Begutachtung.
          </p>
        </div>
      </div>

      {/* Was ist enthalten */}
      {included.length > 0 && (
        <div className="mt-5 rounded-2xl border border-white/12 bg-white/5 p-5">
          <h4 className="font-sans text-sm font-bold uppercase tracking-wide text-white/85">Das ist enthalten</h4>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {included.map((it, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-white/75">
                <Icon name="check" size={16} strokeWidth={2.6} className="mt-0.5 shrink-0 text-brand-glow" />
                <span>{it}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Zusammenfassung */}
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {rows.map((c, i) => (
          <div key={i} className="flex items-center gap-3 rounded-xl border border-navy/8 bg-surface p-3.5">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white text-brand shadow-soft"><Icon name={c.icon} size={18} /></span>
            <div className="min-w-0">
              <div className="font-sans text-[10px] uppercase tracking-wider text-navy/45">{c.label}</div>
              <div className="truncate text-sm font-semibold text-navy">{c.value}</div>
            </div>
          </div>
        ))}
      </div>

      {/* CTAs */}
      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <Button href={`tel:${site.telRaw}`} variant="outline" size="lg" icon="phone" className="w-full sm:flex-1">Anrufen · {site.tel}</Button>
        <Button onClick={onConfirm} variant="primary" size="lg" iconRight="send" className="w-full sm:flex-1">Jetzt unverbindliche Offerte anfordern</Button>
      </div>
      {data.contact.rueckruf && (
        <p className="mt-3 flex items-center justify-center gap-2 text-sm text-white/60"><Icon name="phone-incoming" size={15} className="text-brand-glow" />Wir rufen Sie innerhalb von 24&nbsp;Stunden zurück.</p>
      )}
      <button type="button" onClick={onReset} className="mx-auto mt-4 block text-sm font-medium text-white/55 underline-offset-4 transition-colors hover:text-white hover:underline">
        Neue Berechnung starten
      </button>
    </div>
  );
}

function ResultSent({ contact, site, onReset }) {
  return (
    <div className="flex flex-col items-center justify-center py-6 text-center" style={{ minHeight: 360 }}>
      <div className="grid h-20 w-20 place-items-center rounded-full bg-white/10 text-brand-glow ring-1 ring-white/15">
        <Icon name="check-circle" size={44} strokeWidth={1.8} />
      </div>
      <h3 className="mt-6 font-sans text-2xl font-bold text-white md:text-3xl">Anfrage erhalten, {(contact.name || '').split(' ')[0] || 'gerne'}!</h3>
      <p className="mt-3 max-w-md leading-relaxed text-white/65">
        Wir prüfen Ihre Angaben und melden uns innert weniger Stunden mit einer verbindlichen Festpreis-Offerte
        {contact.rueckruf ? ' – und rufen Sie wie gewünscht innerhalb von 24 Stunden zurück.' : '.'} Bei einem Notfall rufen Sie uns bitte direkt an.
      </p>
      <div className="mt-7 flex flex-wrap justify-center gap-3">
        <Button href={`tel:${site.telRaw}`} variant="primary" icon="phone">{site.tel}</Button>
        <Button onClick={onReset} variant="outline">Neue Offerte berechnen</Button>
      </div>
    </div>
  );
}

window.CalcSteps = { DetailsBody, QualityBody, ContactBody, ResultView, ResultSent };
