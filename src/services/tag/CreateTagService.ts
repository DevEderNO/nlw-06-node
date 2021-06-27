import { getCustomRepository } from "typeorm";
import { TagRepository } from "../../repositories/TagRepository";

interface ITag {
  name: string;
}

class CreateTagService {
  async execute({ name }) {
    const tagRepository = getCustomRepository(TagRepository);
    if (!name) {
      throw new Error("Tag name not informed");
    }
    const tagAreadyExists = await tagRepository.findOne({ name });
    if (tagAreadyExists) {
      throw new Error("Tag alread exists");
    }
    const tag = tagRepository.create({ name });
    await tagRepository.save(tag);
    return tag;
  }
}

export { CreateTagService };
