

interface Image {
  url: string
}

export default class Feature {
  title: string;
  image: Image;
  performers: string[];
  duration: number;
  start: number;

  constructor(
    title: string,
    image: Image,
    performers: string[],
    duration: number,
    start: number) {

    this.image = image;
    this.title = title;
    this.performers = performers;
    this.duration = duration;
    this.start = start;
  }

}
