<div className="min-h-screen bg-slate-950 text-slate-100 transition-colors duration-300 dark">
  <div className="mx-auto max-w-[1600px] px-4 pb-20 pt-6 sm:px-6 lg:px-8">
    <header className="glass-panel sticky top-4 z-40 rounded-full px-4 py-3 sm:px-5">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 via-indigo-500 to-cyan-400 shadow-lg shadow-violet-500/30">
            <span className="text-sm font-semibold text-white">S</span>
          </div>
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-slate-300 uppercase">StudioFlow</p>
          </div>
        </div>

        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          <a href="#features" className="transition hover:text-white">Features</a>
          <a href="#workspace" className="transition hover:text-white">Workspace</a>
          <a href="#pricing" className="transition hover:text-white">Pricing</a>
          <a href="#resources" className="transition hover:text-white">Resources</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="rounded-full border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm font-medium text-slate-200 transition hover:border-slate-500 hover:text-white">
            Log in
          </button>
          <button className="rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-600/30 transition hover:brightness-110">
            Create app
          </button>
        </div>
      </div>
    </header>

    <main className="pt-10 sm:pt-14">
      <section className="relative overflow-hidden rounded-[32px] border border-slate-800 bg-slate-950/80 p-5 shadow-glow sm:p-8 lg:p-12">
        <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
        <div className="absolute left-0 top-14 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" aria-hidden="true" />
        <div className="absolute right-12 top-10 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" aria-hidden="true" />

        <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1.5 text-xs font-medium text-violet-200">
              <span className="h-2 w-2 rounded-full bg-violet-400" />
              AI product studio for teams shipping faster
            </div>

            <h1 className="max-w-xl text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">
              Build beautiful products from a single idea.
            </h1>

            <p className="mt-5 max-w-lg text-base text-slate-300 sm:text-lg">
              Turn prompts into polished apps, iterate with AI, and launch in days with a workflow built for designers, founders, and product teams.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200">
                Start building free
              </button>
              <button className="rounded-full border border-slate-700 bg-slate-900/60 px-5 py-3 text-sm font-semibold text-white transition hover:border-slate-500">
                Watch demo
              </button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">✓</span>
                4.9/5 from teams shipping weekly
              </div>
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-500/15 text-cyan-300">∞</span>
                12k+ projects generated
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="glass-panel relative overflow-hidden rounded-[28px] p-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <span className="rounded-full border border-slate-700 bg-slate-900/70 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-slate-300">
                  Live preview
                </span>
              </div>

              <div className="mt-4 space-y-4">
                <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/80 p-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Prompt</p>
                    <p className="mt-1 text-sm text-slate-200">“Create a premium SaaS landing page...”</p>
                  </div>
                  <div className="rounded-full bg-violet-500/15 px-2 py-1 text-xs font-medium text-violet-200">Ready</div>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500" />
                      <div>
                        <p className="text-sm font-medium text-white">Nimbus Studio</p>
                        <p className="text-xs text-slate-400">AI-generated dashboard</p>
                      </div>
                    </div>
                    <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-[10px] text-emerald-300">Live</span>
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-xl bg-slate-800 p-3">
                      <div className="mb-2 h-24 rounded-lg bg-gradient-to-br from-violet-500/40 via-indigo-500/20 to-cyan-400/20" />
                      <div className="h-2 w-2/3 rounded bg-slate-700" />
                    </div>
                    <div className="space-y-3 rounded-xl bg-slate-800 p-3">
                      <div className="h-5 w-1/2 rounded bg-slate-700" />
                      <div className="h-3 w-3/4 rounded bg-slate-700" />
                      <div className="h-3 w-2/3 rounded bg-slate-700" />
                      <div className="mt-4 flex gap-2">
                        <div className="h-8 flex-1 rounded-lg bg-violet-500/60" />
                        <div className="h-8 w-8 rounded-lg bg-slate-700" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mt-16 grid gap-5 md:grid-cols-3">
        {[
          { title: 'Prompt to product', text: 'Describe the app you want and let AI generate the structure, copy, and UI in seconds.', accent: 'from-violet-500/20 to-indigo-500/10' },
          { title: 'Collaborative editing', text: 'Refine every screen with chat, code, and visual controls without losing context.', accent: 'from-cyan-500/20 to-sky-500/10' },
          { title: 'Ship with confidence', text: 'Instant previews, deploy hooks, and polished workflows keep teams moving fast.', accent: 'from-emerald-500/20 to-green-500/10' },
        ].map((card) => (
          <div key={card.title} className="rounded-[24px] border border-slate-800 bg-slate-900/70 p-5">
            <div className={`mb-4 h-12 w-12 rounded-2xl bg-gradient-to-br ${card.accent}`} />
            <h3 className="text-xl font-semibold text-white">{card.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">{card.text}</p>
          </div>
        ))}
      </section>

      <section id="workspace" className="mt-16 rounded-[32px] border border-slate-800 bg-slate-900/70 p-4 sm:p-6 lg:p-8">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-violet-300">Workspace</p>
            <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">A product studio built for iteration.</h2>
          </div>
          <div className="flex items-center gap-3">
            <button className="rounded-full border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-200">Share</button>
            <button className="rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 px-4 py-2 text-sm font-semibold text-white">Deploy</button>
          </div>
        </div>

        <div className="grid gap-5 xl:grid-cols-[260px_1fr_430px]">
          <aside className="rounded-[24px] border border-slate-800 bg-slate-950/80 p-4">
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Projects</p>
              <button className="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-200">New</button>
            </div>

            <div className="mt-4 space-y-3">
              {[
                { name: 'LaunchKit', active: true },
                { name: 'Northstar CRM' },
                { name: 'Orbit Dashboard' },
                { name: 'Muse Commerce' },
              ].map((item) => (
                <button
                  key={item.name}
                  className={`flex w-full items-center justify-between rounded-2xl border px-3 py-2.5 text-left transition ${
                    item.active
                      ? 'border-violet-500/40 bg-violet-500/10 text-white'
                      : 'border-slate-800 bg-slate-900/50 text-slate-300 hover:border-slate-700 hover:text-white'
                  }`}
                >
                  <span className="font-medium">{item.name}</span>
                  <span className="text-xs text-slate-400">v2</span>
                </button>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/65 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">AI status</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-slate-300">Model</span>
                <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-[10px] font-medium text-emerald-300">Online</span>
              </div>
              <div className="mt-4 h-2 rounded-full bg-slate-800">
                <div className="h-2 w-[82%] rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" />
              </div>
              <p className="mt-2 text-xs text-slate-400">82% of design system synced</p>
            </div>
          </aside>

          <div className="rounded-[24px] border border-slate-800 bg-slate-950/80 p-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Conversation</p>
                <h3 className="mt-1 text-lg font-semibold text-white">Studio assistant</h3>
              </div>
              <button className="rounded-full border border-slate-700 bg-slate-900 px-2.5 py-1.5 text-xs text-slate-200">Auto-generate</button>
            </div>

            <div className="mt-4 space-y-4">
              {[
                { role: 'assistant', text: 'I mapped the product experience to a premium SaaS landing page and polished the dashboard layout.', tone: 'bg-slate-900 text-slate-200' },
                { role: 'user', text: 'Make the project feel more editorial, with stronger spacing and more contrast on CTAs.', tone: 'bg-violet-500/10 text-violet-100 border border-violet-500/20' },
                { role: 'assistant', text: 'Done — I tightened the hierarchy, adjusted the glow palette, and refined the action buttons for a cleaner conversion flow.', tone: 'bg-slate-900 text-slate-200' },
              ].map((message) => (
                <div key={message.text} className={`rounded-2xl border border-slate-800 p-3 ${message.tone}`}>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">{message.role === 'user' ? 'You' : 'AI'}</p>
                  <p className="mt-2 text-sm leading-6 text-current">{message.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-slate-800 bg-slate-900/80 p-3">
              <textarea
                rows={3}
                defaultValue="Create a sharper hero section with stronger CTA hierarchy, softer glass panels, and fewer distractions."
                className="w-full resize-none bg-transparent text-sm text-slate-200 outline-none placeholder:text-slate-500"
              />
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  AI is ready
                </div>
                <button className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900">Send</button>
              </div>
            </div>
          </div>

          <aside className="space-y-5">
            <div className="rounded-[24px] border border-slate-800 bg-slate-950/80 p-4">
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Preview</p>
                <span className="rounded-full border border-slate-700 bg-slate-900 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-slate-300">Desktop</span>
              </div>

              <div className="mt-4 preview-card rounded-[22px] p-3">
                <div className="rounded-[18px] border border-slate-800 bg-slate-900 p-3">
                  <div className="flex items-center justify-between">
                    <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500" />
                    <div className="flex items-center gap-2">
                      <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                      <span className="text-[10px] text-slate-400">live</span>
                    </div>
                  </div>

                  <div className="mt-5 space-y-3">
                    <div className="h-3 w-2/3 rounded bg-slate-700" />
                    <div className="h-2.5 w-5/6 rounded bg-slate-700" />
                    <div className="h-10 w-full rounded-xl bg-gradient-to-r from-violet-500/80 to-indigo-500/80" />
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-2">
                    {Array.from({ length: 3 }).map((_, index) => (
                      <div key={index} className="rounded-xl border border-slate-800 bg-slate-800/90 p-2">
                        <div className="h-12 rounded-lg bg-gradient-to-br from-slate-700 to-slate-800" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[24px] border border-slate-800 bg-slate-950/80 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Metrics</p>
              <div className="mt-4 space-y-3">
                {[
                  { label: 'Design quality', value: '94%', tone: 'from-violet-500 to-indigo-500' },
                  { label: 'Launch readiness', value: '87%', tone: 'from-cyan-500 to-sky-500' },
                  { label: 'Engagement lift', value: '+28%', tone: 'from-emerald-500 to-green-500' },
                ].map((metric) => (
                  <div key={metric.label}>
                    <div className="mb-1 flex items-center justify-between text-sm text-slate-300">
                      <span>{metric.label}</span>
                      <span className="font-medium text-white">{metric.value}</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-800">
                      <div className={`h-2 rounded-full bg-gradient-to-r ${metric.tone}`} style={{ width: metric.value }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="pricing" className="mt-16">
        <div className="mb-8 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-violet-300">Plan</p>
          <h2 className="mt-2 text-3xl font-semibold text-white">Flexible pricing for product teams.</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {[
            { name: 'Starter', price: '$29', description: 'For freelancers and side projects.', features: ['3 active projects', 'AI prompts included', 'Basic analytics'] },
            { name: 'Pro', price: '$79', highlight: true, description: 'For product teams shipping often.', features: ['Unlimited projects', 'AI co-pilot workflows', 'Deploy hooks + custom themes'] },
            { name: 'Scale', price: '$199', description: 'For larger organizations.', features: ['Team workspaces', 'Advanced permissions', 'Dedicated onboarding'] },
          ].map((tier) => (
            <div key={tier.name} className={`rounded-[26px] border p-6 ${tier.highlight ? 'border-violet-500/40 bg-gradient-to-b from-violet-500/10 to-slate-900' : 'border-slate-800 bg-slate-900/70'}`}>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-400">{tier.name}</p>
              <div className="mt-6 flex items-end gap-2">
                <span className="text-4xl font-semibold text-white">{tier.price}</span>
                <span className="pb-1 text-sm text-slate-400">/mo</span>
              </div>
              <p className="mt-4 text-sm text-slate-300">{tier.description}</p>
              <ul className="mt-6 space-y-3 text-sm text-slate-200">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-violet-500/20 text-xs text-violet-200">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`mt-8 w-full rounded-full px-4 py-3 text-sm font-semibold ${tier.highlight ? 'bg-white text-slate-900' : 'border border-slate-700 bg-slate-950 text-white'}`}>
                Choose {tier.name}
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  </div>
</div>
