class EventsHandler {
    constructor(petsRepository, petsRenderer) {
        this.petsRepository = petsRepository;
        this.petsRenderer = petsRenderer;
        this.$pets = $(".pets");
    }

    registerAddPet() {
        $('#addpet').on('click', () => {
            let obj = {name: $("#name").val(), gender: $("#gender").val(),breed: $("#breed").val(),color: $("#color").val(),size: $("#size").val(),age: $("#age").val(),mail: $("#mail").val(),img: $("#img").val(),addpet : "no"};
            // xxxx add validation that form is filled!
            // if ($input.val() === "") {
            //     alert("Please enter text!"); 
            // } else {
                this.petsRepository.addPet(obj).then(()=>{this.petsRenderer.renderPets(this.petsRepository.pets)});
            })
        }
            // });        
    // }

}

export default EventsHandler