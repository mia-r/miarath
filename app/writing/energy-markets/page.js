"use client";
import Link from "next/link";

export default function Article() {
  return (
    <main className="article-root">
      <nav className="article-nav">
        <Link href="/" className="back-link">← miarath.com</Link>
      </nav>

      <article className="article">
        <header className="article-header">
          <div className="article-meta">
            <span className="article-tag">energy</span>
            <span className="article-date">2026</span>
          </div>
          <h1 className="article-title">
            The Weirdest Market You Depend On Every Day. Spoiler: It's Energy
          </h1>
          <p className="article-subtitle">Fair warning: this one is long. But honestly, the market earned it.</p>
        </header>

        <div className="article-body">

          <p>I founded a hardware startup building large-scale hydrogen batteries for commercial behind-the-meter applications. Technically I didn&apos;t need to understand the wholesale energy markets. But they kept showing up at the edges of everything we were doing, and I couldn&apos;t leave it alone.</p>

          <p>What I found was one of the most fragmented, counterintuitive, and frankly fascinating market structures in the American economy. Nobody hands you a guide. You just start asking questions and slowly realize how deep the rabbit hole goes. This is my attempt to write the guide I wish I had.</p>

          <hr />

          <h2>Why energy markets exist at all</h2>

          <figure className="article-figure">
            <img src="/trading-floor.webp" alt="Enron's actual energy trading floor in the 1990's. Insane." className="article-image" />
            <figcaption className="article-caption">Enron's actual energy trading floor in the 1990's. Insane.</figcaption>
          </figure>

          <p>For most of the 20th century, electricity in the US wasn&apos;t a market. It was a regulated monopoly. One utility owned the power plants, the transmission lines, and the distribution network in a given territory. The government set the prices. You had no choice of provider.</p>

          <p>This worked, sort of, until it didn&apos;t. By the 1970s and 80s, electricity rates varied wildly across the country with no obvious relationship to actual costs. The oil shocks made everyone aware that energy was strategically critical in ways that cozy monopoly arrangements weren&apos;t built to handle. And economists had been making a compelling argument for years: generation (making power) is fundamentally different from transmission (moving it), and generation could be competitive even if the wires stayed a regulated monopoly.</p>

          <p>Congress cracked the door open with PURPA in 1978, forcing utilities to buy power from independent generators for the first time. FERC kicked it wide open in the 1990s, requiring utilities to open their transmission lines to competitors and encouraging the formation of independent regional organizations to manage shared infrastructure neutrally. An advisor to my company actually traded energy in California right when this was happening and made a lot of money doing it. The rules were so new and full of holes that sophisticated traders could just print money if they understood the physical grid better than everyone else. Enron understood this so well they named their strategies things like &quot;Death Star&quot; and &quot;Fat Boy&quot;: artificially withholding power to spike prices, submitting fake supply and demand information, deliberately overloading transmission lines and then getting paid to relieve them. It worked spectacularly until the whole thing collapsed in one of the largest accounting frauds in US history.</p>


          <p>That&apos;s where ISOs and RTOs came from. You need a neutral party to run the grid when many generators are competing across shared wires. That party designs the markets, dispatches generation in real time, and keeps the lights on throughout. The whole structure below flows from that one institutional decision.</p>

          <hr />

          <h2>First: the market runs on power, not energy</h2>

          <p>Most people use &quot;power&quot; and &quot;energy&quot; interchangeably and it drives me a little crazy, because they are genuinely completely different things.</p>

          <p>Energy is the total amount of work done, measured in watt-hours (Wh) or megawatt-hours (MWh). Power is the <em>rate</em> at which that work is done, measured in watts (W) or megawatts (MW). Energy is how much. Power is how fast.</p>

          <p>When you get your home electricity bill, you&apos;re paying for energy: the kilowatt-hours you consumed over the month. But the grid doesn&apos;t actually trade energy. It trades <strong>power</strong>, the instantaneous rate of delivery, every five minutes, right now. The grid has to be balanced at every moment. Storage exists but it's a rounding error compared to total demand. For all practical purposes, what's generated right now has to equal what's consumed right now.</p>

          <p>This shapes everything about how these markets are designed. The entire structure of ISOs, real-time pricing, and ancillary services exists because the product being sold is fundamentally time-sensitive in a way that almost no other commodity is. Miss the delivery window by five minutes and the lights literally go out.</p>

          <hr />

          <h2>There is no single US energy market</h2>

          <p>When people say &quot;the energy market&quot; they&apos;re usually picturing something like the stock market: one central place where prices are set and trades happen. That&apos;s not what exists.</p>

          <p>The US electricity grid is carved up into regions, each run by an ISO or RTO. Each one has its own rules, its own quirks, and its own culture.</p>

          <figure className="article-figure">
            <img src="/FERCmap.png" alt="FERC map of US ISO and RTO regions" className="article-image" />
            <figcaption className="article-caption">The official FERC map of US grid regions. The patchwork says everything.</figcaption>
          </figure>

          <p>And the US isn&apos;t even the most extreme example of this. Japan never fully unified its grid frequency. The eastern half of the country, Tokyo and the northeast, runs at 50 Hz. The western half, Osaka, Kyoto, Hiroshima, runs at 60 Hz. This split dates back to the 1800s when eastern Japan imported German generators (50 Hz) and western Japan imported American ones (60 Hz). They never fixed it. During the Fukushima disaster in 2011, Japan couldn&apos;t easily move surplus power from west to east because the grids literally run at different speeds: a century-old infrastructure decision that became a crisis constraint in real time. Legacy grid decisions have very long tails.</p>

          <p>Here are the main US regions:</p>

          <p><strong>PJM</strong> covers the Mid-Atlantic and parts of the Midwest. Pennsylvania, New Jersey, Maryland, that&apos;s where the name comes from. It&apos;s the largest by load, the most liquid, and the most studied market in the country. If energy traders talk about &quot;the market,&quot; they often mean PJM.</p>

          <p><strong>CAISO</strong> is California, running its own world as California tends to do. It&apos;s been at the forefront of integrating renewables, which means it&apos;s also been at the forefront of the weird pricing problems renewables create: negative prices, the famous duck curve, mass curtailment. If you want to understand where the grid is going, watch CAISO.</p>

          <p><strong>ERCOT</strong> is Texas, and it&apos;s the famous one. ERCOT is almost entirely islanded; it doesn&apos;t connect meaningfully to the Eastern or Western Interconnection. This was a deliberate choice to avoid federal regulation. The tradeoff, as the world discovered during Winter Storm Uri in 2021, is that Texas has no backstop when things go wrong. ERCOT is also the most &quot;pure&quot; market in the country. Prices can spike to $9,000/MWh, which creates enormous opportunity and enormous risk in equal measure.</p>

          <p><strong>MISO</strong> covers a big chunk of the middle of the country from Minnesota down through Louisiana. Less glamorous than PJM or ERCOT, but enormous. It has a lot of wind generation and a lot of transmission constraints, making it good territory for studying the logistics of moving power across long distances.</p>

          <p><strong>SPP</strong> (Southwest Power Pool) covers the Great Plains and is very wind-heavy. SPP only launched its full marketplace in 2014, which makes it relatively young and still evolving.</p>

          <p><strong>NYISO</strong> is New York: its own island, with a market structure shaped by the fact that NYC is a massive load pocket with limited transmission in. Prices in New York City can diverge dramatically from prices upstate.</p>

          <p><strong>ISO-NE</strong> covers New England: small, cold, and heavily dependent on natural gas. Gas pipelines into the region are constrained, so during cold snaps when heating demand and power generation are competing for the same gas supply, prices spike hard and fast.</p>

          <p>Then there&apos;s the rest of the country. The Southeast and most of the Northwest are largely still regulated, meaning traditional utilities set prices and there&apos;s no real competitive market. The Southeast in particular has resisted restructuring for decades.</p>

          <hr />
          <h2>So who&apos;s actually trading?</h2>

<p>The ISO runs the market, but who&apos;s actually in it?</p>

<p><strong>Generators</strong> are the sellers. Independent power producers, merchant gas plants, wind and solar developers. They submit offers into the day-ahead and real-time markets and get paid when the ISO dispatches them.</p>

<p><strong>Load serving entities (LSEs)</strong> are the main buyers. Utilities and retail electricity providers submitting bids to buy power to serve their customers. Your utility isn&apos;t generating the power it sells you in a deregulated market, it&apos;s procuring it here.</p>

<p><strong>Traders</strong> are the interesting ones. Banks, hedge funds, and dedicated energy trading firms that buy and sell power financially without ever touching an electron. Goldman Sachs and Morgan Stanley both had enormous energy trading desks. Post-Enron regulations clipped their wings a bit, but proprietary trading is still a significant part of these markets.</p>

<p><strong>Marketers and schedulers</strong> buy power in one location and sell it in another, essentially arbitraging price differences across the grid created by congestion.</p>

<p>The ISO itself doesn&apos;t trade. It runs the auction, clears prices, and dispatches generation. It&apos;s the referee, not a player.</p>

<p>The thing that struck me about all of this is that in PJM or ERCOT, a wind farm in west Texas and a Goldman trading desk are participating in the same market simultaneously, with completely different motivations. The generator wants to recover its costs. The trader wants to profit on price movements. The utility wants cheap power for its customers. The ISO just wants the lights to stay on. It somehow works, most of the time.</p>
          <h2>The markets within the markets</h2>

          <p>Within each ISO, there isn&apos;t just one market. There are several, running simultaneously, for different products. Understanding the difference between them is key to understanding how the grid actually stays on.</p>

          <h3>The day-ahead market</h3>

          <p>Every day, generators and buyers submit bids and offers for every hour of the <em>following</em> day. The ISO runs an optimization to figure out the cheapest way to serve expected demand, clears prices for each hour, and commits generators to run. Day-ahead prices are the benchmark most people think of when they talk about electricity prices. They&apos;re predictable enough that large buyers can plan around them.</p>

          <h3>The real-time market</h3>

          <p>The day-ahead forecast is never exactly right. Demand changes. A generator trips offline. Wind picks up or dies. So there&apos;s also a real-time market, operating in 5-minute intervals, where the ISO balances supply and demand in the actual moment.</p>

          <p>Real-time prices are more volatile. Sometimes they&apos;re lower than day-ahead if unexpected wind came online. Sometimes they&apos;re dramatically higher if a large generator suddenly fails. In ERCOT during Uri, real-time prices hit the $9,000/MWh cap and stayed there for days.</p>

          <p>Most market participants try to hedge their real-time exposure by locking in day-ahead prices. The difference between what you locked in day-ahead and what actually happened in real-time is called <strong>basis risk</strong>, and managing it is a significant part of being a sophisticated energy market participant.</p>

          <h3>Ancillary services markets</h3>

          <p>This is the stuff that genuinely surprised me. Beyond energy itself, ISOs also run markets for <em>grid services</em>: products that keep the grid stable and reliable, entirely separate from just generating power.</p>

          <p><strong>Frequency regulation</strong> is the big one. The AC grid runs at exactly 60 Hz. If generation and load get out of balance even slightly, frequency drifts. Too low, and generators trip offline. To maintain frequency, the ISO needs resources that can respond within <em>seconds</em>, injecting or absorbing power almost instantly. Generators and batteries that can do this get paid for being <em>available</em> to respond, whether or not they&apos;re actually called on.</p>

          <p><strong>Spinning reserves</strong> are generators that are online and synchronized to the grid but not at full output, ready to ramp up within 10 minutes. <strong>Non-spinning reserves</strong> can take up to 30 minutes. Both are paid for availability, not just delivery.</p>

          <p>Why does this matter practically? Because ancillary services can be highly valuable, sometimes more valuable per unit than energy itself. A battery that responds in milliseconds to frequency deviations gets paid for that speed, in a separate market, on top of whatever it earns buying and selling energy. Most people only see the energy market and miss everything sitting on top of it.</p>

          <h3>The capacity market</h3>

          <p>The most abstract layer. The problem it&apos;s solving is real: if you only pay generators for the energy they produce, you might not have enough generation available when demand peaks. A generator that only runs 50 hours a year during heat waves may not recover its fixed costs from energy sales alone, so it shuts down. Then the next heat wave comes and there&apos;s not enough capacity.</p>

          <p>The capacity market pays generators simply for <em>existing and being available</em> during peak periods. PJM&apos;s capacity market is the most developed and most controversial in the country. Critics argue it&apos;s a subsidy to old fossil fuel plants. Defenders argue it&apos;s the only thing keeping the lights on during stress events. Both have a point.</p>

          <p>ERCOT has no capacity market. It relies on high real-time prices to incentivize capacity investment. The theory: if scarcity is valuable enough, the market will provide it. The jury is permanently out on whether this works.</p>

          <h3>A note on where this is heading</h3>

          <p>All of these markets were designed around one assumption: that storage is basically limited to a few hours. A lithium battery can charge and discharge in a 4-hour window, which fits neatly into existing market structures. But companies like Form Energy are building iron-air batteries designed for 100-hour discharge. That&apos;s not a battery play, that&apos;s closer to a fuel tank. The implicit bet is that as renewable penetration keeps climbing, the grid will need days-long storage, not just hours-long, and that markets will eventually have to evolve to compensate sustained energy delivery over time and not just instantaneous power. FERC and the ISOs are already starting to wrestle with what that looks like. The market structure itself may be at an inflection point.</p>


          <hr />

          <h2>Why the same electron costs different amounts in different places</h2>

          <p>Electricity prices aren&apos;t uniform across a grid. The same megawatt-hour has a different price depending on <em>where</em> on the grid it&apos;s consumed or generated. This system is called <strong>locational marginal pricing</strong>, or LMP.</p>

          <p>The reason is physics. Electricity flows on the path of least resistance, not the most convenient route. When transmission lines get congested, more power trying to flow through them than they can handle, it gets expensive to move power from where it&apos;s cheap to where it&apos;s needed. The price at a congested location rises above the unconstrained area by the cost of that congestion.</p>

          <p>This creates a map of prices across the grid that changes every five minutes. On a calm spring day with lots of wind and mild demand, prices are low and relatively uniform. On a hot summer afternoon with strained transmission, prices diverge dramatically. You can have negative prices in one location (too much solar, nowhere to send it) and $200/MWh prices 200 miles away simultaneously, both real, both happening at the same moment.</p>

          <figure className="article-figure">
            <img src="/lmpmap.jpg" alt="Real-time LMP price map showing price gradient across the grid" className="article-image" />
            <figcaption className="article-caption">A real-time LMP price map. Blue is cheap (note: even negative sometimes). Red is expensive. Both are happening at the same moment.</figcaption>
          </figure>

          <p>LMP has three components: the <strong>energy component</strong> (the system-wide cost to generate the next megawatt-hour), the <strong>congestion component</strong> (the cost of transmission constraints), and the <strong>loss component</strong> (accounting for power lost as heat during transmission). If you&apos;re building anything that connects to the grid, knowing which node you&apos;re on and understanding its price history is table stakes.</p>

          <hr />

          <h2>Accessing these markets is its own ordeal</h2>

          <p>Nobody warns you that even <em>reading</em> the data is its own nightmare.</p>

          <p>Each ISO publishes its own data in its own format, on its own portal, with its own update cadence. Go ahead and click through some of these and just feel the vibes:</p>

          <p>PJM has something called <a href="https://dataminer2.pjm.com/" target="_blank" rel="noopener noreferrer">Data Miner 2</a>. The name alone should tell you something. It looks like it was designed in 2003 (because parts of it were), and non-members are rate-limited to 6 API calls per minute. Six.</p>

          <p>CAISO has a system called <a href="https://oasis.caiso.com/" target="_blank" rel="noopener noreferrer">OASIS</a>, which stands for Open Access Same-Time Information System. The acronym is doing a lot of work. The actual experience of using it is closer to the opposite of what that name implies.</p>

          <p>ERCOT has the <a href="https://data.ercot.com" target="_blank" rel="noopener noreferrer">MIS portal</a>, which is fine until you need anything beyond basic public data, at which point you&apos;ll need a digital certificate, a registered entity agreement, and a medium-to-high tolerance for bureaucratic friction.</p>

          <p>NYISO and ISO-NE both have their own portals with their own quirks. None of them talk to each other. None of them use the same data formats. All of them assume you already know what you&apos;re looking for.</p>

          <p>If you want to pull real-time LMP data across multiple ISOs to compare prices, you are in for a genuinely unpleasant engineering project. Each ISO requires its own integration, its own parsing logic, its own handling of the weird edge cases their systems produce.</p>

          <p>This is part of why I want to flag <a href="https://gridstatus.io" target="_blank" rel="noopener noreferrer">gridstatus.io</a> as a resource worth knowing about. It&apos;s a Python library and data platform that normalizes data across ISOs into a consistent format. It won&apos;t solve every problem, but it&apos;s a real relief compared to building direct integrations yourself, and it&apos;s one of the better examples of the tooling this space badly needs more of.</p>

          <p>The fact that market access is this hard is not an accident. These systems were built incrementally over decades by utilities and ISOs that didn&apos;t prioritize developer experience. If you&apos;re used to financial markets, where you can pull historical data for any instrument in a few API calls, the energy market data landscape will feel like a different era entirely.</p>

          <hr />

          <h2>AI&apos;s load demand is about to make all of this much stranger</h2>

          <p>Everything I&apos;ve described was built for a world where demand is relatively predictable. Utilities could forecast load pretty well by season, time of day, and weather. Market rules were written around those forecasts.</p>

          <p>AI data centers are starting to break those assumptions.</p>

          <p>A large model training run can consume hundreds of megawatts for days or weeks at a time, then stop. Inference clusters ramp up and down with user demand in ways that don&apos;t follow any historical pattern utilities have seen before. And the scale of new data center construction being announced is genuinely without precedent in the history of grid planning.</p>

          <p>Trump said it directly in his State of the Union: data centers are probably going to need to provide their own energy, because the grid and the markets that govern it simply move too slowly to keep up. Interconnection queues, the process for connecting new generation to the grid, are backed up for years. Transmission permitting takes a decade. Capacity market timelines are measured in years, not months.</p>

          <p>This is the structural tension: AI compute demand is fast and lumpy. Energy infrastructure is slow and continuous. The market rules that exist were not written for this collision.</p>

          <p>What happens next is genuinely unclear. Some hyperscalers are already contracting directly for dedicated generation, effectively building private grids. Some are co-locating with nuclear plants to get firm, carbon-free power outside the market entirely. FERC is scrambling to reform interconnection rules. ISOs are trying to figure out how to model data center load in their forecasts.</p>

          <figure className="article-figure">
            <img src="/datacenter.jpeg" alt="Aerial view of a data center under construction next to a power substation" className="article-image" />
            <figcaption className="article-caption">A hyperscaler data center under construction next to a power substation. This is the collision.</figcaption>
          </figure>

          <p>The energy market, already one of the stranger corners of the American economy, is about to get a lot stranger. If you&apos;re building anything at the intersection of power and compute right now, this isn&apos;t just useful background. It&apos;s the terrain you&apos;re operating in.</p>

          <hr />

          <p className="article-footnote">I&apos;m still learning. If you&apos;re building in this space and want to compare notes, let's chat.</p>

        </div>
      </article>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Fraunces:ital,wght@0,300;0,400;1,300;1,400&family=DM+Mono:wght@400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg: #f5f0e8;
          --border: #d8d0c0;
          --text: #18140e;
          --muted: #8a8070;
          --accent: #e8704a;
        }

        body {
          background: var(--bg);
          color: var(--text);
          font-family: 'DM Mono', monospace;
        }

        .article-root {
          max-width: 680px;
          margin: 0 auto;
          padding: 2rem 1.5rem 6rem;
        }

        .article-nav {
          padding: 1.5rem 0 3rem;
        }

        .back-link {
          font-size: 0.72rem;
          color: var(--muted);
          text-decoration: none;
          letter-spacing: 0.05em;
          transition: color 0.15s;
        }
        .back-link:hover { color: var(--accent); }

        .article-header {
          margin-bottom: 3rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid var(--border);
        }

        .article-meta {
          display: flex;
          gap: 0.5rem;
          align-items: center;
          margin-bottom: 1.25rem;
        }

        .article-tag {
          font-size: 0.6rem;
          color: var(--muted);
          border: 1px solid var(--border);
          padding: 0.15rem 0.5rem;
        }

        .article-date {
          font-size: 0.6rem;
          color: var(--muted);
          margin-left: 0.25rem;
        }

        .article-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2rem, 6vw, 3.5rem);
          line-height: 1.05;
          letter-spacing: 0.02em;
          color: var(--text);
          margin-bottom: 1rem;
        }

        .article-subtitle {
          font-family: 'Fraunces', serif;
          font-style: italic;
          font-size: 1rem;
          color: var(--muted);
          line-height: 1.6;
        }

        .article-body p {
          font-family: 'Fraunces', serif;
          font-size: 1.05rem;
          line-height: 1.85;
          color: #3a3028;
          margin-bottom: 1.5rem;
        }

        .article-body h2 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.4rem;
          letter-spacing: 0.1em;
          color: var(--accent);
          margin: 3rem 0 1.5rem;
        }

        .article-body h3 {
          font-family: 'DM Mono', monospace;
          font-size: 0.75rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--muted);
          margin: 2.5rem 0 1rem;
        }

        .article-body hr {
          border: none;
          border-top: 1px solid var(--border);
          margin: 2.5rem 0;
        }

        .article-body strong {
          font-weight: 500;
          color: var(--text);
        }

        .article-body em {
          font-style: italic;
        }

        .article-body a {
          color: var(--accent);
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        .article-image {
          width: 100%;
          height: auto;
          border: 1px solid var(--border);
          display: block;
        }

        .article-figure {
          margin: 1.5rem 0 2rem;
        }

        .article-caption {
          font-family: 'DM Mono', monospace;
          font-size: 0.68rem;
          color: var(--muted);
          font-style: italic;
          margin-top: 0.5rem;
          display: block;
        }

        .article-image--small {
          max-width: 320px;
        }

        .article-footnote {
          font-family: 'DM Mono', monospace !important;
          font-size: 0.75rem !important;
          color: var(--muted) !important;
          font-style: italic;
        }
      `}</style>
    </main>
  );
}