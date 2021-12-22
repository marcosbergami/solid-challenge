import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    user_id: string;
}

class ListAllUsersUseCase {
    constructor(private usersRepository: IUsersRepository) {}

    execute({ user_id }: IRequest): User[] {
        const findUser = this.usersRepository.findById(user_id);

        if (!findUser) {
            throw new Error(
                "A user with the provided information was not found."
            );
        }

        if (!findUser.admin === true) {
            throw new Error("You must be an admin to view all users.");
        }

        const usersList = this.usersRepository.list();

        return usersList;
    }
}

export { ListAllUsersUseCase };
