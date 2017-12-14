(function main(){
    var form = $('#addTask');
    var tasks = [
        {content: "acheter du lait", status: false, id:4}
    ];
        var id=0;   
        $(".btn").click(function(){
          var value = $("#task").val();         
           if(value === null){
             alert("Empty");
           }else{
                alert("Add");
                id ++;
                tasks.push(addObject(value));
                addTask(tasks);
                console.log(tasks)
           }
           return false;

        });
        function addObject(value){            
            var id
            for(var i=0; i<tasks.length; i++){
                id = i;
            }
            var taskObject = {
                content: value,
                status: false,
                id: id,
            }
            return taskObject;
        }
        function addTask(tasks){
             var id
            for(var i=0; i<tasks.length; i++){
                id = i;
            }
            return $("#renderTasks").append("<li>"+tasks[id].content+"</li>");
        }

       

        


})();

// TODO :
// 1 : Repérer l'envoie du formulaire d'id 'addTask', puis dans le callback : 
    // 2 : Empéché le formulaire de recharger la page 
    // 3 : Récupérer la valeur de l'input d'id 'task'

    // 4 : Vérifier que la valeur n'est pas vide 
    //   - si elle est vide prevenir l'utilisateur
    //   - sinon stocker cette valeur dans un objet avec les clefs suivante : status, content, id puis les insérer de le tableau 'tasks' 
// 6 : Creer une fonction pour afficher les taches dans l'ul id 'renderTasks'
// 7 : Lancer la fonction au bon endroit ;)

// Bonus :() sont status de true à false ou inversement.
    // 2 : Si la tache est en false, la faire apparaitre rouge, sinon verte.
    // 3 : Creer un select avec trois choix possible : todo, done, all
        // - Si le select est sur all, afficher toute les tâches
        // - Si le select est sur done, seulement les tâches avec le status true
        // - Si le select est sur todo, seulement les tâches avec le status false
    // 4

