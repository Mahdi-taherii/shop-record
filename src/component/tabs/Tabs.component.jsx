import React from "react";
import { ITabs } from "types/Interface";
import avatar from "assets/images/website/avatar.svg";
const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-11/12 mx-auto my-10">
          <ul
            className="flex mb-0 gap-2 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px  flex-auto text-center">
              <a
                className={
                  "text-lg font-bold uppercase border-2 border-stone-400 px-5 py-3 shadow-lg block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-" + color
                    : "text-" +
                      color +
                      " dark:text-white dark:bg-carbon bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                معرفی
              </a>
            </li>
            <li className="-mb-px flex-auto text-center">
              <a
                className={
                  "text-lg font-bold uppercase border-2 border-stone-400 px-5 py-3 shadow-lg block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-" + color
                    : "text-" +
                      color +
                      " dark:text-white dark:bg-carbon bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                مشخصات
              </a>
            </li>
            <li className="-mb-px flex-auto text-center">
              <a
                className={
                  "text-lg font-bold uppercase border-2 border-stone-400 px-5 py-3 shadow-lg block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-" + color
                    : "text-" +
                      color +
                      " dark:text-white dark:bg-carbon bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                دیدگاه ها
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-carbon dark:text-white w-full mb-6 border-2 border-stone-400 shadow-lg">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content text-right  h-96 overflow-y-auto tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <h2 className="text-xl font-semibold underline-offset-8 w-fit border-salmon pb-2 mb-2 border-b-4">
                    معرفی
                  </h2>
                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                    با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                    تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                    آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
                    افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                    طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
                    صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                    راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز
                    شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
                    دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. لورم ایپسوم
                    متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
                    از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
                    ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی
                    مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی
                    می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،
                    شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها
                    شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
                    خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می
                    توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
                    شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی
                    دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
                    طراحی اساسا مورد استفاده قرار گیرد. لورم ایپسوم متن ساختگی
                    با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
                    گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
                    سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
                    و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                    کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت
                    فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت
                    بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و
                    فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان
                    امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط
                    سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی
                    دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
                    طراحی اساسا مورد استفاده قرار گیرد.
                  </p>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <h2 className="text-xl font-semibold underline-offset-8 w-fit border-salmon pb-2 mb-2 border-b-4">
                    مشخصات
                  </h2>

                  <div className="overflow-x-auto relative shadow-md-lg">
                    <table className="w-full border-2 border-stone-400 text-sm text-left text-gray dark:text-gray-300">
                      <tbody>
                        <tr className="border-b text-center border-gray-200 dark:border-gray-500">
                          <th
                            scope="row"
                            className="py-4 px-6 w-56 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-zinc-800"
                          >
                            جنس
                          </th>
                          <td className="py-4 px-6">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                            صنعت چاپ است.
                          </td>
                        </tr>
                        <tr className="border-b text-center border-gray-200 dark:border-gray-500">
                          <th
                            scope="row"
                            className="py-4 px-6 w-56 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-zinc-800"
                          >
                            وزن
                          </th>
                          <td className="py-4 px-6">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                            صنعت چاپ است.
                          </td>
                        </tr>
                        <tr className="border-b text-center border-gray-200 dark:border-gray-500">
                          <th
                            scope="row"
                            className="py-4 px-6 w-56 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-zinc-800"
                          >
                            ابعاد
                          </th>
                          <td className="py-4 px-6">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                            صنعت چاپ است.
                          </td>
                        </tr>
                        <tr className="border-b text-center border-gray-200 dark:border-gray-500">
                          <th
                            scope="row"
                            className="py-4 px-6 w-56 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-zinc-800"
                          >
                            رنگ بندی
                          </th>
                          <td className="py-4 px-6">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                            صنعت چاپ است.
                          </td>
                        </tr>
                        <tr className="border-b text-center border-gray-200 dark:border-gray-500">
                          <th
                            scope="row"
                            className="py-4 px-6 w-56 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-zinc-800"
                          >
                            سایز
                          </th>
                          <td className="py-4 px-6">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                            صنعت چاپ است.
                          </td>
                        </tr>
                        <tr className="border-b text-center border-gray-200 dark:border-gray-500">
                          <th
                            scope="row"
                            className="py-4 px-6 w-56 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-zinc-800"
                          >
                            مناسب برای
                          </th>
                          <td className="py-4 px-6">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                            صنعت چاپ است.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <h2 className="text-xl font-semibold underline-offset-8 w-fit border-salmon pb-2 mb-2 border-b-4">
                    دیدگاه ها
                  </h2>
                  <article className="border-b-2 border-stone-400 pb-5">
                    <div className="flex items-center gap-4 mb-4 ">
                      <img
                        className="w-10 h-10-full"
                        src={avatar}
                        alt="customer"
                      />
                      <div className="space-y-1 font-medium dark:text-white">
                        <p>
                          علی مختاری
                          <time className="block text-sm text-gray dark:text-gray-300">
                            23 اردیبهشت 1401{" "}
                          </time>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center mb-1">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <title>First star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <title>Second star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <title>Third star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <title>Fourth star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <title>Fifth star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <h3 className="ml-2 text-sm font-semibold text-green-500">
                        خرید این کالا را پیشنهاد میکنم
                      </h3>
                    </div>
                    <p className="mb-2 font-light text-gray dark:text-gray-300">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
                      و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای
                      شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف
                      بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
                      درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
                      طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه
                      ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی
                      ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
                      موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                      زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی
                      سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
                      قرار گیرد.
                    </p>
                    <aside>
                      <p className="mt-1 text-xs text-gray dark:text-gray-300">
                        19 نفر این پیام را مشاهده کرده اند.
                      </p>
                    </aside>
                  </article>
                  <article className="border-b-2 border-stone-400 pb-5">
                    <div className="flex items-center gap-4 mb-4 ">
                      <img
                        className="w-10 h-10-full"
                        src={avatar}
                        alt="customer"
                      />
                      <div className="space-y-1 font-medium dark:text-white">
                        <p>
                          احمد ذوقی
                          <time className="block text-sm text-gray dark:text-gray-300">
                            23 اردیبهشت 1401{" "}
                          </time>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center mb-1">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 "
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <title>First star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <title>Second star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <title>Third star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <title>Fourth star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <title>Fifth star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <h3 className="ml-2 text-sm font-semibold text-orange-400 ">
                        از خرید این کالا مطمئن نیستم
                      </h3>
                    </div>
                    <p className="mb-2 font-light text-gray dark:text-gray-300">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
                      و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای
                      شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف
                      بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
                      درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
                      طلبد.
                    </p>
                    <aside>
                      <p className="mt-1 text-xs text-gray dark:text-gray-300">
                        13 نفر این پیام را مشاهده کرده اند.
                      </p>
                    </aside>
                  </article>
                  <article className="border-b-2 border-stone-400 pb-5">
                    <div className="flex items-center gap-4 mb-4 ">
                      <img
                        className="w-10 h-10-full"
                        src={avatar}
                        alt="customer"
                      />
                      <div className="space-y-1 font-medium dark:text-white">
                        <p>
                          الناز بی نیاز
                          <time className="block text-sm text-gray dark:text-gray-300">
                            30 اردیبهشت 1401{" "}
                          </time>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center mb-1">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 "
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <title>First star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <title>Second star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <title>Third star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <title>Fourth star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <title>Fifth star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <h3 className="ml-2 text-sm font-semibold text-red-500">
                        خرید این کالا را پیشنهاد نمیکنم
                      </h3>
                    </div>
                    <p className="mb-2 font-light text-gray dark:text-gray-300">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
                      و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای
                      شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف
                      بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
                      درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
                      طلبد.
                    </p>
                    <aside>
                      <p className="mt-1 text-xs text-gray dark:text-gray-300">
                        2 نفر این پیام را مشاهده کرده اند.
                      </p>
                    </aside>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
