(function () {
          const copyLTR = document.querySelectorAll(".ltr");
          const copyRTL = document.querySelectorAll(".rtl");

          
          if (copyLTR.length) {
            copyLTR.forEach((element) => {
              element.dir = 'ltr'
            })
            
        } else if (copyRTL.length) {
            copyRTL.forEach((element) => {
                element.dir = 'rtl'
              })
        }


      })();