import './contacts.scss';

export const Contacts = () => {
  return (
    <section id='contacts' className='contacts'>
      <div className='references'>
        <a href='https://github.com/MKas3'>
          <img src='/contacts/github.svg' alt='Github' />
        </a>
        <a href='https://vk.com/f.frivoused'>
          <img src='/contacts/vk.svg' alt='VK' />
        </a>
        <a href='https://t.me/f_frivoused'>
          <img src='/contacts/telegram.svg' alt='Telegram' />
        </a>
        <a href='https://hh.ru/resume/aca76349ff0845934e0039ed1f564e53474738'>
          <img src='/contacts/hh.svg' alt='HH' />
        </a>
      </div>
      <p className='copyright'>©2024 MKas3, All rights reserved.</p>
    </section>
  );
};
