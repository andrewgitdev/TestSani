// Auto-kompiliert aus site/page-contact.jsx (kein Browser-Babel mehr).
// Quelle bleibt site/page-contact.jsx — bei Änderungen neu kompilieren.
(function () {
// page-kontakt.jsx
const {
  useState: useKS
} = React;
const SUBJECTS = ['Notfall / Rohrbruch', 'Verstopfung & Abfluss', 'Heizung & Boiler', 'Badsanierung', 'Wartungs-Abo', 'Offerte / Beratung', 'Sonstiges'];
function Field({
  label,
  error,
  children
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: "block"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mb-1.5 block text-sm font-semibold text-navy"
  }, label), children, error && /*#__PURE__*/React.createElement("span", {
    className: "mt-1 flex items-center gap-1 text-xs font-medium text-copper-dark"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 13
  }), error));
}
function ContactForm({
  site
}) {
  const [form, setForm] = useKS({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useKS({});
  const [sent, setSent] = useKS(false);
  const set = k => e => {
    setForm({
      ...form,
      [k]: e.target.value
    });
    if (errors[k]) setErrors({
      ...errors,
      [k]: null
    });
  };
  const validate = () => {
    const er = {};
    if (!form.name.trim()) er.name = 'Bitte geben Sie Ihren Namen an.';
    if (!form.email.trim()) er.email = 'Bitte geben Sie Ihre E-Mail an.';else if (!new RegExp('^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$').test(form.email)) er.email = 'Bitte eine gültige E-Mail eingeben.';
    if (form.phone && !new RegExp('^[+\\d][\\d\\s/().-]{6,}$').test(form.phone)) er.phone = 'Bitte eine gültige Telefonnummer eingeben.';
    if (!form.subject) er.subject = 'Bitte ein Anliegen wählen.';
    if (form.message.trim().length < 10) er.message = 'Bitte beschreiben Sie Ihr Anliegen (min. 10 Zeichen).';
    return er;
  };
  const submit = e => {
    e.preventDefault();
    const er = validate();
    setErrors(er);
    if (Object.keys(er).length === 0) setSent(true);
  };
  const inputCls = k => `w-full rounded-xl border bg-surface px-4 py-3 text-navy placeholder-navy/35 transition-colors focus-ring focus:bg-white ${errors[k] ? 'border-copper' : 'border-navy/10 focus:border-brand'}`;
  if (sent) {
    return /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col items-center justify-center rounded-3xl border border-brand/20 bg-white p-10 text-center shadow-soft",
      style: {
        minHeight: 480
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "grid h-20 w-20 place-items-center rounded-full bg-brand/12 text-brand"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check-circle",
      size: 44,
      strokeWidth: 1.8
    })), /*#__PURE__*/React.createElement("h3", {
      className: "mt-6 font-sans text-2xl font-bold text-navy"
    }, "Vielen Dank, ", form.name.split(' ')[0] || 'gerne', "!"), /*#__PURE__*/React.createElement("p", {
      className: "mt-3 max-w-sm leading-relaxed text-navy/60"
    }, "Ihre Anfrage ist bei uns eingegangen. Wir melden uns innert weniger Stunden. Bei einem Notfall rufen Sie uns bitte direkt an."), /*#__PURE__*/React.createElement("div", {
      className: "mt-7 flex flex-wrap justify-center gap-3"
    }, /*#__PURE__*/React.createElement(Button, {
      href: `tel:${site.telRaw}`,
      variant: "primary",
      icon: "phone"
    }, site.tel), /*#__PURE__*/React.createElement(Button, {
      onClick: () => {
        setSent(false);
        setForm({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      },
      variant: "outline"
    }, "Weitere Anfrage")));
  }
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    noValidate: true,
    className: "rounded-3xl border border-navy/8 bg-white p-7 shadow-soft md:p-9"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid gap-5 sm:grid-cols-2"
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Name *",
    error: errors.name
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: form.name,
    onChange: set('name'),
    placeholder: "Vor- und Nachname",
    className: inputCls('name')
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Telefon",
    error: errors.phone
  }, /*#__PURE__*/React.createElement("input", {
    type: "tel",
    value: form.phone,
    onChange: set('phone'),
    placeholder: "079 123 45 67",
    className: inputCls('phone')
  }))), /*#__PURE__*/React.createElement("div", {
    className: "mt-5"
  }, /*#__PURE__*/React.createElement(Field, {
    label: "E-Mail *",
    error: errors.email
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    value: form.email,
    onChange: set('email'),
    placeholder: "ihre@email.ch",
    className: inputCls('email')
  }))), /*#__PURE__*/React.createElement("div", {
    className: "mt-5"
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Anliegen *",
    error: errors.subject
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("select", {
    value: form.subject,
    onChange: set('subject'),
    className: `${inputCls('subject')} appearance-none pr-10 ${form.subject ? '' : 'text-navy/35'}`
  }, /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, "Bitte w\xE4hlen \u2026"), SUBJECTS.map(s => /*#__PURE__*/React.createElement("option", {
    key: s,
    value: s,
    className: "text-navy"
  }, s))), /*#__PURE__*/React.createElement("span", {
    className: "pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-navy/40"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-up",
    size: 18,
    className: "rotate-180"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "mt-5"
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Nachricht *",
    error: errors.message
  }, /*#__PURE__*/React.createElement("textarea", {
    value: form.message,
    onChange: set('message'),
    rows: 5,
    placeholder: "Beschreiben Sie kurz Ihr Anliegen \u2026",
    className: `${inputCls('message')} resize-none`
  }))), /*#__PURE__*/React.createElement("div", {
    className: "mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-between"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-navy/45"
  }, "* Pflichtfeld \xB7 Wir behandeln Ihre Daten vertraulich."), /*#__PURE__*/React.createElement(Button, {
    onClick: submit,
    variant: "primary",
    size: "lg",
    iconRight: "send",
    className: "w-full sm:w-auto"
  }, "Anfrage senden")));
}
function MapPlaceholder({
  site
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "relative h-full min-h-[320px] overflow-hidden rounded-3xl border border-navy/8 shadow-soft"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-surface"
  }), /*#__PURE__*/React.createElement("svg", {
    className: "absolute inset-0 h-full w-full",
    preserveAspectRatio: "xMidYMid slice",
    viewBox: "0 0 400 320",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "400",
    height: "320",
    fill: "#EDF2F8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M-20 70 C 80 110, 120 60, 200 120 S 340 180, 440 150",
    stroke: "#cfe3f3",
    strokeWidth: "26",
    fill: "none",
    strokeLinecap: "round"
  }), [40, 110, 180, 250].map(y => /*#__PURE__*/React.createElement("line", {
    key: 'h' + y,
    x1: "0",
    y1: y,
    x2: "400",
    y2: y + 18,
    stroke: "#dbe5ef",
    strokeWidth: "4"
  })), [60, 150, 240, 330].map(x => /*#__PURE__*/React.createElement("line", {
    key: 'v' + x,
    x1: x,
    y1: "0",
    x2: x - 10,
    y2: "320",
    stroke: "#dbe5ef",
    strokeWidth: "4"
  })), [[40, 30], [170, 50], [280, 40], [90, 200], [300, 210], [210, 250]].map(([x, y], i) => /*#__PURE__*/React.createElement("rect", {
    key: i,
    x: x,
    y: y,
    width: "46",
    height: "34",
    rx: "5",
    fill: "#e2ebf4"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative flex flex-col items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-lift"
  }, /*#__PURE__*/React.createElement("span", {
    className: "grid h-7 w-7 place-items-center rounded-full bg-copper text-white"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "droplets",
    size: 15
  })), /*#__PURE__*/React.createElement("span", {
    className: "font-sans text-sm font-bold text-navy"
  }, "Rheinquell")), /*#__PURE__*/React.createElement("span", {
    className: "mt-1 h-3 w-3 rotate-45 bg-white shadow"
  }), /*#__PURE__*/React.createElement("span", {
    className: "-mt-1 h-2 w-2 rounded-full bg-copper/40"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-4 left-4 rounded-xl bg-white/90 px-3 py-2 text-xs font-medium text-navy/70 backdrop-blur"
  }, site.street, ", ", site.city), /*#__PURE__*/React.createElement("div", {
    className: "absolute right-4 top-4 flex flex-col gap-1.5"
  }, /*#__PURE__*/React.createElement("button", {
    className: "grid h-11 w-11 place-items-center rounded-lg bg-white text-navy/60 shadow-soft sm:h-9 sm:w-9",
    "aria-label": "Zoom in"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 16
  })), /*#__PURE__*/React.createElement("button", {
    className: "grid h-11 w-11 place-items-center rounded-lg bg-white text-navy/60 shadow-soft sm:h-9 sm:w-9",
    "aria-label": "Zoom out"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "minus",
    size: 16
  }))));
}
function KontaktPage({
  nav,
  site
}) {
  const info = [{
    icon: 'map-pin',
    t: 'Adresse',
    lines: [site.street, site.city]
  }, {
    icon: 'phone',
    t: 'Telefon · 24/7',
    lines: [site.tel],
    href: `tel:${site.telRaw}`
  }, {
    icon: 'mail',
    t: 'E-Mail',
    lines: [site.email],
    href: `mailto:${site.email}`
  }, {
    icon: 'clock',
    t: 'Öffnungszeiten',
    lines: ['Büro: ' + site.hoursOffice, 'Notdienst: ' + site.hoursEmergency]
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "page-enter"
  }, /*#__PURE__*/React.createElement(PageHeader, {
    eyebrow: "Kontakt",
    title: "Schreiben Sie uns",
    sub: "Kein Notfall? Dann nutzen Sie das Formular \u2013 wir melden uns innert weniger Stunden. Bei dringenden F\xE4llen rufen Sie uns rund um die Uhr an."
  }), /*#__PURE__*/React.createElement("section", {
    className: "bg-page py-12 md:py-28"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-7xl px-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid gap-10 lg:grid-cols-[1.1fr_.9fr]"
  }, /*#__PURE__*/React.createElement(Reveal, {
    dir: "left"
  }, /*#__PURE__*/React.createElement(ContactForm, {
    site: site
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-6"
  }, /*#__PURE__*/React.createElement(Reveal, {
    dir: "right",
    delay: 80
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-4"
  }, info.map(c => {
    const body = /*#__PURE__*/React.createElement("div", {
      className: "group h-full rounded-2xl border border-navy/8 bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-soft"
    }, /*#__PURE__*/React.createElement("span", {
      className: "grid h-11 w-11 place-items-center rounded-xl bg-white text-brand shadow-soft transition-colors group-hover:bg-brand group-hover:text-white"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: c.icon,
      size: 20
    })), /*#__PURE__*/React.createElement("h3", {
      className: "mt-4 font-sans text-sm font-bold uppercase tracking-wide text-navy"
    }, c.t), c.lines.map(l => /*#__PURE__*/React.createElement("p", {
      key: l,
      className: "mt-1 text-[15px] text-navy/65"
    }, l)));
    return c.href ? /*#__PURE__*/React.createElement("a", {
      key: c.t,
      href: c.href,
      className: "block h-full"
    }, body) : /*#__PURE__*/React.createElement("div", {
      key: c.t,
      className: "h-full"
    }, body);
  }))), /*#__PURE__*/React.createElement(Reveal, {
    dir: "right",
    delay: 160,
    className: "flex-1"
  }, /*#__PURE__*/React.createElement(MapPlaceholder, {
    site: site
  })))))));
}
window.KontaktPage = KontaktPage;
})();
