import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>PR Agent Test</title>
        <meta name="description" content="Testing PR agent setup" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        <main>
          <h1>Testing PR Agent</h1>
          <p>This is a dummy change to test the PR-agent CI/CD pipeline.</p>
        </main>
      </div>
    </>
  )
}
