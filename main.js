const DragDropManager = Object.create(null, {
    init: {
      value: () => {
        const stages = document.querySelectorAll(".stage")
  
        stages.forEach(stage => {
          // Gain reference of item being dragged
          stage.ondragstart = e => {
            e.dataTransfer.setData("text", e.target.classList)
          }
        })
  
  
        const targets = document.querySelectorAll(".target")
        const origin = document.querySelector(".origin")

        origin.ondragover = e => e.preventDefault();
        origin.ondrop = e => {
            e.preventDefault();
            const data = e.dataTransfer.getData("text")
            // Added parentNode to the copied code
            // to ensure that it dropped into the grid article
            // rather than nesting in the cards there
            e.target.parentNode.appendChild(document.querySelector(`.${data.split(" ")[1]}`))
            
        }
  
        targets.forEach(target => {
          // Dragover not supported by default. Turn that off.
          target.ondragover = e => e.preventDefault();
          target.ondrop = e => {
            if (e.target.hasChildNodes() === false) {
                // Enabled dropping on targets
                e.preventDefault()
    
                // Determine what's being dropped
                const data = e.dataTransfer.getData("text")
    
                // Append card to target component as child
                e.target.appendChild(document.querySelector(`.${data.split(" ")[1]}`))
            }
          }
        })
      }
    }
  })
  
  DragDropManager.init()
  
// [x] Prevent card nesting 

// [ ] The user should only be able to drag one card into either box. 
    // Use the childNodes property to ensure that, if a card is already in the box, another can't be added.

    // [x] The user should be able to 
//      move a card from the top/bottom box back to the middle.