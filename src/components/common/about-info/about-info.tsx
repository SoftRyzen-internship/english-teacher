import Arrow from '@/../public/assets/images/icons/arrow-right.svg';

import about from '@/data/about.json';

export const AboutInfo = () => {
  const { title, aboutList, arrow } = about;

  return (
    <div className="xl:max-w-[493px]">
      <h2 className="section-subtitle mb-5 md:mb-[30px]">{title}</h2>
      <ul className="flex flex-col gap-5">
        {aboutList.map((item) => (
          <li key={item.id} className="flex flex-row gap-3">
            <div>
              <Arrow width={24} height={24} aria-label={arrow.alt} />
            </div>
            <p className="font-comfortaa text-base font-semibold text-text2 md:max-w-xl">
              {item.text}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
