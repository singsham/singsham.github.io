import "./App.css";

function App() {
  return (
    <div className="p-6 max-w-3xl mx-auto font-sans text-gray-800">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold">Shambu Singh</h1>
        <p className="text-lg text-gray-600">Full Stack Developer | M.Tech | 8+ Years Experience</p>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        <p>
          I am a Full Stack Developer with over 8 years of experience, specializing in frontend technologies like
          Angular and React, and backend development using Python's httpio web framework. I also have hands-on
          experience with DevOps tools and Java.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Professional Experience</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>EY India</strong> – Worked in the Supply Chain domain, delivering scalable and efficient web
            solutions.
          </li>
          <li>
            <strong>Wipro</strong> – Developed and maintained medical applications, including tools like HUB and ECG for
            an HP client.
          </li>
          <li>Contributed to several other internal tools and projects across multiple domains.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Skills</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Frontend: React, Angular</li>
          <li>Backend: Python (httpio web framework), Java</li>
          <li>DevOps: Basic experience with CI/CD pipelines and tooling</li>
          <li>Other: Git, REST APIs, Agile methodologies</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Contact</h2>
        <p>Email: your.email@example.com</p>
        <p>
          LinkedIn:{" "}
          <a href="https://linkedin.com/in/shambusingh" className="text-blue-600 underline">
            linkedin.com/in/shambusingh
          </a>
        </p>
      </section>
    </div>
  );
}

export default App;
