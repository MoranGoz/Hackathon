class EventsHandler {
    constructor(petsRepository, petsRenderer, favorites) {
        this.petsRepository = petsRepository;
        this.petsRenderer = petsRenderer;
        this.$pets = $(".pets");
        this.$addaptForm =$(".pet-form");
        this.favorites = favorites;
    }

    registerAddPet() {
        $('#addpet').on('click', () => {
            let obj = {name: $("#name").val(), gender: $("#gender").val(),breed: $("#breed").val(),color: $("#color").val(),size: $("#size").val(),age: $("#age").val(),mail: $("#mail").val(),img: $("#img").val(),addpet : "no"};
            this.petsRepository.addPet(obj).then(()=>{this.petsRenderer.renderPets(this.petsRepository.pets)});
            })
        }
       

        registerLikePet() {
            
            $('.pets').on('click',  '#like',() => {
                    console.log('like');
                    event.preventDefault();
                var id = $(".pets").find(".show-pet").attr("data-id");
                this.favorites.addFavorite(id).then(()=>{this.favorites.renderFavorite()});
                this.petsRenderer.renderPets(this.petsRepository.pets); 
               
                })
            }
            registerUnlikePet() {

                $('.pets').on('click','#unlike', () => {
                    $('#unlike').addClass('magictime bombleftOut');
                    console.log('unlike');
                    event.preventDefault();
                    //function do not show

                    //function show next
                    // this.petsRepository.counter++;
                    this.petsRenderer.renderPets(this.petsRepository.pets)  
                   
                    })
                } 
                
                registerAdopt() {
                    

                    $('.pets').on('click','#adopt', () => {
                        console.log('adopted');
                        //function send a mail to the person + tag as adopted
    
                        })
                    }

                   
                
            // makes the form toggle
            registerToggleForm() {
               

                $('#addNewPet').on('click', (event) => {
                    $('.pet-form').toggleClass('show');
                    event.preventDefault();
                  });
            }
            registerTogglfavorites() {
                $('.view-favorites').on('click', (event) => {
                    $('.view-favorites').unbind("mouseenter mouseleave");
                    $('.favorites').toggleClass('hide');
                    event.preventDefault();
                  });
            }
}

export default EventsHandler