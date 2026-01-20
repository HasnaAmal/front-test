import Image from "next/image";

export default function LastSection() {
  return (
     <section >
            <div className="max-w-6xl mx-auto px-4 mt-24 pt-18">
              
    
              <div className="grid md:grid-cols-3 gap-8">
    
                <div >
                   <Image
                src="/food.png"
                alt="BMI Background"
                width={64}
                height={64}
              />
                  <h2 className="text-2xl font-bold text-[#253347] mb-4 mt-11.25">
                    
                    Healthy eating
                  </h2>
                  <p className="text-[#5E6E85] leading-relaxed mb-6">
                    Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.
                  </p>
                </div>
    
                <div >
                      <Image
                src="/sport.png"
                alt="BMI Background"
                width={64}
                height={64}
              />
                  <h2 className="text-2xl font-bold text-[#253347] mb-4  mt-11.25">
                    Regular exercise
                  </h2>
                  <p className="text-[#5E6E85] leading-relaxed mb-6 ">
                    Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.
                  </p>
                </div>
    
                <div>
                      <Image
                src="/lune.png"
                alt="BMI Background"
                width={64}
                height={64}
              />
                  <h2 className="text-2xl font-bold text-[#253347] mb-4  mt-11.25">
                    Adequate sleep
                  </h2>
                  <p className="text-[#5E6E85] leading-relaxed mb-6">
                    Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.
                  </p>
                </div>
    
              </div>
            </div>
          </section>
  );
}