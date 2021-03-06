import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Chatroom() {

  const { t } = useTranslation();

  return (
    <div className='mx-4 pt-8 pb-12'>

      <div className='mx-56 grid place-items-center'>
        <h1 className='text-5xl font-semibold'>{t('navLinkChatroom')}</h1>
        <div className="bg-tertiary w-56 h-1 my-2"></div>
      </div>

      <iframe src="http://localhost:50965/" className='bg-white rounded-xl' height={600} width={1300} title="chatroom" />

    </div>
  )
}
