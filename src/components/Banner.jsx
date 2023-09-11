import Image from "next/image";
import React from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import pic from "../assets/banner7.png";

const Banner = () => {
  return (
    <div className="container  flex grid  xl:flex-row banner m-auto">
      <div>
        <Image src={pic} alt="img" width={600} />
      </div>
      <div className="pr-[10px] pl-[5px]">
        <h1>شركة وعد للتكييفات</h1>
        <h2>حافظ على تكييف الهواء الخاص بك مع خدماتنا الاحترافية</h2>
        <p>
          تكييف الهواء هو أحد أهم الأجهزة في المنزل أو المكتب، فهو يساعدنا على
          الشعور بالراحة في الطقس الحار. ومع ذلك، مع الاستخدام اليومي، يمكن أن
          تتراكم الأوساخ والحطام داخل المكيف، مما يؤدي إلى انخفاض الكفاءة وزيادة
          تكاليف التشغيل.
        </p>
        <p>
          توفر شركتنا مجموعة كاملة من خدمات تنظيف وصيانة وفك وتركيب التكييفات.
          نحن نستخدم أحدث التقنيات والأدوات لضمان حصولك على أفضل خدمة ممكنة.
          خدمات التنظيف: تشمل خدمات تنظيف التكييفات تنظيف الفلاتر والأنابيب
          والمراوح الداخلية والخارجية. نقوم أيضًا بإزالة الغبار والأوساخ من جميع
          أجزاء المكيف. خدمات الصيانة: تشمل خدمات صيانة التكييفات فحص جميع
          المكونات والتأكد من أنها تعمل بشكل صحيح. نقوم أيضًا بإجراء اختبارات
          الضغط وإصلاح أي مشاكل قد تحدث. خدمات فك وتركيب التكييفات: إذا كنت
          بحاجة إلى فك أو تركيب مكيف الهواء الخاص بك، فإننا نقدم هذه الخدمة
          أيضًا. لدينا فريق من الفنيين ذوي الخبرة الذين يمكنهم التعامل مع جميع
          أنواع التكييفات.
        </p>
        <p>
          تعتمد جودة الهواء في منزلك أو مكتبك على كفاءة مكيف الهواء الخاص بك. من
          خلال خدماتنا الاحترافية، يمكنك التأكد من أن تكييف الهواء الخاص بك يعمل
          بشكل صحيح ويوفر لك الراحة التي تحتاجها.
        </p>
        <button
          className="bg-green-500 w-[120px] m-auto 
        h-[40px] flex items-center justify-center rounded-md
          text-white gap-1 my-5
        "
        >
          <a
            href="https://api.whatsapp.com/send?phone=%2B966547237753&data=ARAHPgNzZAmtaoaz-8IlNU3cPBA4r1_ScoyP1r0PtX5jZrKEsq8dCbQyUU1x3rwCNpL9k-WFqmC7zOHChURDMiht0qaCFe0K2AZ5eh6SBBTwGEXLI_JavfPAz3JBdiI-xxpIBQP2C8CL64Q8TojQk4cu7A&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR1vHCKiRWNaMiF1bbbg3uW0WtE3Rl1bAJMC4FwDT4NTYXR3iSACD7hWL6A"
            className="flex items-center justify-center rounded-md
          text-white gap-1 my-5"
          >
            تواصل معنا
            <AiOutlineWhatsApp className="text-[25px]" />
          </a>
        </button>
      </div>
    </div>
  );
};

export default Banner;
