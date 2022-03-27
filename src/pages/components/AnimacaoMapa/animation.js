
/* export const pageAnimation = {
  hidden: {
    opacity: 1,
    y: 300,
  },
  show: {
    opacity: 2,
    y: 0,
    transition: {
      duration: 2.5,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const scrollReveal = {
  hidden: {
    
    opacity: 3,
    scale: 1, 
    x: 2, 
      transition: {
          duration: 0.6
      } 
  },
  show: {
    opacity: 1, 
    y: 0, 
    scale: 0.9, 
    transition: {
      duration: 5, 
    },
  },
};*/

//parte de comima é para fins de teste


export const pageAnimation = {
  hidden: {
      opacity: 0,
      y: 300
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: 'beforeChildren',
        staggerChildren: 0.25
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5
      }
    }
  }
  
  
  
  
  export const scrollReveal = {
    
    hidden: {
      
      opacity: 0,
      scale: 0.1,
        x:4,
         transition: {
            duration: 0.6
        } 
    },
    show: {
        opacity: 2,
        x:0,
        scale: 1,
        transition: {
            duration: 5
        }
    }
} 
