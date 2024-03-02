document.addEventListener("DOMContentLoaded", function() {
    let draggedElement = null;
    function dragStart(event) {
        draggedElement = event.target;
    }
    function dragOver(event) {
        event.preventDefault();
    }
    function drop(event) {
        event.preventDefault();
        if (draggedElement !== event.target) {
            const tempInnerHTML = draggedElement.innerHTML;
            draggedElement.innerHTML = event.target.innerHTML;
            event.target.innerHTML = tempInnerHTML;
        }
    }
    const draggableElements = document.querySelectorAll('.image');
    draggableElements.forEach(element => {
        element.addEventListener('dragstart', dragStart);
        element.addEventListener('dragover', dragOver);
        element.addEventListener('drop', drop);
    });
});
