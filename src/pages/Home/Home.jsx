import React from "react";
import BannerCarousel from "component/banner/bannerCarousel/BannerCarousel.component";
import ProductsSlideShow from "component/carousel/productSlideShowCarousel/ProductsSlideShow";
import { AnimationOnScroll } from "react-animation-on-scroll";
import BrandLogoGroup from "component/brandsLogoGroup/BrandLogoGroup.component";
import tip1 from "assets/images/website/tip1.jpg";
import tip2 from "assets/images/website/tip2.jpg";
import tip3 from "assets/images/website/tip3.jpg";
import tip4 from "assets/images/website/tip4.jpg";
import banner1 from "assets/images/website/banner4.jpg";
import banner2 from "assets/images/website/banner5.jpg";
import banner3 from "assets/images/website/banner3.jpg";
import banner4 from "assets/images/website/banner1.jpg";
import banner5 from "assets/images/website/banner2.jpg";
import tile1 from "assets/images/website/tile1.jpg";
import tile2 from "assets/images/website/tile2.jpg";
import tile3 from "assets/images/website/tile3.jpg";
import tile4 from "assets/images/website/tile4.jpg";
import banner7 from "assets/images/website/banner7.jpg";
import banner8 from "assets/images/website/banner8.jpg";
import banner10 from "assets/images/website/banner8.webp";
import category1 from "assets/images/website/men-category.webp";
import category2 from "assets/images/website/women-category.webp";
import category3 from "assets/images/website/accessory-category.webp";
import logo1 from "assets/images/website/prada.png";
import logo2 from "assets/images/website/adidas.png";
import logo3 from "assets/images/website/nike.png";
import logo4 from "assets/images/website/northface.png";
import logo5 from "assets/images/website/versace.png";
import logo6 from "assets/images/website/gucci.png";
import logo7 from "assets/images/website/D&G.png";
import logo8 from "assets/images/website/chanel.png";
import offer from "assets/images/website/box.png";
import offer1 from "assets/images/website/offer1.png";
import MainLayout from "layout/mainLayout/main.layout";
import { getInRangeData, getFilteredData } from "api/api";
import CategoryCardGroup from "component/categoryCardGroup/CategoryCardGroup.component";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";

const Home = () => {
  const [mostSales, setMostSales] = React.useState([]);

  const [offers, setOffers] = React.useState([]);

  const [seasonOffer, setSeasonOffer] = React.useState([]);

  React.useEffect(() => {
    window.scrollTo(0, 0);

    getInRangeData("products", "inStock", 1, 3, 1, 10)
      .then((data) => setMostSales(data.data))
      .catch((err) => alert(err));

    getInRangeData("products", "inStock", 10, 30, 1, 10)
      .then((data) => setOffers(data.data))
      .catch((err) => alert(err));

    getFilteredData("products", "title", "سوییشرت")
      .then((data) => setSeasonOffer(data))
      .catch((err) => alert(err));
  }, []);

  return (
    <>
      <MainLayout>
        <BannerCarousel
          color="black"
          size="3xl"
          src={[banner1, banner2, banner3, banner4, banner5]}
          description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
    "
        />
        <fieldset className="w-11/12 md:text-xl text-right mx-auto my-14 border-4 border-stone-400 p-5">
          <legend className="text-lg md:text-2xl font-semibold p-2 bg-salmon text-white">
            فروشگاه اینترنتی کوزا استور بررسی، انتخاب و خرید آنلاین{" "}
          </legend>
          یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی متنوع،
          باکیفیت و دارای قیمت مناسب را در مدت زمانی کوتاه به دست مشتریان خود
          برساند و ضمانت بازگشت کالا هم داشته باشد؛ ویژگی‌هایی که فروشگاه
          اینترنتی کوزا استور سال‌هاست بر روی آن‌ها کار کرده و توانسته از این
          طریق مشتریان ثابت خود را داشته باشد.
        </fieldset>
        <div className="overflow-hidden">
          <CategoryCardGroup
            src={[category3, category1, category2]}
            titles={["اکسسوری", "پوشاک مردانه", "پوشاک زنانه"]}
          />
        </div>
        <div className="w-full my-14 grid grid-cols-5 gap-1 overflow-hidden">
          <AnimationOnScroll
            animateIn="animate__fadeInRight"
            className="col-span-2 row-span-2 "
          >
            <img src={tile1} alt="product" className="w-full h-full" />
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInDown"
            className="col-span-3"
          >
            <img src={tile2} alt="product" className="w-full h-full" />
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInUp">
            <img src={tile4} alt="product" className="w-full h-full" />
          </AnimationOnScroll>

          <AnimationOnScroll
            animateIn="animate__fadeInLeft"
            className="col-span-2"
          >
            <img src={tile3} alt="product" className="w-full h-full" />
          </AnimationOnScroll>
        </div>
        <fieldset className="w-11/12 md:text-xl text-right mx-auto my-14 border-4 border-stone-400 p-5">
          <legend className="text-lg md:text-2xl font-semibold p-2 bg-salmon text-white">
            تضمین اصالت کالا
          </legend>
          <div>
            کوزا استور اصالت همۀ کالاهایش را تضمین می‌کند. از آنجا که کوزا استور
            برای تامین کالاهای ارائه شده در وب سایت، تنها با شرکت‌های معتبر
            خارجی و واردکنندگان رسمی و قانونی همکاری می‌کند، مشتریان می‌توانند
            مطمئن باشند کالاهایی را که بدون هیچگونه دخل و تصرفی از مجاری قانونی
            وارد کشور شده است، از کوزا استو خریداری می‌کنند. ذکر این نکته در
            اینجا لازم است که کشور سازنده روی اصالت کالا تاثیری ندارد و این برند
            معتبر است که کیفیت کالا را تعیین می‏‌کند. برای نمونه در حال حاضر
            بسیاری از کالاهای موجود در بازار ایران و سایر کشورها ساخت چین هستند
            و تنها به دلیل خط تولید ارزان‏‌تر است که در این کشور تولید شده‌اند.
          </div>
        </fieldset>
        <ProductsSlideShow
          products={offers}
          view={offer}
          header=" پیشنهاد های ویژه کوزا استور"
          color="bg-salmon"
        />
        <fieldset className="w-11/12 md:text-xl text-right mx-auto my-14 border-4 border-stone-400 p-5">
          <legend className="text-lg md:text-2xl font-semibold p-2 bg-salmon text-white">
            درباره کوزا استو
          </legend>
          <div>
            توسعه اینترنت, روشهای خرید ما را به کلی دگرگون کرده است. منافع موجود
            در خرید اینترنتی هر روز، تعداد بیشتری از مردم را به تجربه آن و ایجاد
            تغییر در الگوهای متداول خرید ترغیب می کند. بعد از تجربه کوزا استور،
            خرید اینترنتی بیشتر با سرعت زندگی مدرن همگام شد و توانست خود را با
            روحیات و نیازهای رو به رشد مشتریان هماهنگ کند. در حالیکه مشغله های
            روزانه فرصت لذت بردن از اوقات فراغت را کاهش داده است، صرف زمان های
            طولانی برای انجام سفرهای درون شهری و خرید نیازهای روزانه معنای خود
            را از دست می دهد. آنچه در فرصت اوقات فراغت برای افراد در اولویت قرار
            می گیرد، تفریح، آموزش، ورزش، لذت بردن از علایق شخصی و رفع خستگی‏‏های
            روزانه است. همه این عوامل افراد را مجاب به استفاده از روش های نوین
            مانند مراجعه به یک فروشگاه اینترنتی در کمترین زمان برای انجام فعالیت
            هایی وقت گیر گذشته می کند، تا قبل از کوزا استو فرآیند استقبال
            مشتریان از کوزا استو ثابت کرد این روش از زندگی مورد علاقه طیف عظیمی
            از افراد است
          </div>
        </fieldset>
        <div className="w-11/12 mx-auto overflow-hidden py-10 grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center ">
          <AnimationOnScroll animateIn="animate__fadeInRight">
            <img
              className="shadow-md hover:scale-105 hover:shadow-lg duration-300 cursor-pointer"
              src={banner7}
              alt="tip"
            />
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInLeft">
            <img
              className="shadow-md hover:scale-105 hover:shadow-lg duration-300 cursor-pointer"
              src={banner8}
              alt="tip"
            />
          </AnimationOnScroll>
        </div>
        <div className="shadow-xl my-14">
          <ParallaxProvider>
            <ParallaxBanner
              layers={[
                { image: banner10, speed: 25 },
                {
                  speed: -10,
                  children: (
                    <div className="absolute inset-0 flex text-carbon items-center justify-center">
                      <h2 className="text-3xl md:text-6xl lg:text-7xl drop-shadow-2xl shadow-white">
                        پوشاک با چاپ طرح دلخواه شما ...
                      </h2>
                    </div>
                  ),
                },
              ]}
              className="aspect-[3/1] h-80 md:h-120 lg:h-auto"
            />
          </ParallaxProvider>
        </div>
        <fieldset className="w-11/12 md:text-xl text-right mx-auto mb-14 p-5 border-4 border-stone-400">
          <legend className="text-lg md:text-2xl font-semibold p-2 bg-salmon text-white">
            ثبت، پردازش و ارسال سفارش{" "}
          </legend>
          <div>
            کوزا استور همواره نهایت تلاش خود را می‏‌کند تا کلیه سفارش‏‌ها در
            نهایت صحت و بدون آسیب به دست مشتریان خود در سراسر کشور برسد. با توجه
            به بسته بندی ایمن و استاندارد همه مرسولات، تحویل به هر یک از
            شرکت‌‏های حمل و نقل معتبر به انتخاب کاربر و اعلام بارنامه مرسوله
            (درج در سبد خرید و اطلاع رسانی از طریق سرویس پیام کوتاه) به این معنی
            است که بروز هر گونه حادثه در هنگام حمل و تحویل به عهده شرکت حمل و
            نقل است و دیجی‌استایل تنها در صورت تایید شرکت حمل کننده سفارش و در
            راستای تسهیل امور پیگیری، خسارت را جبران می‌‏کند.
          </div>
        </fieldset>
        <ProductsSlideShow
          products={mostSales}
          view={offer}
          header="پرفروش ترین های کوزا استور"
          color="bg-salmon"
        />
        <div className="w-11/12 mx-auto py-5 text-2xl  md:text-3xl font-semibold ">
          پرفروش ترین برند ها
        </div>
        <div className="overflow-hidden">
          <AnimationOnScroll animateIn="animate__fadeInDown">
            <BrandLogoGroup
              src={[logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8]}
            />
          </AnimationOnScroll>
        </div>
        <fieldset className="w-11/12 md:text-xl text-right mx-auto mb-14 p-5 border-4 border-stone-400">
          <legend className="text-lg md:text-2xl font-semibold p-2 bg-salmon text-white">
            انواع برندها و شرکت‌های مد و پوشاک
          </legend>
          <div>
            صنعت پوشاک یکی از پرطرفدارترین صنایع دنیاست، بسیاری از برندهای داخلی
            و خارجی در این حوزه محصولات گوناگونی تولید می‌کنند در این میان
            می‌توان به نام‌های ورساچه، شنل، دولچی، نایکی،آدیداس، لاکاست، پرادا،
            نورث فیس و گوچی اشاره کرد.
          </div>
        </fieldset>
        <div className="w-11/12 mx-auto overflow-hidden py-10 grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center ">
          <AnimationOnScroll animateIn="animate__fadeInDown">
            <img
              className="shadow-md hover:scale-105 hover:shadow-lg duration-300 cursor-pointer"
              src={tip1}
              alt="tip"
            />
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInLeft">
            <img
              className="shadow-md hover:scale-105 hover:shadow-lg duration-300 cursor-pointer"
              src={tip2}
              alt="tip"
            />
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInRight">
            <img
              className="shadow-md hover:scale-105 hover:shadow-lg duration-300 cursor-pointer"
              src={tip3}
              alt="tip"
            />
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInUp">
            <img
              className="shadow-xl hover:scale-105 hover:shadow-2xl duration-300 cursor-pointer"
              src={tip4}
              alt="tip"
            />
          </AnimationOnScroll>
        </div>
        <fieldset className="w-11/12 md:text-xl text-right mx-auto mb-20 border-4 border-stone-400 p-5">
          <legend className="text-lg md:text-2xl font-semibold p-2 bg-salmon text-white">
            مد و پوشاک
          </legend>
          <div>
            داشتن ظاهری زیبا و شیک اهمیت بسیار بالای دارد، همه آقایان و بانوان
            دوست دارند که جذاب به نظر برسند. شما می‌خواهید لباس‌هایی را انتخاب
            کنید که علاوه بر زیبایی، مدرن و به روز نیز باشند، انتخاب دقیق و
            مناسب لباس‌های مختلف نشان‌دهنده سلیقه شماست و علاوه بر این ست کردن
            مناسب لباس‌ها می‌تواند اعتماد به نفستان را افزایش دهد. داشتن ظاهر
            زیبا در خرید لباس‌های گران قیمت خلاصه نمی‌شود بلکه انتخاب هوشمندانه
            شما برایتان زیبایی، شکوه و وقار را به ارمغان خواهند آورد.{" "}
          </div>
        </fieldset>
        <ProductsSlideShow
          products={seasonOffer}
          view={offer1}
          header="  پرفروش ترین های ورزشی کوزا استور"
          color="bg-salmon"
        />
        <fieldset className="w-11/12 md:text-xl text-right mx-auto p-5 border-4 border-stone-400">
          <legend className="text-lg md:text-2xl font-semibold p-2 bg-salmon text-white">
            انتخاب مد و پوشاک مناسب از فروشگاه اینترنتی کوزا استور
          </legend>
          <div>
            اگر به طور جدی مجلات Fashion را دنبال می‌کنید، فروشگاه کوزا استور
            برایتان بسیار مناسب خواهد بود. شما می‌توانید در این‌جا به روزترین و
            جدیدترین پوشاک موجود در بازار ایران را با کمترین هزینه ممکن تهیه
            کنید و سفارشتتان در سریع‌ترین زمان ممکن به دستتان برسد. کوزا استور
            اصل بودن و سلامت فیزیکی کلیه محصولات خود را ضمانت می‌کند تا شما
            تجربه بهتری از خرید آنلاین خود داشته باشید. سفارشات شما در سریع‌ترین
            زمان ممکن به دستتان خواهد رسید.
          </div>
        </fieldset>
      </MainLayout>
    </>
  );
};

export default Home;
