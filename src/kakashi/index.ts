import Hinata from "../hinata/index";
import Naruto from "../naruto";
import Shikamaru from "../shikamaru";

class Kakashi {
  hinata: Hinata;
  naruto: Naruto;
  shikamaru: Shikamaru;
  constructor () {
    console.log("Kakashi is here!");
    this.hinata = new Hinata();
    this.naruto = new Naruto();
    this.shikamaru = new Shikamaru();
  }

  async startMission(): Promise<void> {
    let relation: Relation = await this.hinata.fetchRelation();
    let followCandidate: FollowCandidate = await this.hinata.fetchCandidates();
  }
}

export default Kakashi;