export function Overview() {
  return (
    <div className="space-y-6">
      <h2 className="text-4xl font-extrabold tracking-tight text-blue-950 dark:text-blue-100 font-serif text-center">
        Overview of the Internship
      </h2>
      <div className="space-y-6">
        <section className="space-y-3">
          <h3 className="text-2xl font-bold text-purple-900 dark:text-purple-300">Organization</h3>
          <p className="text-lg leading-relaxed text-gray-900 dark:text-gray-100">
            The internship was conducted at <span className="text-blue-800 dark:text-blue-300 font-medium">Tunisie Telecom</span>, a governmental entity under the Ministry of Communication and the leading telecommunications provider in Tunisia.
          </p>
        </section>

        <section className="space-y-3">
          <h3 className="text-2xl font-bold text-purple-900 dark:text-purple-300">Duration</h3>
          <p className="text-lg leading-relaxed text-gray-900 dark:text-gray-100">
            The internship spanned 5 weeks, starting from September 1, 2023, and concluding on October 7, 2023.
          </p>
        </section>

        <section className="space-y-3">
          <h3 className="text-2xl font-bold text-purple-900 dark:text-purple-300">Objectives</h3>
          <ul className="list-disc pl-5 space-y-2 text-lg leading-relaxed text-gray-900 dark:text-gray-100">
            <li>To understand the operational frameworks of <span className="text-blue-800 dark:text-blue-300 font-medium">system administration</span> and <span className="text-blue-800 dark:text-blue-300 font-medium">networking</span> in a professional environment and evaluate how they differ in a governmental setup compared to private sector practices.</li>
            <li>To gain hands-on experience in working with <span className="text-blue-800 dark:text-blue-300 font-medium">Active Directory</span> in a virtual environment, ensuring practical knowledge aligns with organizational requirements.</li>
            <li>To conduct research and simulations in <span className="text-blue-800 dark:text-blue-300 font-medium">cybersecurity</span> and networking, addressing challenges specific to public sector operations.</li>
            <li>To explore basic <span className="text-blue-800 dark:text-blue-300 font-medium">automation</span> concepts using Python and PowerShell, emphasizing efficiency in administrative tasks.</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

