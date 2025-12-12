"use client"

export default function TechStack() {
  const techCategories = [
    {
      category: "Frontend",
      technologies: [
        { name: "React", logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
        { name: "Angular", logo: "https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg" },
        { name: "Vue", logo: "https://cdn.worldvectorlogo.com/logos/vue-9.svg" },
        { name: "Next.js", logo: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" },
        { name: "TypeScript", logo: "https://cdn.worldvectorlogo.com/logos/typescript.svg" },
        { name: "Tailwind CSS", logo: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg" },
      ],
    },
    {
      category: "Backend",
      technologies: [
        { name: "Node.js", logo: "https://cdn.worldvectorlogo.com/logos/nodejs-1.svg" },
        { name: "Python", logo: "https://cdn.worldvectorlogo.com/logos/python-5.svg" },
        { name: "Java", logo: "https://cdn.worldvectorlogo.com/logos/java-14.svg" },
        { name: ".NET", logo: "https://cdn.worldvectorlogo.com/logos/dotnet.svg" },
        { name: "Go", logo: "https://cdn.worldvectorlogo.com/logos/go-logo.svg" },
        { name: "PostgreSQL", logo: "https://cdn.worldvectorlogo.com/logos/postgresql.svg" },
      ],
    },
    {
      category: "Mobile",
      technologies: [
        { name: "Flutter", logo: "https://cdn.worldvectorlogo.com/logos/flutter.svg" },
        { name: "React Native", logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
        { name: "Kotlin", logo: "https://cdn.worldvectorlogo.com/logos/kotlin-1.svg" },
        { name: "Swift", logo: "https://cdn.worldvectorlogo.com/logos/swift-15.svg" },
        { name: "Xamarin", logo: "https://cdn.worldvectorlogo.com/logos/xamarin-1.svg" },
      ],
    },
    {
      category: "Cloud & DevOps",
      technologies: [
        { name: "AWS", logo: "https://cdn.worldvectorlogo.com/logos/aws-2.svg" },
        { name: "Azure", logo: "https://cdn.worldvectorlogo.com/logos/microsoft-azure-3.svg" },
        { name: "GCP", logo: "https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg" },
        { name: "Kubernetes", logo: "https://cdn.worldvectorlogo.com/logos/kubernetes.svg" },
        { name: "Docker", logo: "https://cdn.worldvectorlogo.com/logos/docker.svg" },
        { name: "CI/CD", logo: "https://cdn.worldvectorlogo.com/logos/github-actions.svg" },
      ],
    },
    {
      category: "AI & ML",
      technologies: [
        { name: "LLMs", logo: "https://cdn.worldvectorlogo.com/logos/openai-2.svg" },
        { name: "NLP", logo: "https://cdn.worldvectorlogo.com/logos/hugging-face.svg" },
        { name: "Computer Vision", logo: "https://cdn.worldvectorlogo.com/logos/tensorflow.svg" },
        { name: "TensorFlow", logo: "https://cdn.worldvectorlogo.com/logos/tensorflow.svg" },
        { name: "PyTorch", logo: "https://cdn.worldvectorlogo.com/logos/pytorch-2.svg" },
        { name: "scikit-learn", logo: "https://cdn.worldvectorlogo.com/logos/scikit-learn.svg" },
      ],
    },
    {
      category: "Integrations",
      technologies: [
        { name: "Stripe", logo: "https://cdn.worldvectorlogo.com/logos/stripe-2.svg" },
        { name: "Salesforce", logo: "https://cdn.worldvectorlogo.com/logos/salesforce-2.svg" },
        { name: "HubSpot", logo: "https://cdn.worldvectorlogo.com/logos/hubspot.svg" },
        { name: "Slack", logo: "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg" },
        { name: "AWS Lambda", logo: "https://cdn.worldvectorlogo.com/logos/aws-lambda-1.svg" },
        { name: "Zapier", logo: "https://cdn.worldvectorlogo.com/logos/zapier.svg" },
      ],
    },
  ]

  return (
    <section className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-dark text-balance">Modern Tech Stack</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Built with the latest technologies and best practices to deliver scalable, high-performance solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-light to-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-primary hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-6 bg-gradient-to-b from-primary to-primary/50 rounded-full" />
                <h3 className="text-xl font-bold text-dark">{category.category}</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {category.technologies.map((tech, tidx) => (
                  <div
                    key={tidx}
                    className="bg-light border border-gray-200 rounded-lg p-4 hover:border-primary hover:bg-primary/5 transition-all duration-300 flex flex-col items-center justify-center gap-2 group/item"
                  >
                    <img
                      src={tech.logo || "/placeholder.svg"}
                      alt={tech.name}
                      className="w-10 h-10 object-contain transform group-hover/item:scale-110 transition-transform"
                      onError={(e) => {
                        e.currentTarget.style.display = "none"
                      }}
                    />
                    <p className="text-sm font-semibold text-dark group-hover/item:text-primary transition-colors text-center">
                      {tech.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="mt-12 p-8 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl text-center">
          <p className="text-gray-700 font-medium">
            Constantly expanding our tech ecosystem. We stay updated with the latest frameworks, tools, and platforms to
            deliver cutting-edge solutions.
          </p>
        </div>
      </div>
    </section>
  )
}
