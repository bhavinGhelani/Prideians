import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Footer() {

    const { t } = useTranslation();

    return (
        <div className="flex bg-[#ffffff] justify-center text-xl py-3 items-center w-full mx-auto z-50">
            {t('With')} &nbsp;<img alt="love" src="https://img.icons8.com/color/20/000000/filled-like.png" /> &nbsp; {t('')}
        </div>
    )
}
