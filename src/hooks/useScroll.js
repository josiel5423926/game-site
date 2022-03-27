import {useInView} from "react-intersection-observer";
import {useAnimation} from "framer-motion"



//aqui ajuda na animação 

export const useScroll = () => {
    const controls = useAnimation()
    const [element, view] = useInView({threshold: 0.1})//3
    if (view) {
        controls.start('show')
    }
    else {
        controls.start('hidden')
    }

    return [element, controls]
}
