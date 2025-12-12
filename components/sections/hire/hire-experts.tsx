import { Button } from "@/components/ui/button"
import { Code, TrendingUp, Briefcase, Users, ArrowRight } from "lucide-react"
import Link from "next/link"

const expertGroups = [
  {
    icon: Code,
    title: "Hire Developers",
    description: "Build software, apps, or cloud systems with skilled developers.",
    roles: [
      "Dot NET developers",
      "Python developers",
      "MERN and MEAN developers",
      "Full stack developers",
      "React and Node developers",
      "Cloud engineers for AWS and Azure",
      "DevOps engineers",
      "QA testers",
      "AI and machine learning developers",
    ],
    result: "Faster development and stable product releases.",
    cta: "Explore Developer Roles",
    link: "/hire/dedicated-teams",
    image: "/software-developers-coding-on-computers.jpg",
  },
  {
    icon: TrendingUp,
    title: "Hire Digital Marketing Experts",
    description: "Grow your traffic, leads, and sales with trained marketers.",
    roles: [
      "SEO, SMO, and PPC experts",
      "Marketing automation experts",
      "Content writers and planners",
      "CRO and performance marketing experts",
      "Digital marketing consultants",
    ],
    result: "Higher ROI and lower cost per lead.",
    cta: "Explore Marketing Experts",
    link: "/hire/marketing-experts",
    image: "/digital-marketing-team-working-on-campaigns.jpg",
  },
  {
    icon: Briefcase,
    title: "Hire CXOs and Technology Leaders",
    description: "Get expert guidance without hiring a full-time leader.",
    roles: [
      "Virtual CTO",
      "Virtual CMO",
      "Product strategy consultants",
      "Business technology advisors",
      "Fractional leadership teams",
    ],
    result: "Better decisions and faster progress.",
    cta: "Explore Virtual Leadership",
    link: "/hire/virtual-cto",
    image: "/business-executives-in-meeting-discussing-strategy.jpg",
  },
  {
    icon: Users,
    title: "Hire Dedicated Teams",
    description: "If you need a full team instead of one person, we can build it for you.",
    roles: [
      "SaaS product team",
      "Web and cloud engineering team",
      "Mobile app team",
      "AI and data team",
      "Digital marketing team",
    ],
    result: "Faster delivery and no management stress.",
    cta: "Hire a Dedicated Team",
    link: "/hire/dedicated-teams",
    image: "/dedicated-software-team-working-together.jpg",
  },
]

export function HireExperts() {
  return (
    <section className="py-12 md:py-16 bg-light">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-6 text-balance">
            Hire From Our Expert Groups
          </h2>
          <p className="text-xl text-gray-600">We help you hire talent for engineering, marketing, and leadership</p>
        </div>

        <div className="space-y-16">
          {expertGroups.map((group, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <group.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-primary">0{index + 1}</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-dark mb-4">{group.title}</h3>
                <p className="text-lg text-gray-600 mb-6">{group.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-dark mb-3">Popular roles</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {group.roles.map((role, roleIndex) => (
                      <li key={roleIndex} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-sm text-gray-700">{role}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-primary/5 border-l-4 border-primary rounded-lg p-4 mb-6">
                  <p className="font-semibold text-sm text-dark mb-1">Result:</p>
                  <p className="text-sm text-gray-700">{group.result}</p>
                </div>

                <Link href={group.link}>
                  <Button
                    variant="outline"
                    className="border-2 border-dark text-dark hover:bg-gray-50 rounded-full px-8 py-6 text-base font-semibold bg-transparent"
                  >
                    {group.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={group.image || "/placeholder.svg"}
                    alt={group.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/20 to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
