import {useEffect, useRef} from 'react'

function Popup({children, onClose, isOpen}) {
    const popup = useRef()

    useEffect(() => {
        function handkeKeyEsc(e) {
            const isKyeEsc = e.key === 'Escape'
            isKyeEsc && onClose()
        }

        function handleClickOverflay(e) {
            const isOverflay = e.target === e.currentTarget
            isOverflay && onClose()
        }
        const popupCarrent = popup.current
        
        document.addEventListener('keydown', handkeKeyEsc)
        popupCarrent.addEventListener('mousedown', handleClickOverflay)

        return () => {
            document.removeEventListener('keydown', handkeKeyEsc)
            popupCarrent.removeEventListener('mousedown', handleClickOverflay)
        }
    })

    return (
        <section 
            className={`popup ${isOpen && 'popup_opened'}`}
            ref={popup}
        >
            {children}
        </section>
    )
}

export default Popup