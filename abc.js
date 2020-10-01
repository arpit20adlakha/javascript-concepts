
function execute() {
    const element = document.getElementById("content");
    element.style = "color: red";
}

( function() {
        if (document.readyState !== 'complete') {
            execute();
        } else {
            document.addEventListener('DOMContentLoaded', function start() {
                execute();
            });
        }
 }
)();
