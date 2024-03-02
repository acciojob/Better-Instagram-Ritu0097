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
            const tempBackground = draggedElement.style.backgroundImage;
            draggedElement.style.backgroundImage = event.target.style.backgroundImage;
            event.target.style.backgroundImage = tempBackground;
        }
    }
    const draggableElements = document.querySelectorAll('.image');
    draggableElements.forEach(element => {
        element.addEventListener('dragstart', dragStart);
        element.addEventListener('dragover', dragOver);
        element.addEventListener('drop', drop);
    });
    document.getElementById('div1').style.backgroundImage = "url('https://picsum.photos/id/237/200/300')";
    document.getElementById('div2').style.backgroundImage = "url('https://picsum.photos/seed/picsum/200/300')";
    document.getElementById('div3').style.backgroundImage = "url('https://picsum.photos/200/300?grayscale')";
    document.getElementById('div4').style.backgroundImage = "url('https://picsum.photos/200/300/')";
    document.getElementById('div5').style.backgroundImage = "url('https://picsum.photos/200/300.jpg')";
    document.getElementById('div6').style.backgroundImage = "url('https://picsum.photos/id/102/200/300')";
});
