import { instance } from 'services';
import { IActor } from 'types/definitions';

export async function fetchActorsList(actorName: string): Promise<IActor[]> {
    return new Promise(async (resolve, reject) => {
        instance(`search/person?query=${actorName}`)
            .then((response) => resolve(response.data.results))
            .catch((err) => reject(err));
    });
}
