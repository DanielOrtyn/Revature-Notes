import { User } from "./model/user";
import { SpaceShip } from "./model/SpaceShip";


export let users: User[] = [
    new User(1, `blake`, `pass`, `blake`),
    new User(2, `Bradley`, `pass`, `Bradley`),
    new User(3, `Sharam`, `pass`, `Sharam`),
    new User(4, `PJ`, `pass`, `PJ`),
    new User(5, `Danae`, `pass`, `Danae`),
    new User(6, `Fred`, `pass`, `Fred`)
]


export let spaceships: SpaceShip[] = [
    new SpaceShip(1, 2, `Enterprise`, 5000, 5000, `it\'s a ship`),
    new SpaceShip(2, 2, `Tesla`, 5000, 5000, `it\'s a ship`),
    new SpaceShip(3, 2, `SS Minow`, 5000, 5000, `it\'s a ship`),
    new SpaceShip(4, 2, `X-Wing`, 5000, 5000, `it\'s a ship`),
    new SpaceShip(5, 2, `Salmon Catcher`, 5000, 5000, `it\'s a ship`),
    new SpaceShip(6, 2, `Serrenity`, 5000, 5000, `it\'s a ship`),
    new SpaceShip(7, 2, `Yes`, 5000, 5000, `it\'s a ship`)
]