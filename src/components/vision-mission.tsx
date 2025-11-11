export default function VisionMission() {
    return (
      /* Added animations to vision and mission cards */
      <section id="vision" className="py-20 px-4 bg-secondary/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-slide-up">Vision & Mission</h2>
            <div
              className="w-16 h-1 bg-accent mx-auto animate-scale-in"
              style={{ animationDelay: "0.1s", animationFillMode: "both" }}
            ></div>
          </div>
  
          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision */}
            <div
              className="bg-white rounded-lg p-8 shadow-sm border border-border animate-slide-up"
              style={{ animationDelay: "0.2s", animationFillMode: "both" }}
            >
              <div className="mb-4">
                <div className="inline-block bg-primary text-primary-foreground rounded-full px-4 py-2 text-sm font-semibold">
                  Our Vision
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Be the Leading Life Insurance Team in Great Eastern Malaysia
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                We aspire to be recognized as the most trusted and innovative financial services team in Great Eastern
                Malaysia, setting the standard for excellence in wealth management and life insurance solutions.
              </p>
            </div>
  
            {/* Mission */}
            <div
              className="bg-white rounded-lg p-8 shadow-sm border border-border animate-scale-in"
              style={{ animationDelay: "0.3s", animationFillMode: "both" }}
            >
              <div className="mb-4">
                <div className="inline-block bg-accent text-accent-foreground rounded-full px-4 py-2 text-sm font-semibold">
                  Our Mission
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Our Commitment to You</h3>
              <ul className="space-y-4">
                <li className="flex gap-3 animate-slide-up" style={{ animationDelay: "0.3s", animationFillMode: "both" }}>
                  <span className="text-accent font-bold flex-shrink-0">•</span>
                  <span className="text-foreground/70">
                    Offer security and happiness to our clients through quality financial services & solutions
                  </span>
                </li>
                <li className="flex gap-3 animate-slide-up" style={{ animationDelay: "0.4s", animationFillMode: "both" }}>
                  <span className="text-accent font-bold flex-shrink-0">•</span>
                  <span className="text-foreground/70">
                    Provide career success to our teammates so they can live their desired lifestyle
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
  