'use client';

import { sendMessageToTelegram } from '@/actions/send-message-to-telegram';
import { ReactNode } from 'react';

type TelegramButtonProps = {
  children: ReactNode;
};

export const TelegramButton: React.FC<TelegramButtonProps> = ({ children }) => {
  const handleClick = async () => {
    const message = 'Привіт від вашого сайту!\n';

    try {
      const result = await sendMessageToTelegram(message);
      console.log('Message sent:', result);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return <button onClick={handleClick}>{children}</button>;
};
