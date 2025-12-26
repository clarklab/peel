export default function Page() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="font-display text-5xl font-semibold tracking-tight text-olive-950 sm:text-6xl dark:text-white">
          Coming soon.
        </h1>
        <p className="mt-6 text-lg text-olive-700 dark:text-olive-400">
          We're working on documentation for Peel. In the meantime, if you want to chat, reach out to{' '}
          <a
            href="mailto:clark@superfun.team"
            className="font-medium text-olive-950 underline underline-offset-4 hover:no-underline dark:text-white"
          >
            clark@superfun.team
          </a>
        </p>
      </div>
    </section>
  )
}
