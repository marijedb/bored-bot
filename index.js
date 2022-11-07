document.getElementById("btn").addEventListener("click", function () {
    fetch("https://apis.scrimba.com/bored/api/activity")
        .then(response => response.json())
        .then(data => {
            document.getElementById("activity").textContent = data.activity;
            document.getElementById("activity").classList.add("underline");
            setTimeout(function(){
                document.getElementById("activity").classList.remove("underline");            
            }, 2000)
        })
})
