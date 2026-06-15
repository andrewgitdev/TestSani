// Auto-kompiliert aus site/icons.jsx (kein Browser-Babel mehr).
// Quelle bleibt site/icons.jsx — bei Änderungen neu kompilieren.
(function () {
// icons.jsx — lucide-based Icon component (vanilla lucide UMD)
const {
  useRef: useRefIcon,
  useEffect: useEffectIcon
} = React;

// Map friendly names -> lucide PascalCase keys (with safe fallbacks across versions)
const ICON_ALIASES = {
  home: 'House',
  house: 'House',
  wrench: 'Wrench',
  droplets: 'Droplets',
  droplet: 'Droplet',
  waves: 'Waves',
  flame: 'Flame',
  bath: 'Bath',
  hammer: 'Hammer',
  settings: 'Settings',
  cog: 'Settings',
  users: 'Users',
  user: 'User',
  tag: 'Tag',
  star: 'Star',
  mail: 'Mail',
  phone: 'Phone',
  'phone-call': 'PhoneCall',
  menu: 'Menu',
  x: 'X',
  clock: 'Clock',
  shield: 'ShieldCheck',
  'shield-check': 'ShieldCheck',
  badge: 'BadgeCheck',
  'badge-check': 'BadgeCheck',
  calendar: 'CalendarCheck',
  'calendar-check': 'CalendarCheck',
  check: 'Check',
  'check-circle': 'CircleCheck',
  'circle-check': 'CircleCheck',
  award: 'Award',
  smile: 'Smile',
  'thumbs-up': 'ThumbsUp',
  'map-pin': 'MapPin',
  send: 'Send',
  zap: 'Zap',
  sparkles: 'Sparkles',
  crown: 'Crown',
  'arrow-right': 'ArrowRight',
  'arrow-down': 'ArrowDown',
  'arrow-up-right': 'ArrowUpRight',
  'chevron-right': 'ChevronRight',
  'chevron-up': 'ChevronUp',
  'chevron-down': 'ChevronDown',
  quote: 'Quote',
  facebook: 'Facebook',
  instagram: 'Instagram',
  linkedin: 'Linkedin',
  truck: 'Truck',
  'wallet': 'Wallet',
  'piggy-bank': 'PiggyBank',
  'thermometer': 'Thermometer',
  'pipette': 'TestTube',
  'building': 'Building2',
  'heart-handshake': 'HeartHandshake',
  'leaf': 'Leaf',
  'gauge': 'Gauge',
  'ruler': 'Ruler',
  'message-circle': 'MessageCircle',
  'banknote': 'Banknote',
  'plus': 'Plus',
  'minus': 'Minus',
  'calculator': 'Calculator',
  'file-text': 'FileText',
  'play': 'Play',
  'history': 'History',
  'grid': 'Grid3x3',
  'layers': 'Layers',
  'paint-roller': 'PaintRoller',
  'shower-head': 'ShowerHead',
  'phone-incoming': 'PhoneIncoming'
};
function resolveIconNode(name) {
  const lib = window.lucide;
  if (!lib) return null;
  const icons = lib.icons || lib;
  const pascal = ICON_ALIASES[name] || name.charAt(0).toUpperCase() + name.slice(1);
  // try resolved alias, then a few common fallbacks
  const candidates = [pascal, name, ICON_ALIASES[name]].filter(Boolean);
  for (const c of candidates) {
    if (icons[c]) return icons[c];
  }
  // generic fallback
  return icons['Circle'] || null;
}
function Icon({
  name,
  size = 24,
  strokeWidth = 2,
  className = '',
  style = {},
  sizeClass = ''
}) {
  const ref = useRefIcon(null);
  useEffectIcon(() => {
    const lib = window.lucide;
    if (!ref.current || !lib) return;
    const node = resolveIconNode(name);
    if (!node) return;
    let svg;
    try {
      svg = lib.createElement(node);
    } catch (e) {
      return;
    }
    svg.setAttribute('width', sizeClass ? '100%' : size);
    svg.setAttribute('height', sizeClass ? '100%' : size);
    svg.setAttribute('stroke-width', strokeWidth);
    svg.setAttribute('class', 'lucide ' + className);
    ref.current.replaceChildren(svg);
  }, [name, size, strokeWidth, className, sizeClass]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    className: 'inline-flex items-center justify-center shrink-0 ' + sizeClass,
    style: sizeClass ? style : {
      width: size,
      height: size,
      ...style
    },
    "aria-hidden": "true"
  });
}
window.Icon = Icon;
})();
