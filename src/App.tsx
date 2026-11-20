import { Download, ExternalLink } from 'lucide-react'
import InkRidges from '@/components/ui/ink-ridges'
import RidgelineDitherFooter from '@/components/ui/ridgeline-dither-footer'

const SETUP_URL =
  'https://github.com/vishwamharitwal/autoaccount-site/releases/download/v3.1.1/AutoAccountAI-Setup-3.1.1.exe'
const RELEASES_URL =
  'https://github.com/vishwamharitwal/autoaccount-site/releases/tag/v3.1.1'

/** AutoAccount cream / ink / vermilion — matches site brand */
const FOOTER_PALETTE = {
  paper: '#FFFAF3',
  ink: '#1A1512',
  muted: '#6B5E54',
  line: '#E8DCC8',
  heart: '#F62440',
  tones: [
    '#FFFAF3',
    '#FFF2DB',
    '#E8D0B0',
    '#C4A07A',
    '#8A5A3A',
    '#4A2E1C',
    '#1A1512',
  ],
}

export default function App() {
  return (
    <div className="min-h-svh bg-cream text-ink">
      {/* —— Hero: ink ridges —— */}
      <InkRidges
        layers={4}
        seed={11}
        horizon={0.58}
        mist={0.55}
        drift={0.04}
        parallax={0.028}
        paintIn={2200}
        sun
        sunColor="#F62440"
        sunPosition={[0.82, 0.72]}
        sunSize={0.065}
        scrollDepth={0.4}
        inkColor="#1A1512"
        glow={0.5}
        clouds={0.28}
        birds={4}
        birdsEvery={16}
        grain={0.28}
        label="Ink mountain landscape behind AutoAccount AI"
        className="min-h-[100svh] w-full bg-cream text-ink"
      >
        <div className="flex min-h-[100svh] flex-col">
          <nav className="relative z-20 mx-auto flex w-full max-w-5xl items-center justify-between px-5 py-5 md:px-8">
            <div className="font-serif text-xl font-bold tracking-tight">
              AutoAccount <span className="text-accent">AI</span>
            </div>
            <a
              href="#download"
              className="text-sm font-semibold text-accent transition hover:text-accent-deep"
            >
              Download
            </a>
          </nav>

          <div className="relative z-20 mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-5 pb-20 pt-6 md:px-8">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              Bank PDF · AI · Tally
            </p>
            <h1 className="font-serif text-[clamp(2.75rem,9vw,5.25rem)] font-bold leading-[0.95] tracking-[-0.04em]">
              AutoAccount
              <br />
              <em className="not-italic text-accent">AI</em>
            </h1>
            <p className="mt-5 max-w-md text-base font-medium text-muted md:text-lg">
              Bank statement PDF → AI vouchers → seedha Tally Connect. CA aur
              business ke liye Windows desktop software.
            </p>
            <div
              id="download"
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href={SETUP_URL}
                className="inline-flex items-center gap-2 rounded-[10px] bg-accent px-5 py-3.5 text-base font-bold text-white shadow-[0_10px_28px_rgba(246,36,64,0.28)] transition hover:-translate-y-0.5 hover:bg-accent-deep"
              >
                <Download className="size-4" aria-hidden />
                Download for Windows
              </a>
              <a
                href={RELEASES_URL}
                className="inline-flex items-center gap-2 rounded-[10px] border-[1.5px] border-line bg-cream/70 px-5 py-3.5 text-base font-bold backdrop-blur-sm transition hover:border-muted"
              >
                Releases
                <ExternalLink className="size-3.5 opacity-60" aria-hidden />
              </a>
            </div>
            <p className="mt-4 text-sm text-muted">
              ~11 MB Setup · Windows 10/11 · Cloud API · Tally local 9000
            </p>
          </div>
        </div>
      </InkRidges>

      {/* —— How it works —— */}
      <section id="how" className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-20">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-accent">
          Flow
        </p>
        <h2 className="font-serif text-[clamp(1.75rem,4vw,2.4rem)] tracking-tight">
          Teen steps. Apne laptop pe.
        </h2>
        <p className="mt-3 max-w-xl text-muted">
          Cloud API statements process karti hai. Tally push hamesha local PC pe
          rehta hai.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3 md:gap-5">
          {[
            {
              n: '01',
              t: 'Install Setup',
              d: 'Download → Next → Finish. Desktop pe AutoAccount AI.',
            },
            {
              n: '02',
              t: 'API key in app',
              d: 'App kholo → Gemini key paste. Local Backend window ki zarurat nahi.',
            },
            {
              n: '03',
              t: 'Statement → Tally',
              d: 'PDF upload, vouchers check / split, Tally Connect (port 9000).',
            },
          ].map((s) => (
            <article
              key={s.n}
              className="rounded-[14px] border border-line bg-sand p-5 transition hover:-translate-y-0.5"
            >
              <div className="font-serif text-3xl font-bold leading-none text-accent">
                {s.n}
              </div>
              <h3 className="mt-2 text-lg font-semibold">{s.t}</h3>
              <p className="mt-1 text-sm text-muted">{s.d}</p>
            </article>
          ))}
        </div>
      </section>

      {/* —— Features band —— */}
      <section className="bg-ink text-[#F5EDE4]">
        <div className="mx-auto grid max-w-5xl gap-8 px-5 py-16 md:grid-cols-[1.2fr_1fr] md:items-center md:px-8 md:py-20">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-[#FF8A9A]">
              Kya milta hai
            </p>
            <h2 className="font-serif text-[clamp(1.75rem,4vw,2.4rem)] tracking-tight text-cream">
              Jo CA roz chahiye
            </h2>
            <p className="mt-3 max-w-md text-[rgba(245,237,228,0.72)]">
              Multi-bank PDF, AI grouping, split entries, Educational Tally
              dates, cloud classify.
            </p>
          </div>
          <ul className="space-y-0 text-[1.02rem]">
            {[
              'HDFC, Axis, SBI, ICICI, AU… layout detect',
              'Payment / Receipt / Contra + Tally groups',
              'Split: day / week / month / quarter / custom',
              'Tally Connect (localhost:9000)',
              'Gemini key UI me — server pe save',
            ].map((item) => (
              <li
                key={item}
                className="border-b border-[rgba(245,237,228,0.12)] py-2.5 before:mr-1 before:font-bold before:text-[#7DDBA8] before:content-['✓_']"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* —— Install —— */}
      <section
        id="install"
        className="bg-gradient-to-b from-cream to-sand px-5 py-16 md:px-8 md:py-20"
      >
        <div className="mx-auto max-w-5xl">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-accent">
            Install checklist
          </p>
          <h2 className="font-serif text-[clamp(1.75rem,4vw,2.4rem)] tracking-tight">
            Pehli baar setup
          </h2>
          <p className="mt-3 max-w-xl text-muted">
            Customer ko ye short list bhej do — WhatsApp pe bhi chal jati hai.
          </p>
          <ol className="mt-6 max-w-xl list-decimal space-y-2.5 pl-5 text-muted">
            <li>
              <strong className="text-ink">Setup.exe</strong> download + install
            </li>
            <li>
              <strong className="text-ink">AutoAccount AI</strong> kholo → Gemini
              API key save
            </li>
            <li>
              Key:{' '}
              <a
                className="font-semibold text-accent"
                href="https://aistudio.google.com/apikey"
              >
                aistudio.google.com/apikey
              </a>
            </li>
            <li>
              Tally open + port <strong className="text-ink">9000</strong>{' '}
              (Server / Both)
            </li>
            <li>Statement upload → vouchers → Tally Connect</li>
          </ol>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={SETUP_URL}
              className="inline-flex items-center gap-2 rounded-[10px] bg-accent px-5 py-3.5 font-bold text-white shadow-[0_10px_28px_rgba(246,36,64,0.28)] transition hover:bg-accent-deep"
            >
              <Download className="size-4" aria-hidden />
              Download Setup.exe
            </a>
            <a
              href={RELEASES_URL}
              className="inline-flex items-center gap-2 rounded-[10px] border-[1.5px] border-line px-5 py-3.5 font-bold transition hover:border-muted"
            >
              Open GitHub Releases
            </a>
          </div>
        </div>
      </section>

      {/* —— Footer: dither ridges —— */}
      <RidgelineDitherFooter
        preset="sepia"
        palette={FOOTER_PALETTE}
        seed={11}
        ridges={6}
        mist={0.75}
        drift={0.9}
        name="AutoAccount AI"
        brandHref="#download"
        tagline="Bank statement PDF → AI vouchers → Tally Connect. Built for Indian CAs."
        columns={[
          {
            title: 'Product',
            links: [
              { label: 'How it works', href: '#how' },
              { label: 'Download', href: '#download', badge: '3.1' },
              { label: 'Install guide', href: '#install' },
            ],
          },
          {
            title: 'Resources',
            links: [
              { label: 'Releases', href: RELEASES_URL },
              {
                label: 'Gemini API key',
                href: 'https://aistudio.google.com/apikey',
              },
              {
                label: 'Python.org',
                href: 'https://www.python.org/downloads/',
              },
            ],
          },
          {
            title: 'Connect',
            links: [
              {
                label: 'GitHub',
                href: 'https://github.com/vishwamharitwal/autoaccount-site',
              },
              {
                label: 'All releases',
                href: 'https://github.com/vishwamharitwal/autoaccount-site/releases',
              },
            ],
          },
        ]}
        socials={[
          {
            icon: 'github',
            href: 'https://github.com/vishwamharitwal/autoaccount-site',
            label: 'GitHub',
          },
        ]}
        copyright={`© ${new Date().getFullYear()} AutoAccount AI. All rights reserved.`}
        credit={null}
        height="620px"
        sceneMinHeight="240px"
        fontFamily='"Source Sans 3", system-ui, sans-serif'
        monoFamily='"JetBrains Mono", ui-monospace, monospace'
      />
    </div>
  )
}
