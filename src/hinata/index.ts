import sleep from "../kunai/async_placeholder";

/**
 * Hinata, the Byakugan ninja.
 * 
 * Hinata is the one that looks through the complicated
 * API with her Byakugan to retrieve useful information
 * about Twitter accounts.
 */
class Hinata {
  constructor () {
    console.log("Hinata is here!");
  }

  async fetchRelation(): Promise<Relation> {
    let relation = new Relation();
    await sleep(10);
    return relation;
  }

  async fetchCandidates(): Promise<FollowCandidate> {
    let followCandidate = new FollowCandidate();
    await sleep(10);
    return followCandidate;
  }
}

export default Hinata;