export default function About() {
    return (
      /* Added animations to about section */
      <section id="about" className="py-20 px-4 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-slide-up">About Winning As One</h2>
            <div
              className="w-16 h-1 bg-accent mx-auto mb-8 animate-scale-in"
              style={{ animationDelay: "0.1s", animationFillMode: "both" }}
            ></div>
            <p
              className="text-lg text-foreground/70 max-w-2xl mx-auto animate-fade-in"
              style={{ animationDelay: "0.2s", animationFillMode: "both" }}
            >
              We are a dedicated team of financial professionals committed to helping individuals and families achieve
              their financial goals through comprehensive and personalized solutions.
            </p>
          </div>
  
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
              <h3 className="text-2xl font-bold text-foreground mb-4">Who We Are</h3>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                Winning As One represents a collective of expert advisors based in Great Eastern Malaysia, dedicated to
                transforming lives through intelligent financial planning.
              </p>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                Our team combines years of industry experience with a genuine commitment to understanding each clients
                unique circumstances and aspirations.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                We believe in the power of teamwork and collective wisdom to create financial solutions that truly matter.
              </p>
            </div>
  
            <div
              className="bg-secondary/30 rounded-lg p-8 animate-scale-in"
              style={{ animationDelay: "0.3s", animationFillMode: "both" }}
            >
              <div className="space-y-4">
                <div
                  className="flex gap-4 animate-slide-up"
                  style={{ animationDelay: "0.3s", animationFillMode: "both" }}
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent text-accent-foreground">
                      <span className="text-lg font-bold">✓</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">Expert Team</h4>
                    <p className="text-foreground/60">Highly qualified financial professionals</p>
                  </div>
                </div>
                <div
                  className="flex gap-4 animate-slide-up"
                  style={{ animationDelay: "0.4s", animationFillMode: "both" }}
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent text-accent-foreground">
                      <span className="text-lg font-bold">✓</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">Personalized Solutions</h4>
                    <p className="text-foreground/60">Tailored to your unique needs</p>
                  </div>
                </div>
                <div
                  className="flex gap-4 animate-slide-up"
                  style={{ animationDelay: "0.5s", animationFillMode: "both" }}
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent text-accent-foreground">
                      <span className="text-lg font-bold">✓</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">Trusted Partner</h4>
                    <p className="text-foreground/60">Your financial peace of mind matters</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }