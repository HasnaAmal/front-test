import Image from "next/image";

export default function MiddleSection() {
  return (
   <section className=" bg-white mt-16.25">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            <Image
              src="/man.png"
              alt="BMI Background"
              width={478}
              height={333} className="bg-[#F6F9FF] rounded-[50px]"
            />
  
            <div className="flex flex-col justify-center ml-32.75 mt-41">
              <h2 className="font-inter font-semibold text-[48px]  text-[#253347] mb-8.75">
                What your BMI result means
              </h2>
              <p className="font-inter font-normal text-[16px] text-[#5E6E85]">
                A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' Maintaining a healthy weight may lower your chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar content, incorporating ample fruits and vegetables. Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days a week.
              </p>
            </div>
          </div>
        </section>
  );
}