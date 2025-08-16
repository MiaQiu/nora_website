export default function TimelineJourney() {
  const timelineStages = [
    {
      title: "Pregnancy Support",
      description: "Culturally competent care providers offer comfort and safety while needed following an earlier pregnancy loss.",
      position: "right"
    },
    {
      title: "Help with the Unexpected",
      description: "A helping hand when there's disrupted the bond between Martha and her young son; her doula along with a Cleo mental health expert helped them heal and reconnect.",
      position: "left"
    },
    {
      title: "Caregiver Support", 
      description: "Amy is a caregiver for her husband and needed help planning for the future and his declining health. She received help connecting with an attorney, scheduling a home safety assessment, and mental health support herself and husband.",
      position: "right"
    },
    {
      title: "Parental Wellbeing",
      description: "Moms just returning back to multiple challenges when their newborn became ill. Cleo provided emotional and financial and sleep that enabled improved mental health.",
      position: "left"
    },
    {
      title: "Healthy Teen Development",
      description: "Concerned about her son's body image and was connected with a nutrition specialist and received concrete next steps to support their teen's mental health benefit for ongoing support.",
      position: "right"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            A single solution to support working families, wherever they are along the journey
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line - hidden on mobile, shown on desktop */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-secondary h-full hidden lg:block"></div>
          
          {/* Timeline Items */}
          <div className="space-y-12 lg:space-y-16">
            {timelineStages.map((stage, index) => (
              <div 
                key={index}
                className={`lg:grid lg:grid-cols-2 lg:gap-12 items-center ${
                  stage.position === 'left' ? 'lg:flex-row-reverse' : ''
                }`}
                data-testid={`timeline-stage-${index}`}
              >
                {stage.position === 'right' ? (
                  <>
                    <div className="lg:text-right lg:pr-8">
                      <div className="bg-white rounded-xl p-8 shadow-lg relative">
                        <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-secondary rounded-full hidden lg:block"></div>
                        <h3 className="text-2xl font-bold text-primary mb-4" data-testid={`text-stage-title-${index}`}>
                          {stage.title}
                        </h3>
                        <p className="text-charcoal" data-testid={`text-stage-description-${index}`}>
                          {stage.description}
                        </p>
                      </div>
                    </div>
                    <div className="mt-8 lg:mt-0"></div>
                  </>
                ) : (
                  <>
                    <div className="hidden lg:block"></div>
                    <div className="lg:pl-8">
                      <div className="bg-white rounded-xl p-8 shadow-lg relative">
                        <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-secondary rounded-full hidden lg:block"></div>
                        <h3 className="text-2xl font-bold text-primary mb-4" data-testid={`text-stage-title-${index}`}>
                          {stage.title}
                        </h3>
                        <p className="text-charcoal" data-testid={`text-stage-description-${index}`}>
                          {stage.description}
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
