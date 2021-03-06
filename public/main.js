import PetsRepository from './pets-repository.js';
import PetsRenderer from './pets-renderer.js';
import EventsHandler from './events-handler.js'; 
import Favorites from './favorite.js';



let petsRepository = new PetsRepository();
let petsRenderer = new PetsRenderer();
let favorites = new Favorites();
let eventsHandler = new EventsHandler(petsRepository, petsRenderer, favorites);


petsRepository.fetch().then(()=>{
    petsRenderer.renderPets(petsRepository.pets)
})

// petsRenderer.renderPets(petsRepository.pets)

eventsHandler.registerLikePet();
eventsHandler.registerUnlikePet();
eventsHandler.registerAddPet();
// eventsHandler.registerRemovePet();

eventsHandler.registerToggleForm();
eventsHandler.registerTogglfavorites();

$('.pet-form').on('click', function(e) {e.preventDefault(); return true;});
$('.show-pet').on('click', function(e) {e.preventDefault(); return true;});


