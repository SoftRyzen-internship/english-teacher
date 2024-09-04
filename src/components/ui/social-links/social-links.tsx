import { SocialLinksProps } from './types';

export const SocialLinks: React.FC<SocialLinksProps> = ({ sectionName }) => {
  return (
    <div>
      <h3>Соц мережі:</h3>
      {sectionName === 'contacts' && (
        <div className="contacts-section">
          <p>
            Тг:{' '}
            <a
              href="https://t.me/yuliaenglish31"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://t.me/yuliaenglish31
            </a>
          </p>
          <p>
            Пошта:{' '}
            <a href="mailto:sorokau138@gmail.com">sorokau138@gmail.com</a>
          </p>
          <p>
            Інста:{' '}
            <a
              href="https://www.instagram.com/yulia_tutor.eng"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.instagram.com/yulia_tutor.eng
            </a>
          </p>
        </div>
      )}
    </div>
  );
};
