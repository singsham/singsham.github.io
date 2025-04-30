function About() {
  return (
    <div className="text-white">
      <h2 className="text-2xl font-roboto mb-2">About Me</h2>
      <p>
        I am a Full Stack Developer with over 8 years of experience, specializing in frontend technologies like Angular
        and React, and backend development using Python's httpio web framework. I also have hands-on experience with
        DevOps tools and Java.
      </p>

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
      <h2 className="text-2xl font-semibold mb-2">Skills</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>Frontend: React, Angular</li>
        <li>Backend: Python (httpio web framework), Java</li>
        <li>DevOps: Basic experience with CI/CD pipelines and tooling</li>
        <li>Other: Git, REST APIs, Agile methodologies</li>
      </ul>
    </div>
  );
}
export default About;
