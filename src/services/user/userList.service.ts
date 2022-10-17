import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";

const userListService = async () => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  if(!users.length) throw new Error("There's no available users.")

  return users;
};

export default userListService;
