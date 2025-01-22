import Head from "next/head"

const testData = [
  { id: 1, title: "Feature A", description: "Description for Feature A" },
  { id: 2, title: "Feature B", description: "Description for Feature B" },
  { id: 3, title: "Feature C", description: "Description for Feature C" },
]

export default function Home() {
  return (
    <>
      <Head>
        <title>PR Agent Test</title>
        <meta name="description" content="Testing PR agent with dynamic data" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        <main>
          <h1>Testing PR Agent</h1>
          <p>This page dynamically renders a list using map().</p>
          <ul>
            {testData.map((item) => (
              <li key={item.id}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </>
  )
}
