import { useEffect, useState } from "react";

const StatsCounter = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const stats = [
    { value: 3, suffix: "+", label: "Years of Excellence" },
    { value: 50, suffix: "+", label: "Happy Brands" },
    { value: 35, suffix: " Cr+", label: "Ad Spend Managed" },
    { value: 98, suffix: "%", label: "Client Retention" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("stats-counter");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const CountUp = ({ end, suffix }: { end: number; suffix: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;
      
      const duration = 2000;
      const steps = 50;
      const increment = end / steps;
      const stepDuration = duration / steps;
      
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }, [isVisible, end]);

    return <>{count}{suffix}</>;
  };

  return (
    <section id="stats-counter" className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-foreground/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;