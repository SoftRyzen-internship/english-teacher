import ErrorIcon from '@/../public/assets/images/icons/modals/err.svg';

import data from '@/data/policy.json';

export const ErrorFetchDataMessage = () => {
  return (
    <section className="pt-[29px] md:pt-[34px] xl:pt-16 pb-[50px] xl:pb-20">
      <div className="container xl:px-[135px] flex flex-col items-center justify-center gap-6 md:gap-8 min-h-[calc(100vh-292px)] md:min-h-[calc(100vh-265px)] xl:min-h-[calc(100vh-264px)]">
        <ErrorIcon
          className="w-[106px] h-[99px] md:w-[198px] md:h-[185px]"
          width={198}
          height={185}
          aria-label={data.errorFetchDataMessage.ariaLabel}
        />
        <h2 className="section-title">{data.errorFetchDataMessage.title}</h2>
        <p className="section-subtitle font-montserrat">
          {data.errorFetchDataMessage.text}
        </p>
      </div>
    </section>
  );
};
