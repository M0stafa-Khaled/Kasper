const element = document.querySelector(".menu");
      const classToAdd = "style";
      const button = document.querySelector(".menu");
      button.addEventListener("click", () => {
        if (element.classList.contains(classToAdd)) {
          element.classList.remove(classToAdd);
        } else {
          element.classList.add(classToAdd);
        }
      });